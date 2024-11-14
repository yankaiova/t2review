export interface BaseUser {
  userprofileid: number;
  firstname: string;
  lastname: string;
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
  meeting_type: "offline" | "online";
  meeting_status: string;
  materials: string[];
}
