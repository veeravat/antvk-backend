import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()
export class PlaceService {

    baseUrl = environment.apiUrl + 'place/';
    headers = new Headers({'Content-type': 'application/json'});
    options = new RequestOptions({headers: this.headers});
    gmapAPi = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
    constructor(private http: Http) {}

    getPlace() {
        return this.http.get(this.baseUrl, this.options).map((response: Response) => {
          return response.json();
        });
      }
      addPlace(model: any) {
        return this.http.put(this.baseUrl, model, this.options).map((response: Response) => {
            return response;
        });
    }
    addEvent(model: any) {
        return this.http.put(this.baseUrl + 'event/', model, this.options).map((response: Response) => {
            return response;
        });
    }
    searchPlace(text: any) {

        console.log(text);
        const data = {
            query: text,
            key: 'AIzaSyDyDVaEBJbJUUABKwIoA7nTy2A54HMZP90'
        };

        return this.http.get(this.gmapAPi , {params: data}).map((response: Response) => {
            return response.json();
        });
    }
}
