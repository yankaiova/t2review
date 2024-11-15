import { Select, MenuItem, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { BaseButton } from "@/shared/ui";
import { roles, skills, levelSkills } from "@/shared/lib/constants";
import { Level } from "@/entities/specialist/model/types";
import { ExpertList } from "@/widgets/expert-list";

export const Filters = () => {
  const [levelCompetence, setLevelCompetence] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [skill, setSkill] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<{
    skill: string | null;
    position: string;
    level: string | null;
  }>();
  const handleChangeRole = (e: SelectChangeEvent<string>) => {
    setRole(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeLevel = (event: SelectChangeEvent) => {
    setLevelCompetence(event.target.value);
    console.log(event.target.value);
  };
  const handleChangeSkill = (event: SelectChangeEvent) => {
    setSkill(event.target.value);
    console.log(event.target.value);
  };
  const onSubmit = () => {
    setFilters({
      skill: skill || null,
      position: role,
      level: levelCompetence || null,
    });
    setIsOpen(true);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "20px",
      }}
    >
      <Typography color="textDisabled" marginTop="20px">
        Выбор роли
      </Typography>
      <Select id="slot-t-select" value={role} onChange={handleChangeRole}>
        {roles.map((item: string) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <Typography color="textDisabled" marginTop="20px">
        Область экспертизы
      </Typography>
      <Select
        id="demo-multiple-chip"
        value={skill}
        onChange={handleChangeSkill}
      >
        {skills.map((item: string) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <Typography color="textDisabled" marginTop="20px">
        Фильтр по уровню компетенции
      </Typography>
      <Select
        id="slot-t-select"
        value={levelCompetence}
        onChange={handleChangeLevel}
        sx={{ marginBottom: "20px" }}
      >
        {levelSkills.map((item: Level) => (
          <MenuItem key={item.name} value={item.numericValue}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <BaseButton text="Применить" onClick={onSubmit} />
      {isOpen && role && <ExpertList filters={filters} />}
    </form>
  );
};
