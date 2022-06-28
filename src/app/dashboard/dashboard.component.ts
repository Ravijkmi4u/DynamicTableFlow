import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data = [
    {id: 1560608769632, name: 'Artificial Intelligence'},
    {id: 1560608796014, name: 'Machine Learning'},
    {id: 1560608787815, name: 'Robotic Process Automation'},
    {id: 1560608805101, name: 'Blockchain'}
  ];
  displayedColumns = ['id', 'name', 'action'];
  constructor() { }

  ngOnInit(): void {
  }

}
