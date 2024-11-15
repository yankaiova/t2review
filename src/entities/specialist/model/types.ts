export type FilterOptions = {
  competence: string[];
  position: number;
  levelCompetence: number;
};
export interface Position {
  id: number;
  name: string;
  description: string;
}
export interface Skill {
  id: number;
  name: string;
  description: string;
  question: string;
}
export type Level = {
  name: string;
  numericValue: number;
};

export interface UserProfileResponse {
  id: number;
  surname: number;
  name: string;
  patronymic: string;
  birthday: string;
  city: string;
  sex: string;
  positionResponse: PositionResponse;
  skillLevelResponses: SkillLevelResponse[];
}
type SkillLevelResponse = {
  id: number;
  skill: SkillResponse;
  level: {
    id: number;
    name: string;
    numericValue: number;
  };
  date: string;
  description: string;
  developmentWay: string;
};

type PositionResponse = {
  id: number;
  name: string;
  description: string;
  skillResponses: SkillResponse[];
};
type SkillResponse = {
  id: number;
  name: string;
  description: string;
  question: string;
  type: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
    typeResponse: {
      id: number;
      name: string;
    };
  };
};
