export type MenuType = 'HOME' | 'Company info.' | 'CEO' | 'Vision' | 'Business';

export type Language = 'ENG' | 'KHM';

export interface ServiceDataV1 {
  ENG: {
    data: {
      title: string;
      value: string;
    }[];
  };
  KHM: {
    data: {
      title: string;
      value: string;
    }[];
  };
}

export interface ServiceDataV2 {
  ENG: {
    data: {
      title: string;
      value: string;
      subTitle: string;
    }[];
  };
  KHM: {
    data: {
      title: string;
      value: string;
      subTitle: string;
    }[];
  };
}
