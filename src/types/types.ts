export interface Photo {
  id: number;
  title: string;
  alt: string;
  photographer: string;
  url: string;
  placeholder: string;
}

export interface PhotoData {
  id: number;
  alt: string;
  photographer: string;
  src: {
    large: string;
    small: string;
  };
}
