type SlotType = "offline" | "online";

export type FilterCompetention = { name: string; checked: boolean };

export type FilterOptions = {
  competence: string[];
  position: number;
  area: string[];
};
export interface Position {
  id: number;
  name: string;
  description: string;
}
export interface Skill {
  id: number;
  name: string;
  description: string;
  question: string;
}
export interface LevelSkills {
  id: string;
}
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
  id: number;
  telegram: string;
  firstName: string;
  lastName: string;
  description?: string;
  rating?: number;
  competence?: string;
  area?: string;
  roleExpert?: string;
}
export type BaseSlot = {
  date: string;
  start_time: string;
  end_time: string;
  slot_type: "offline" | "online";
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
