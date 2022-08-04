import React, { Component } from "react";
import uniqid from "uniqid"

const LangData = [{
    langName: "English",
    langProficiency: "C2",
    id: "LangProf_1",
    editLang: false,
},
{
    langName: "French",
    langProficiency: "B1",
    id: "LangProf_2",
    editLang: false,
},
{
    langName: "Japanese",
    langProficiency: "B2",
    id: "LangProf_3",
    editLang: false,
}]

const createNewLang = () => {

    LangData.push({
        langName: "",
        langProficiency: "",
        id: uniqid(),
        editLang: true,
    })

    return LangData[LangData.length-1]
}

const removeLang = (e) => {

    let counter = 0;
    LangData.map((data) => {
        if (data.id === e.target.attributes["data"].value) {
            LangData.splice(counter,1)
        }
        counter++;
    })
}


const editLangData = (newProps) => {

    const props = newProps
    LangData.map((data) => {
        if (data.id === props.id) {

            data.langName = props.langName
            data.langProficiency = props.langProficiency
            data.id = props.id
            data.editLang = false

        }
    })
}

export {editLangData, LangData, createNewLang, removeLang};