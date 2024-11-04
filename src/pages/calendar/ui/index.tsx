import { useContext } from "react";
import { AuthContext } from "@/shared/context";
import { MeetingList } from "@/widgets/meeting-list";
import { SlotList } from "@/widgets/slot-list";
import { Calendar } from "@/entities/calendar";
import { AddSlot } from "@/widgets/add-slot";
import { Stack, Box, Container, Typography } from "@mui/material";
import { style } from "./styles";

export const CalendarPage = () => {
  const { role } = useContext(AuthContext);

  return (
    <Container>
      <Stack direction={{ xs: "column", sm: "row" }} marginTop="5rem">
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
    </Container>
  );
};
