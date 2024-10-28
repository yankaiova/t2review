import CheckIcon from "@mui/icons-material/Check";
import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { TFormikFieldProps } from "types/types";

import { questionsList } from "modules/RegistrationForm/constants/questionsList";

type TProps = {
  value: string;
} & TFormikFieldProps;

export const SelectQuestion = ({ value, handleBlur, handleChange }: TProps) => {
  return (
    <Select
      data-testid="secret-question"
      name="secretQuestion"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      renderValue={() => (
        <Box component="div">
          <ListItemText primary={value || questionsList[0]} />
        </Box>
      )}
    >
      {questionsList.map((question) => {
        const isSelected = question === value;

        return (
          <MenuItem key={question} value={question}>
            <ListItemText primary={question} />
            {isSelected && (
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
            )}
          </MenuItem>
        );
      })}
    </Select>
  );
};
