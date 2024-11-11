import {
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormGroup,
  SelectChangeEvent,
  Typography,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useSearchExpert } from "@/entities/specialist";
import { BaseButton } from "@/shared/ui";
import { useFilters } from "../lib/hook";
import { LevelSkills, Position, Skill } from "@/shared/model/types";
import { levelSkills } from "@/shared/lib/constants";

export const Filters = () => {
  const { positions, skills } = useFilters();
  const { setOptions } = useSearchExpert();
  const [levelCompetence, setLevelCompetence] = useState<string[]>([]);

  const [role, setRole] = useState<string>();
  const handleChangeRole = (e: SelectChangeEvent<string>) => {
    setRole(e.target.value);
  };

  const [skillsF, setSkillsF] = useState<number[]>([]);
  const handleChangeSkill = (event: SelectChangeEvent<number>) => {
    setSkillsF([...skillsF, Number(event.target.value)]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLevelCompetence([...levelCompetence, event.target.value]);
  };

  const onSubmit = () => {
    setOptions({
      competence: levelCompetence,
      position: Number(role),
    });
  };
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <Typography color="textDisabled" marginTop="20px">
        Выбор ролей
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
        multiple
        value={skills.id}
        onChange={handleChangeSkill}
      >
        {skills.map((item: Skill) => (
          <MenuItem key={item.id} value={item.id}>
            <Checkbox checked={skillsF.includes(item.id)} />
            <ListItemText primary={item.name} />
          </MenuItem>
        ))}
      </Select>
      <FormGroup>
        <Typography color="textDisabled">
          Фильтр по уровню компетенции
        </Typography>
        {levelSkills.map((item: string) => (
          <FormControlLabel
            key={"checkbox" + item}
            control={
              <Checkbox
                checked={levelCompetence.includes(item)}
                onChange={handleChange}
                name={item}
              />
            }
            label={item}
          />
        ))}
      </FormGroup>
      <BaseButton text="Применить" onClick={onSubmit} />
    </form>
  );
};
