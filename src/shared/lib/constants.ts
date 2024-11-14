import { FilterCompetention } from "../model/types";

export enum SERVER_API {
  REVIEW = "https://dummyjson.com",
  PROFILE = "http://localhost:8080",
  TEAM = "http://10.4.56.94:3000",
}
export enum SERVICE {
  TEAM = "http://10.4.56.94:8080",
}

export const levelSkills = ["1", "2", "3", "4", "5"];

// export enum ROLE {
//   DEV = "Разработчик (Developer)",
//   TEST = "Тестировщик(QA Engineer)",
//   DISIGN = "Дизайнер (UI/UX designer)",
//   SYS_ADMIN = "Системный администратор (System Administrator)",
//   TECH_WRITER = "Технический писатель (TechnivalWriter)",
// }
// export enum EXPERTISE {
//   JAVA = "Java",
//   PYTHON = "Python",
//   JS = "JavaScript/TypeScript",
//   C_PLUS = "C/C++",
//   C = "C#",
//   PUBY = "Ruby",
//   PHP = "PHP",
//   GO = "Go",
//   SWIFT = "Swift",
//   KOTLIN = "Kotlin",
//   RUST = "Rust",
//   AUTO_TEST = "Автоматизированное тестирование",
//   MANUAL_TEST = "Ручное тестирование",
//   PERFORMANCE_TEST = "Тестирование производительности",
//   UI_UX = "UI/UX дизайн",
//   DRAPHIC_DESIGN = "Графический дизайн",
//   PROTO_DESIGN = "Прототипирование",
//   DATA_PROTECTION = "Защита данных",
//   PENTESTING = "Пентестинг",
//   INCIDENT_MANAGEMENT = "Управление инцидентами",
//   TECH_WRITING = "Техническое письмо",
//   USER_GUIDE = "Руководства пользователя",
//   INTERNAL_DOCUMENTATION = "Внутренняя документация",
// }

// export const competentions: FilterCompetention[] = [
//   { name: "Junior", checked: false },
//   { name: "Middle", checked: false },
//   { name: "Senior", checked: false },
// ];
export const TIMER = [0, 30, 60, 90, 120, 150, 180];
