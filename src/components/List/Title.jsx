import React, { useState } from "react";
import { Typography, InputBase, makeStyles } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyle = makeStyles((theme) => ({
  editableTitleContainer: {
    margin: theme.spacing(1),
    display: "flex",
  },
  editableTitle: {
    marginLeft: theme.spacing(1),
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  input: {
    margin: theme.spacing(1),
    fontSize: "1.2rem",
    fontWeight: "bold",
    "&:focus": {
      background: "#ddd",
    },
  },
}));

const Title = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            autoFocus
            value="Todo"
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={() => setOpen(!open)}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            Todo
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
};

export default Title;
