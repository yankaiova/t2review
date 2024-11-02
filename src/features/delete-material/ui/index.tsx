import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMaterials } from "@/entities/material";

type PropsDeleteMaterial = { link: string };

export const DeleteMaterial = (props: PropsDeleteMaterial) => {
  const { link } = props;
  const { removeLink } = useMaterials();
  const handleClickDelete = () => {
    removeLink(link);
  };
  return (
    <Button onClick={handleClickDelete}>
      <DeleteIcon color="primary" />
    </Button>
  );
};
