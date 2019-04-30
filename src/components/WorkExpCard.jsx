import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar/Avatar";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";

const styles = theme => ({
    card: {
        // maxWidth: 345,
        // width: "80%",
        // marginTop: theme.spacing.unit * 2,
        // background: "transparent"
    },
    avatar: {
        display: "block",
        margin: "5% auto 0 auto",
        width: 90,
        height: 90,
        '& img:hover': {
            cursor: "pointer"
        }
    },
    ahref: {
        color: theme.palette.text.primary
    }
});

class WorkExpCard extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getDetails = this.getDetails.bind(this);
    }

    onClick() {
        window.open(this.props.link)
    }

    getTitle() {
        if(this.props.jobTitle) {
            return this.props.jobTitle;
        }
        return null;
    }

    componentDidMount() {
        document.documentElement.style.setProperty("--card-background-colour",
            this.props.theme.palette.background.paper);
    }

    getDetails() {
        if(this.props.details) {
            console.log("get details")
            return this.props.details();
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.card}>
                <Avatar src={this.props.logo} className={classes.avatar} onClick={this.onClick}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        <a
                            className={classes.ahref}
                            href={this.props.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {this.props.companyName}
                        </a>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        {this.getTitle()}
                    </Typography>
                    {this.getDetails()}
                </CardContent>
            </Card>
        );
    }
}

WorkExpCard.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
    logo: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string,
    link: PropTypes.string.isRequired,
    details: PropTypes.func
};

export default withStyles(styles, {withTheme: true})(WorkExpCard);