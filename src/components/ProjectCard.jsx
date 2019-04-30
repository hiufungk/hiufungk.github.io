import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import CardActions from "@material-ui/core/CardActions/CardActions";
import IconButton from "@material-ui/core/IconButton/IconButton";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

import "./css/TopNavBar.css"
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import CircularProgress
    from "@material-ui/core/CircularProgress/CircularProgress";
import Grid from "@material-ui/core/Grid/Grid";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
    root: {
        marginTop: "4%",
        maxWidth: 400,
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
    progress: {
        margin: theme.spacing.unit * 2,
    }
});

class ProjectCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
        };
        this.getGithubButton = this.getGithubButton.bind(this);
        this.getChips = this.getChips.bind(this);
    }


    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({activeStep});
    };

    getGithubButton() {
        if (this.props.isPrivate) {
            return (
                <Tooltip title="Private Repository">
                    <IconButton >
                        <i className="fab fa-github"/>
                    </IconButton>
                </Tooltip>
            );
        }
        return (
            <a
                href={this.props.githubLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconButton>
                    <i className="fab fa-github"/>
                </IconButton>
            </a>
        );
    }

    getChips() {
        if (this.props.tags) {
            return (
                this.props.tags.map((value) => (
                        <Chip key={value} label={value} color="secondary"/>
                        ))
            );
        }
    }

    getImageCarousel(classes, theme, activeStep) {
        if(this.props.source) {
            const {source} = this.props;
            const maxSteps = source.length;
            return (
                <div>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={this.handleStepChange}
                        enableMouseEvents
                    >
                        {source.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <img className={classes.img} src={step.imgPath}
                                         alt={step.label}/>
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        className={classes.mobileStepper}
                        nextButton={
                            <Button size="small" onClick={this.handleNext}
                                    disabled={activeStep === maxSteps - 1}>
                                Next
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> :
                                    <KeyboardArrowRight/>}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={this.handleBack}
                                    disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? <KeyboardArrowRight/> :
                                    <KeyboardArrowLeft/>}
                                Back
                            </Button>
                        }
                    />
                </div>
            );
        }
        return (
            <Grid container justify="center">
                <CircularProgress className={classes.progress} />
            </Grid>
        );
    }

    getDemoButton() {
        if(this.props.demoLink) {
            return (
                <a
                    href={this.props.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button hidden={!this.props.demoLink} size="small" color="primary">
                        Video Demo
                    </Button>
                </a>
            );
        }
    }

    getPaperButton() {
        if(this.props.paperLink) {
            return (
                <a
                    href={this.props.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button hidden={!this.props.paperLink} size="small" color="primary">
                        View Paper
                    </Button>
                </a>
            );
        }
    }

    render() {
        const {classes, theme} = this.props;
        return (
            <Paper className={classes.root} id={this.props.id}>
                <CardHeader title={this.props.title} />
                <CardContent>
                    {/*<Typography gutterBottom variant="h5" component="h2">*/}
                        {/*{this.props.title}*/}
                    {/*</Typography>*/}
                    <Typography component="p">
                        {this.props.description}
                    </Typography>
                </CardContent>
                {this.getImageCarousel(classes, theme, this.state.activeStep)}
                <CardContent>
                <CardActions>
                    {this.getGithubButton()}
                    {this.getDemoButton()}
                    {this.getPaperButton()}
                </CardActions>
                <CardActions>
                    {/*{this.getChips()}*/}
                    <Grid
                        className={classes.row}
                        container
                        spacing={16}
                        alignItems={"flex-start"}
                        direction={'row'}
                        justify={"flex-start"}
                    >
                        {this.props.tags}
                    </Grid>
                </CardActions>
                </CardContent>
            </Paper>
        );
    }
}

ProjectCard.propTypes = {
    id: PropTypes.string,
    classes: PropTypes.object,
    theme: PropTypes.object,
    source: PropTypes.array,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
    paperLink: PropTypes.string,
    githubLink: PropTypes.string,
    isPrivate: PropTypes.bool,
    tags: PropTypes.array
};

export default withStyles(styles, {withTheme: true})(ProjectCard);