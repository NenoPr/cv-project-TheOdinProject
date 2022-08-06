import React, { Component } from "react";
import uniqid from "uniqid"

const workExperiences = [{
    jobTitle: "Front-end Developer",
    employerName: "Microsoft Inc.",
    jobDescription: "Developed and maintained the front end user experience for various projects. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae asperiores sed dolores esse! Itaque perferendis ratione ad illo repellat libero placeat ipsa harum sit necessitatibus, saepe sunt quae dolor ipsam?",
    durationFrom: "12.12.2020",
    durationTo: "14.4.2022",
    id: uniqid(),
    editJob: false,
},
{
    jobTitle: "AI Engineer",
    employerName: "Nvidia Inc.",
    jobDescription: "Developing and maintaining  ML models, specializing in image recognition. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae asperiores sed dolores esse! Itaque perferendis ratione ad illo repellat libero placeat ipsa harum sit necessitatibus, saepe sunt quae dolor ipsam?",
    durationFrom: "15.4.2022",
    durationTo: "Present",
    id: uniqid(),
    editJob: false,
}]

const createNewExperience = () => {

    workExperiences.push({
        jobTitle: "",
        employerName: "",
        jobDescription: "",
        durationFrom: "",
        durationTo: "",
        id: uniqid(),
        editJob: true,
    })

    return workExperiences[workExperiences.length-1]
}

const removeWorkExperience = (e) => {

    let counter = 0;
    workExperiences.map((data) => {
        if (data.id === e.target.attributes["data"].value) {
            workExperiences.splice(counter,1)
        }
        counter++;
    })
}


const editExperience = (newProps) => {

    const props = newProps
    workExperiences.map((data) => {
        if (data.id === props.id) {

            console.log(data.jobTitle)
            data.jobTitle = props.jobTitle
            console.log(data.jobTitle)
            data.employerName = props.employerName
            data.jobDescription = props.jobDescription
            data.durationFrom = props.durationFrom
            data.durationTo = props.durationTo
            data.id = props.id
            console.log(data.editJob)
            data.editJob = false
            console.log(data.editJob)

        }
    })
}

export {editExperience, workExperiences, createNewExperience, removeWorkExperience};