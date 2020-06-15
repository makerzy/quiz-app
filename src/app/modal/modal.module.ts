import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalPageRoutingModule } from "./modal-routing.module";

import { ModalPage } from "./modal.page";
import { MaterialModule } from "../material.module";

import { ComponentsModule } from "../components/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    MaterialModule,
    ComponentsModule,
  ],
  declarations: [ModalPage],
})
export class ModalPageModule {}
