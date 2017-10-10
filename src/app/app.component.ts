import { Component } from "@angular/core";
import { trigger,state,style,transition,animate } from '@angular/animations';

import { IntroComponent } from "./intro/intro.component";
import { MapPageComponent } from "./map-page/map-page.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger(
      'pageTransition',
      [
        transition(
        ':enter', [
          style({opacity: 0}),
          animate('2s cubic-bezier(0.190, 1.000, 0.220, 1.000)', style({'opacity': 1}))
        ]
      ),
      transition(
        ':enter', [
          style({opacity: 1}),
          animate('2s 4s', style({'opacity': 0.8}))
        ]
      ),  
      transition(
        ':leave', [
          style({'opacity': 0.8}),
          animate('1s cubic-bezier(1.000, 0.000, 0.000, 1.000)', 
            style({'opacity': 0,
                    'top': '100%'
                }))
        ]
      )]
    )
  ]
})
export class AppComponent {

  hasNotstarted: boolean = true;

  start() {
    this.hasNotstarted = false;
  }

}