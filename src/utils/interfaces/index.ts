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
