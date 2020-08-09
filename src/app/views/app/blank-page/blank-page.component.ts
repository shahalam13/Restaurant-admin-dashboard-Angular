import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank-page',
  templateUrl: './blank-page.component.html'
})
export class BlankPageComponent implements OnInit {

  
  manualTrigger = false;
  constructor() { }

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }


  ngOnInit() {
  }

}
