import React from "react";
import {
  Div,
  DivCard,
  H4,
  DivSpace,
  Button,
  DivButton
} from "./styleComponent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
export default function IntroduceCourse() {
  return (
    <Div>
      <Container fixed>
        <DivSpace></DivSpace>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            xl={6}
            lg={6}
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            md={6}
            sm={12}
          >
            <Grid lg={3} xs={12} sm={12} md={3}>
              <DivCard className="yellow">
                <Typography variant="h3" align="center">
                  <img
                    src="https://img.icons8.com/color/48/000000/angularjs.png"
                    style={{ width: "60px" }}
                  />
                </Typography>
                <H4>Angular</H4>
              </DivCard>
            </Grid>
            <Grid lg={3} xs={12} sm={12} md={3}>
              <DivCard className="blue">
                <Typography variant="h3" align="center">
                  <img
                    src="https://img.icons8.com/color/48/000000/react-native.png"
                    style={{ width: "60px" }}
                  />
                </Typography>

                <H4>React Native</H4>
              </DivCard>
            </Grid>
            <Grid lg={3} xs={12} sm={12} md={3}>
              <DivCard className="blueSea">
                <Typography variant="h3" align="center">
                  <img
                    src="https://img.icons8.com/color/48/000000/flutter.png"
                    style={{ width: "60px" }}
                  />
                </Typography>

                <H4>Flutter</H4>
              </DivCard>
            </Grid>

            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid lg={3} xs={12} sm={12} md={3}>
                <DivCard className="pink">
                  <Typography variant="h3" align="center">
                    <img src="https://img.icons8.com/dusk/64/000000/php-logo.png" />
                  </Typography>
                  <H4>PHP</H4>
                </DivCard>
              </Grid>
              <Grid lg={3} xs={12} sm={12} md={3}>
                <DivCard className="green">
                  <Typography variant="h3" align="center">
                    <img
                      src="https://img.icons8.com/color/48/000000/nodejs.png"
                      style={{ width: "60px" }}
                    />
                  </Typography>

                  <H4>NodeJS</H4>
                </DivCard>
              </Grid>
              <Grid lg={3} xs={12} sm={12} md={3}>
                <DivCard className="purple">
                  <Typography variant="h3" align="center">
                    <img src="https://img.icons8.com/dusk/64/000000/swift.png" />
                  </Typography>
                  <H4>Swift</H4>
                </DivCard>
              </Grid>
            </Grid>
          </Grid>
          <Grid lg={6} xs={12} sm={12} md={6}  xl={6}>
            <Typography variant="h3" align="center">
              We Believe In Human Potential
            </Typography>
            <DivButton>
              <Button>Try now</Button>
            </DivButton>
          </Grid>
        </Grid>
      </Container>
    </Div>
  );
}
