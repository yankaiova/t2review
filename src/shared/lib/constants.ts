import { Level } from "../model/types";

export enum SERVER_API {
  REVIEW = "https://dummyjson.com",
  PROFILE = " http://10.4.56.98:8080",
  TEAM = "http://10.4.56.94:3000",
}
export enum SERVICE {
  TEAM = "http://10.4.56.94:8080",
}

export const TIMER = [0, 30, 60, 90, 120, 150, 180];

export const levelSkills: Level[] = [
  { name: "Негативный", numericValue: -1 },
  { name: "Нейтральный", numericValue: 0 },
  { name: "Базовый", numericValue: 1 },
  { name: "Продвинутый", numericValue: 2 },
  { name: "Экспертный", numericValue: 3 },
];

export const skills: string[] = [
  "Java",
  "Spring",
  "Typescript",
  "Аналитическое мышление",
  "Самоконтроль",
  "Эффективная коммуникация",
  "SQL",
  "Docker",
  "CI/CD",
  "Kubernetes",
  "Git",
];
export const roles: string[] = [
  "DevOps Engineer",
  "Frontend developer",
  "Backend Developer",
];
