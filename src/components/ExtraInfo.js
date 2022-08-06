import React, { Component } from "react";
import App from "../App";
import uniqid from "uniqid"
import {editExtraInfoData, ExtraInfoData, createNewExtraInfo, removeExtraInfo} from "./ExtraInfoData";

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            isInEditState: false,

            extraInfoTitle: "",
            extraInfoDesc: "",
            id: "",
            
        }
    }


    handleChange = (e) => {

        console.log(e.target.attributes["data"].value)

        if (e.target.id === "info-title") { this.setState({ extraInfoTitle: e.target.value}) }
        else if  (e.target.id === "extra-info-desc") { this.setState({ extraInfoDesc: e.target.value})}

    }

    

    manageExtraInfo = (e) => {
        console.log("You clicked the Edit work experiences button! This is the event ",e.target)

        if (e.target.innerText === "Edit") {
            ExtraInfoData.map((exp) => {
            if (exp.id === e.target.attributes.data.value) {
                console.log("I give up")
                // I give up
                
                this.setState({ 
                    isInEditState: false,

                    extraInfoTitle: exp.extraInfoTitle,
                    extraInfoDesc: exp.extraInfoDesc,
                    id: exp.id,
                 })

                if (exp.editExtraInfo === true) exp.editExtraInfo = false
                else exp.editExtraInfo = true
            } else if (exp.editExtraInfo === true) exp.editExtraInfo = false
            });
        } else if (e.target.innerText === "Add Extra Information") {
            let noSkip = true;
            ExtraInfoData.map((data) => {
                if (data.editExtraInfo === true) noSkip = false
            })
            if (noSkip) {
                const newExpData = createNewExtraInfo()
                this.setState({ 
                    isInEditState: false,

                    extraInfoTitle: newExpData.extraInfoTitle,
                    extraInfoDesc: newExpData.extraInfoDesc,
                    id: newExpData.id,
                })
            }
            
        } else if (e.target.innerText === "Remove") {
            removeExtraInfo(e)
        } else {
            editExtraInfoData(this.state)
        }
        
        this.setState( prevState => ({
            isInEditState: !prevState.isInEditState
        }));
        console.log(`The work Experiences is now in ${this.state.isInEditState ? `viewing mode` : `edit mode`}` )
    }


    render() {

        if (ExtraInfoData[0] === undefined) {
            return (
                <div id="extra-info-container">
                    <div id="add-info-button" onClick={this.manageExtraInfo}>Add Extra Information</div>
                </div>
            )
        } else {
            return (
                <div id="extra-info-container">
                    <div id="extra-info-title" >Extra Info</div>
                    <div id="add-info-button" onClick={this.manageExtraInfo}>Add Extra Information</div>
                    {ExtraInfoData.map((exp) => {
    
                        if (exp.editExtraInfo === true) {
                            return (
                            <div className="extra-info-component" >
                                <div id="save-info-button" key={exp.id} data={exp.id} onClick={this.manageExtraInfo}>Save</div>
                                <div className="extra-info-wrapper">
                                    <span>Title:</span>
                                    <input id="info-title" value={this.state.extraInfoTitle} key={exp.extraInfoTitle} data={exp.id} onChange={this.handleChange} />
                                </div>
                                <div className="extra-info-wrapper">
                                    <span>Description:</span>
                                    <textarea rows={5} id="extra-info-desc" value={this.state.extraInfoDesc} key={exp.extraInfoDesc} data={exp.id} onChange={this.handleChange} />
                                </div>
                            </div>
                            );
                        } else {
                            return (
                                <div className="extra-info-component">
                                    <div id="edit-info-button" key={exp.id} data={exp.id} onClick={this.manageExtraInfo}>Edit</div>
                                    <div id="remove-info-button" key={exp.id} data={exp.id} onClick={this.manageExtraInfo}>Remove</div>
                                    <div className="extra-info-wrapper">
                                        <span>Title:</span>
                                        <div id="info-title" key={exp.extraInfoTitle}>{exp.extraInfoTitle}</div>
                                    </div>
                                    <div className="extra-info-wrapper">
                                        <span>Description:</span>
                                        <div id="extra-info-desc" key={exp.extraInfoDesc}>{exp.extraInfoDesc}</div>
                                    </div>
                                </div>
                            )
                        }
                        
                    } )}
                    
                </div>
            )
        }
    }
}

export default Experience;