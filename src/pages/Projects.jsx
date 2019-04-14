import React, {Component} from 'react';
import ProjectCard from "../components/ProjectCard";
import * as consts from "../constants.js";
import Grid from "@material-ui/core/Grid/Grid";

class Projects extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid
                container
                spacing={8}
                xs={12}
                direction="row"
                justify="space-evenly"
            >
                <ProjectCard
                    title={consts.GITFRIENDS_INFO.title}
                    description={consts.GITFRIENDS_INFO.description}
                    demoLink={consts.GITFRIENDS_INFO.demoLink}
                    githubLink={consts.GITFRIENDS_INFO.githubLink}
                    source={consts.GITFRIENDS_INFO.images}
                    chips={["aaa", "bbb"]}
                />

                <ProjectCard
                    title={consts.OUTDOORS_INFO.title}
                    description={consts.OUTDOORS_INFO.description}
                    demoLink={consts.OUTDOORS_INFO.demoLink}
                    source={consts.OUTDOORS_INFO.images}
                    isPrivate
                />

                <ProjectCard
                    title={consts.OUTDOORS_INFO.title}
                    description={consts.OUTDOORS_INFO.description}
                    demoLink={consts.OUTDOORS_INFO.demoLink}
                    source={consts.OUTDOORS_INFO.images}
                    isPrivate
                />

                <ProjectCard
                    title={consts.OUTDOORS_INFO.title}
                    description={consts.OUTDOORS_INFO.description}
                    demoLink={consts.OUTDOORS_INFO.demoLink}
                    source={consts.OUTDOORS_INFO.images}
                    isPrivate
                />
            </Grid>

        );
    }
}

export default Projects;