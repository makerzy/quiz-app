import { QuestionsComponent } from "../questions/questions.component";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";

const components = [QuestionsComponent];

@NgModule({
  declarations: [components],
  imports: [IonicModule, CommonModule, FormsModule, MaterialModule],
  exports: [components],
})
export class ComponentsModule {}
