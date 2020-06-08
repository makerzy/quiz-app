import { Component, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements AfterViewInit {
  image: string = "/assets/images/home/image.jpg";
  images: string[] = [
    "assets/images/home/image.jpg",
    "assets/images/home/image1.jpg",
    "assets/images/home/image2.jpg",
    "assets/images/home/image3.jpg",
    "assets/images/home/image4.jpg",
    "assets/images/home/image5.jpg",
  ];
  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.setImage();
  }
  setImage() {
    setInterval(() => {
      const index = Math.round(Math.random() * 5);

      this.image = this.images[index];
    }, 5000);
  }

  goToQuestion() {
    this.router.navigate(["question"]);
  }
}
