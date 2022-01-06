import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));

const Card = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.card}>This is a test card</Paper>
    </div>
  );
};

export default Card;
