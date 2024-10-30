import { useContext } from "react";
import { Typography } from "@mui/material";
import { AuthContext } from "@/shared/context";
import { MeetingList } from "@/widgets/meeting-list";
import { SlotList } from "@/widgets/slot-list";
import { Calendar } from "@/entities/calendar";
import { AddSlot } from "@/features/add-slot";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";

export const FullCalendar = () => {
  const { role } = useContext(AuthContext);

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent={{ xs: "start", sm: "center" }}
      marginTop="30px"
    >
      <Calendar />
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
