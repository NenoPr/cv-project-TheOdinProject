import React, { Component } from "react";
import uniqid from "uniqid"

const ExtraInfoData = [{
    extraInfoTitle: "Coding can “power up” your brain",
    extraInfoDesc: "Learning to code has definite cognitive benefits – creative problem-solving, critical thinking, and developing teamwork skills. Research dating back to 1991 has demonstrated and confirmed that coders developed higher cognitive skills on average, and that coding or other intellectually stimulating activities dramatically reduced the chances of degenerative diseases such as Alzheimer’s. Today, soft and hard skills are equally important, but those who know how to work in teams, solve problems, pay attention to details, and experience mistakes as learning experiences will have way more possibility to become the leaders of tomorrow.",
    id: "ExtraInfo_1",
    editExtraInfo: false,
}]

const createNewExtraInfo = () => {

    ExtraInfoData.push({
        extraInfoTitle: "",
        extraInfoDesc: "",
        id: uniqid(),
        editExtraInfo: true,
    })

    return ExtraInfoData[ExtraInfoData.length-1]
}

const removeExtraInfo = (e) => {

    let counter = 0;
    ExtraInfoData.map((data) => {
        if (data.id === e.target.attributes["data"].value) {
            ExtraInfoData.splice(counter,1)
        }
        counter++;
    })
}


const editExtraInfoData = (newProps) => {

    const props = newProps
    ExtraInfoData.map((data) => {
        if (data.id === props.id) {

            data.extraInfoTitle = props.extraInfoTitle
            data.extraInfoDesc = props.extraInfoDesc
            data.id = props.id
            data.editExtraInfo = false

        }
    })
}

export {editExtraInfoData, ExtraInfoData, createNewExtraInfo, removeExtraInfo};