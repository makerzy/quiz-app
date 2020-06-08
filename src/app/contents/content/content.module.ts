import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ContentPageRoutingModule } from "./content-routing.module";

import { ContentPage } from "./content.page";

import { MaterialModule } from "src/app/material.module";
import { MediaContentModule } from "../media-content/media-content.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    ContentPageRoutingModule,
    MediaContentModule,
  ],
  declarations: [ContentPage],
})
export class ContentPageModule {}
