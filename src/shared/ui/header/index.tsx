import { Link } from "react-router-dom";
import { Stack, Box, Drawer, Button } from "@mui/material";
import iconLogo from "@/assets/Т1 Интеграция 1 1.svg";
import MenuIcon from "@mui/icons-material/Menu";
type PropsHeaderView = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactElement;
};
export const HeaderView = ({ open, setOpen, children }: PropsHeaderView) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      margin={"2rem 2rem"}
    >
      <Link to="/">
        <img
          src={iconLogo}
          alt=""
          style={{ width: "230px", objectFit: "contain" }}
        />
      </Link>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Button onClick={() => setOpen(true)}>
          <MenuIcon />
        </Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          {children}
        </Drawer>
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>{children}</Box>
    </Stack>
  );
};
