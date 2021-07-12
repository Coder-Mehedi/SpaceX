export interface IRocket {
  type: string;
  name: string;
  id: string;
  active: boolean;
  first_flight: string;
  stages: number;
  success_rate_pct: number;
  country: string;
  company: string;
  cost_per_launch: number;
  boosters: number;
  description: string;
  height: {feet: number; meters: number};
  mass: {kg: number; lb: number};
}

export interface ILaunch {
  __typename: string;
  id: string;
  details: string;
  is_tentative: boolean;
  launch_date_utc: string;
  launch_site: {
    __typename: string;
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  launch_success: boolean;
  launch_year: string;
  mission_id: string[];
  mission_name: string;
  static_fire_date_utc: null | string;
  telemetry: {flight_club: any};
  tentative_max_precision: string;
  rocket: {rocket_name: string; rocket_type: string};
  links: {
    article_link: string;
    mission_patch_small: string;
    mission_patch: string;
    presskit: null;
    reddit_campaign: string;
    reddit_launch: string;
    reddit_media: string;
    reddit_recovery: null;
    video_link: string;
    wikipedia: string;
  };
}

export interface ICapsule {
  id: string;
  landings: number;
  missions: [
    {
      flight: number;
      name: string;
    },
  ];
  original_launch: string;
  reuse_count: number;
  status: string;
  type: string;
  dragon: {
    type: string;
    id: string;
    active: boolean;
    description: string;
    name: string;
  };
}
