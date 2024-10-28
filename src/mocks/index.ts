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
