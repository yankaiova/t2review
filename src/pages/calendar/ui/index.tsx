import { useContext } from "react";
import { Typography } from "@mui/material";
import { AuthContext } from "@/shared/context";
import { MeetingList } from "@/widgets/meeting-list";
import { SlotList } from "@/widgets/slot-list";
import { Calendar } from "@/entities/calendar";
import { AddSlot } from "@/widgets/add-slot";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { style } from "./styles";

export const CalendarPage = () => {
  const { role } = useContext(AuthContext);

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent={{ xs: "start", sm: "center" }}
      marginTop="30px"
    >
      <Calendar />
      <Box>
        <Typography variant="h5" sx={style}>
          Мои мероприятия
        </Typography>
        <MeetingList />
        {role === "expert" && (
          <>
            <Typography variant="h5" sx={style}>
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
