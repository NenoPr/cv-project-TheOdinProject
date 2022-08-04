import React, { Component } from "react";
import App from "../App";
import uniqid from "uniqid"
import {editEducationData, EducationCompleted, createNewEducation, removeEducation} from "./EducationData";

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            isInEditState: false,

            educationOutcome: "",
            educationArea: "",
            educationProvider: "",
            durationFrom: "",
            durationTo: "",
            id: "",

        }
    }


    handleChange = (e) => {

        console.log(e.target.attributes["data"].value)

        if (e.target.id === "education-outcome") { this.setState({ educationOutcome: e.target.value}) }
        else if  (e.target.id === "education-area") { this.setState({ educationArea: e.target.value})}
        else if  (e.target.id === "education-provider") { this.setState({ educationProvider: e.target.value})}
        else if  (e.target.id === "duration-from") { this.setState({ durationFrom: e.target.value})}
        else if  (e.target.id === "duration-to") { this.setState({ durationTo: e.target.value})}

    }

    

    manageEducation = (e) => {
        console.log("You clicked the Edit work experiences button! This is the event ",e.target)

        if (e.target.innerText === "Edit") {
            EducationCompleted.map((exp) => {
            if (exp.id === e.target.attributes.data.value) {
                console.log("I give up")
                // I give up
                
                this.setState({ 
                    isInEditState: false,

                    educationOutcome: exp.educationOutcome,
                    educationArea: exp.educationArea,
                    educationProvider: exp.educationProvider,
                    durationFrom: exp.durationFrom,
                    durationTo: exp.durationTo,
                    id: exp.id,
                 })

                if (exp.editEducation === true) exp.editEducation = false
                else exp.editEducation = true
            } else if (exp.editEducation === true) exp.editEducation = false
            });
        } else if (e.target.innerText === "Add Education") {
            let noSkip = true;
            EducationCompleted.map((data) => {
                if (data.editEducation === true) noSkip = false
            })
            if (noSkip) {
                const newExpData = createNewEducation()
                this.setState({ 
                    isInEditState: false,

                    educationOutcome: newExpData.educationOutcome,
                    educationArea: newExpData.educationArea,
                    educationProvider: newExpData.educationProvider,
                    durationFrom: newExpData.durationFrom,
                    durationTo: newExpData.durationTo,
                    id: newExpData.id,
                })
            }
            
        } else if (e.target.innerText === "Remove") {
            removeEducation(e)
        } else {
            editEducationData(this.state)
        }
        
        this.setState( prevState => ({
            isInEditState: !prevState.isInEditState
        }));
        console.log(`The work Experiences is now in ${this.state.isInEditState ? `viewing mode` : `edit mode`}` )
    }


    render() {

        return (
            <div id="education-container">
                <div id="education-title" >Education</div>
                <div id="add-education-button" onClick={this.manageEducation}>Add Education</div>
                {EducationCompleted.map((exp) => {

                    if (exp.editEducation === true) {
                        return (
                        <div className="education-component" >
                            <div id="save-education-button" key={exp.id} data={exp.id} onClick={this.manageEducation}>Save</div>
                            <div className="education-info-wrapper">
                                <span>Title:</span>
                                <input id="education-outcome" value={this.state.educationOutcome} key={exp.educationOutcome} data={exp.id} onChange={this.handleChange} />
                            </div>
                            <div className="education-info-wrapper">
                                <span>Area of Study:</span>
                                <input id="education-area" value={this.state.educationArea} key={exp.educationArea} data={exp.id} onChange={this.handleChange} />
                            </div>
                            <div className="education-info-wrapper">
                                <span>Institution Name:</span>
                                <input id="education-provider" value={this.state.educationProvider} key={exp.educationProvider} data={exp.id} onChange={this.handleChange} />
                            </div>
                            <div className="education-info-wrapper">
                                <span>Duration From:</span>
                                <input id="duration-from" value={this.state.durationFrom} key={exp.durationFrom} data={exp.id} onChange={this.handleChange} />
                            </div>
                            <div className="education-info-wrapper">
                                <span>Duration To:</span>
                                <input id="duration-to" value={this.state.durationTo} key={exp.durationTo} data={exp.id} onChange={this.handleChange} />
                            </div>
                        </div>
                        );
                    } else {
                        return (
                            <div className="education-component">
                                <div id="edit-education-button" key={exp.id} data={exp.id} onClick={this.manageEducation}>Edit</div>
                                <div id="remove-education-button" key={exp.id} data={exp.id} onClick={this.manageEducation}>Remove</div>
                                <div className="education-info-wrapper">
                                    <span>Title:</span>
                                    <div id="education-outcome" key={exp.educationOutcome}>{exp.educationOutcome}</div>
                                </div>
                                <div className="education-info-wrapper">
                                    <span>Area of Study:</span>
                                    <div id="education-area" key={exp.educationArea}>{exp.educationArea}</div>
                                </div>
                                <div className="education-info-wrapper">
                                    <span>Institution Name:</span>
                                    <div id="education-provider" key={exp.educationProvider}>{exp.educationProvider}</div>
                                </div>
                                <div className="education-info-wrapper">
                                    <span>Duration:</span>
                                    <div id="duration-from-to" key={exp.durationFrom}>{exp.durationFrom} / {exp.durationTo}</div>
                                </div>
                            </div>
                        )
                    }
                    
                } )}
                
            </div>
        )
    }
}

export default Experience;