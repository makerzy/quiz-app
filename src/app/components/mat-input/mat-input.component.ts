import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

export interface MatInputData {
  label: string;
  data: string | number;
  type:
    | "text"
    | "tel"
    | "url"
    | "email"
    | "number"
    | "search"
    | "password"
    | "textarea";
  rows?: number;
  required?: boolean;
  readonly?: boolean;
  max?: number;
  min?: number;
  capitalize?: boolean;
  uppercase?: boolean;
}

@Component({
  selector: "app-mat-input",
  templateUrl: "./mat-input.component.html",
  styleUrls: ["./mat-input.component.scss"],
})
export class MatInputComponent implements OnChanges {
  @Input() data: MatInputData;
  @Output() sendData: EventEmitter<MatInputData["data"]> = new EventEmitter();

  formControl: FormControl;
  valueChanges: Subscription;
  numericRegex = /^[-+]?\d*$/;

  constructor() {}

  ngOnChanges() {
    if (this.data && !this.formControl) {
      const validators = [];
      if (this.data.required) validators.push(Validators.required);
      if (this.data.type === "email") validators.push(Validators.email);
      if (this.data.type === "number") {
        validators.push(Validators.pattern(this.numericRegex));
        if (this.data.min || this.data.min === 0)
          validators.push(Validators.min(this.data.min));
        if (this.data.max || this.data.max === 0)
          validators.push(Validators.max(this.data.max));
      }
      this.formControl = new FormControl(this.data.data, validators);
      this.formControl.markAsTouched();
    }
    if (this.data && this.data.data)
      this.formControl.patchValue(this.data.data);
  }

  enter({ target: { value } }) {
    if (this.formControl.valid) {
      if (typeof value === "string" && !value) value = null;

      if (typeof value === "string" && this.data.type !== "textarea")
        value = value.trim().toLowerCase();

      this.sendData.emit(value);
    } else {
      this.sendData.emit(null);
    }
  }
}
