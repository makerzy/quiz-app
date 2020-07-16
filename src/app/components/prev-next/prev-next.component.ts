import { Component, Input, EventEmitter, Output } from "@angular/core";
import {
  PlatformService,
  ScreenDimensions,
} from "src/app/services/platform.service";
import { Observable } from "rxjs";

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
export class PrevNextComponent {
  dimensions$: Observable<ScreenDimensions>;
  back = NavType.back;
  next = NavType.next;
  @Input() data: NavData;
  @Input() completed: boolean;
  @Output() sendNavType: EventEmitter<NavType> = new EventEmitter();

  constructor(private platformService: PlatformService) {
    this.dimensions$ = this.platformService.getPlatformDataObservable();
  }

  sendNav(type: NavType) {
    this.sendNavType.emit(type);
  }
}
