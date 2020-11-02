import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "question",
    loadChildren: () =>
      import("./pages/question/question.module").then(
        (m) => m.QuestionPageModule
      ),
  },
  {
    path: "content",
    loadChildren: () =>
      import("./contents/content/content.module").then(
        (m) => m.ContentPageModule
      ),
  },
  {
    path: "review",
    loadChildren: () =>
      import("./pages/review/review.module").then((m) => m.ReviewPageModule),
  },
  {
    path: "test-page",
    loadChildren: () =>
      import("./pages/test-page/test-page.module").then(
        (m) => m.TestPagePageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/signup/signup.module").then((m) => m.SignupPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
