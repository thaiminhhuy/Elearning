import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Star from "./component-icons/star";
import { connect } from "react-redux";
import * as action from "./moduleSeartchForCard/actions/action";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "16em",

      position: "relative",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",

      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    displayJustifyContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      padding: "0 16px 0 16px",
    },
    width100: {
      width: "100%",
    },
    title: {
      height: "25px",
      overflow: "hidden",
      display: "block",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  })
);
const SpanAmination = styled.span`
  transition: 0.5;
  &:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, transparent, #1abc9c);
    animation: animate 2s linear infinite;
  }
  @keyframes animate {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  &:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, #1abc9c);
    animation: animate1 2s linear infinite;
    animation-delay: 1s;
  }
  @keyframes animate1 {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  &:nth-child(3) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to left, transparent, #1abc9c);
    animation: animate2 2s linear infinite;
  }
  @keyframes animate2 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  &:nth-child(4) {
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(to top, transparent, #1abc9c);
    animation: animate3 2s linear infinite;
    animation-delay: 1s;
  }
  @keyframes animate3 {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`;
const DivStyleTolTal = styled.div`
  span {
    font-size: 20px;
    font-weight: bold;
    color: #3c3b37;
  }
  .best-sell {
    text-decoration-line: line-through;
    font-size: 16px;
    padding: 5px;
    color: #73726c;
  }
`;
function RecipeReviewCard(props: any) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  let {
    course,
    WebApp,
    Mobile,
    Nodejs,
    Golang,
    FullStack,
    Ps,
    Reactjs,
    AllCourse,
  } = props;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <SpanAmination></SpanAmination>
      <SpanAmination></SpanAmination>
      <SpanAmination></SpanAmination>
      <SpanAmination></SpanAmination>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {WebApp === "WebApp" && "W"}
            {Mobile === "Mobile" && "M"}
            {Nodejs === "Nodejs" && "N"}
            {Golang === "Golang" && "G"}
            {Ps === "Ps" && "P"}
            {Reactjs === "Reactjs" && "R"}
            {AllCourse === "AllCourse" && "A"}
            {FullStack === "FullStack" && "F"}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<span className={classes.title}>{course.tenKhoaHoc}</span>}
        subheader={course.ngayTao}
      />
      <CardMedia
        className={classes.media}
        image={course.hinhAnh}
        title="Paella dish"
      />
      <CardContent className={classes.displayJustifyContent}>
        <div className="star">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>

        <DivStyleTolTal>
          <span>$10</span>
          <span className="best-sell">$199</span>
        </DivStyleTolTal>
      </CardContent>
      <CardActions disableSpacing className={classes.displayJustifyContent}>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Button
          variant="contained"
          color="secondary"
          className={classes.width100}
          onClick={() => {
            props.handleCart(true);
            props.sendCourse(course);
          }}
        >
          Add To Cart
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            The direction and constancy of the will is what really matters, and
            intellect and feeling are only important insofar as they contribute
            to that
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    sendCourse: (course: any) => {
      dispatch(action.actSendCourseToStore(course));
    },
  };
};
export default connect(null, mapDispatchToProps)(RecipeReviewCard);
