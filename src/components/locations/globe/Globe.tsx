import React, { FC, useEffect } from 'react';
import * as d3 from 'd3';
import json from '../../../data/geo.json';

interface GlobeProps {
  data: {
    coords: number[];
  };
}

const Globe: FC<GlobeProps> = ({ data: { coords } }) => {
  const createGlobe = () => {
    const w = 110;
    const h = w;
    const scl = w / 2;

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
      .attr('fill', 'rgba(71, 71, 71, 0.6)');

    map
      .selectAll('.country')
      .data(json.features)
      .join('path')
      .attr('class', 'country')
      .attr('fill', '#0abf40');

    map.selectAll('.country').attr('d', path);
    svg.selectAll('*').attr('pointer-events', 'none');
  };

  useEffect(() => {
    createGlobe();
  }, [coords]);

  return <svg id="svgDiv" />;
};

export default Globe;
