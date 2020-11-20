import React, { FC, useEffect, useRef } from 'react';
import { Feature } from 'geojson';
import { Map, GeoJSON, TileLayer } from 'react-leaflet-universal';
import { PayloadAction } from 'typesafe-actions';
import countries from '../../../data/geo.json';

interface MapProps {
  data: {
    countryIds: string[] | null;
    centroid: number[];
  };
  updateCoords: (coords: number[]) => PayloadAction<'UPDATE_COORDS', number[]>;
}

const WorldMap: FC<MapProps> = ({
  data: { countryIds, centroid },
  updateCoords
}) => {
  const mapRef = useRef(null);

  const countryStyle = {
    fillColor: '#101820ff',
    fillOpacity: 0.5,
    color: 'blue',
    weight: 1
  };

  const onEachCountry = (
    country: Feature,
    layer: { bindPopup: (countryName: string) => void }
  ) => {
    const countryName: string = country.properties.admin;
    layer.bindPopup(countryName);
  };

  const drawSelectedCountries = (drawCountries: string[]) => {
    return (feature: Feature) => {
      switch (feature.properties.iso_a2) {
        case drawCountries[0]:
        case drawCountries[1]:
        case drawCountries[2]:
          return countryStyle;
        default:
          return {
            fillOpacity: 0,
            color: '',
            weight: 0
          };
      }
    };
  };

  const onMoveUpdateCoords = (event: {
    target: { getCenter: () => { lat: number; lng: number } };
  }) => {
    const center = event.target.getCenter();
    const centerCoords = [center.lat, center.lng];
    updateCoords(centerCoords);
  };

  useEffect(() => {
    const map = mapRef.current.leafletElement;
    if (map !== undefined) {
      map.flyTo(centroid, 5);
    }
  }, [centroid]);

  return (
    <Map
      ref={mapRef}
      center={[0, 0]}
      zoom={3}
      minZoom={2}
      maxZoom={7}
      worldCopyJump="true"
      style={{
        height: '100%',
        width: '100%'
      }}
      ondrag={onMoveUpdateCoords}
    >
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />

      <GeoJSON
        style={drawSelectedCountries(countryIds)}
        data={countries.features}
        onEachFeature={onEachCountry}
      />
    </Map>
  );
};

export default WorldMap;
