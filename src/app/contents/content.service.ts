import { Injectable } from "@angular/core";
import { Content, ContentObject } from "../interfaces/content.interface";

@Injectable({
  providedIn: "root",
})
export class ContentService {
  contentList: Content[] = [
    {
      id: "1a",
      contentGroupId: 123,
      header: "2021 Nissan Frontier Fully Teased In New Video",
      image: "assets/images/img1.jpg",
      introduction:
        "Earlier today, Nissan announced its restructuring plan that includes launching 12 new models over the next 18 months. The company released an accompanying teaser video called “Nissan Next: From A to Z” that showed off the silhouettes of several, including the rumored next-generation Z sports car and what appears to be the 2021 Nissan Frontier. The video below has a boxy pickup truck cruising past the letter F, giving us our first shadowed look at the next-gen pickup truck. ",
      subHeader: "Everything we know",
      mainContent:
        "Sadly, we can’t see much of the truck even though the lighting does illuminate a few parts, including the roof and hood. We don’t know what it’ll look like, though Nissan promised it’d be more aerodynamic than the current pickup, which debuted in 2004. However, it does have some resemblance to the leaked Nissan Frontier Nismo photo from earlier this month. The headlights both feature dual daytime running lights that appear to have the same design, too.",
      video: "https://www.youtube.com/embed/tDW2C6rcH6M",
      conclusion:
        "At the front, you can see the shiny hood meet the dull grille surround – yet another styling feature spotted on the leaked Frontier Nismo. The hood also looks similar, with deep creases on the edges that add some definition to the otherwise flat sheet metal.",
    },
    {
      id: "1b",
      contentGroupId: 123,
      header: "2021 Nissan Frontier Fully Teased In New Video",
      image: "/assets/images/img2.jpg",
      introduction:
        "Earlier today, Nissan announced its restructuring plan that includes launching 12 new models over the next 18 months. The company released an accompanying teaser video called “Nissan Next: From A to Z” that showed off the silhouettes of several, including the rumored next-generation Z sports car and what appears to be the 2021 Nissan Frontier. The video below has a boxy pickup truck cruising past the letter F, giving us our first shadowed look at the next-gen pickup truck. ",
      subHeader: "Everything we know",
      mainContent:
        "Sadly, we can’t see much of the truck even though the lighting does illuminate a few parts, including the roof and hood. We don’t know what it’ll look like, though Nissan promised it’d be more aerodynamic than the current pickup, which debuted in 2004. However, it does have some resemblance to the leaked Nissan Frontier Nismo photo from earlier this month. The headlights both feature dual daytime running lights that appear to have the same design, too.",
      video: "https://www.youtube.com/embed/L72fhGm1tfE",
      conclusion:
        "At the front, you can see the shiny hood meet the dull grille surround – yet another styling feature spotted on the leaked Frontier Nismo. The hood also looks similar, with deep creases on the edges that add some definition to the otherwise flat sheet metal.",
    },
    {
      id: "1b",
      contentGroupId: 123,
      header: "2021 Nissan Frontier Fully Teased In New Video",
      image: "/assets/images/img3.jpg",
      introduction:
        "Earlier today, Nissan announced its restructuring plan that includes launching 12 new models over the next 18 months. The company released an accompanying teaser video called “Nissan Next: From A to Z” that showed off the silhouettes of several, including the rumored next-generation Z sports car and what appears to be the 2021 Nissan Frontier. The video below has a boxy pickup truck cruising past the letter F, giving us our first shadowed look at the next-gen pickup truck. ",
      subHeader: "Everything we know",
      mainContent:
        "Sadly, we can’t see much of the truck even though the lighting does illuminate a few parts, including the roof and hood. We don’t know what it’ll look like, though Nissan promised it’d be more aerodynamic than the current pickup, which debuted in 2004. However, it does have some resemblance to the leaked Nissan Frontier Nismo photo from earlier this month. The headlights both feature dual daytime running lights that appear to have the same design, too.",
      video: "https://www.youtube.com/embed/AyS3uw7HZOM",
      conclusion:
        "At the front, you can see the shiny hood meet the dull grille surround – yet another styling feature spotted on the leaked Frontier Nismo. The hood also looks similar, with deep creases on the edges that add some definition to the otherwise flat sheet metal.",
    },
  ];

  heartDiseaseContent: ContentObject[] = [
    {
      type: "header",
      order: 1,
      text: "Heart Disease",
    },
    {
      type: "text",
      order: 3,
      text: "Heart Disease is bad.",
    },
    {
      type: "video",
      order: 2,
      url: "youtube.com",
    },
    {
      type: "subHeader",
      order: 4,
      text: "Heart Disease is bad.",
    },
  ];
  constructor() {}

  getContentByCategoryName(name: string): ContentObject[] {
    return [...this[name]];
  }

  getContentByGroupId(id: number) {
    return this.contentList.filter(
      ({ contentGroupId }) => contentGroupId === id
    );
  }

  getAllContent() {
    return [...this.contentList];
  }
}
