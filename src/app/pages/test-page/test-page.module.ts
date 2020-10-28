import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TestPagePageRoutingModule } from "./test-page-routing.module";

import { TestPagePage } from "./test-page.page";
import { ComponentsModule } from "src/app/components/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPagePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TestPagePage],
})
export class TestPagePageModule {}
