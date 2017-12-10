import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
  providers: [AppService]
})
export class TasksListComponent implements OnInit {

  private statusData: any;

  constructor(private _httpService:AppService) { }

  ngOnInit() {
    this._httpService.getMethod('json/tasksList.json')
    .subscribe (
      data => {
        this.statusData = data;
      }
    );
  }

}
