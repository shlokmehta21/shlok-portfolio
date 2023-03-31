import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import resume from "../../assets/shlok-resume.pdf";

export default function TopDrawer({ open, setOpen }) {
  const listItems = [
    { text: "Work", link: "#work" },
    {
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/shlok-mehta-759347192/",
    },
    { text: "GitHub", link: "https://github.com/shlokmehta21" },
    { text: "Resume", link: resume },
  ];

  const list = () => (
    <Box
      sx={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
      }}
      role="presentation"
    >
      <List>
        {listItems.map((list, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link
                onClick={() => setOpen(false)}
                href={list.link}
                color="inherit"
                sx={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <ListItemText primary={list.text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "#12071f",
              textAlign: "center",
            },
          }}
          anchor={"top"}
          open={open}
          onClose={() => setOpen(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
