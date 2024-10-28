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
const meetings: Meeting[] = [
  {
    meeting_id: 1,
    expert_id: 23,
    client_id: 344,
    slot_id: 6,
    start_time: "2022-09-09 12:30",
    end_time: "2022-09-09 13:30",
    meeting_type: "онлайн",
    meeting_status: "запланирована",
  },
  {
    meeting_id: 2,
    expert_id: 23,
    client_id: 344,
    slot_id: 8,
    start_time: "2022-09-09 15:30",
    end_time: "2022-09-09 16:00",
    meeting_type: "онлайн",
    meeting_status: "завершена",
  },
];
