import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature ='recipe';
//we can  omit this method and directly put loadedFeature=($event) in appcomp html and use it
  onNavigate(feature: string){
this.loadedFeature=feature;
  }
}
