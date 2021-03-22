import React from "react";
import Container from "@material-ui/core/Container";
import { Div } from "./styleComponent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import images1 from "../../images/images1.jpg";
import images2 from "../../images/images2.jpg";
import images3 from "../../images/images3.jpg";
export default function IntroduceTarget() {
  return (
    <Div className="start">
      <Container>
        <Grid container justify="center" alignItems="center">
          <Grid md={4}>
            <Div className="div-padding">
              <Div className="images">
                <img src={images1} alt="" />
              </Div>
              <Div className="content">
                <Typography variant="h6">Upgrade your skills</Typography>
                <Typography variant="overline">
                  Take courses from true professionals, find a program to your
                  liking, and learn the newest and most popular disciplines.
                </Typography>
              </Div>
            </Div>
          </Grid>
          <Grid md={4}>
            <Div className="div-padding">
              <Div className="images">
                <img src={images2} alt="" />
              </Div>
              <Div className="content">
                <Typography variant="h6">Learning and teaching</Typography>
                <Typography variant="overline">
                Explore thousands of online courses and programs, learn and gain new skills anytime from any part of the world.
                </Typography>
              </Div>
            </Div>
          </Grid>
          <Grid md={4}>
            <Div className="div-padding">
              <Div className="images">
                <img src={images3} alt="" />
              </Div>
              <Div className="content">
                <Typography variant="h6">Discover limitless possibilities</Typography>
                <Typography variant="overline">
                Explore thousands of online courses and programs, learn and gain new skills anytime from any part of the world.
                </Typography>
              </Div>
            </Div>
          </Grid>
        </Grid>
      </Container>
    </Div>
  );
}
