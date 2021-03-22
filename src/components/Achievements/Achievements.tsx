import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CountUp from "react-countup";
import {
  BodyAchievement,
  DivContentAchievement,
  FirstAchi,
  H2Achi,
  MiddeAchi,
  H4Achi,
  RatingAchiContent,
  IconItem,
  H1Achi,
  HumanAchi,
} from "./styled-achievements";
export default function Achievements() {
  return (
    <BodyAchievement>
      <Container maxWidth="md">
        <DivContentAchievement>
          <FirstAchi>
            <H2Achi>SCHOOL ACHIEVEMENTS</H2Achi>
          </FirstAchi>
          <MiddeAchi>
            <H4Achi>
              Here you can review some statistics about our Education Center
            </H4Achi>
          </MiddeAchi>
          <Grid container>
            <Grid item xs={6} sm={3}>
              <RatingAchiContent>
                <IconItem>
                  <i
                    className="fa fa-globe"
                    style={{ fontSize: "65px", color: "#ffffff" }}
                  ></i>
                </IconItem>
                <H1Achi>
                  <CountUp start={0} duration={15} end={94532} />
                </H1Achi>
                <HumanAchi>Foreign followers</HumanAchi>
              </RatingAchiContent>
            </Grid>
            <Grid item xs={6} sm={3}>
              <RatingAchiContent>
                <IconItem>
                  <i
                    className="fa fa-bell"
                    style={{ fontSize: "65px", color: "#ffffff" }}
                  ></i>
                </IconItem>
                <H1Achi>
                  <CountUp start={0} duration={20} end={11223} />{" "}
                </H1Achi>
                <HumanAchi>CLASSES COMPLETE</HumanAchi>
              </RatingAchiContent>
            </Grid>
            <Grid item xs={6} sm={3}>
              <RatingAchiContent>
                <IconItem>
                  <i
                    className="fa fa-users"
                    style={{ fontSize: "65px", color: "#ffffff" }}
                  ></i>
                </IconItem>
                <H1Achi>
                  {" "}
                  <CountUp start={0} duration={20} end={282673} />
                </H1Achi>
                <HumanAchi>STUDENTS ENROLLED</HumanAchi>
              </RatingAchiContent>
            </Grid>
            <Grid item xs={6} sm={3}>
              <RatingAchiContent>
                <IconItem>
                  <i
                    className="fa fa-briefcase"
                    style={{ fontSize: "65px", color: "#ffffff" }}
                  ></i>
                </IconItem>
                <H1Achi>
                  <CountUp start={0} duration={25} end={37} />
                </H1Achi>
                <HumanAchi>CERTIFIED TEACHERS</HumanAchi>
              </RatingAchiContent>
            </Grid>
          </Grid>
        </DivContentAchievement>
      </Container>
    </BodyAchievement>
  );
}
