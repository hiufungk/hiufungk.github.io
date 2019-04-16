import React, {Component} from 'react';

import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import vbahkLogo from "../assets/vbahk_logo.jpg";
import WorkExpCard from "./WorkExpCard";

import "./css/timeline2.css"
// import "./css/timeline.css"
import ingenuityLogo from "../assets/ingenuity_logo.png";
import hostlinkLogo from "../assets/hostlink_logo.png";
import uniLogo from "../assets/uofa_logo2.png"
import mcmathLogo from "../assets/mcmath_logo.jpg"
import sjcLogo from "../assets/sjc_logo.jpg"

class Timeline extends Component {

    render() {
        return (

            <VerticalTimeline>
                <div className="aabcd">
                    <VerticalTimelineElement
                        // className="vertical-timeline-element--education"
                        date="2011 - present"
                        iconStyle={{
                            background: 'rgb(33, 150, 243)',
                            color: '#fff'
                        }}
                        icon={<WorkIcon/>}
                    >
                        {/*<div className="left-card-date">*/}
                            {/*aaaaaaaaaaaaa*/}
                        {/*</div>*/}
                        <WorkExpCard
                            logo={ingenuityLogo}
                            companyName={"Ingenuity Lab"}
                            jobTitle={"Research Assistant/Software Developer"}
                            link={"https://www.linkedin.com/company/ingenuity-lab/about/"}
                        />
                    </VerticalTimelineElement>
                </div>
                <VerticalTimelineElement
                    // className="vertical-timeline-element--education"
                    date="2011 - present"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff'
                    }}
                    icon={<SchoolIcon/>}
                >
                    <WorkExpCard
                        logo={uniLogo}
                        companyName={"University of Alberta"}
                        link={"https://www.linkedin.com/company/ingenuity-lab/about/"}
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<WorkIcon/>}
                >
                    {/*<span className="right-card-date">*/}
                        {/*bbbzasds*/}
                    {/*</span>*/}
                    <WorkExpCard
                        logo={hostlinkLogo}
                        companyName={"HostLink (HK)"}
                        jobTitle={"Research Assistant/Software Developer"}
                        link={"https://www.linkedin.com/company/ingenuity-lab/about/"}
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    // className="vertical-timeline-element--education"
                    date="2011 - present"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff'
                    }}
                    icon={<SchoolIcon/>}
                >
                    <WorkExpCard
                        logo={mcmathLogo}
                        companyName={"Ecole Secondaire R.A. McMath Secondary School"}
                        link={"https://www.linkedin.com/company/ingenuity-lab/about/"}
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    // className="vertical-timeline-element--education"
                    // date="2011 - present"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<WorkIcon/>}
                >
                    <div className="left-card-date">
                        aaaaaaaaaaaaa
                    </div>
                    <WorkExpCard
                        logo={vbahkLogo}
                        companyName={"Volleyball Association of Hong Kong"}
                        jobTitle={"Research Assistant/Software Developer"}
                        link={"https://www.linkedin.com/company/ingenuity-lab/about/"}
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    // className="vertical-timeline-element--education"
                    date="2011 - present"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff'
                    }}
                    icon={<SchoolIcon/>}
                >
                    <WorkExpCard
                        logo={sjcLogo}
                        companyName={"St. Joseph's College"}
                        link={"https://www.linkedin.com/company/ingenuity-lab/about/"}
                    />
                </VerticalTimelineElement>
            </VerticalTimeline>
        );
    }
}


export default Timeline;