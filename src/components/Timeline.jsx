import React, {Component} from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import vbahkLogo from "../assets/vbahk_logo.jpg";
import WorkExpCard from "./WorkExpCard";

import "./css/timeline.css"

class Timeline extends Component {

    render() {
        return (

            <VerticalTimeline>
                <div className="aabcd">
                <VerticalTimelineElement
                    // className="vertical-timeline-element--education"
                    // date="2011 - present"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<ExpandMoreIcon/>}
                >
                    <div className="left-card-date">
                        aaaaaaaaaaaaa
                    </div>
                    <WorkExpCard
                        logo={vbahkLogo}
                        companyName={"aVolleyball Association of Hong Kong"}
                        jobTitle={"Research Assistant/Software Developer"}
                        link={"https://www.linkedin.com/company/ingenuity-lab/about/"}
                    />
                </VerticalTimelineElement>
                </div>
                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    // date="2010 - 2011"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<ExpandMoreIcon/>}
                >
                    <span className="right-card-date">
                        bbbzasds
                    </span>
                    <WorkExpCard
                        logo={vbahkLogo}
                        companyName={"Volleyball Association of Hong Kong"}
                        jobTitle={"Research Assistant/Software Developer"}
                        link={"https://www.linkedin.com/company/ingenuity-lab/about/"}
                    />
                </VerticalTimelineElement>
                {/*<VerticalTimelineElement*/}
                    {/*className="vertical-timeline-element--work"*/}
                    {/*date="2008 - 2010"*/}
                    {/*iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}*/}
                    {/*icon={<ExpandMoreIcon/>}*/}
                {/*>*/}
                    {/*<WorkExpCard*/}
                        {/*logo={vbahkLogo}*/}
                        {/*companyName={"Volleyball Association of Hong Kong"}*/}
                        {/*jobTitle={"Research Assistant/Software Developer"}*/}
                        {/*link={"https://www.linkedin.com/company/ingenuity-lab/about/"}*/}
                    {/*/>*/}
                {/*</VerticalTimelineElement>*/}
                {/*<VerticalTimelineElement*/}
                    {/*className="vertical-timeline-element--work"*/}
                    {/*date="2006 - 2008"*/}
                    {/*iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}*/}
                    {/*icon={<ExpandMoreIcon/>}*/}
                {/*>*/}
                    {/*<WorkExpCard*/}
                        {/*logo={vbahkLogo}*/}
                        {/*companyName={"Volleyball Association of Hong Kong"}*/}
                        {/*jobTitle={"Research Assistant/Software Developer"}*/}
                        {/*link={"https://www.linkedin.com/company/ingenuity-lab/about/"}*/}
                    {/*/>*/}
                {/*</VerticalTimelineElement>*/}
            </VerticalTimeline>
        );
    }
}


export default Timeline;