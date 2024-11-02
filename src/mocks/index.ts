import { Meeting } from "@/shared/model/types";

export const experts: Expert[] = [
  { id: 1, name: "John", role: "exprert", comp: "Frontend" },
];

export const meetingTypes: string[] = ["конслуьтация", "ревью"];

type Expert = {
  id: number;
  name: string;
  role: string;
  comp: string;
};
export const meetings: Meeting[] = [
  {
    meeting_id: 1,
    expert_id: 23,
    client_id: [3],
    slot_id: 6,
    date: "29-10-2024",
    start_time: "12:30",
    end_time: "13:30",
    meeting_type: "онлайн",
    meeting_status: "запланирована",
  },
  {
    meeting_id: 2,
    expert_id: 23,
    client_id: [4],
    slot_id: 8,
    date: "29-10-2024",
    start_time: "15:30",
    end_time: "16:00",
    meeting_type: "онлайн",
    meeting_status: "завершена",
  },
];
// export const users = [
//   {user_id: 1, user_outside_BD_id: 1, telegram: "User_telegram_1", role:"client"},
//   {user_id: 2, user_outside_BD_id: 2, telegram: "User_telegram_2",role:"client"},
//   {user_id: 3, user_outside_BD_id: 3, telegram: "Expert_telegram_3",role:"expert"},
//   {user_id: 4, user_outside_BD_id: 4, telegram: "Expert_telegram_4",role:"expert"}
//  ],
// export const slots =[
//   {slot_id: 1, "expert_id": 3, date:"22-10-2024",start_time: "12:00", end_time: "13:00" , description: "Консультация по ручному тестированию", type_slot: "online", is_available: true},
//   {slot_id: 2, "expert_id": 3,date:"22-10-2024", "start_time": "13:00", "end_time": "14:00", description: "Консультация по Front-end разработке", type_slot: "offline", is_available: true},
// ],
// export const meetings = [
//   {meeting_id: 1, slot_id: 1, expert_id: 3, client_id: 1,date:"22-10-2024",start_time: "12:00", end_time: "13:00" , type_slot: "online"},
//   {meeting_id: 2, slot_id: 2, expert_id: 3, client_id: 2, date:"22-10-2024",start_time: "13:00", end_time: "14:00"  type_slot: "offline"},
// ],
