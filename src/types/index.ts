export type Short = {
  short_link: string;
  original_link: string;
  copied: boolean;
};

export type ResponseData = {
  code: string;
  full_share_link: string;
  full_short_link: string;
  full_short_link2: string;
  full_short_link3: string;
  original_link: string;
  share_link: string;
  short_link: string;
  short_link2: string;
  short_link3: string;
};

export type APIResponse = {
  data?: {
    ok: boolean;
    result: ResponseData | null;
  };
};
