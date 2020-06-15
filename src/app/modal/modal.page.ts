import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";
import { NavService } from "../services/nav.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"],
})
export class ModalPage implements OnInit {
  list: any[];
  displayParams: string[];
  header?: string;
  orderBy?: string;

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private nav: NavService
  ) {}

  ngOnInit() {
    this.list = this.navParams.get("list");
    this.displayParams = this.navParams.get("displayParams");
    this.header = this.navParams.get("header");
    this.orderBy = this.navParams.get("orderBy");
  }

  selectItem(item: any) {
    console.log(item["id"]);
    console.log(item);
    this.modalCtrl.dismiss(item);
  }

  retrieveSearchSelection(selected: any) {
    console.log(selected);
    this.modalCtrl.dismiss(selected);
  }
}
