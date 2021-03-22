import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Nodejs from "./component-icons/nodejs";
import FullStack from "./component-icons/fullstack";
import Reactjs from "./component-icons/react";

import Golang from "./component-icons/golang";

import PS from "./component-icons/ps";
import AllCourse from "./component-icons/allcourse";
import Web from "./component-icons/web";
import Mobile from "./component-icons/mobile";
import Cart from "./cart";
import RecipeReviewCard from "./cardforlistcourse";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  rootGrid: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow:
      "2px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)",
  },
}));

export default function SearchForListCourse(props: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [valueForCart, setValueForCart] = React.useState(false);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  let {
    listCourses,
    arrContainCourseAndQuantity,
    allQuantity,
    handleIncreaseCourse,
    handleDecrease,
    handleDeleteCourse,
    sendArrContainCourseAndQuantity,
  } = props;

  const getListWebApp = () => {
    const newCourses = listCourses.filter((course: any) => {
      return (
        course.biDanh === "lap-trinh-golang-2020" ||
        course.biDanh === "nodejs" ||
        course.biDanh === "photoshop-2020" ||
        course.biDanh === "khoa-fullstack"
      );
    });
    return newCourses.map((course: any, index: any) => {
      return (
        <Grid item lg={3} key={index}>
          <Paper className={classes.paper}>
            <RecipeReviewCard
              course={course}
              WebApp="WebApp"
              handleCart={handleCart}
            />
          </Paper>
        </Grid>
      );
    });
  };
  const getListMobileApp = () => {
    const newCourses = listCourses.filter((course: any) => {
      return course.biDanh === "android-cookie" || course.biDanh === "swift-os";
    });

    return newCourses.map((course: any, index: any) => {
      return (
        <Grid item lg={3} key={index}>
          <Paper className={classes.paper}>
            <RecipeReviewCard
              course={course}
              Mobile="Mobile"
              handleCart={handleCart}
            />
          </Paper>
        </Grid>
      );
    });
  };
  const getListNodeJS = () => {
    const newCourses = listCourses.filter((course: any) => {
      return course.biDanh === "nodejs";
    });

    return newCourses.map((course: any, index: any) => {
      return (
        <Grid item lg={3} key={index}>
          <Paper className={classes.paper}>
            <RecipeReviewCard
              course={course}
              Nodejs="Nodejs"
              handleCart={handleCart}
            />
          </Paper>
        </Grid>
      );
    });
  };

  const getListGolang = () => {
    const newCourses = listCourses.filter((course: any) => {
      return course.biDanh === "lap-trinh-golang-2020";
    });

    return newCourses.map((course: any, index: any) => {
      return (
        <Grid item lg={3} key={index}>
          <Paper className={classes.paper}>
            <RecipeReviewCard
              course={course}
              Golang="Golang"
              handleCart={handleCart}
            />
          </Paper>
        </Grid>
      );
    });
  };
  const getListFullStack = () => {
    const newCourses = listCourses.filter((course: any) => {
      return course.biDanh === "khoa-fullstack";
    });

    return newCourses.map((course: any, index: any) => {
      return (
        <Grid item lg={3} key={index}>
          <Paper className={classes.paper}>
            <RecipeReviewCard
              course={course}
              FullStack="FullStack"
              handleCart={handleCart}
            />
          </Paper>
        </Grid>
      );
    });
  };

  const getListPs = () => {
    const newCourses = listCourses.filter((course: any) => {
      return course.biDanh === "photoshop-2020";
    });
    return newCourses.map((course: any, index: any) => {
      return (
        <Grid item lg={3} key={index}>
          <Paper className={classes.paper}>
            <RecipeReviewCard course={course} Ps="Ps" handleCart={handleCart} />
          </Paper>
        </Grid>
      );
    });
  };

  const getListReactjs = () => {
    const newCourses = listCourses.filter((course: any) => {
      return course.biDanh === "reactjs";
    });
    return newCourses.map((course: any, index: any) => {
      return (
        <Grid item lg={3} key={index}>
          <Paper className={classes.paper}>
            <RecipeReviewCard
              course={course}
              Reactjs="Reactjs"
              handleCart={handleCart}
            />
          </Paper>
        </Grid>
      );
    });
  };

  const getListCourse = () => {
    return listCourses.map((course: any, index: any) => {
      return (
        <Grid item lg={3} key={index}>
          <Paper className={classes.paper}>
            <RecipeReviewCard
              course={course}
              AllCourse="AllCourse"
              handleCart={handleCart}
            />
          </Paper>
        </Grid>
      );
    });
  };
  const handleCart = (value: any) => {
    setValueForCart(value);
  };
  return (
    <React.Fragment>
      <Container>
        <div className="tittle-and-content">
          <h2>The world's largest selection of courses</h2>
          <h3>
            Choose from 150,000 online video courses with new additions
            published every month
          </h3>
        </div>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab label="AllCourse" icon={<AllCourse />} {...a11yProps(0)} />
              <Tab label="WebApp" icon={<Web />} {...a11yProps(1)} />
              <Tab label="MobileApp" icon={<Mobile />} {...a11yProps(2)} />
              <Tab label="NodeJS" icon={<Nodejs />} {...a11yProps(3)} />
              <Tab label="GoLang" icon={<Golang />} {...a11yProps(4)} />
              <Tab label="FullStack" icon={<FullStack />} {...a11yProps(5)} />
              <Tab label="Ps" icon={<PS />} {...a11yProps(6)} />
              <Tab label="Reactjs" icon={<Reactjs />} {...a11yProps(7)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div className={classes.rootGrid}>
              <Grid container spacing={3}>
                {getListCourse()}
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className={classes.rootGrid}>
              <Grid container spacing={3}>
                {getListWebApp()}
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className={classes.rootGrid}>
              <Grid container spacing={3}>
                {getListMobileApp()}
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className={classes.rootGrid}>
              <Grid container spacing={3}>
                {getListNodeJS()}
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div className={classes.rootGrid}>
              <Grid container spacing={3}>
                {getListGolang()}
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <div className={classes.rootGrid}>
              <Grid container spacing={3}>
                {getListFullStack()}
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <div className={classes.rootGrid}>
              <Grid container spacing={3}>
                {getListPs()}
              </Grid>
            </div>
          </TabPanel>
          <TabPanel value={value} index={7}>
            <div className={classes.rootGrid}>
              <Grid container spacing={3}>
                {getListReactjs()}
              </Grid>
            </div>
          </TabPanel>
        </div>
      </Container>
      <Cart
        valueForCart={valueForCart}
        handleCart={handleCart}
        arrContainCourseAndQuantity={arrContainCourseAndQuantity}
        allQuantity={allQuantity}
        handleIncreaseCourse={handleIncreaseCourse}
        handleDecrease={handleDecrease}
        handleDeleteCourse={handleDeleteCourse}
        sendArrContainCourseAndQuantity={sendArrContainCourseAndQuantity}
      />
    </React.Fragment>
  );
}
