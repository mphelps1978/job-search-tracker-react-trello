import { useState } from "react";
import { Collapse, Paper, Typography } from "@material-ui/core";
import { makeStyles, alpha } from "@material-ui/core/styles";
import InputCard from "./InputCard";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(),
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    backgroundColor: "#EBECF0",
    "&:hover": {
      backgroundColor: alpha("#000", 0.25),
    },
  },
}));

const InputContainer = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} open={open} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={3}
          onClick={() => setOpen(!open)}
        >
          <Typography>+ Add a card</Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

export default InputContainer;
