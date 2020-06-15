import { Component, OnInit } from "@angular/core";

import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { BottomSheetContentComponent } from "src/app/components/bottom-sheet-content/bottom-sheet-content.component";

@Component({
  selector: "app-bottom-sheet",
  templateUrl: "./bottom-sheet.component.html",
  styleUrls: ["./bottom-sheet.component.scss"],
})
export class BottomSheetComponent implements OnInit {
  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit() {}
  // openSheet() {
  //   this.bottomSheet.open(BottomSheetContentComponent);
  // }
}
