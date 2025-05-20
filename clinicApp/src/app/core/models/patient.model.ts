export interface Patient {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: 'male' | 'female';
  dateOfBirth: string; 
}
