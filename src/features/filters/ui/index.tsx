import { Select, MenuItem, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { useSearchExpert } from "@/entities/specialist";
import { BaseButton } from "@/shared/ui";
import { useFilters } from "../lib/hook";
import { Level, Position } from "@/shared/model/types";
import { levelSkills } from "@/shared/lib/constants";

export const Filters = () => {
  const { positions } = useFilters();
  const { setOptions } = useSearchExpert();
  const [levelCompetence, setLevelCompetence] = useState<string>("");
  const skills = [];
  const [role, setRole] = useState<string>("");
  const [skill, setSkill] = useState<string>("");
  const handleChangeRole = (e: SelectChangeEvent<string>) => {
    setRole(e.target.value);
  };

  const handleChangeLevel = (event: SelectChangeEvent) => {
    setLevelCompetence(event.target.value);
  };
  const handleChangeSkill = (event: SelectChangeEvent) => {
    setSkill(event.target.value);
  };

  const onSubmit = () => {
    setOptions({
      //levelCompetence: Number(levelCompetence),
      position: Number(role),
    });
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
        {positions &&
          positions.map((item: Position) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
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
        {skills &&
          skills.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
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
        {levelSkills &&
          levelSkills.map((item: Level) => (
            <MenuItem key={item.name} value={item.numericValue}>
              {item.name}
            </MenuItem>
          ))}
      </Select>
      <BaseButton text="Применить" onClick={onSubmit} />
    </form>
  );
};
