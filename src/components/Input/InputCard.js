import { useEffect, useRef } from "react";
import { alpha } from "@material-ui/core";
import {
  Paper,
  InputBase,
  Button,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

const useStyle = makeStyles((theme) => ({
  card: {
    width: 280,
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
  btnConfirm: {
    background: "#5aac44",
    color: "#fff",
    "&:hover": {
      background: alpha("#5aac44", 0.25),
    },
  },
}));

const InputCard = ({ setOpen, open }) => {
  const ref = useRef();
  const classes = useStyle();

  const toggleSlideOut = () => {
    setOpen(false);
  };

  // onBlur doesn't seem to be working like it should.. Replacing it with this Hook

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open, setOpen]);

  return (
    <div>
      <div>
        <Paper className={classes.card} elevation={4} ref={ref}>
          <InputBase
            // onBlur={toggleSlideOut}
            multiline
            fullWidth
            inputProps={{ classes: classes.input }}
            placeholder="Enter Title"
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={toggleSlideOut}>
          Add Card
        </Button>
        <IconButton onClick={toggleSlideOut}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default InputCard;
