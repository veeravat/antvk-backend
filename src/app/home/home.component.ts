import { PlaceService } from './../_services/place.service';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation, slideInOutAnimation } from '../_animations/index';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-home',
  animations: [fadeInAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': '' },
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  logo = 'assets/images/logo.jpg';
  place: any = {};
  constructor(
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      paging: false,
      info: false,
      search: false,
      searching: false
    };
    this.placeService.getPlace().subscribe(data => {
      this.place = data;
      this.dtTrigger.next();
    });

  }

}
