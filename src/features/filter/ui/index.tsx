import {
  Select,
  FormControl,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useState } from "react";
import {
  roles,
  competentions,
  ratings,
  expertises,
} from "../../../shared/lib/constants";

export const Filters = () => {
  const style = {
    backgroundColor: "#2FB3FF",
    marginRight: "20px",
    border: "1px solid white",
    borderRadius: "0",
  };
  const [competention, setCompetetion] = useState(competentions);
  const [role, setRole] = useState<string>("");
  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };
  const [expertise, setExpertise] = useState<string>("");
  const handleExpertise = (e) => {
    setExpertise(e.target.value);
  };
  const [rating, setRating] = useState<string | null>(null);

  const handleRating = (
    event: React.MouseEvent<HTMLElement>,
    newRating: string | null
  ) => {
    setRating(newRating);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompetetion(
      competention.map((item) =>
        item.name === event.target.name
          ? { name: event.target.name, checked: event.target.checked }
          : item
      )
    );
  };
  return (
    <FormControl>
      <FormGroup>
        {competention.map((item) => (
          <FormControlLabel
            control={
              <Checkbox
                key={"checkbox" + item.name}
                checked={item.checked}
                onChange={handleChange}
                name={item.name}
              />
            }
            label={item.name}
          />
        ))}
      </FormGroup>
      <Select
        id="slot-e-select"
        value={expertise}
        onChange={handleExpertise}
        label="Область экспертизы"
      >
        {expertises.map((item: string) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <Select
        id="slot-t-select"
        value={role}
        onChange={handleChangeRole}
        label="Выбор ролей"
      >
        {roles.map((item: string) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <ToggleButtonGroup
        value={rating}
        exclusive
        onChange={handleRating}
        aria-label="text alignment"
      >
        {ratings.map((item: number) => (
          <ToggleButton value={item} key={item} sx={style}>
            {item}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </FormControl>
  );
};
