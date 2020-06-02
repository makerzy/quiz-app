export interface Content {
  id: string;
  contentGroupId: number;
  header: string;
  introduction?: string;
  subHeader?: string;
  mainContent: string;
  image?: string;
  video?: string;
  conclusion: string;
}

export interface ContentObject {
  type: "video" | "youtube" | "image" | "text" | "header" | "subHeader";
  order: number;
  text?: string;
  url?: string;
}
//video and images should be array
//implement ID selection
//Text grouping
//
