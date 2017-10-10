import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChange,
  NgZone
} from "@angular/core";

import { GoogleMapsAPIWrapper } from "@agm/core";
import { GoogleMap } from "@agm/core/services/google-maps-types";
import { LatLngLiteral } from "@agm/core/map-types";
import { PlaceResult } from "../shared/google-maps-places-types";

import { MapSettings } from "../shared/map-constants";

declare var google;

@Component({
  selector: "app-map-content",
  template: `
  <agm-marker *ngFor="let place of places" 
  [latitude]="place.geometry.location.lat()"
  [longitude]="place.geometry.location.lng()"
  [zIndex]="1"
  [iconUrl]="this.cafeMarker"
   >
    <agm-snazzy-info-window
     [maxWidth]="400"
     [maxHeight]="400" 
     [closeWhenOthersOpen]="true"
     >
        <ng-template>
          <h1>{{place.name}}</h1>
          <p><b>Rating</b>: {{place.rating}}<br>
          {{place.vicinity}}
          </p>
        </ng-template>
      </agm-snazzy-info-window>
  </agm-marker>
  `
})
export class MapPageContentComponent implements OnInit {
  
  @Input() centerLoc: LatLngLiteral;

  @Output() onSearching = new EventEmitter();
  @Output() onMapInitialized = new EventEmitter();

  isServiceReady: boolean;
  placesService;
  places: Array<PlaceResult>;

  cafeMarker = MapSettings.cafeMarkerIcon2;

  constructor(
    public mapApiWrapper: GoogleMapsAPIWrapper,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.mapApiWrapper
      .getNativeMap()
      .then( ( map: GoogleMap ) => {
        this.onMapInitialized.emit(map);

        this.placesService = new google.maps.places.PlacesService( map );
        this.isServiceReady = true;
        this.updatePlaces();
      });
  }


  setPlaces( places: Array<PlaceResult> ) {
    this.ngZone.run(() => {
      this.places = places;
    });
  }

  updatePlaces() {
    let requestOptions = {
     location: this.centerLoc,
     radius: "500",
     type: ["cafe"]
    };
    this.onSearching.emit(true);
    this.placesService.nearbySearch(requestOptions, (results: Array<PlaceResult>, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          this.setPlaces( results );
        } else {
          this.setPlaces( [] );
        }
        this.onSearching.emit(false);
    });
  }

  ngOnChanges(changes: SimpleChange) {
    if ( this.isServiceReady ) {
      this.updatePlaces();
    }
  }


}