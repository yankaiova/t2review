import { BaseTypography } from "@/shared/ui";
import { useMaterials } from "@/entities/meeting";
import { DeleteMaterial } from "@/features/delete-material";
import { AddMaterial } from "@/features/add-material";
import { Typography, List, ListItem } from "@mui/material";

export const MaterialList = () => {
  const { links } = useMaterials();

  if (!links) {
    return <BaseTypography>Материалы пока не добавлены</BaseTypography>;
  }
  return (
    <>
      <BaseTypography>Материалы</BaseTypography>
      <List>
        {links.map((item: string) => (
          <ListItem key={item}>
            <Typography color="#2FB3FF">{item}</Typography>
            <DeleteMaterial link={item} />
          </ListItem>
        ))}
      </List>
      <AddMaterial />
    </>
  );
};
