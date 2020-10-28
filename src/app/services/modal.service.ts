import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "src/app/pages/modal/search-modal.page";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  constructor(public modalController: ModalController) {}
  dismised: any;
  async presentModal(
    list: any[],
    displayParams: string[],
    header?: string,
    orderBy?: string
  ) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: "",
      componentProps: {
        list,
        displayParams,
        header,
        orderBy,
      },
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();

    if (data) {
      this.dismised = data;
      console.log("Dismissed: ", this.dismised.id);
      return this.dismised;
    } else return null;
  }
}
