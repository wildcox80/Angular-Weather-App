import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-geolocation-button',
  templateUrl: './geolocation-button.component.html',
  styleUrls: ['./geolocation-button.component.scss']
})
export class GeolocationButtonComponent implements OnInit {

  active : boolean = false;

  constructor(public geolocationService : GeolocationService) { }

  ngOnInit() {
    this.geolocationService.permission$.then((status) => {
      this.active = (status == 'granted')

      if(this.active)
        this.geolocationService.requestGeolocation();
    });
  }

}
