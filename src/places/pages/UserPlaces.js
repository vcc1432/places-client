import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';


const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State building",
    description: "One of the most famous skyscrapers in the world!",
    address: "20 W 34th St. New York, NY 10001",
    imageUrl: "https://images.pexels.com/photos/132713/pexels-photo-132713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    creator: "u1",
    location: {
      "lat": 40.7487836,
      "lng": -73.98615769999999
    }
  },
  {
    id: "p2",
    title: "Emp. State building",
    description: "A very famous building",
    address: "20 W 34th St. New York, NY 10001",
    imageUrl: "https://images.pexels.com/photos/1796505/pexels-photo-1796505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    creator: "u2",
    location: {
      "lat": 40.7487836,
      "lng": -73.98615769999999
    }
  }
];

const UserPlaces = () => {
  const userId = useParams().uid;
  const loadedPlaces = DUMMY_PLACES.filter(place => place && place.creator === userId);
  console.log('loadedplaces', loadedPlaces)
  return <PlaceList items={ loadedPlaces } />;
};

export default UserPlaces;