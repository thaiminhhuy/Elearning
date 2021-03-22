import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Logo from "../../images/logo.png";
import Switch from "../Switch/Switch";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import InforUses from "../InforUsers/inforUses";
const NameUser = styled.p`
  font-size: 28px;
  margin: auto 40px;
  color: black;
  // font-family: Arial, Helvetica, sans-serif !important;
  &:hover {
    color: #26a69a;
  }
`;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    backgroundLight: {
      backgroundColor: "#fff",
      padding: "20px 20px"
    },
    backgroundDark: {
      backgroundColor: "#212121",
      padding: "20px 20px"
    },
    buttonLight: {
      backgroundColor: "#009e7f",
      color: "white",
      padding: "0 15px",
      height: "45px",
      fontWeight: "bold",
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: "10px"
      },
      "&:hover": {
        backgroundColor: "#009e7f"
      }
    },
    buttonDark: {
      backgroundColor: "#009e7f",
      color: "black",
      padding: "0 15px",
      height: "45px",
      fontWeight: "bold",
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: "10px"
      },
      "&:hover": {
        backgroundColor: "#009e7f"
      }
    },
    responsive: {
      [theme.breakpoints.down("xs")]: {
        display: "none"
      },
    },
    signUpStyle: {
      textDecoration: "none",
      color: "white",
    },
    userNameResMoblie: {
      [theme.breakpoints.down("xs")]: {
        margin: "auto !important",
        marginRight: "inherit!important",

      },
    }
  })
);
interface Props {
  setBackground: (value: boolean) => void;
  props: any;
}

const Navbar: React.FC<Props> = ({ setBackground, props }) => {
  const classes = useStyles();
  const [themeNavbar, setThemeNavbar] = React.useState(false);
  const setBackgroundNavbar = (value: boolean) => {
    console.log(value);
    setThemeNavbar(value);
  };
  const [user1, setUser] = React.useState();
  const emitRoute = () => {
    props.history.push("/signIn");
  };
  const signUpRoute = () => {
    props.history.push("/signUp");
  };
  console.log(user1);

  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      let userLocal: any = localStorage.getItem("user");
      let user: any = JSON.parse(userLocal);
      setUser(user);
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar
          className={
            themeNavbar ? classes.backgroundDark : classes.backgroundLight
          }
        >
          <img src={Logo} alt="" />

          <Box p={1} flexGrow={1} className={classes.responsive}>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "space-evenly",
                fontSize: "20px",
              }}

            >
              <li style={{ color: "black" }}>Home</li>
              <li style={{ color: "black",cursor:"pointer" }} onClick={()=> {
                 props.history.push("/allcourse");
              }}>List Course</li>
            </ul>
          </Box>
          <Switch
            setBackground={setBackground}
            setBackgroundNavbar={setBackgroundNavbar}
          />

          {!user1 ? (
            <span style={{ display: "flex" }}>
              <Box p={1}>
                <Button
                  className={
                    themeNavbar ? classes.buttonDark : classes.buttonLight
                  }
                  onClick={emitRoute}
                >
                  Sign In
                </Button>
              </Box>
              <Box p={1}>
                <Button
                  className={
                    themeNavbar ? classes.buttonDark : classes.buttonLight
                  }
                  onClick={signUpRoute}
                >
                  Sign up
                </Button>
              </Box>
            </span>
          ) : (
              <NameUser style={{ display: "flex" }} className={classes.userNameResMoblie}>
                {user1?.hoTen} <InforUses logout={logout} />
              </NameUser>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
