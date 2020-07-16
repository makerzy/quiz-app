import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { HomePageRoutingModule } from "./home-routing.module";

import { MaterialModule } from "../material.module";
import { ComponentsModule } from "../components/components/components.module";

import { MediaContentModule } from "../contents/media-content/media-content.module";
import { ModalPageModule } from "../modal/search-modal.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
    MaterialModule,
    MediaContentModule,
    ModalPageModule,
  ],
  declarations: [HomePage],
  exports: [],
})
export class HomePageModule {}
