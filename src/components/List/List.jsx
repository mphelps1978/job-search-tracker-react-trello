import { CssBaseline, Paper, makeStyles } from "@material-ui/core";
import React from "react";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#ebecf0",
    marginLeft: theme.spacing(1),
  },
}));

const List = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title />
      </Paper>
    </div>
  );
};

export default List;
