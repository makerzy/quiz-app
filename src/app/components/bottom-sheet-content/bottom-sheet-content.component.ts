import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from "@angular/material/bottom-sheet";

export interface BottomSheetData {
  label: string;
  list: any[];
  valueKey: string;
  textKey: string;
  descriptionKey: string;
}

@Component({
  selector: "app-bottom-sheet-content",
  templateUrl: "./bottom-sheet-content.component.html",
  styleUrls: ["./bottom-sheet-content.component.scss"],
})
export class BottomSheetContentComponent implements OnInit {
  @Input() data: BottomSheetData;
  @Output() sendSelection: EventEmitter<string> = new EventEmitter();

  constructor(private bottomSheetRef: MatBottomSheetRef) {}
  ngOnInit() {}
  retrieveSearchSelection(selected: any) {
    this.sendSelection.emit(selected);
  }

  selectItem(item: any) {
    console.log(item[this.data.valueKey]);
    this.sendSelection.emit(item[this.data.valueKey]);
    // this.bottomSheetRef.dismiss();
    // event.preventDefault();
  }
}
