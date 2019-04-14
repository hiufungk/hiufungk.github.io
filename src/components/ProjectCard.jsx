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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
});

class ProjectCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
        };
        this.getGithubButton = this.getGithubButton.bind(this);
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
                <IconButton onclick="window.location.href='b.php'">
                    <i className="fab fa-github"/>
                </IconButton>
            </a>
        );
    }

    render() {
        const {classes, theme, source} = this.props;
        const {activeStep} = this.state;
        const maxSteps = source.length;

        return (
            <div className={classes.root}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.title}
                    </Typography>
                    <Typography component="p">
                        {this.props.description}
                    </Typography>
                </CardContent>
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
                <CardActions>
                    {this.getGithubButton()}
                    <a
                        href={this.props.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="small" color="primary">
                            Video Demo
                        </Button>
                    </a>
                </CardActions>
            </div>
        );
    }
}

ProjectCard.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
    source: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
    githubLink: PropTypes.string,
    isPrivate: PropTypes.bool,
};

export default withStyles(styles, {withTheme: true})(ProjectCard);