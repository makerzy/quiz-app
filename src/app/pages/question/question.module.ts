import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { QuestionPageRoutingModule } from "./question-routing.module";

import { QuestionPage } from "./question.page";
import { MaterialModule } from "src/app/material.module";
import { ComponentsModule } from "src/app/components/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionPageRoutingModule,
    MaterialModule,
    ComponentsModule,
  ],
  declarations: [QuestionPage],
})
export class QuestionPageModule {}
