import React, {Component} from 'react';
import ProjectCard from "../components/ProjectCard";
import * as consts from "../constants.js";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar/Avatar";
import reactLogo from "../assets/logo/React.js_logo-512.png";
import Chip from "@material-ui/core/Chip/Chip";
import djangoLogo from "../assets/logo/django-logo.png";
import travisLogo from "../assets/logo/travisLogo.png";
import cppLogo from "../assets/logo/C++-01.png";
import androidLogo from "../assets/logo/android-logo.png";
import googleMapLogo
    from "../assets/logo/google-maps-png-google-maps-icon-1600.png";
import cSharpLogo from "../assets/logo/c_sharp.jpg"
import unityLogo from "../assets/logo/unity.png"

const styles = theme => ({
    row: {
        margin: theme.spacing.unit,
    },
    chip: {
        margin: theme.spacing.unit,
    },
});

class Projects extends Component {

    render() {
        const {classes} = this.props;
        const gitFriendsTags = [
            <Chip label={"React"} color="secondary" variant="outlined" className={classes.chip} avatar={<Avatar><img src={reactLogo} alt="React"/></Avatar>}/>,
            <Chip label={"Django"} color="secondary" variant="outlined" className={classes.chip} avatar={<Avatar><img src={djangoLogo} alt="Django"/></Avatar>}/>,
            <Chip label={"Test Driven Development"} className={classes.chip} avatar={<Avatar>TDD</Avatar>}/>,
            <Chip label={"Continuous Integration"} className={classes.chip} avatar={<Avatar><img src={travisLogo} alt="Travis CI"/></Avatar>}/>
        ],
        paper402Tags = [
            <Chip label={"Software Quality"} className={classes.chip}/>,
            <Chip label={"Testing"} className={classes.chip}/>
        ],
        outdoorsTags = [
            <Chip label={"React"} color="secondary" variant="outlined" className={classes.chip} avatar={<Avatar><img src={reactLogo} alt="React"/></Avatar>}/>,
            <Chip label={"Django"} color="secondary" variant="outlined" className={classes.chip} avatar={<Avatar><img src={djangoLogo} alt="Django"/></Avatar>}/>,
            <Chip label={"Continuous Integration"} className={classes.chip} avatar={<Avatar><img src={travisLogo} alt="Travis CI"/></Avatar>}/>
        ],
        memorywaveTags = [
            <Chip label={"C#"} color="primary" variant="outlined" className={classes.chip} avatar={<Avatar className={classes.mainAvatar}><img src={cSharpLogo} alt="C#"/> </Avatar>}/>,
            <Chip label={"Unity"} color="secondary" variant="outlined" className={classes.chip} avatar={<Avatar className={classes.mainAvatar}><img src={unityLogo} alt="Unity"/> </Avatar>}/>
        ],
        blackFridayTags = [
            <Chip label={"Machine Learning"} variant="outlined" className={classes.chip} avatar={<Avatar>ML</Avatar>}/>
        ],
        hfoldTags = [
            <Chip label={"C++"} color="primary" variant="outlined" className={classes.chip} avatar={<Avatar className={classes.mainAvatar}><img src={cppLogo} alt="C++"/> </Avatar>}/>,
            <Chip label={"Dynamic Programming"} variant="outlined" className={classes.chip} avatar={<Avatar>DP</Avatar>}/>
        ],
        feelTripTags = [
            <Chip label={"Android"} color="secondary" variant="outlined" className={classes.chip} avatar={<Avatar><img src={androidLogo} alt="Android"/></Avatar>}/>,
            <Chip label={"Google Maps"} color="secondary" variant="outlined" className={classes.chip} avatar={<Avatar><img src={googleMapLogo} alt="Google Maps"/></Avatar>}/>
        ];
        return (
            <Grid
                className={classes.row}
                container
                spacing={8}
                item
                xs={12}
                direction="row"
                justify="space-evenly"
            >
                <ProjectCard
                    title={"TEST"}
                    description={consts.GITFRIENDS_INFO.description}
                    githubLink={consts.GITFRIENDS_INFO.githubLink}
                    tags={consts.GITFRIENDS_INFO.tags}
                />

                <ProjectCard
                    title={consts.GITFRIENDS_INFO.title}
                    description={consts.GITFRIENDS_INFO.description}
                    demoLink={consts.GITFRIENDS_INFO.demoLink}
                    githubLink={consts.GITFRIENDS_INFO.githubLink}
                    source={consts.GITFRIENDS_INFO.images}
                    tags={gitFriendsTags}
                />

                <ProjectCard
                    title={consts.PAPER_402_INFO.title}
                    description={consts.PAPER_402_INFO.description}
                    githubLink={consts.PAPER_402_INFO.githubLink}
                    source={consts.PAPER_402_INFO.images}
                    tags={paper402Tags}
                    paperLink={consts.PAPER_402_INFO.paperLink}
                />

                <ProjectCard
                    title={consts.OUTDOORS_INFO.title}
                    description={consts.OUTDOORS_INFO.description}
                    demoLink={consts.OUTDOORS_INFO.demoLink}
                    source={consts.OUTDOORS_INFO.images}
                    tags={outdoorsTags}
                    isPrivate
                />

                <ProjectCard
                    title={consts.MEMORYWAVE_INFO.title}
                    description={consts.MEMORYWAVE_INFO.description}
                    githubLink={consts.MEMORYWAVE_INFO.githubLink}
                    source={consts.MEMORYWAVE_INFO.images}
                    tags={memorywaveTags}
                />

                <ProjectCard
                    title={consts.BLACK_FRIDAY_INFO.title}
                    description={consts.BLACK_FRIDAY_INFO.description}
                    githubLink={consts.BLACK_FRIDAY_INFO.githubLink}
                    source={consts.BLACK_FRIDAY_INFO.images}
                    tags={blackFridayTags}
                    paperLink={consts.BLACK_FRIDAY_INFO.paperLink}
                />

                <ProjectCard
                    id="hfold"
                    title={consts.HFOLD_INFO.title}
                    description={consts.HFOLD_INFO.description}
                    githubLink={consts.HFOLD_INFO.githubLink}
                    source={consts.HFOLD_INFO.images}
                    tags={hfoldTags}
                />

                <ProjectCard
                    title={consts.FEELTRIP_INFO.title}
                    description={consts.FEELTRIP_INFO.description}
                    githubLink={consts.FEELTRIP_INFO.githubLink}
                    demoLink={consts.FEELTRIP_INFO.demoLink}
                    source={consts.FEELTRIP_INFO.images}
                    tags={feelTripTags}
                />
            </Grid>

        );
    }
}

export default withStyles(styles, {withTheme: true})(Projects);