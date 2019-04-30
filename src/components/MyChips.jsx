import Avatar from "@material-ui/core/Avatar/Avatar";
import pythonLogo from "../assets/logo/python-logo.png";
import Chip from "@material-ui/core/Chip/Chip";
import React from "react";
import javaLogo from "../assets/logo/java-logo.png";
import cppLogo from "../assets/logo/C++-01.png";
import jsLogo from "../assets/logo/JavaScript-logo.png";
import excelLogo from "../assets/logo/excel-logo.png";
import reactLogo from "../assets/logo/React.js_logo-512.png";
import androidLogo from "../assets/logo/android-logo.png";
import googleMapLogo
    from "../assets/logo/google-maps-png-google-maps-icon-1600.png";
import djangoLogo from "../assets/logo/django-logo.png";
import gitLogo from "../assets/logo/git.png";
import Grid from "@material-ui/core/Grid/Grid";

export function getPythonChip(classes) {
    return <Chip label={"Python"} color="primary" variant="outlined" className={classes.chip2} avatar={<Avatar className={classes.mainAvatar}><img src={pythonLogo} alt="Python"/></Avatar>}/>;
}

export function getJavaChip(classes) {
    return <Chip label={"Java"} color="primary" variant="outlined" className={classes.chip} avatar={<Avatar className={classes.mainAvatar}><img src={javaLogo} alt="Java"/></Avatar>}/>;
}

export function getCppChip(classes) {
    return <Chip label={"C++"} color="primary" variant="outlined" className={classes.chip} avatar={<Avatar className={classes.mainAvatar}><img src={cppLogo} alt="C++"/> </Avatar>}/>
}

export function getJSChip(classes) {
    return <Chip label={"JavaScript"} color="primary" variant="outlined" className={classes.chip} avatar={<Avatar className={classes.mainAvatar}><img src={jsLogo} alt="JavaScript"/></Avatar>}/>
}

export function getExcelChip(classes) {
    return  <Chip label={"Excel VBA"} color="primary" variant="outlined" className={classes.chip} avatar={<Avatar className={classes.mainAvatar}><img src={excelLogo} alt="Excel VBA"/></Avatar>}/>
}


export function getWebChip(classes) {
    return <Chip label={"Web"} color="secondary" variant="outlined" className={classes.chip}/>
}

export function getReactChip(classes) {
    return <Chip label={"React"} color="secondary" variant="outlined" className={classes.chip} avatar={<Avatar><img src={reactLogo} alt="React"/></Avatar>}/>
}

export function getAndroidChip(classes) {
    return <Chip label={"Android"} color="secondary" variant="outlined" className={classes.chip} avatar={<Avatar><img src={androidLogo} alt="Android"/></Avatar>}/>
}

export function getGoogleMapsChip(classes) {
    return <Chip label={"Google Maps"} color="secondary" variant="outlined" className={classes.chip} avatar={<Avatar><img src={googleMapLogo} alt="Google Maps"/></Avatar>}/>
}

export function getSQLChip(classes) {
    return <Chip label={"SQL"} color="secondary" variant="outlined" className={classes.chip} />
}

export function getORMChip(classes) {
    return <Chip label={"Object Relational Mapping"} color="secondary" variant="outlined" className={classes.chip}/>
}

export function getDjangoChip(classes) {
    return <Chip label={"Django"} color="secondary" variant="outlined" className={classes.chip} avatar={<Avatar><img src={djangoLogo} alt="Django"/></Avatar>}/>
}

export function getGitChip(classes) {
    return <Chip label={"Web"} color="secondary" variant="outlined" className={classes.chip}/>
}










