import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { NavService } from "src/app/services/nav.service";

import { QuestionGroupService } from "src/app/services/question-services/question-group.service";
import { ModalService } from "src/app/services/modal.service";
import { PlatformService } from "../services/platform.service";
import {
  animate,
  query,
  style,
  transition,
  trigger,
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  /* animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(3000, style({ opacity: 1 })),
      ]),
      transition(":leave", [
        // :leave is alias to '* => void'
        animate(3000, style({ opacity: 0 })),
      ]),
    ]),
  ], */
})
export class HomePage implements OnInit, OnDestroy {
  image: string = "/assets/images/home/image2.jpg";
  images: string[] = [
    "/assets/images/home/image.jpg",
    "/assets/images/home/image1.jpg",
    "/assets/images/home/image2.jpg",
    "/assets/images/home/image3.jpg",
    "/assets/images/home/image4.jpg",
  ];
  platformSize: number;
  caseList = [];
  displayParams: string[] = ["topic", "case"];
  header: string = "Find a Case";

  constructor(
    private navService: NavService,
    private platform: PlatformService,
    private questionGroupService: QuestionGroupService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.setImage();
    this.getQuestionGroups();
  }
  ngOnDestroy() {}

  setImage() {
    this.platform.getPlatformDataObservable().subscribe((size) => {
      this.platformSize = size.width;
    });

    setInterval(() => {
      const index = Math.round(Math.random() * 4);
      this.image = this.images[index];
    }, 3000);
  }

  openSheet() {
    this.modalService
      .presentModal(this.caseList, this.displayParams, this.header, "none")
      .then((id) => {
        /* console.log("ID: ", this.modalService.dismised["id"]); */
        this.navService.push("question", { questionGroupId: id });
      });
    // const id = await this.modalService.dismised["id"];
    // if (id) this.navService.push("question", id);
  }

  goToQuestion() {
    const question = this.questionGroupService.getAllQuestionGroups()[0];
    this.navService.push("question", { questionGroupId: question });
  }

  retrieveSelectedCase(value: string) {
    /* console.log("value: ", value); */
    this.navService.push("question", { questionGroupId: value });
  }

  getQuestionGroups() {
    this.caseList = this.questionGroupService.getAllQuestionGroups();
  }
}
