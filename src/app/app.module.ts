import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from "@agm/core";
import { AgmJsMarkerClustererModule } from "@agm/js-marker-clusterer";
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { MapSettings } from "./shared/map-constants";

import { AppComponent} from "./app.component";
import { IntroComponent } from './intro/intro.component';
import { MapPageComponent } from './map-page/map-page.component';
import { MapPageContentComponent } from './map-page/map-page-content.component';



@NgModule({
  declarations: [AppComponent, IntroComponent, MapPageContentComponent, MapPageComponent ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: MapSettings.mapsKey,
      libraries: ["places"]
    }),
    AgmJsMarkerClustererModule,
    AgmSnazzyInfoWindowModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}