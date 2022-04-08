import { useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';

let latitude, longitude;

export const loader = async ({ request }) => {
  let weather;
  const res = await fetch(
    'https://api.openweathermap.org/data/2.5/onecall?lat=0&lon=0&units=imperial&appid=bd1b3aa84c23dc5537a4715c085efa28'
  )
    .then((response) => response.json())
    .then((response) => (weather = response))
    .catch((err) => console.error(err));

  const data = {
    weather: res,
    current: res.current,
    daily: res.daily,
    hourly: res.hourly,
  };
  return data;
};

export default function current() {
  const { weather, current, daily, hourly } = useLoaderData();
  console.log('Weather: ', weather);
  console.log('Daily: ', daily);

  return (
    <div>
      <h1>Current Weather</h1>
      {daily.map((day, index) => (
        <h3 key={index}>{day.dt}</h3>
      ))}
    </div>
  );
}
