import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Avatar from "@material-ui/core/Avatar/Avatar";
import { Phone, Email } from "@material-ui/icons";
import backgroundImage from "../assets/profile_background.jpg"
import profilePic from "../assets/profile.png"
import Grid from "@material-ui/core/Grid/Grid";

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing.unit * 2,
    },
    paper: {
        width: "80%",
        backgroundImage: "url("+backgroundImage+")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingLeft: "15%",
        paddingRight: "15%",
    },
    avatar: {
        display: "block",
        margin: "2% auto 2% auto",
        width: 90,
        height: 90,
    },
    chip: {
        margin: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2,
    }
});

class TopProfile extends Component {

    handleEmailClick() {
        let win = window.open("mailto: hiufungk@ualberta.ca");
        win.close();
    }

    handlePhoneClick() {
        let win = window.open("tel:+17807104524");
        win.close();
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Avatar alt="Kevin Chang" src={profilePic} className={classes.avatar} />
                     <Typography align="center" variant="h4" gutterBottom>
                        Kevin Chang
                    </Typography>
                    {/*<Typography align="center" variant="body1">*/}
                        {/*<img src={uofaLogo} alt="University of Alberta" height="80" width="80"></img>*/}
                    {/*</Typography>*/}
                    <Typography align="center" variant="body1" color="textSecondary" gutterBottom>
                        {/*<img src={uofaLogo} alt="University of Alberta" height="80" width="80"></img> */}
                        BSc with Specialization Computing Science – Software Practice
                    </Typography>
                    {/*<Typography variant="body1" gutterBottom>*/}
                        {/*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum*/}
                    {/*</Typography>*/}
                    <Grid
                        container
                        spacing={8}
                        item
                        xs={12}
                        direction="row"
                        justify="center"
                    >
                        <Chip
                            avatar={<Avatar><Phone /></Avatar>}
                            label="+1 (780) 710 - 4524"
                            className={classes.chip}
                            onClick={this.handlePhoneClick}
                            color="primary"
                        />
                        <Chip
                            avatar={<Avatar><Email /></Avatar>}
                            label="hiufungk@ualberta.ca"
                            onClick={this.handleEmailClick}
                            className={classes.chip}
                            color="primary"
                        />
                    </Grid>
                </Paper>
            </div>
        );
    }
}

TopProfile.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
};

export default withStyles(styles, {withTheme: true})(TopProfile);