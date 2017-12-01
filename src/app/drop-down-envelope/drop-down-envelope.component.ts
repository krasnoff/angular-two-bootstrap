import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-down-envelope',
  templateUrl: './drop-down-envelope.component.html',
  styleUrls: ['./drop-down-envelope.component.css']
})
export class DropDownEnvelopeComponent {

  sortOrders: string[] = ["Year", "Title", "Author"];
  selectedSortOrder: string = "Sort by...";
  
  constructor() { }

  ChangeSortOrder(newSortOrder: string) { 
    this.selectedSortOrder = newSortOrder;
  }

}
