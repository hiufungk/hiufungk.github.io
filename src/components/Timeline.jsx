import React, {Component} from 'react';

import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import vbahkLogo from "../assets/vbahk_logo.jpg";
import WorkExpCard from "./WorkExpCard";

import "./css/Timeline2.css"
import ingenuityLogo from "../assets/ingenuity_logo.png";
import hostlinkLogo from "../assets/hostlink_logo.png";
import uniLogo from "../assets/uofa_logo2.png"
import mcmathLogo from "../assets/mcmath_logo.jpg"
import sjcLogo from "../assets/sjc_logo.jpg"

import Typography from "@material-ui/core/Typography/Typography";
import {HashLink} from "react-router-hash-link";

// DO NOT IMPORT THIS
// This is the original css for the timeline, we made a copy
// and modified it as css/Timeline2.css
// import 'react-vertical-timeline-component/style.min.css';

class Timeline extends Component {

    getIngenuityDetail() {
        return (
            <Typography component="p">
                As the software developer there, I had to maintain and add features to the existing dynamic programming
                <HashLink to="/projects#hfold"> software </HashLink>. I also ran 1000+ experiments and tested programs on Compute Canada server clusters. This requires me to manage remote computing jobs and statistically analyze performance measures of the software.
            </Typography>
        );
    }

    getHostlinkDetail() {
        return (
            <Typography component="p">
                My main task is to participate in requirements engineering with the clients to build a professional website for them. I also provide basic customer service regarding installations and purchase decisions. During development, I performed alpha testing and inform the clients on the usage of their website.
            </Typography>
        );
    }

    getVbahkDetail() {
        return (
            <Typography component="p">
                This is my first summer job, where I had to process and handle documents for the daily running of the office. I also had to interact with the clients to resolve their concerns and inquiries.
            </Typography>
        );
    }

    render() {
        const iconBackgroundColour = "rgb(33, 150, 243)";
        return (
            <VerticalTimeline>
                <VerticalTimelineElement
                    date="2014 - present"
                    iconStyle={{
                        background: iconBackgroundColour,
                        color: '#fff'
                    }}
                    icon={<SchoolIcon/>}
                >
                    <WorkExpCard
                        logo={uniLogo}
                        companyName={"University of Alberta"}
                        link={"https://www.ualberta.ca/computing-science/"}
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="2017 May - 2018 April"
                    iconStyle={{
                        background: iconBackgroundColour,
                        color: '#fff'
                    }}
                    icon={<WorkIcon/>}
                >
                    <WorkExpCard
                        logo={ingenuityLogo}
                        companyName={"Ingenuity Lab"}
                        jobTitle={"Research Assistant/Software Developer"}
                        link={"https://www.linkedin.com/company/ingenuity-lab/about/"}
                        details={this.getIngenuityDetail}
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="2016 Summer"
                    iconStyle={{background: iconBackgroundColour, color: '#fff'}}
                    icon={<WorkIcon/>}
                >
                    <WorkExpCard
                        logo={hostlinkLogo}
                        companyName={"HostLink (HK)"}
                        jobTitle={"Project Coordinator"}
                        link={"https://www.hostlink.com.hk/en/"}
                        details={this.getHostlinkDetail}
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="2015 Summer"
                    iconStyle={{background: iconBackgroundColour, color: '#fff'}}
                    icon={<WorkIcon/>}
                >
                    <WorkExpCard
                        logo={vbahkLogo}
                        companyName={"Volleyball Association of Hong Kong"}
                        jobTitle={"Office"}
                        link={"http://www.vbahk.org.hk/"}
                        details={this.getVbahkDetail}
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="2013 - 2014"
                    iconStyle={{
                        background: iconBackgroundColour,
                        color: '#fff'
                    }}
                    icon={<SchoolIcon/>}
                >
                    <WorkExpCard
                        logo={mcmathLogo}
                        companyName={"Ecole Secondaire R.A. McMath Secondary School"}
                        link={"https://mcmath.sd38.bc.ca/"}
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="2008 - 2013"
                    iconStyle={{
                        background: iconBackgroundColour,
                        color: '#fff'
                    }}
                    icon={<SchoolIcon/>}
                >
                    <WorkExpCard
                        logo={sjcLogo}
                        companyName={"St. Joseph's College"}
                        link={"https://www.sjc.edu.hk/"}
                    />
                </VerticalTimelineElement>
            </VerticalTimeline>
        );
    }
}


export default Timeline;