import React, {Component} from 'react';
import TopProfile from "../components/TopProfile"
import Tabs from "@material-ui/core/Tabs/Tabs";
import TabContainer from "react-bootstrap/TabContainer";
import Tab from "@material-ui/core/Tab/Tab";
import AppBar from "@material-ui/core/AppBar/AppBar";
import withStyles from "@material-ui/core/es/styles/withStyles";
import ProfileCard from "../components/ProfileCard";
import WorkExpCard from "../components/WorkExpCard";

import unilogo from "../assets/uofa_logo2.png"

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

    componentDidMount() {
        this.setState({
            hash:  window.location.hash,
            tabValue: window.location.hash === "#work-exp" ? 1 : 0
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.hash !== window.location.hash) {
            this.setState({
                hash:  window.location.hash,
                tabValue: window.location.hash === "#work-exp" ? 1 : 0
            });
        }
    }

    render() {
        const {classes} = this.props;
        const {tabValue} = this.state;
        return (
            <div>
                <TopProfile/>
                <div className={classes.root} >
                    <AppBar position="static">
                        <Tabs value={tabValue} onChange={this.handleChange}>
                            <Tab label="About Me" id="about-me"/>
                            <Tab label="Work Experience" id="work-exp"/>
                        </Tabs>
                    </AppBar>
                    {tabValue === 0 &&
                        <TabContainer>
                            <WorkExpCard
                                logo={unilogo}
                                companyName={"Ingenuity Lab"}
                                jobTitle={"Research Assistant/Software Developer"}
                                link={"https://www.linkedin.com/company/ingenuity-lab/about/"}
                            />
                            ===============
                            <ProfileCard/>
                        </TabContainer>
                    }
                    {tabValue === 1 &&
                        <TabContainer>
                            aaa
                            <WorkExpCard
                                logo={unilogo}
                                companyName={"Ingenuity Lab"}
                                jobTitle={"Research Assistant/Software Developer"}
                                link={"https://www.linkedin.com/company/ingenuity-lab/about/"}
                            />
                            <WorkExpCard
                                logo={unilogo}
                                companyName={"Ingenuity Lab"}
                                jobTitle={"Research Assistant/Software Developer"}
                                link={"https://www.linkedin.com/company/ingenuity-lab/about/"}
                            />
                            <WorkExpCard
                                logo={unilogo}
                                companyName={"Ingenuity Lab"}
                                jobTitle={"Research Assistant/Software Developer"}
                                link={"https://www.linkedin.com/company/ingenuity-lab/about/"}
                            />
                        </TabContainer>
                    }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);