import { Component } from '@angular/core';
import {AppService} from '../app.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-drop-down-envelope',
  templateUrl: './drop-down-envelope.component.html',
  styleUrls: ['./drop-down-envelope.component.css'],
  providers: [AppService]
})
export class DropDownEnvelopeComponent {

  public mailData: any;

  constructor(private _httpService:AppService) {}

  ngOnInit() {
    this._httpService.getMethod('mailMessages.json')
    .subscribe (
      data => {
        this.mailData = data;
      }
    );
  }

}
