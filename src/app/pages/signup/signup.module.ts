import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { ComponentsModule } from "src/app/components/components/components.module";
import { SignupPageRoutingModule } from "./signup-routing.module";
import { SignupPage } from "./signup.page";
import { MaterialModule } from "src/app/material.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    ComponentsModule,
    MaterialModule,
  ],
  declarations: [SignupPage],
})
export class SignupPageModule {}
