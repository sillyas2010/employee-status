export type EmployeeStatus = 'Working' | 'On Vacation' | 'Lunch Time' | 'Business Trip';

export interface Employee {
  id: number;
  name: string;
  status: EmployeeStatus;
  img: string;
} 