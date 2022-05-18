export class CreateUserDto {
  id: number;
  firstName: string;
  lastName: string;
  from: string;
  to: string;
  adult: number;
  children: number;
  infrants: number;
  Depart: Date;
  Arrive: Date;
  trip_type: string;
}
