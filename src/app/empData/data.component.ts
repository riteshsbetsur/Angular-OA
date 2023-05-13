import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent {
  employees = [
    {
      eId: 'OA1',
      eName: 'Ritesh',
      eGender: 'Male',
      eDOB: '16 Feb 1998',
      eDesignation: 'AWS Developer',
      eSalary: 500000,
      eExp: '2 Year',
      eEdu: 'BE',
    },
    {
      eId: 'OA2',
      eName: 'Maadappa',
      eGender: 'Male',
      eDOB: '05 Mar 1998',
      eDesignation: 'Angular Developer',
      eSalary: 390000,
      eExp: '3 Year',
      eEdu: 'BE',
    },
    {
      eId: 'OA3',
      eName: 'Rashid',
      eGender: 'Male',
      eDOB: '30 Nov 1997',
      eDesignation: 'React Developer',
      eSalary: 450000,
      eExp: '2.6 Year',
      eEdu: 'B.Com',
    },
    {
      eId: 'OA4',
      eName: 'Ali',
      eGender: 'Male',
      eDOB: '24 Aug 1994',
      eDesignation: 'Java Developer',
      eSalary: 410000,
      eExp: '2.5 Year',
      eEdu: 'BE',
    },
    {
      eId: 'OA5',
      eName: 'Divin',
      eGender: 'Male',
      eDOB: '09 Mar 1996',
      eDesignation: 'HTML Developer',
      eSalary: 300000,
      eExp: '1.9 Year',
      eEdu: 'BCA',
    },
    {
      eId: 'OA6',
      eName: 'Chandru',
      eGender: 'Male',
      eDOB: '01 Jan 1996',
      eDesignation: 'JavaScript Developer',
      eSalary: 400000,
      eExp: '3 Year',
      eEdu: 'BTech',
    },
  ];
}
