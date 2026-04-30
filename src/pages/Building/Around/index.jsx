import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import mapOptions from './mapOptions';
import { getBoundsFromLatLng } from '../../../helpers/maps';

// assets
import PinDesktopIconSVG from 'assets/icons/pin-desktop.svg';
import PinWhiteIconSVG from 'assets/icons/pin-white.svg';

// styles
import { Container, Mapa, Pin, Text } from './styles';

const containerStyle = {
  width: '100%',
  height: '400px',
};

function Around({ local, cep, text, latitude, longitude }) {
  const [ bounds, setBounds ] = useState('');
  const [ zipCode, setZipCode ] = useState('');
  const [ isEnabled, setIsEnabled ] = useState(false);

  useEffect(() => {
    setZipCode(cep);
  }, [ cep ]);

  useEffect(() => {
    setBounds(getBoundsFromLatLng(latitude, longitude, 0.3));
    setIsEnabled(true);
  }, [ zipCode ]);

  const handleMapLoad = useCallback((map) => {
    if (!bounds || !window.google) return;

    map.setCenter({ lat: latitude, lng: longitude });

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: bounds.southwest,
        destination: bounds.northeast,
        travelMode: 'DRIVING',
      },
      (result, status) => {

        const path = window.google?.maps?.geometry?.encoding?.decodePath?.(
          result.routes[0].overview_polyline
        );
        
        if (!path) return;

        if (status === 'OK' && result?.routes?.[0]?.overview_polyline) {
          const polyline = new window.google.maps.Polyline({
            path: path,
            geodesic: true,
            strokeColor: '#EE6900',
            strokeOpacity: 1.0,
            strokeWeight: 8,
          });

          const intervalId = setInterval(() => {
            const currentWeight = polyline.strokeWeight;
            polyline.set('strokeWeight', currentWeight === 8 ? 6 : 8);
          }, 1000);
          
          setTimeout(() => clearInterval(intervalId), 10000);

          polyline.setMap(map);
        }
      }
    );
  }, [ bounds, latitude, longitude ]);

  if (
    !bounds ||
    !process.env.config.googleApiKey ||
    cep !== zipCode ||
    latitude === 0 ||
    longitude === 0 ||
    !isEnabled
  )
    return null;

  return (
    <Container>
      <Mapa>
        <LoadScript
          googleMapsApiKey={process.env.config.googleApiKey}
          libraries={[ 'geometry' ]}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: latitude, lng: longitude }}
            zoom={16}
            options={mapOptions}
            onLoad={handleMapLoad}
          />
        </LoadScript>
      </Mapa>

      <Pin src={PinDesktopIconSVG} mq="desktop" alt="Ícone de pin" />
      <Pin src={PinWhiteIconSVG} mq="mobile" alt="Ícone de pin" />

      <Text item={{ title: 'O que há por perto', text }} />
    </Container>
  );
}

export default Around;