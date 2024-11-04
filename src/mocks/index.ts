import { Meeting, Slot, User, Comment, Material } from "@/shared/model/types";
export const comments: Comment[] = [
  {
    comment_id: 25,
    meeting_id: 1,
    user_id: 23,
    comment_text: "Комментарий 1 содержит описание попопопоп",
    create_time: "10-10-2024 12:00:00",
  },
  {
    comment_id: 26,
    meeting_id: 1,
    user_id: 1,
    comment_text: "Комментарий 2 содержит описание попопопоп",
    create_time: "11-10-2024 13:58:00",
  },
];
export const materials: Material[] = [
  {
    material_id: 31,
    meeting_id: 23,
    material_link: "Ссылка 1",
  },
  {
    material_id: 29,
    meeting_id: 23,
    material_link: "Ссылка 2",
  },
];
export const meetings: Meeting[] = [
  {
    meeting_id: 1,
    expert_id: 23,
    client_id: [1],
    slot_id: 1,
    date: "29-10-2024",
    start_time: "12:30",
    end_time: "13:30",
    meeting_type: "online",
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
    meeting_type: "offline",
    meeting_status: "завершена",
  },
];
export const users: User[] = [
  {
    user_id: 1,
    user_outside_BD_id: 1,
    telegram: "User_telegram_1",
    role: "client",
    firstName: "Михаил",
    lastName: "Михайлов",
  },
  {
    user_id: 23,
    user_outside_BD_id: 3,
    telegram: "Expert_telegram_3",
    role: "expert",
    firstName: "Иван",
    lastName: "Иванов",
  },
  {
    user_id: 2,
    user_outside_BD_id: 2,
    telegram: "Expert_telegram_3",
    role: "expert",
    firstName: "Антон",
    lastName: "Антонов",
  },
];
export const slots: Slot[] = [
  {
    slot_id: 1,
    creator_id: 23,
    date: "29-10-2024",
    start_time: "12:00",
    end_time: "13:00",
    description: "Консультация по ручному тестированию",
    type_slot: "online",
    is_availible: false,
  },
  {
    slot_id: 2,
    creator_id: 23,
    date: "29-10-2024",
    start_time: "13:00",
    end_time: "14:00",
    description: "Консультация по Front-end разработке",
    type_slot: "offline",
    is_availible: true,
  },
];
