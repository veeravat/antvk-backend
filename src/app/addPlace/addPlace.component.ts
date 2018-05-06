import { PlaceService } from './../_services/place.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { slideInOutAnimation } from '../_animations';
import { ActivatedRoute, Router } from '@angular/router';
import { AgmMap, AgmMarker, MarkerManager } from '@agm/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-addPlace',
  animations: [slideInOutAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOutAnimation]': '' },
  templateUrl: './addPlace.component.html',
  styleUrls: ['./addPlace.component.css']
})

export class AddPlaceComponent implements OnInit {
  @ViewChild(AgmMap)
  // @ViewChild(AgmMarker)
  public agmMap: AgmMap;


  model: any = {} ;
  lat = 13.7478272;
  lng = 100.5327975;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.agmMap.latitude = this.lat;
    this.agmMap.longitude = this.lng;
  }
  mapRDY(event: any) {
    console.log(event);
  }
  centerChange(event: any) {
    console.log(event);
  }
  markerDragEnd(m: marker, event: any) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
  mapClick(m: marker, event: any) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    m.lat = event.coords.lat;
    m.lng = event.coords.lng;
  }
  searchPlace(event: any) {

  }
  getImage(evt: any) {

    const files = evt.target.files;
    const file = files[0];
    console.log(file);
    this.model.placeImageEXT = (file.type);

  if (files && file) {
      const reader = new FileReader();
      reader.onload = (event: Event) => {
        const binaryString = reader.result;
           this.model.placeImage = (btoa(binaryString));
     };
    reader.readAsBinaryString(file);
    console.log(this.model);
  }
}

  addPlace() {
    this.model.latitude = this.lat;
    this.model.longitude = this.lng;
    // this.model.placeType = 0;
    console.log(this.model);
    this.placeService.addPlace(this.model)
    .subscribe(data => {
      this.router
          .navigateByUrl('/loading', { skipLocationChange: true })
          .then(() => this.router.navigate(['place']));
    });
  }
  setType(event: any) {
    this.model.placeType = event.target.value;
  }
  // tslint:disable-next-line:member-ordering
  markers: marker =     {
      lat: this.lat,
      lng: this.lng,
      label: 'PIN',
      draggable: true
    };

}
// tslint:disable-next-line:class-name
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
