import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }
getEmployees(){
  return [
    {"id": 123, "name": "Vivek", "age": 27},
    {"id": 124, "name": "Nishant", "age": 25},
    {"id": 125, "name": "Khushi", "age": 27},
    {"id": 126, "name": "Ashu", "age": 14},
    {"id": 127, "name": "Vijay", "age": 45},
    {"id": 128, "name": "Sushila", "age": 42},
    {"id": 129, "name": "Vivek", "age": 27},
    {"id": 130, "name": "Nishant", "age": 25},
    {"id": 131, "name": "Khushi", "age": 27},
    {"id": 132, "name": "Ashu", "age": 14},
    {"id": 133, "name": "Vijay", "age": 45},
    {"id": 134, "name": "Sushila", "age": 42},
  ]
}
}
