import React, { Component } from "react";
import uniqid from "uniqid"

const SkillsData = [{
    skillName: "Javascript",
    skillProficiency: "Experienced",
    skillDesc: "Javascript programing language proficiency.",
    id: "skillProf_1",
    editSkill: false,
},
{
    skillName: "Watching Videos",
    skillProficiency: "Master",
    skillDesc: "I am very skilled in watching videos on youtube, be it for learning or for fun!",
    id: "skillProf_2",
    editSkill: false,
}]

const createNewSkill = () => {

    SkillsData.push({
        skillName: "",
        skillProficiency: "",
        skillDesc: "",
        id: uniqid(),
        editSkill: true,
    })

    return SkillsData[SkillsData.length-1]
}

const removeSkill = (e) => {

    let counter = 0;
    SkillsData.map((data) => {
        if (data.id === e.target.attributes["data"].value) {
            SkillsData.splice(counter,1)
        }
        counter++;
    })
}


const editSkillData = (newProps) => {

    const props = newProps
    SkillsData.map((data) => {
        if (data.id === props.id) {

            data.skillName = props.skillName
            data.skillProficiency = props.skillProficiency
            data.skillDesc = props.skillDesc
            data.id = props.id
            data.editSkill = false

        }
    })
}

export {editSkillData, SkillsData, createNewSkill, removeSkill};