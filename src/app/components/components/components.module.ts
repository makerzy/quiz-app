import { QuestionsComponent } from "../questions/questions.component";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { ConclusionComponent } from "../conclusion/conclusion.component";
import { ScoreComponent } from "../score/score.component";
import { InfoComponent } from "../info/info.component";
import { TruncateTextPipe } from "src/app/truncate-text.pipe";
import { BottomSheetComponent } from "../bottom-sheet/bottom-sheet.component";
import { BottomSheetContentComponent } from "../bottom-sheet-content/bottom-sheet-content.component";
import { SearchComponent } from "../search/search.component";
import { PrevNextComponent } from "../prev-next/prev-next.component";

const components = [
  QuestionsComponent,
  ConclusionComponent,
  ScoreComponent,
  InfoComponent,
  BottomSheetComponent,
  BottomSheetContentComponent,
  SearchComponent,
  PrevNextComponent,
];

@NgModule({
  declarations: [components, TruncateTextPipe],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [components, TruncateTextPipe, MaterialModule],
})
export class ComponentsModule {}
