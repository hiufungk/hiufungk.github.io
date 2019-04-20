import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Divider from "@material-ui/core/Divider/Divider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel/ExpansionPanel";
import ExpansionPanelSummary
    from "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetails
    from "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from "@material-ui/core/Avatar/Avatar";
import Flag from 'react-world-flags'
import Grid from "@material-ui/core/Grid/Grid";

import androidLogo from "../assets/logo/android-logo.png"
import cppLogo from "../assets/logo/C++-01.png"
import djangoLogo from "../assets/logo/django-logo.png"
import excelLogo from "../assets/logo/excel-logo.png"
import googleMapLogo from "../assets/logo/google-maps-png-google-maps-icon-1600.png"
import javaLogo from "../assets/logo/java-logo.png"
import jsLogo from "../assets/logo/JavaScript-logo.png"
import pythonLogo from "../assets/logo/python-logo.png"
import reactLogo from "../assets/logo/React.js_logo-512.png"
import travisLogo from "../assets/logo/travisLogo.png"
import gitLogo from "../assets/logo/git.png"


const styles = theme => ({
    chip: {
        margin: theme.spacing.unit,
    },
    row: {
        margin: theme.spacing.unit,
    }
});

class ProfileCard extends Component {

    isMobile() {
       if(window.innerWidth <= 800 && window.innerHeight <= 800) {
         return true;
       } else {
         return false;
       }
    }

    render() {
        const {classes} = this.props,
            isDesktop = !this.isMobile(),
            aboutMeText1 = "I am a recent graduate from the University of Alberta looking forward to be a full stack software developer. I have developed multiple software in various team sizes and experienced in Agile practices such as scrum, poker planning and sprint cycles. I have also led the team developed a project that requires RESTful communication with other teams using test-driven development.",
            aboutMeText2 = "I am passionate in creating quality software with best practices and good architecture design. Aside from that I enjoys cooking and playing volleyball on my free time as well.";
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                <ExpansionPanel defaultExpanded={isDesktop}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>About Me</Typography>
                    </ExpansionPanelSummary>
                    <Divider/>
                    <ExpansionPanelDetails>
                        <Grid
                            className={classes.row}
                            container
                            spacing={16}
                            alignItems={"flex-start"}
                            direction={'column'}
                            justify={"flex-start"}
                        >
                            <Typography>
                                {aboutMeText1}
                            </Typography>
                            <Typography>
                                {aboutMeText2}
                            </Typography>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel defaultExpanded={isDesktop}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Languages</Typography>
                    </ExpansionPanelSummary>
                    <Divider/>
                    <ExpansionPanelDetails>
                        <Grid
                            className={classes.row}
                            container
                            spacing={16}
                            alignItems={"flex-start"}
                            direction={'row'}
                            justify={"flex-start"}
                        >
                            <Chip
                                avatar={<Avatar><Flag code="GB"/></Avatar>}
                                label={"English"}
                                className={classes.chip}
                            />
                            <Chip
                                avatar={<Avatar><Flag code="HK"/></Avatar>}
                                label={"Cantonese"}
                                className={classes.chip}
                            />
                            <Chip
                                avatar={<Avatar><Flag code="CN"/></Avatar>}
                                label={"Mandarin"}
                                className={classes.chip}
                            />
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel defaultExpanded={isDesktop}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Skills</Typography>
                    </ExpansionPanelSummary>
                    <Divider/>
                    <ExpansionPanelDetails>
                        <Grid
                            container
                            spacing={16}
                            alignItems={"flex-start"}
                            direction={'column'}
                            justify={"flex-start"}
                        >
                        <Grid
                            className={classes.row}
                            container
                            spacing={16}
                            alignItems={"flex-start"}
                            direction={'row'}
                            justify={"flex-start"}
                        >
                            <Chip label={"Python"} color="secondary" className={classes.chip} avatar={<Avatar><img src={pythonLogo} alt="Python"/></Avatar>}/>
                            <Chip label={"Java"} color="secondary" className={classes.chip} avatar={<Avatar><img src={javaLogo} alt="Java"/></Avatar>}/>
                            <Chip label={"C++"} color="secondary" className={classes.chip} avatar={<Avatar><img src={cppLogo} alt="C++"/> </Avatar>}/>
                            <Chip label={"JavaScript"} color="secondary" className={classes.chip} avatar={<Avatar><img src={jsLogo} alt="JavaScript"/></Avatar>}/>
                            <Chip label={"Excel VBA"} color="secondary" className={classes.chip} avatar={<Avatar><img src={excelLogo} alt="Excel VBA"/></Avatar>}/>
                        </Grid>
                        <Grid
                            className={classes.row}
                            container
                            spacing={16}
                            alignItems={"flex-start"}
                            direction={'row'}
                            justify={"flex-start"}
                        >
                            <Chip label={"Web"} color="secondary" className={classes.chip} variant="outlined"/>
                            <Chip label={"React"} color="secondary" className={classes.chip} variant="outlined" avatar={<Avatar><img src={reactLogo} alt="React"/></Avatar>}/>
                            <Chip label={"Android"} color="secondary" className={classes.chip} variant="outlined" avatar={<Avatar><img src={androidLogo} alt="Android"/></Avatar>}/>
                            <Chip label={"Google Maps"} color="secondary" className={classes.chip} variant="outlined" avatar={<Avatar><img src={googleMapLogo} alt="Google Maps"/></Avatar>}/>
                            <Chip label={"SQL"} color="secondary" className={classes.chip} variant="outlined" />
                            <Chip label={"Object Relational Mapping"} color="secondary" className={classes.chip} variant="outlined"/>
                            <Chip label={"Django"} color="secondary" className={classes.chip} variant="outlined" avatar={<Avatar><img src={djangoLogo} alt="Django"/></Avatar>}/>
                            <Chip label={"Git"} color="secondary" className={classes.chip} variant="outlined" avatar={<Avatar><img src={gitLogo} alt="GitHub"/></Avatar>}/>
                        </Grid>
                        <Grid
                            className={classes.row}
                            container
                            spacing={16}
                            alignItems={"flex-start"}
                            direction={'row'}
                            justify={"flex-start"}
                        >
                            <Chip label={"Machine Learning"} color="secondary" className={classes.chip} avatar={<Avatar>ML</Avatar>}/>
                            <Chip label={"Reinforcement Learning"} color="secondary" className={classes.chip} avatar={<Avatar>RL</Avatar>}/>
                            <Chip label={"Dynamic Programming"} color="secondary" className={classes.chip} avatar={<Avatar>DP</Avatar>}/>
                            <Chip label={"Object Oriented Design"} color="secondary" className={classes.chip}/>
                            <Chip label={"Algorithm Design"} color="secondary" className={classes.chip}/>
                        </Grid>
                        <Grid
                            className={classes.row}
                            container
                            spacing={16}
                            alignItems={"flex-start"}
                            direction={'row'}
                            justify={"flex-start"}
                        >
                            <Chip label={"Continuous Integration"} color="secondary" className={classes.chip} avatar={<Avatar><img src={travisLogo} alt="Travis CI"/></Avatar>}/>
                            <Chip label={"Agile"} color="secondary" className={classes.chip}/>
                            <Chip label={"Test Driven Development"} color="secondary" className={classes.chip} avatar={<Avatar>TDD</Avatar>}/>
                            <Chip label={"Poker Planning"} color="secondary" className={classes.chip}/>
                            <Chip label={"Sprint Cycles"} color="secondary" className={classes.chip}/>
                            <Chip label={"Client Interaction"} color="secondary" className={classes.chip}/>
                        </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                </Paper>
            </div>
        );
    }
}

ProfileCard.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
};

export default withStyles(styles, {withTheme: true})(ProfileCard);