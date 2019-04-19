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

// DO NOT IMPORT THIS
// This is the original css for the timeline, we made a copy
// and modified it as css/Timeline2.css
// import 'react-vertical-timeline-component/style.min.css';

class Timeline extends Component {

    render() {
        const iconBackgroundColour = "rgb(33, 150, 243)";
        return (
            <VerticalTimeline>
                <VerticalTimelineElement
                    date="2015 - present"
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
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="2013 - 2015"
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
                    date="2015 Summer"
                    iconStyle={{background: iconBackgroundColour, color: '#fff'}}
                    icon={<WorkIcon/>}
                >
                    <WorkExpCard
                        logo={vbahkLogo}
                        companyName={"Volleyball Association of Hong Kong"}
                        jobTitle={"Office"}
                        link={"http://www.vbahk.org.hk/"}
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