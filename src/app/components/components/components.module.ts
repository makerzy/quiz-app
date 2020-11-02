import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { QuestionsComponent } from "src/app/components/questions/questions.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { ConclusionComponent } from "src/app/components/conclusion/conclusion.component";
import { ScoreComponent } from "src/app/components/score/score.component";
import { InfoComponent } from "src/app/components/info/info.component";
import { TruncateTextPipe } from "src/app/truncate-text.pipe";
import { SearchComponent } from "src/app/components/search/search.component";
import { PrevNextComponent } from "src/app/components/prev-next/prev-next.component";
import { FilterComponent } from "src/app/components/filter/filter.component";
import { MatInputComponent } from "../mat-input/mat-input.component";

const components = [
  QuestionsComponent,
  ConclusionComponent,
  ScoreComponent,
  InfoComponent,
  SearchComponent,
  PrevNextComponent,
  FilterComponent,
  MatInputComponent,
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
