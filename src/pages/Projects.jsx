import React, {Component} from 'react';
import ProjectCard from "../components/ProjectCard";
import * as consts from "../constants.js";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    row: {
        margin: theme.spacing.unit,
    }
});

class Projects extends Component {

    render() {
        const {classes} = this.props;
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
                    tags={consts.GITFRIENDS_INFO.tags}
                />

                <ProjectCard
                    title={consts.PAPER_402_INFO.title}
                    description={consts.PAPER_402_INFO.description}
                    githubLink={consts.PAPER_402_INFO.githubLink}
                    source={consts.PAPER_402_INFO.images}
                    tags={consts.PAPER_402_INFO.tags}
                    paperLink={consts.PAPER_402_INFO.paperLink}
                />

                <ProjectCard
                    title={consts.OUTDOORS_INFO.title}
                    description={consts.OUTDOORS_INFO.description}
                    demoLink={consts.OUTDOORS_INFO.demoLink}
                    source={consts.OUTDOORS_INFO.images}
                    tags={consts.OUTDOORS_INFO.tags}
                    isPrivate
                />

                <ProjectCard
                    title={consts.MEMORYWAVE_INFO.title}
                    description={consts.MEMORYWAVE_INFO.description}
                    githubLink={consts.MEMORYWAVE_INFO.githubLink}
                    source={consts.MEMORYWAVE_INFO.images}
                    tags={consts.MEMORYWAVE_INFO.tags}
                />

                <ProjectCard
                    title={consts.BLACK_FRIDAY_INFO.title}
                    description={consts.BLACK_FRIDAY_INFO.description}
                    githubLink={consts.BLACK_FRIDAY_INFO.githubLink}
                    source={consts.BLACK_FRIDAY_INFO.images}
                    tags={consts.BLACK_FRIDAY_INFO.tags}
                    paperLink={consts.BLACK_FRIDAY_INFO.paperLink}
                />

                <ProjectCard
                    title={consts.HFOLD_INFO.title}
                    description={consts.HFOLD_INFO.description}
                    githubLink={consts.HFOLD_INFO.githubLink}
                    source={consts.HFOLD_INFO.images}
                    tags={consts.HFOLD_INFO.tags}
                />

                <ProjectCard
                    title={consts.FEELTRIP_INFO.title}
                    description={consts.FEELTRIP_INFO.description}
                    githubLink={consts.FEELTRIP_INFO.githubLink}
                    demoLink={consts.FEELTRIP_INFO.demoLink}
                    source={consts.FEELTRIP_INFO.images}
                    tags={consts.FEELTRIP_INFO.tags}
                />
            </Grid>

        );
    }
}

export default withStyles(styles, {withTheme: true})(Projects);