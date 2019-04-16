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
            isDesktop = !this.isMobile();
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                <ExpansionPanel defaultExpanded={isDesktop}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>About Me</Typography>
                    </ExpansionPanelSummary>
                    <Divider/>
                    <ExpansionPanelDetails>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </Typography>
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
                            <Chip label={"Python"} color="secondary" className={classes.chip}/>
                            <Chip label={"Java"} color="secondary" className={classes.chip}/>
                            <Chip label={"C++"} color="secondary" className={classes.chip}/>
                            <Chip label={"JavaScript"} color="secondary" className={classes.chip}/>
                            <Chip label={"Excel VBA"} color="secondary" className={classes.chip}/>
                        </Grid>
                        <Grid
                            className={classes.row}
                            container
                            spacing={16}
                            alignItems={"flex-start"}
                            direction={'row'}
                            justify={"flex-start"}
                        >
                            <Chip label={"Web"} color="secondary" className={classes.chip}/>
                            <Chip label={"React"} color="secondary" className={classes.chip}/>
                            <Chip label={"Android"} color="secondary" className={classes.chip}/>
                            <Chip label={"Google Maps"} color="secondary" className={classes.chip}/>
                            <Chip label={"SQL"} color="secondary" className={classes.chip}/>
                            <Chip label={"Object Relational Mapping"} color="secondary" className={classes.chip}/>
                            <Chip label={"Django"} color="secondary" className={classes.chip}/>
                        </Grid>
                        <Grid
                            className={classes.row}
                            container
                            spacing={16}
                            alignItems={"flex-start"}
                            direction={'row'}
                            justify={"flex-start"}
                        >
                            <Chip label={"Machine Learning"} color="secondary" className={classes.chip}/>
                            <Chip label={"Reinforcement Learning"} color="secondary" className={classes.chip}/>
                            <Chip label={"Dynamic Programming"} color="secondary" className={classes.chip}/>
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
                            <Chip label={"Continuous Integration"} color="secondary" className={classes.chip}/>
                            <Chip label={"Agile"} color="secondary" className={classes.chip}/>
                            <Chip label={"Test Driven Development"} color="secondary" className={classes.chip}/>
                            <Chip label={"Poker Planning"} color="secondary" className={classes.chip}/>
                            <Chip label={"Sprint Cycles"} color="secondary" className={classes.chip}/>
                            <Chip label={"Client Interaction"} color="secondary" className={classes.chip}/>
                        </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel defaultExpanded={isDesktop}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Languages</Typography>
                    </ExpansionPanelSummary>
                    <Divider/>
                    <ExpansionPanelDetails>
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