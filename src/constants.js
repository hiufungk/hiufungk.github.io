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

import outdoorsLoginImage
    from "./assets/outdoors-club/login.png";
import gearPageImage
    from "./assets/outdoors-club/gear_page.png";
import rentPageImage
    from "./assets/outdoors-club/rent_page.png";
import checkoutImage
    from "./assets/outdoors-club/checkout.png";
import reservationPageImage
    from "./assets/outdoors-club/reservation_page.png";
import reservationImage
    from "./assets/outdoors-club/reservation.png";
import statsImage
    from "./assets/outdoors-club/stats.png";

export const GITFRIENDS_INFO = {
    title: "GitFriends",
    description: "GitFriends is a Distributed Social Networking web application for a university project with 5 members. Each team has to connect with other team's server and share information. This allows users to create posts and friend other users from a different server.",
    demoLink: "https://youtu.be/ur7otnh1ztc",
    githubLink: "https://github.com/forgeno/CMPUT404-group-project/",
    images: [
        {
            label: 'Login',
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
    ]
};

export const OUTDOORS_INFO = {
    title: "Inventory Management and Rentals System",
    description: "This project is built for the University of Alberta Outdoors Club's with 8 members. It aims to reduce the amount of paperwork and improve the existing gear rental workflow and reducing the amount of paperwork by supporting remote rentals, supporting online payments.",
    demoLink: "https://www.youtube.com/watch?v=ClYSKNEYS-Q",
    images: [
        {
            label: 'Login',
            imgPath: outdoorsLoginImage,
        },
        {
            label: 'Gear Management Page',
            imgPath: gearPageImage,
        },
        {
            label: 'Gear Rental Page',
            imgPath: rentPageImage,
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
        }
    ]
};