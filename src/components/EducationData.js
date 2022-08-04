import React, { Component } from "react";
import uniqid from "uniqid"

const EducationCompleted = [{
    educationOutcome: "Bachelors Degree",
    educationArea: "Computer Science",
    educationProvider: "CS Uni TokSanPan",
    durationFrom: "07.09.2016.",
    durationTo: "19.6.2020.",
    id: "EducationCompleted_1",
    editEducation: false,
},
{
    educationOutcome: "High School Diploma",
    educationArea: "High School Education",
    educationProvider: "TokSanPan 4326th High School",
    durationFrom: "01.09.2012.",
    durationTo: "28.05.2016.",
    id: "EducationCompleted_2",
    editEducation: false,
}]

const createNewEducation = () => {

    EducationCompleted.push({
        educationOutcome: "",
        educationArea: "",
        educationProvider: "",
        durationFrom: "",
        durationTo: "",
        id: uniqid(),
        editEducation: true,
    })

    return EducationCompleted[EducationCompleted.length-1]
}

const removeEducation = (e) => {

    let counter = 0;
    EducationCompleted.map((data) => {
        if (data.id === e.target.attributes["data"].value) {
            EducationCompleted.splice(counter,1)
        }
        counter++;
    })
}


const editEducationData = (newProps) => {

    const props = newProps
    EducationCompleted.map((data) => {
        if (data.id === props.id) {

            data.educationOutcome = props.educationOutcome
            data.educationArea = props.educationArea
            data.educationProvider = props.educationProvider
            data.durationFrom = props.durationFrom
            data.durationTo = props.durationTo
            data.id = props.id
            data.editEducation = false

        }
    })
}

export {editEducationData, EducationCompleted, createNewEducation, removeEducation};