import React from 'react'
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {
    BodyFooter,
    PageContent,
    Content,
    H6Content,
    PageList,
    PageListItem,
    H6Item,
    PageListItemIMG,
    IMGitem,
    PageListIMG,
    H6ItemIMG,
    PageContentIMG
} from "./styled-footer"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },


    }),
);
export default function Footer() {
    const classes = useStyles();
    return (
        <BodyFooter>
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={3}>
                        <PageContent>
                            <Content><H6Content>Pages</H6Content></Content>
                            <PageList>
                                <PageListItem>
                                    <H6Item href="https://stylemixthemes.com/masterstudy/distance-learning/about-us/"><span>About.us</span></H6Item>
                                </PageListItem>
                                <PageListItem>
                                    <H6Item href="https://stylemixthemes.com/masterstudy/distance-learning/contact-us/"><span>Contact.Us</span></H6Item>
                                </PageListItem>
                                <PageListItem>
                                    <H6Item href="https://stylemixthemes.com/masterstudy/distance-learning/courses/"><span>Courses</span></H6Item>
                                </PageListItem>
                                <PageListItem>
                                    <H6Item href="https://stylemixthemes.com/masterstudy/distance-learning/typography/"><span>Typography</span></H6Item>
                                </PageListItem>
                            </PageList>
                        </PageContent>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <PageContent>
                            <Content><H6Content>PRESS.LINKS</H6Content></Content>
                            <PageList>
                                <PageListItem>
                                    <H6Item href="https://stylemixthemes.com/masterstudy/distance-learning/blog/"><span>Blog</span></H6Item>
                                </PageListItem>
                                <PageListItem>
                                    <H6Item href="https://stylemixthemes.com/masterstudy/distance-learning/"><span>Home</span></H6Item>
                                </PageListItem>
                                <PageListItem>
                                    <H6Item href="https://stylemixthemes.com/masterstudy/distance-learning/shortcodes/"><span>Shortcodes</span></H6Item>
                                </PageListItem>
                                <PageListItem>
                                    <H6Item href="https://stylemixthemes.com/masterstudy/distance-learning/typography/"><span>Typography</span></H6Item>
                                </PageListItem>
                            </PageList>
                        </PageContent>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <PageContent>
                            <Content><H6Content>BROWSE</H6Content></Content>
                            <PageList>
                                <PageListItem>
                                    <H6Item href="https://stylemixthemes.com/masterstudy/distance-learning/blog/"><span>Membership.Billing</span></H6Item>
                                </PageListItem>
                                <PageListItem>
                                    <H6Item href="https://stylemixthemes.com/masterstudy/distance-learning/"><span>Membership.Cancel</span></H6Item>
                                </PageListItem>
                                <PageListItem>
                                    <H6Item href="https://stylemixthemes.com/masterstudy/distance-learning/shortcodes/"><span>Membership.Checkout</span></H6Item>
                                </PageListItem>
                                <PageListItem>
                                    <H6Item href="https://stylemixthemes.com/masterstudy/distance-learning/typography/"><span>Membership.Confirmation</span></H6Item>
                                </PageListItem>
                            </PageList>
                        </PageContent>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <PageContentIMG>
                            <Content><H6Content>SOCIAL.NETWORK</H6Content></Content>
                            <PageListIMG>
                                <PageListItemIMG>
                                    <IMGitem><H6ItemIMG href="https://www.facebook.com/"><FacebookIcon /></H6ItemIMG></IMGitem>
                                </PageListItemIMG>
                                <PageListItemIMG>
                                    <IMGitem><H6ItemIMG href="https://www.twitter.com/"><TwitterIcon /></H6ItemIMG></IMGitem>
                                </PageListItemIMG>
                                <PageListItemIMG>
                                    <IMGitem><H6ItemIMG href="https://www.instagram.com/"><InstagramIcon /></H6ItemIMG></IMGitem>
                                </PageListItemIMG>
                                <PageListItemIMG>
                                    <IMGitem><H6ItemIMG href="https://www.youtube.com/"><YouTubeIcon /></H6ItemIMG></IMGitem>
                                </PageListItemIMG>
                            </PageListIMG>
                        </PageContentIMG>
                    </Grid>
                </Grid>
            </Container>
        </BodyFooter>

    )
}
