import {PlaceService} from './../_services/place.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {slideInOutAnimation} from '../_animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-addEvent',
  animations: [slideInOutAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@slideInOutAnimation]': ''
  },
  templateUrl: './addEvent.component.html',
  styleUrls: ['./addEvent.component.css']
})
export class AddEventComponent implements OnInit {
  model: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private placeService: PlaceService) {}

  ngOnInit() {
    this.model.placeID = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id']);
  }

  getImage(evt: any) {

    const files = evt.target.files;
    const file = files[0];
    console.log(file);
    this.model.eventImageEXT = (file.type);

    if (files && file) {
      const reader = new FileReader();
      reader.onload = (event: Event) => {
        const binaryString = reader.result;
        this.model.eventImage = (btoa(binaryString));
      };
      reader.readAsBinaryString(file);
      console.log(this.model);
    }
  }

  addPlace() {
    // this.model.placeType = 0;
    console.log(this.model);
    this
      .placeService
      .addEvent(this.model)
      .subscribe(data => {
        this
          .router
          .navigateByUrl('/loading', {skipLocationChange: true})
          .then(() => this.router.navigate(['place']));
      });
  }

}
