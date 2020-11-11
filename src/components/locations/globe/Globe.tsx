import React, { FC, useEffect } from 'react';
import * as d3 from 'd3';
import { PayloadAction } from 'typesafe-actions';
import json from '../../../data/geo.json';

interface GlobeProps {
  data: {
    countryIds: string[] | null;
    coords: number[];
  };
  updateCoords: (coords: number[]) => PayloadAction<'UPDATE_COORDS', number[]>;
}

const Globe: FC<GlobeProps> = ({
  data: { countryIds, coords },
  updateCoords
}) => {
  const createGlobe = () => {
    const w = 120;
    const h = 120;
    const sensitivity = 75;
    const scl = 150 / 2.5;

    const projection = d3
      .geoOrthographic()
      .scale(scl)
      .translate([w / 2, h / 2])
      .rotate([-coords[1], -coords[0]]);

    const path = d3.geoPath().projection(projection);
    const svg = d3.select('#svgDiv').attr('width', w).attr('height', h);
    svg.selectAll('*').remove();
    const map = svg.append('g');

    map
      .append('path')
      .datum({ type: 'Sphere' })
      .attr('d', path)
      .attr('fill', '#101820ff');

    map
      .selectAll('.country')
      .data(json.features)
      .join('path')
      .attr('class', 'country')
      .attr('fill', (d) => {
        switch (d.properties.iso_a2) {
          case countryIds[0]:
          case countryIds[1]:
          case countryIds[2]:
            return 'white';
          default:
            return '#f3b059';
        }
      });

    map.selectAll('.country').attr('d', path).attr('stroke', 'black');

    const dragged = (event: { dx: number; dy: number }) => {
      const rotate = projection.rotate();
      const k = sensitivity / projection.scale();
      const lng = rotate[0] + event.dx * k;
      let lat = rotate[1] - event.dy * k;
      lat = lat > 89 ? 89 : lat;
      lat = lat < -89 ? -89 : lat;
      projection.rotate([lng, lat]);
      map.selectAll('path').attr('d', path);
      updateCoords([-lat, -lng]);
    };

    const drag = d3.drag().on('drag', dragged);
    svg.call(drag);
  };

  useEffect(() => {
    createGlobe();
  });

  return <svg id="svgDiv" />;
};

export default Globe;
