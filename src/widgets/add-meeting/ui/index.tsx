import { Typography, FormControl } from "@mui/material";
import { BaseButton } from "../../../shared/ui";
import { SlotCard } from "../../../entities/slot";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Materials } from "../../../features/set-materials";

export const AddMeeting = () => {
  const style = { display: "flex", flexDirection: "column", gap: "15px" };
  const [materials, setMaterials] = useState<string[]>([]);
  return (
    <>
      <SlotCard
        slot={{
          id: 1,
          date: "12.10.2024",
          start_time: "12:00",
          end_time: "13:00",
        }}
      />
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
