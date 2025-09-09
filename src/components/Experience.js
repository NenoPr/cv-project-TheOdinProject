import React, { Component, useState, useEffect } from "react";
import App from "../App";
import uniqid from "uniqid"
import {editExperience, workExperiences, createNewExperience, removeWorkExperience} from "./ExperienceData";

const Experience = () =>  {

        const [state, setState] = useState({
            isInEditState: false,

            jobTitle: "",
            employerName: "",
            jobDescription: "",
            durationFrom: "",
            durationTo: "",
            id: 1,

        })


    const handleChange = (e) => {

        console.log(e.target.attributes["data"].value)

        if (e.target.id === "job-title") { setState({ jobTitle: e.target.value}) }
        else if  (e.target.id === "employer-name") { setState({ employerName: e.target.value})}
        else if  (e.target.id === "job-description") { setState({ jobDescription: e.target.value})}
        else if  (e.target.id === "duration-from") { setState({ durationFrom: e.target.value})}
        else if  (e.target.id === "duration-to") { setState({ durationTo: e.target.value})}

    }

    

    const manageWorkExperiences = (e) => {
        console.log("You clicked the Edit work experiences button! This is the event ",e.target)

        if (e.target.innerText === "Edit") {
            workExperiences.map((exp) => {
            if (exp.id === e.target.attributes.data.value) {
                console.log("I give up")
                // I give up
                setState( {exp: {editJob: true}} )
                
                setState({ 
                    isInEditState: false,

                    jobTitle: exp.jobTitle,
                    employerName: exp.employerName,
                    jobDescription: exp.jobDescription,
                    durationFrom: exp.durationFrom,
                    durationTo: exp.durationTo,
                    id: exp.id,
                 })

                if (exp.editJob === true) exp.editJob = false
                else exp.editJob = true
            } else if (exp.editJob === true) exp.editJob = false
            
         });
        } else if (e.target.innerText === "Add Work Experience") {
            let noSkip = true;
            workExperiences.map((data) => {
                if (data.editJob === true) noSkip = false
            })
            if (noSkip) {
                const newExpData = createNewExperience()
                setState({ 
                    isInEditState: false,

                    jobTitle: newExpData.jobTitle,
                    employerName: newExpData.employerName,
                    jobDescription: newExpData.jobDescription,
                    durationFrom: newExpData.durationFrom,
                    durationTo: newExpData.durationTo,
                    id: newExpData.id,
                })
            }
            
        } else if (e.target.innerText === "Remove") {
            removeWorkExperience(e)
        } else {
            editExperience(state)
        }
        
        setState( prevState => ({
            isInEditState: !prevState.isInEditState
        }));
        console.log(`The work Experiences is now in ${state.isInEditState ? `viewing mode` : `edit mode`}` )
    }




    if (workExperiences[0] === undefined) {
        return (
            <div id="work-experience-container">
                <div id="add-work-experiences-button" onClick={manageWorkExperiences}>Add Work Experience</div>
            </div>
        )
    } else {
        return (
            <div id="work-experience-container">
                <div id="work-experience-title" >Work Experience</div>
                <div id="add-work-experiences-button" onClick={manageWorkExperiences}>Add Work Experience</div>
                {workExperiences.map((exp) => {

                    if (exp.editJob === true) {
                        return (
                        <div className="experience-component" >
                            <div id="save-work-experiences-button" key={exp.id} data={exp.id} onClick={manageWorkExperiences}>Save</div>
                            <div className="experience-info-wrapper">
                                <span>Title:</span>
                                <input id="job-title" value={state.jobTitle} key={exp.jobTitle} data={exp.id} onChange={handleChange} />
                            </div>
                            <div className="experience-info-wrapper">
                                <span>Employer:</span>
                                <input id="employer-name" value={state.employerName} key={exp.employerName} data={exp.id} onChange={handleChange} />
                            </div>
                            <div className="experience-info-wrapper">
                                <span>Job Description:</span>
                                <textarea rows={5} id="job-description" value={state.jobDescription} key={exp.jobDescription} data={exp.id} onChange={handleChange} />
                            </div>
                            <div className="experience-info-wrapper">
                                <span>Duration From:</span>
                                <input id="duration-from" value={state.durationFrom} key={exp.durationFrom} data={exp.id} onChange={handleChange} />
                            </div>
                            <div className="experience-info-wrapper">
                                <span>Duration To:</span>
                                <input id="duration-to" value={state.durationTo} key={exp.durationTo} data={exp.id} onChange={handleChange} />
                            </div>
                        </div>
                        );
                    } else {
                        return (
                            <div className="experience-component">
                                <div id="edit-work-experiences-button" key={exp.id} data={exp.id} onClick={manageWorkExperiences}>Edit</div>
                                <div id="remove-work-experiences-button" key={exp.id} data={exp.id} onClick={manageWorkExperiences}>Remove</div>
                                <div className="experience-info-wrapper">
                                    <span>Title:</span>
                                    <div id="job-title" key={exp.jobTitle}>{exp.jobTitle}</div>
                                </div>
                                <div className="experience-info-wrapper">
                                    <span>Employer:</span>
                                    <div id="employer-name" key={exp.employerName}>{exp.employerName}</div>
                                </div>
                                <div className="experience-info-wrapper">
                                    <span>Job Description:</span>
                                    <div id="job-description" key={exp.jobDescription}>{exp.jobDescription}</div>
                                </div>
                                <div className="experience-info-wrapper">
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