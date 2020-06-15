import { Component, OnInit } from "@angular/core";
import { NavService } from "../services/nav.service";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { BottomSheetContentComponent } from "src/app/components/bottom-sheet-content/bottom-sheet-content.component";
import { QuestionGroupService } from "../services/question-services/question-group.service";
import { ModalService } from "../services/modal.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  image: string = "/assets/images/home/image.jpg";
  images: string[] = [
    "assets/images/home/image.jpg",
    "assets/images/home/image1.jpg",
    "assets/images/home/image2.jpg",
    "assets/images/home/image3.jpg",
    "assets/images/home/image4.jpg",
    "assets/images/home/image5.jpg",
  ];

  caseList = [];
  displayParams: string[] = ["topic", "case"];
  header: string = "Find a Case";
  constructor(
    private navService: NavService,
    private bottomSheet: MatBottomSheet,
    private questionGroupService: QuestionGroupService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.setImage();
    this.getQuestionGroups();
  }

  setImage() {
    setInterval(() => {
      const index = Math.round(Math.random() * 5);

      this.image = this.images[index];
    }, 5000);
  }

  openSheet() {
    this.modalService
      .presentModal(this.caseList, this.displayParams, this.header, "none")
      .then((id) => {
        console.log("ID: ", this.modalService.dismised["id"]);
        this.navService.push("question", { questionGroupId: id });
      });
    // const id = await this.modalService.dismised["id"];
    // if (id) this.navService.push("question", id);
  }

  retrieveSelectedCase(value: string) {
    console.log("value: ", value);
    this.navService.push("question", { questionGroupId: value });
  }

  getQuestionGroups() {
    this.caseList = this.questionGroupService.getAllQuestionGroups();
  }
}
