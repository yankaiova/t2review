import { EXPERTISE, RATING, ROLE } from "../lib/constants";

type SlotType = "offline" | "online";

export type FilterCompetention = { name: string; checked: boolean };

export type FilterOptions = {
  competence: string[];
  roleExpert: ROLE;
  rating: RATING;
  area: EXPERTISE;
};

export interface Meeting {
  meeting_id: number;
  expert_id: number;
  client_id: number[];
  slot_id: number;
  date: string;
  start_time: string;
  end_time: string;
  description: string;
  meeting_type: SlotType;
  meeting_status: string;
}
export interface User {
  user_id: number;
  user_outside_BD_id: number;
  telegram: string;
  role: "client" | "expert";
  firstName: string;
  lastName: string;
  description: string;
  rating?: number;
  competence?: string;
  area?: string;
  roleExpert?: string;
}
export type BaseSlot = {
  date: string;
  start_time: string;
  end_time: string;
};
export interface Slot {
  slot_id: number;
  creator_id: number;
  date: string;
  start_time: string;
  end_time: string;
  description: string;
  slot_type: SlotType;
  is_availible: boolean;
}

export interface Material {
  material_id: number;
  meeting_id: number;
  material_link: string;
}

export interface Comment {
  comment_id: number;
  meeting_id: number;
  user_id: number;
  create_time: string;
  comment_text: string;
}

export interface Review {
  review_id: number;
  meeting_id: number;
  raiting: number;
}
