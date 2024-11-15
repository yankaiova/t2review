export interface Slot {
  slot_id: number;
  creator_id: number;
  date: string;
  start_time: string;
  end_time: string;
  slot_type: "offline" | "online";
  is_availible: "false" | "true";
}
