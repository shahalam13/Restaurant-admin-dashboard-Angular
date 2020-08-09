import { Component, OnInit, ElementRef, HostListener, ViewChild, AfterContentInit } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { ApiService, Cust } from '../../../../../data/api.service';
import ticketItems, { ITicket } from 'src/app/data/tickets';

@Component({
  selector: 'app-scrollable',
  templateUrl: './scrollable.component.html'
})
export class ScrollableComponent implements OnInit {
  constructor() { }

  data: ITicket[] = ticketItems;
  ngOnInit() {
   
  }
}