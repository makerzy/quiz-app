import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Platform } from "@ionic/angular";

export enum NavType {
  back = "back",
  next = "next",
}

export interface NavData {
  hideBack?: boolean;
  hideNext?: boolean;
  disableBack?: boolean;
  disableNext?: boolean;
}

@Component({
  selector: "app-prev-next",
  templateUrl: "./prev-next.component.html",
  styleUrls: ["./prev-next.component.scss"],
})
export class PrevNextComponent implements OnInit {
  platformWidth: number;
  @Input() data: NavData;
  @Output() sendNavType: EventEmitter<NavType> = new EventEmitter();

  constructor(private platform: Platform) {}

  ngOnInit() {
    this.getPlatformSize();
  }

  ngOnDestroy() {
    this.platform.resize.unsubscribe();
  }

  getPlatformSize() {
    this.platformWidth = this.platform.width();
    this.platform.resize.subscribe(() => {
      this.platformWidth = this.platform.width();
    });
  }

  sendNav(type: NavType) {
    this.sendNavType.emit(type);
  }
}
