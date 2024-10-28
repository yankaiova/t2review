import { DeleteMeeting } from "../../../features/delete-meeting";
import { useParams, useNavigate } from "react-router";
import { Rate } from "../../../features/rate";
import { List, ListItem, Divider, Typography } from "@mui/material";
import { BaseButton } from "../../../shared/ui";
import { ExtendMeeting } from "../../../features/extend-meeting/ui";
import { SlotCard } from "../../../entities/slot";

export const MeetingEdit = () => {
  const { id } = useParams();
  const meetingId = Number(id);
  const navigate = useNavigate();
  const rescheduleMeeting = () => {
    navigate(`/reschedule/expert/${expert_id}`);
  };

  return (
    <div key={"edit-meet" + id}>
      <SlotCard slot={} />
      <ExtendMeeting slot={} />
      <BaseButton text="Продлить" onClick={rescheduleMeeting} />
      <Typography variant="body2" color="text.secondary">
        запланировано
      </Typography>
      <Typography variant="body2" color="text.secondary">
        оффлайн: какой то адрес
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Материалы для встречи
      </Typography>
      <Typography variant="body1" component="div" marginTop="15px">
        Материалы
      </Typography>
      <List>
        {materials.map((item: string, index: number) => (
          <ListItem>
            <Typography color="#2FB3FF">Ссылка на диск</Typography>
            <Divider />
          </ListItem>
        ))}
      </List>
      <Rate id={meetingId} />
      <DeleteMeeting meeting_id={meetingId} />
    </div>
  );
};
