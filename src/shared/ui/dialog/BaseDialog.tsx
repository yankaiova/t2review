import { useState } from "react";
import { useDialogs } from "@toolpad/core/useDialogs";
import { BaseButton } from "..";

export const BaseDialog = () => {
  const dialogs = useDialogs();
  const [result, setResult] = useState("");
  return (
    <BaseButton
      text="Добавить"
      onClick={async () => {
        const name = await dialogs.prompt("What's your name?");
      }}
    />
  );
};
