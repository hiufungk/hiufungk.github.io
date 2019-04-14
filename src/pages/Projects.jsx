import React, {Component} from 'react';
import ProjectCard from "../components/ProjectCard";
import gitFriendsAuthorPageImage from "../assets/git-friends/author_page.png"
import gitFriendsCommentsImage from "../assets/git-friends/comments.png"
import gitFriendsCreatePost2Image
    from "../assets/git-friends/creating_post_img2.png"
import gitFriendsCreatePost1Image
    from "../assets/git-friends/creating_post_page1.png"
import gitFriendsFriendRequestImage
    from "../assets/git-friends/friendRequestsWithLocalAndForeign.png"
import gitFriendsStreamImage from "../assets/git-friends/stream.png"

class Projects extends Component {

    constructor(props) {
        super(props);
    }

    gitFriendsImages = [
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
    ];

    render() {
        return (
            <div>
                i am projects page
                <ProjectCard source={this.gitFriendsImages}/>
            </div>
        )
    }
}

export default Projects;