import gitFriendsAuthorPageImage from "./assets/git-friends/author_page.png";
import gitFriendsCreatePost1Image
    from "./assets/git-friends/creating_post_page1.png";
import gitFriendsCreatePost2Image
    from "./assets/git-friends/creating_post_img2.png";
import gitFriendsCommentsImage from "./assets/git-friends/comments.png";
import gitFriendsFriendRequestImage
    from "./assets/git-friends/friendRequestsWithLocalAndForeign.png";
import gitFriendsStreamImage from "./assets/git-friends/stream.png";
import gitFriendsLoginImage from "./assets/git-friends/login.png";
import gitFriendsGithub from "./assets/git-friends/githubActivity.png"

import outdoorsLoginImage from "./assets/outdoors-club/login.png";
import gearPageImage from "./assets/outdoors-club/gear_page.png";
import rentPageImage from "./assets/outdoors-club/rent_page.png";
import checkoutImage from "./assets/outdoors-club/checkout.png";
import reservationPageImage from "./assets/outdoors-club/reservation_page.png";
import reservationImage from "./assets/outdoors-club/reservation.jpg";
import statsImage from "./assets/outdoors-club/stats.png";
import addGearImage from "./assets/outdoors-club/addGear.jpg";
import membersImage from "./assets/outdoors-club/members.jpg";
import settingsImage from "./assets/outdoors-club/settings.jpg";
import reservationFormImage from "./assets/outdoors-club/reservationForm.jpg"

import loops from "./assets/hfold/loops.png";
import loops2 from "./assets/hfold/loops2.png";
import hfoldText from "./assets/hfold/text.png";

import memoryMenu1 from "./assets/memory-wave/menu1.png";
import memoryMenu2 from "./assets/memory-wave/menu2.png";
import memoryGame from "./assets/memory-wave/game.png";

import feelTripFeed from "./assets/feeltrip/feed.png";
import feelTripMap from "./assets/feeltrip/map.png";
import feelTripCreate from "./assets/feeltrip/create-post.png";

import blackFridayDataImage from "./assets/black-friday/dataset.png"
import blackFridayAlgComp from "./assets/black-friday/alg_compare.png"

import scatterplot from "./assets/paper_402/overall_scatter_plot.png"
import paper_402 from "./assets/paper_402/paper.png"


export const GITFRIENDS_INFO = {
    title: "GitFriends",
    description: "GitFriends is a Distributed Social Networking web application for a university project with 5 members. Each team has to connect with other team's server and share information. This allows users to create posts and friend other users from a different server.",
    demoLink: "https://youtu.be/ur7otnh1ztc",
    githubLink: "https://github.com/forgeno/CMPUT404-group-project/",
    tags: ["React", "Django", "TDD", "Continuous Integration"],
    images: [
        {
            label: 'GitFriends Login',
            imgPath: gitFriendsLoginImage,
        },
        {
            label: 'Author Profile Page',
            imgPath: gitFriendsAuthorPageImage,
        },
        {
            label: 'Creating Post',
            imgPath: gitFriendsCreatePost1Image,
        },
        {
            label: 'Creating post with images',
            imgPath: gitFriendsCreatePost2Image,
        },
        {
            label: 'Comments',
            imgPath: gitFriendsCommentsImage,
        },
        {
            label: 'Friend Request',
            imgPath: gitFriendsFriendRequestImage,
        },
        {
            label: 'Stream',
            imgPath: gitFriendsStreamImage,
        },
        {
            label: 'GitHub Integration',
            imgPath: gitFriendsGithub,
        },
    ]
};

export const OUTDOORS_INFO = {
    title: "Inventory Management and Rentals System",
    description: "This project is built for the University of Alberta Outdoors Club's with 8 members. It aims to reduce the amount of paperwork and improve the existing gear rental workflow and reducing the amount of paperwork by supporting remote rentals, supporting online payments.",
    demoLink: "https://www.youtube.com/watch?v=ClYSKNEYS-Q",
    tags: ["React", "Django", "Continuous Integration"],
    images: [
        {
            label: 'Outdoors Club Login',
            imgPath: outdoorsLoginImage,
        },
        {
            label: 'Gear Management Page',
            imgPath: gearPageImage,
        },
        {
            label: 'Creating Gear',
            imgPath: addGearImage,
        },
        {
            label: 'Gear Rental Page',
            imgPath: rentPageImage,
        },{
            label: 'Reservation Form',
            imgPath: reservationFormImage,
        },
        {
            label: 'Rental Checkout',
            imgPath: checkoutImage,
        },
        {
            label: 'Reservation Page',
            imgPath: reservationPageImage,
        },
        {
            label: 'View Reservation',
            imgPath: reservationImage,
        },
        {
            label: 'Statistics',
            imgPath: statsImage,
        },
        {
            label: 'Member Management',
            imgPath: membersImage,
        },
        {
            label: 'Settings',
            imgPath: settingsImage,
        }
    ]
};

export const FEELTRIP_INFO = {
    title: "FeelTrip",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    githubLink: "https://github.com/CMPUT301W17T11/FeelTrip",
    demoLink: "https://youtu.be/Yo6Uv4B39sM",
    tags: ["Android", "Google Maps"],
    images: [
        {
            label: 'Feed',
            imgPath: feelTripFeed,
        },
        {
            label: 'Create a Post',
            imgPath: feelTripCreate,
        },
        {
            label: 'Google Map',
            imgPath: feelTripMap,
        }
    ]
};

export const MEMORYWAVE_INFO = {
    title: "Memory Wave",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    githubLink: "https://github.com/Hk-tang/MemoryWave",
    tags: ["C#", "Unity"],
    images: [
        {
            label: 'Start Screen',
            imgPath: memoryMenu1,
        },
        {
            label: 'Song Select Menu',
            imgPath: memoryMenu2,
        },
        {
            label: 'Gameplay',
            imgPath: memoryGame,
        }
    ]
};

export const HFOLD_INFO = {
    title: "HFold (iterative / interacting)",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    githubLink: "https://github.com/HosnaJabbari",
    tags: ["Dynamic Programming", "C++"],
    images: [
        {
            label: 'Examples of loops',
            imgPath: loops2,
        },
        {
            label: 'Examples of recurrence',
            imgPath: loops,
        },
        {
            label: 'Example',
            imgPath: hfoldText,
        }
    ]
};

export const BLACK_FRIDAY_INFO = {
    title: "Black Friday Sales Prediction",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    githubLink: "https://github.com/hiufungk/BlackFridayPrediction",
    tags: ["Machine Learning"],
    images: [
        {
            label: 'Kaggle Dataset',
            imgPath: blackFridayDataImage,
        },
        {
            label: 'Algorithm Comparison',
            imgPath: blackFridayAlgComp,
        }
    ]
};

export const PAPER_402_INFO = {
    title: "Investigating the Relationship Between Testing and Pull Requests",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    githubLink: "https://github.com/cmput402-w19/project-Team8",
    tags: ["Software Quality", "Testing"],
    images: [
        {
            label: 'Overall Scatterplot',
            imgPath: scatterplot,
        },
        {
            label: 'Research Paper',
            imgPath: paper_402,
        }
    ]
};
