export interface Meeting {
  meeting_id: number;
  expert_id: number;
  client_id: number[];
  slot_id: number;
  date: string;
  start_time: string;
  end_time: string;
  meeting_type: string;
  meeting_status: string;
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
  type_slot: string;
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
