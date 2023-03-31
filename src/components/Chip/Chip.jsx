import React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function ChipComponent({ tech }) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        sx={{
          color: "aliceblue",
          borderColor: "rgb(69, 69, 138)",
          backgroundColor: "#12071f",
          fontSize: "15px",
        }}
        avatar={<Avatar alt="Natacha" src={tech.img} />}
        label={tech.name}
        variant="outlined"
      />
    </Stack>
  );
}

export default ChipComponent;
