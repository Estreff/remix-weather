import { useEffect } from 'react';

var latitude, longitude;

navigator.geolocation.getCurrentPosition((position) => {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
});

export const loader = async ({ request }) => {
  console.log('Longitude: ', longitude);
  console.log('Latitude: ', latitude);
  const data = {};

  return data;
};

export default function current() {
  // useEffect(() => {
  //   const options = {
  //     enableHighAccuracy: true,
  //     timeout: 5000,
  //     maximumAge: 0,
  //   };

  //   function success(pos) {
  //     let crd = pos.coords;

  //     console.log('Your current position is:');
  //     console.log(`Latitude : ${crd.latitude}`);
  //     console.log(`Longitude: ${crd.longitude}`);
  //     console.log(`More or less ${crd.accuracy} meters.`);
  //   }

  //   function error(err) {
  //     console.warn(`ERROR(${err.code}): ${err.message}`);
  //   }

  //   navigator.geolocation.getCurrentPosition(
  //     success,
  //     error,
  //     options
  //   );
  //   console.log('Weather ', weather);
  // }, []);

  // console.log('Coords: ', crd);
  return (
    <div>
      <h1>Current Weather</h1>
    </div>
  );
}
