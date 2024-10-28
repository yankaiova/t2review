import { Typography, FormControl } from "@mui/material";
import {
  BaseButton,
  BaseBoxContainer,
  BaseTypography,
} from "../../../shared/ui";
import { useSlotByRecord } from "../../../entities/record";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Materials } from "../../set-materials";
import { style } from "./styles";

export const AddMeeting = () => {
  const { slot } = useSlotByRecord();
  const [materials, setMaterials] = useState<string[]>([]);
  return (
    <>
      <BaseBoxContainer>
        <Typography variant="h5" component="div" color="text.main">
          День
        </Typography>
        <Typography variant="h5" component="div" color="text.main">
          {slot.date}
        </Typography>
      </BaseBoxContainer>
      <BaseBoxContainer>
        <BaseTypography>Начало</BaseTypography>
        <BaseTypography>{slot.start_time}</BaseTypography>
      </BaseBoxContainer>
      <BaseBoxContainer>
        <BaseTypography>Конец</BaseTypography>
        <BaseTypography>{slot.end_time}</BaseTypography>
      </BaseBoxContainer>
      <Typography color="#2FB3FF">Встреча онлайн на 60 минут</Typography>
      <FormControl sx={style}>
        <Materials materials={materials} setMaterials={setMaterials} />
        <TextField
          id="outlined-textarea"
          label="Описание"
          placeholder="Добавьте описание"
          multiline
        />
        <BaseButton text="Сохранить" />
      </FormControl>
    </>
  );
};
