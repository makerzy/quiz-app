import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy, RouterModule } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "src/app/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "src/environments/environment";

/* Add Amplify imports */
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";

/* Configure Amplify resources */
Amplify.configure(awsconfig);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    BrowserAnimationsModule,

    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  exports: [RouterModule, MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
