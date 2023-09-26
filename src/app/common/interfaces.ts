export interface Trip {
  id: number;
  destination: Destination;
  destinationId: number;
  pickPoint: PickPoint;
  pickPointId: number;
  startDate: Date;
  endDate: Date;
  isCustomTrip: boolean;
  services: string;
  totalCharges: number;
}

export interface Destination {
  id: number;
  name: string;
  region: string;
}

export interface City {
  id: number;
  name: string;
  pickPoints: PickPoint[];
}

export interface PickPoint {
  id: number;
  pointName: string;
  cityId: number;
  city: City;
}

export interface Services {
  id: number;
  serviceName: string;
  charges: number;
  description: string;
  img: string;
  Link: string;
}

export interface User{
  userId: number;
  cnic: string;
  contact: string;
}

