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
                    title={consts.MEMORYWAVE_INFO.title}
                    description={consts.MEMORYWAVE_INFO.description}
                    githubLink={consts.MEMORYWAVE_INFO.githubLink}
                    source={consts.MEMORYWAVE_INFO.images}
                />

                <ProjectCard
                    title={consts.HFOLD_INFO.title}
                    description={consts.HFOLD_INFO.description}
                    githubLink={consts.HFOLD_INFO.githubLink}
                    source={consts.HFOLD_INFO.images}
                />

                <ProjectCard
                    title={consts.FEELTRIP_INFO.title}
                    description={consts.FEELTRIP_INFO.description}
                    githubLink={consts.FEELTRIP_INFO.githubLink}
                    demoLink={consts.FEELTRIP_INFO.demoLink}
                    source={consts.FEELTRIP_INFO.images}
                />
            </Grid>

        );
    }
}

export default Projects;