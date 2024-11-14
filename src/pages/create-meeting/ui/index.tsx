import { AddMaterial } from "@/features/add-material";
import { AddMeeting } from "@/widgets/add-meeting";
import { MaterialList } from "@/widgets/material-list/ui";

export const CreatePage = () => {
  return (
    <AddMeeting>
      <>
        <MaterialList />
        <AddMaterial />
      </>
    </AddMeeting>
  );
};
