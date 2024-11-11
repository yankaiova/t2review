import {
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormGroup,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import {
  ROLE,
  competentions,
  ratings,
  EXPERTISE,
} from "../../../shared/lib/constants";
import { useSearchExpert } from "@/entities/user";
import { BaseButton, CustomToggleGroup } from "@/shared/ui";

export const Filters = () => {
  const { setOptions } = useSearchExpert();
  const [rating, setRating] = useState<number>(5);
  const [competence, setCompetence] =
    useState<{ name: string; checked: boolean }[]>(competentions);
  const [role, setRole] = useState<ROLE | "">("");
  const handleChangeRole = (e: SelectChangeEvent<string>) => {
    setRole(e.target.value);
  };
  const [expertise, setExpertise] = useState<EXPERTISE | "">("");
  const handleExpertise = (e: SelectChangeEvent) => {
    setExpertise(e.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompetence(
      competence.map((item) =>
        item.name === event.target.name
          ? { name: event.target.name, checked: event.target.checked }
          : item
      )
    );
  };

  const onSubmit = () => {
    const mapCompetence = competence
      .filter((item) => item.checked === true)
      .map((item) => item.name);
    setOptions({
      competence: mapCompetence,
      area: expertise || undefined,
      rating,
      roleExpert: role || undefined,
    });
  };
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <FormGroup>
        <Typography color="textDisabled">
          Фильтр по уровню компетенции
        </Typography>
        {competence.map((item) => (
          <FormControlLabel
            key={"checkbox" + item.name}
            control={
              <Checkbox
                checked={item.checked}
                onChange={handleChange}
                name={item.name}
              />
            }
            label={item.name}
          />
        ))}
      </FormGroup>
      <Typography color="textDisabled" marginTop="20px">
        Выбор ролей
      </Typography>
      <Select id="slot-t-select" value={role} onChange={handleChangeRole}>
        {Object.values(ROLE).map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
      <Typography color="textDisabled" marginTop="20px">
        Область экспертизы
      </Typography>
      <Select id="slot-e-select" value={expertise} onChange={handleExpertise}>
        {Object.values(EXPERTISE).map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
      <Typography marginTop="20px" color="textDisabled">
        Оценка пользователей
      </Typography>
      <CustomToggleGroup
        values={ratings}
        currentValue={rating}
        setCurrentValue={setRating}
      />
      <BaseButton text="Применить" onClick={onSubmit} />
    </form>
  );
};
