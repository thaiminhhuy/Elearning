import React from "react";
import Toggle from "react-toggle";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "../Switch/switch.css";
import { connect } from "react-redux";
interface Props {
  setBackground: (value: boolean) => void;
  setBackgroundNavbar: (value: boolean) => void;
}

function Switch(props: Props) {
  const [darkMode, setDarkMode] = React.useState(false);
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        margin: "-6px -6px",
        color: darkMode ? "" : "#ff9800"
      },
      switch: {
        [theme.breakpoints.between("xs", "sm")]: {
          display: "none"
        }
      }
    })
  );

  const classes = useStyles();
  return (
    <label>
      <Toggle
        className={classes.switch}
        defaultChecked={darkMode}
        icons={{
          checked: <Brightness3Icon className={classes.root} />,
          unchecked: <WbSunnyRoundedIcon className={classes.root} />
        }}
        onChange={() => {
          setDarkMode(!darkMode);
          props.setBackground(!darkMode);
          props.setBackgroundNavbar(!darkMode);
        }}
      />
    </label>
  );
}
// type ReduxType = ReturnType<typeof mapStateToProps>;
export default connect(null, null)(Switch);
