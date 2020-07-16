import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";
import { NavService } from "src/app/services/nav.service";

@Component({
  selector: "app-modal",
  templateUrl: "./search-modal.page.html",
  styleUrls: ["./search-modal.page.scss"],
})
export class ModalPage implements OnInit {
  list: any[];
  displayParams: string[];
  header?: string;
  orderBy?: string;
  displayedList: any[];

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private nav: NavService
  ) {}

  ngOnInit() {
    this.list = this.navParams.get("list");
    this.displayedList = this.list;
    this.displayParams = this.navParams.get("displayParams");
    this.header = this.navParams.get("header");
    this.orderBy = this.navParams.get("orderBy");
    /* console.log(this.list, this.displayParams); */
  }

  selectItem(item: any) {
    /*    console.log("Item: ", item) */ this.modalCtrl.dismiss(item);
  }

  // retrieveSearchSelection(selected: any) {
  //   console.log(selected);
  // }

  retrieveFilteredList(list: any[] | null) {
    if (!list) return (this.displayedList = this.list);
    this.displayedList = list;
  }
}
