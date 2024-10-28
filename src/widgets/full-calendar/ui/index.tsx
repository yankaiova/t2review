import { useContext } from "react";
import { Typography } from "@mui/material";
import { AuthContext } from "../../../shared/context";
import { MeetingList } from "../../meeting-list";
import { SlotList } from "../../slot-list";
import { useCalendar } from "../../../entities/slot/lib/useCalendar";
import { AddSlot } from "../../../features/add-slot";
import { Stack } from "@mui/material";
import { BaseCalendar } from "../../../shared/ui";
import { Box } from "@mui/system";
import { useState } from "react";
import dayjs from "dayjs";

export const FullCalendar = () => {
  const { role } = useContext(AuthContext);
  const { setNewDate } = useCalendar();
  const [value, setValue] = useState<dayjs.Dayjs>(dayjs(Date.now()));
  function setDate(newValue: dayjs.Dayjs) {
    setValue(newValue);
    setNewDate(JSON.stringify(newValue));
  }
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent={{ xs: "start", sm: "center" }}
      marginTop="30px"
    >
      <BaseCalendar value={value} setValue={setDate} />
      <Box>
        <Typography variant="h5" color="#2FB3FF" marginBottom="15px">
          Мои мероприятия
        </Typography>
        <MeetingList />
        {role === "expert" && (
          <>
            <Typography variant="h5" color="#2FB3FF" margin={"30px 0 15px"}>
              Мои слоты
            </Typography>
            <SlotList />
            <AddSlot />
          </>
        )}
      </Box>
    </Stack>
  );
};
