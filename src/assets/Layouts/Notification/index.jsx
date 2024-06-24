/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { IconButton, Tooltip } from "@mui/material";

export default function Notification({ isOpen, setIsOpen }) {
  const Theme = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    setIsOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: Theme.device === "mobile" ? "100vw" : 350 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <i className="text-2xl bx bxs-message-alt-detail" />
                ) : (
                  <i className="text-2xl bx bxs-message-alt-detail" />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        <div className="flex items-center justify-between px-4 py-2">
          <p className="text-xl font-semibold">Notifikasi</p>
          <Tooltip title="Close" arrow placement="bottom" onClick={toggleDrawer(false)}>
            <IconButton>
              <i className="text-2xl font-semibold bx bx-x" />
            </IconButton>
          </Tooltip>
        </div>
        {DrawerList}
      </Drawer>
    </div>
  );
}
