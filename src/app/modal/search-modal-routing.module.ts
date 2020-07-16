import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ModalPage } from "src/app/modal/search-modal.page";

const routes: Routes = [
  {
    path: "",
    component: ModalPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPageRoutingModule {}
