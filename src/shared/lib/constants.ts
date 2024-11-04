import { FilterCompetention } from "../model/types";

export const SERVER_API = "https://dummyjson.com";

export enum ROLE {
  DEV = "Разработчик (Developer)",
  TEST = "Тестировщик(QA Engineer)",
  DISIGN = "Дизайнер (UI/UX designer)",
  SYS_ADMIN = "Системный администратор (System Administrator)",
  TECH_WRITER = "Технический писатель (TechnivalWriter)",
}

export enum RATING {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

export enum EXPERTISE {
  JAVA = "Java",
  PYTHON = "Python",
  JS = "JavaScript/TypeScript",
  C_PLUS = "C/C++",
  C = "C#",
  PUBY = "Ruby",
  PHP = "PHP",
  GO = "Go",
  SWIFT = "Swift",
  KOTLIN = "Kotlin",
  RUST = "Rust",
  AUTO_TEST = "Автоматизированное тестирование",
  MANUAL_TEST = "Ручное тестирование",
  PERFORMANCE_TEST = "Тестирование производительности",
  UI_UX = "UI/UX дизайн",
  DRAPHIC_DESIGN = "Графический дизайн",
  PROTO_DESIGN = "Прототипирование",
  DATA_PROTECTION = "Защита данных",
  PENTESTING = "Пентестинг",
  INCIDENT_MANAGEMENT = "Управление инцидентами",
  TECH_WRITING = "Техническое письмо",
  USER_GUIDE = "Руководства пользователя",
  INTERNAL_DOCUMENTATION = "Внутренняя документация",
}

export const competentions: FilterCompetention[] = [
  { name: "Junior", checked: false },
  { name: "Middle", checked: false },
  { name: "Senior", checked: false },
];
export enum TIMER {
  ZERO = 0,
  HOUR_0_5 = 30,
  HOUR_1 = 60,
  HOUR_1_5 = 90,
  HOUR_2 = 120,
  HOUR_2_5 = 150,
  HOUR_3 = 180,
}
