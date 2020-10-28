import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalPageRoutingModule } from "./search-modal-routing.module";

import { ModalPage } from "./search-modal.page";
import { MaterialModule } from "src/app/material.module";

import { ComponentsModule } from "src/app/components/components/components.module";

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
