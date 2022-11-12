import React, {useState } from "react";
import Switch from "@mui/material/Switch";

export default function ControlledSwitch() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
    />
  );
}
