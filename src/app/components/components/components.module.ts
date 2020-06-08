import { QuestionsComponent } from "../questions/questions.component";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { ConclusionComponent } from "../conclusion/conclusion.component";
import { ScoreComponent } from "../score/score.component";
import { InfoComponent } from "../info/info.component";
import { TruncateTextPipe } from "src/app/truncate-text.pipe";

const components = [
  QuestionsComponent,
  ConclusionComponent,
  ScoreComponent,
  InfoComponent,
];

@NgModule({
  declarations: [components, TruncateTextPipe],
  imports: [IonicModule, CommonModule, FormsModule, MaterialModule],
  exports: [components, TruncateTextPipe],
})
export class ComponentsModule {}
