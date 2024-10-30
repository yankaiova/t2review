import { List, ListItem, Divider, Typography } from "@mui/material";
import { BaseButton } from "@/shared/ui";
import { useDialogs } from "@toolpad/core/useDialogs";

type PropsMaterials = {
  materials: string[];
  setMaterials: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Materials = ({ materials, setMaterials }: PropsMaterials) => {
  const dialogs = useDialogs();

  async function addComment() {
    const value = await dialogs.prompt("Ваш комментарий");
    if (value) {
      setMaterials([...materials, value]);
    }
  }

  function deleteComment(index: number) {
    setMaterials([...materials.slice(0, index), ...materials.slice(index + 1)]);
  }

  return (
    <>
      <Typography variant="body1" component="div" marginTop="15px">
        Материалы
      </Typography>
      <List>
        {materials.map((item: string, index: number) => (
          <ListItem>
            <Typography color="#2FB3FF">Ссылка на диск</Typography>
            <BaseButton text="Удалить" onClick={() => deleteComment(index)} />
            <Divider />
          </ListItem>
        ))}
        <BaseButton text="Добавить" onClick={addComment} />
      </List>
      <BaseButton text="Прикрепить" />
    </>
  );
};
