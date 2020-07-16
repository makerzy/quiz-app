import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";
import { BehaviorSubject, Observable } from "rxjs";

export interface ScreenDimensions {
  width: number;
  height: number;
}

@Injectable({
  providedIn: "root",
})
export class PlatformService {
  platformData$ = new BehaviorSubject<ScreenDimensions | null>(null);

  constructor(private platform: Platform) {
    this.changePlatformData(this.getCurrentPlatformData());
    this.platform.resize.subscribe(() =>
      this.changePlatformData(this.getCurrentPlatformData())
    );
  }

  getPlatformDataObservable(): Observable<ScreenDimensions> {
    return this.platformData$;
  }

  getPlatformDataValue() {
    return this.platformData$.value;
  }

  changePlatformData(data: ScreenDimensions) {
    return this.platformData$.next(data);
  }

  getCurrentPlatformData() {
    return {
      width: this.platform.width(),
      height: this.platform.height(),
    } as ScreenDimensions;
  }
}
