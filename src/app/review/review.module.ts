import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ReviewPageRoutingModule } from "./review-routing.module";

import { ReviewPage } from "./review.page";
import { ComponentsModule } from "../components/components/components.module";
import { MaterialModule } from "../material.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewPageRoutingModule,
    ComponentsModule,
    MaterialModule,
  ],
  declarations: [ReviewPage],
})
export class ReviewPageModule {}
