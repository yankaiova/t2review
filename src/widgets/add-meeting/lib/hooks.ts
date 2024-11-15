import { useNavigate } from "react-router-dom";
import { materialsApi, useMaterials } from "@/entities/material";
import { meetingsApi } from "@/entities/meeting";
import { slotsApi, useSlot } from "@/entities/slot";
import { UserTeamResponse, teamsApi } from "@/features/add-team-meeting";

export const addMeeting = (description: string, team: string) => {
  const navigate = useNavigate();
  const [createNewMeeting] = meetingsApi.useCreateMeetingMutation();
  const [updateSlotAvalible] = slotsApi.useUpdateSlotAvalibleMutation();
  const [createMaterial] = materialsApi.useAddMaterialMutation();
  const [createMeetingUser] = meetingsApi.useCreateMeetingUserMutation();
  const { data: users } = teamsApi.useGetUserbyTeamidQuery(Number(team));

  const { slotAtribiutes } = useSlot();
  const { slot_id, date, start_time, end_time, slot_type, expert_id } =
    slotAtribiutes;

  const { links, clearLinks } = useMaterials();

  createNewMeeting({
    slot_id,
    start_time,
    end_time,
    date,
    meeting_type: slot_type,
    description,
    expert_id: String(expert_id),
  })
    .then((res) => {
      links.forEach((item: string) => {
        createMaterial({
          meeting_id: res.data.data.meeting_id,
          material_link: item,
        });
      });
      if (users) {
        users.forEach((item: UserTeamResponse) => {
          createMeetingUser({
            meeting_id: res.data.data.meeting_id,
            user_id: item.userprofileid,
          });
        });
      }
    })
    .catch(() => alert("Ошибка создания встречи"))
    .then(() => updateSlotAvalible({ slot_id: 4, is_availible: "false" }));
  clearLinks();
  navigate("/calendar");
};
