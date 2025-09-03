export interface BookInformation {
  key: string;
  title: string;
  authors?: AuthorInformation[] | any;
  description?: string | DescriptionInformation;
  covers?: number[];
  subjects?: string[];
  links?: { title: string; url: string }[];
  created: { type: string; value: string };
  last_modified: { type: string; value: string };
  ratings? : RatingSummary;
};

export interface AuthorInformation {
  key: string;
  name: string;

}
export interface DescriptionInformation {
  key: string;
  value: string;

}
export interface RatingSummary {
  summary: {
    average: number;
    count: number;
    sortable: number;
  };
  counts: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}
