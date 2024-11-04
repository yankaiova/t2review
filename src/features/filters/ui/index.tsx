import {
  Select,
  FormControl,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormGroup,
  ToggleButtonGroup,
  ToggleButton,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import {
  ROLE,
  competentions,
  ratings,
  EXPERTISE,
} from "../../../shared/lib/constants";
import { useSearchExpert } from "@/entities/user";
import { BaseButton } from "@/shared/ui";

export const Filters = () => {
  const { setOptions } = useSearchExpert();
  const style = {
    backgroundColor: "#2FB3FF",
    marginRight: "20px",
    border: "1px solid white",
    borderRadius: "0",
  };
  const [competence, setCompetence] = useState<
    { name: string; checked: boolean }[]
  >([]);
  const [role, setRole] = useState<string>("");
  const handleChangeRole = (e: SelectChangeEvent<string>) => {
    setRole(e.target.value);
  };
  const [expertise, setExpertise] = useState<string>("");
  const handleExpertise = (e: SelectChangeEvent<string>) => {
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
    setCompetence(
      competence.map((item) =>
        item.name === event.target.name
          ? { name: event.target.name, checked: event.target.checked }
          : item
      )
    );
  };

  const onSubmit = () => {
    const mapCompetence = competence.map((item) => {
      if (item.checked) {
        return item.name;
      }
    });
    setOptions({ competence: mapCompetence, expertise, rating, role });
  };
  return (
    <FormControl>
      {/* <FormGroup> */}
      {/* {competentions.map((item) => (
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
      <Select id="slot-e-select" value={expertise} onChange={handleExpertise}>
        {Object.values(EXPERTISE).map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
      <Select id="slot-t-select" value={role} onChange={handleChangeRole}>
        {Object.values(ROLE).map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
      <ToggleButtonGroup value={rating} exclusive onChange={handleRating}>
        {ratings.map((value: number) => (
          <ToggleButton value={value} key={value} sx={style}>
            {value}
          </ToggleButton>
        ))}
      </ToggleButtonGroup> */}
      <BaseButton text="Применить фильтры" onClick={onSubmit} />
    </FormControl>
  );
};
