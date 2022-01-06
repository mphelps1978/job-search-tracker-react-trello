import { CssBaseline, Paper, makeStyles } from "@material-ui/core";
import Title from "./Title";
import Cards from "../Cards/Cards";
import InputContainer from "../Input/InputContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#ebecf0",
    marginLeft: theme.spacing(1),
    paddingTop: 20,
    paddingBottom: 20,
  },
}));

const List = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <InputContainer />
      </Paper>
    </div>
  );
};

export default List;
