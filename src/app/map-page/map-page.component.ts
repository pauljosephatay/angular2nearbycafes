import {
  Component,
  NgZone
} from "@angular/core";


import { MapsAPILoader, GoogleMapsAPIWrapper } from "@agm/core";

import { MapSettings, mapStyles2 } from "../shared/map-constants";
import { MapPageContentComponent } from "./map-page-content.component";
import { LatLngLiteral, LatLngBoundsLiteral } from "@agm/core/map-types";

declare var google: any;


@Component({
  selector: "app-map-page",
  templateUrl: "./map-page.component.html",
  styleUrls: ["./map-page.component.css"]
})
export class MapPageComponent {

  title: string = "Nearby Cafes";
  zoom: number = 13;
  
  pinMarker = MapSettings.primaryMarkerIcon;
  customStyles = mapStyles2;

  pinLoc: LatLngLiteral = MapSettings.baseLocLatLng;
  baseLoc: LatLngLiteral = MapSettings.baseLocLatLng;

  isSearching: boolean;

  updatePinLoc($event) {
     this.pinLoc = $event.coords;
  }

  onSearching(state: boolean) {
    this.isSearching = state;
  }



}