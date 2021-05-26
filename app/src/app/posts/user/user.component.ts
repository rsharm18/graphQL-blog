import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { EntityComponent } from '../entity/entity.component';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends EntityComponent implements OnInit, AfterViewInit {

  
  constructor(private service:PostsService) {
    super();
  }

  async ngAfterViewInit() {
    await setTimeout(() => {
      this.getProperties();
      this.orderColumns();
    }, 100);


  }

  ngOnInit(): void {
    this.service.author$.subscribe(data => {
      this.entity = data;
      // this.getProperties();
      // this.orderColumns();
    })

  }

  orderColumns() {

    const nameIndex = this.columnsToDisplay.filter(val => (val === 'Name'));
    if (nameIndex?.length) {
    this.columnsToDisplay = this.columnsToDisplay.filter(key => {
      return (key !== 'Name' && key!=='id')
    });
    }
    this.columnsToDisplay.unshift('Name');

  }

}
