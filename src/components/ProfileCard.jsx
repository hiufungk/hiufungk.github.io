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

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit,
    }

});

class ProfileCard extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                <ExpansionPanel defaultExpanded>
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
                <ExpansionPanel defaultExpanded>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Skills</Typography>
                    </ExpansionPanelSummary>
                    <Divider/>
                    <ExpansionPanelDetails>
                        <Chip label={"aaaaaaaaaaaaaaaaaaa"} color="secondary" className={classes.chip}/>
                        <Chip label={"aaaaaaaaaaaaaaaaaaa"} color="secondary" className={classes.chip}/>
                        <Chip label={"aaaaaaaaaaaaaaaaaaa"} color="secondary" className={classes.chip}/>
                        <Chip label={"aaaaaaaaaaaaaaaaaaa"} color="secondary" className={classes.chip}/>
                        <Chip label={"aaaaaaaaaaaaaaaaaaa"} color="secondary" className={classes.chip}/>
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