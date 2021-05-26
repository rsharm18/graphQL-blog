import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity',
  template: ``,
  styleUrls: []
})
export class EntityComponent implements OnInit {

  @Input() entity: any[] = []
  readonly columnsToIgnore = ['__typename'];

  columnsToDisplay = [];
  constructor() { }



  ngOnInit(): void {

  }

  getProperties() {
    
    if (!this.entity) {
      return;
    }
    Object.keys(this.entity[0])?.forEach(key => {
    
      if (!this.columnsToIgnore.includes(key) && !this.columnsToDisplay.includes(key)) {
        this.columnsToDisplay.push(key);
      }
    });

    return this.columnsToDisplay;
  }
}
