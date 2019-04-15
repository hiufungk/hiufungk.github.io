import React, {Component} from 'react';
import TopProfile from "../components/TopProfile"
import Tabs from "@material-ui/core/Tabs/Tabs";
import TabContainer from "react-bootstrap/TabContainer";
import Tab from "@material-ui/core/Tab/Tab";
import AppBar from "@material-ui/core/AppBar/AppBar";
import withStyles from "@material-ui/core/es/styles/withStyles";
import ProfileCard from "../components/ProfileCard";

const styles = theme => ({
    root: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
        marginTop: theme.spacing.unit * 2,
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabValue: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({tabValue: value});
    };

    render() {
        const {classes} = this.props;
        const {tabValue} = this.state;
        return (
            <div>
                <TopProfile/>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs value={tabValue} onChange={this.handleChange}>
                            <Tab label="About Me"/>
                            <Tab label="Work Experience"/>
                        </Tabs>
                    </AppBar>
                    {tabValue === 0 && <TabContainer><ProfileCard/></TabContainer>}
                    {tabValue === 1 && <TabContainer>Item Two</TabContainer>}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);