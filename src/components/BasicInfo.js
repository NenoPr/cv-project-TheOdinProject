import React, { Component } from "react";
import App from "../App";


class BasicInfo extends Component {
    constructor() {
        super();

        this.state = {
            isInEditState: false,

            profileImage: "default-profile.png",
            firstName: "Emma",
            lastName: "Nimfell",
            phone:  "098 758 4123",
            email: "emmanimfell.buissness@gmail.com",
            site: "EmmaNimfellSite.com",
            siteURL: "https://www.youtube.com",
            location: "Ontario, Canada",
        }
    }

    handleChange = (e) => {

        if (e.target.id === "profile-image-url") this.setState({ profileImage: e.target.value })
        else if (e.target.id === "first-name") this.setState({ firstName: e.target.value })
        else if (e.target.id === "last-name") this.setState({ lastName: e.target.value })
        else if (e.target.id === "profile-phone") this.setState({ phone: e.target.value })
        else if (e.target.id === "profile-email") this.setState({ email: e.target.value })
        else if (e.target.id === "profile-site") this.setState({ site: e.target.value })
        else if (e.target.id === "profile-site-url") this.setState({ siteURL: e.target.value })
        else if (e.target.id === "profile-location") this.setState({ location: e.target.value })

        // if (e.target.id === "first-name") {let firstNameHolder = e.target.value}
        // else if (e.target.id === "last-name") { let lastNameHolder = e.target.value }
        // else if (e.target.id === "profile-phone") { let phoneHolder = e.target.value }
        // else if (e.target.id === "profile-email") { let emailHolder = e.target.value }
        // else if (e.target.id === "profile-site") { let siteHolder =  e.target.value }
        // else if (e.target.id === "profile-location") { let locationHolder = e.target.value }

        console.log(e.target.id)
    }

    editProfile = (e) => {
        console.log("You clicked the Edit profile button! This is the event ",e.target)
        this.setState( prevState => ({
            isInEditState: !prevState.isInEditState
        }));
        console.log(`The profile is now in ${this.state.isInEditState ? `viewing mode` : `edit mode`}` )
    }


    render() {
        if (this.state.isInEditState) {
            return (
                <form id="basic-info-component">
                    <div id="edit-profile-button" onClick={this.editProfile}>Save</div>
                    <div className="profile-info-wrapper">
                        <span>Profile Image Url</span>
                        <input alt="Profile" id="profile-image-url" value={this.state.profileImage} onChange={this.handleChange}/>
                    </div>
                    <img src={this.state.profileImage} alt="Profile" id="profile-picture"/>
                    <div id="profile-name" className="profile-info">
                        <input id="first-name" value={this.state.firstName} onChange={this.handleChange}/>
                        <input id="last-name" value={this.state.lastName} onChange={this.handleChange}/>
                    </div>
                    <div className="profile-info-wrapper">
                        <span>Phone</span>
                        <input id="profile-phone" className="profile-info" value={this.state.phone} onChange={this.handleChange}/>
                    </div>
                    <div className="profile-info-wrapper">
                        <span>Email</span>
                        <input id="profile-email" className="profile-info" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="profile-info-wrapper">
                        <span>Site Name</span>
                        <input id="profile-site" className="profile-info" value={this.state.site} onChange={this.handleChange}/>
                    </div>
                    <div className="profile-info-wrapper">
                        <span>Site Url</span>
                        <input id="profile-site-url" className="profile-info" value={this.state.siteURL} onChange={this.handleChange}/>
                    </div>
                    <div className="profile-info-wrapper">
                        <span>Location</span>
                        <input id="profile-location" className="profile-info" value={this.state.location} onChange={this.handleChange}/>
                    </div>
                
                </form>
            )
        } else {
            return (
                <div id="basic-info-component">
                    <div id="edit-profile-button" onClick={this.editProfile}>Edit</div>
                    <img src={this.state.profileImage} alt="Profile" id="profile-picture"/>
                    <div id="profile-name" className="profile-info">
                        <div id="first-name">{this.state.firstName}</div>
                        <div id="last-name">{this.state.lastName}</div>
                    </div>
                    <div className="profile-info-wrapper">
                        <span>Phone</span>
                        <div id="profile-phone" className="profile-info"> {this.state.phone}</div>
                    </div>
                    <div className="profile-info-wrapper">
                        <span>Email</span>
                        <div id="profile-email" className="profile-info">{this.state.email}</div>
                    </div>
                    <div className="profile-info-wrapper">
                        <span>Site</span>
                        <a id="profile-site" href={this.state.siteURL} target="_blank" rel="noreferrer noopener" className="profile-info">{this.state.site}</a>
                    </div>
                    <div className="profile-info-wrapper">
                        <span>Location</span>
                        <div id="profile-location" className="profile-info">{this.state.location}</div>
                    </div>
                    
                </div>
            )
        }
    }
}

export default BasicInfo;