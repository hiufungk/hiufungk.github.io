import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar/Avatar";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";

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
    }
});

class WorkExpCard extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.getTitle = this.getTitle.bind(this);
    }

    onClick() {
        window.open(this.props.link)
    }

    getTitle() {
        let title = this.props.companyName;
        if(this.props.jobTitle) {
            title +=  "-" + this.props.jobTitle
        }
        return (title);
    }

    componentDidMount() {
        document.documentElement.style.setProperty("--card-background-colour",
            this.props.theme.palette.background.paper);
    }

    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea onClick={this.onClick}>
                <Avatar src={this.props.logo} className={classes.avatar} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        {this.getTitle()}
                    </Typography>
                    <Typography component="p">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
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
};

export default withStyles(styles, {withTheme: true})(WorkExpCard);