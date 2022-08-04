import React, { Component } from "react";
import App from "../App";
import uniqid from "uniqid"
import {editLangData, LangData, createNewLang, removeLang} from "./LanguagesData";

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            isInEditState: false,

            langName: "",
            langProficiency: "",
            id: "",
            
        }
    }


    handleChange = (e) => {

        console.log(e.target.attributes["data"].value)

        if (e.target.id === "lang-name") { this.setState({ langName: e.target.value}) }
        else if  (e.target.id === "lang-proficiency") { this.setState({ langProficiency: e.target.value})}

    }

    

    manageLanguages = (e) => {
        console.log("You clicked the Edit work experiences button! This is the event ",e.target)

        if (e.target.innerText === "Edit") {
            LangData.map((exp) => {
            if (exp.id === e.target.attributes.data.value) {
                console.log("I give up")
                // I give up
                
                this.setState({ 
                    isInEditState: false,

                    langName: exp.langName,
                    langProficiency: exp.langProficiency,
                    id: exp.id,
                 })

                if (exp.editLang === true) exp.editLang = false
                else exp.editLang = true
            } else if (exp.editLang === true) exp.editLang = false
            });
        } else if (e.target.innerText === "Add Language") {
            let noSkip = true;
            LangData.map((data) => {
                if (data.editLang === true) noSkip = false
            })
            if (noSkip) {
                const newExpData = createNewLang()
                this.setState({ 
                    isInEditState: false,

                    langName: newExpData.langName,
                    langProficiency: newExpData.langProficiency,
                    id: newExpData.id,
                })
            }
            
        } else if (e.target.innerText === "Remove") {
            removeLang(e)
        } else {
            editLangData(this.state)
        }
        
        this.setState( prevState => ({
            isInEditState: !prevState.isInEditState
        }));
        console.log(`The work Experiences is now in ${this.state.isInEditState ? `viewing mode` : `edit mode`}` )
    }


    render() {

        return (
            <div id="language-container">
                <div id="language-title" >Languages</div>
                <div id="add-lang-button" onClick={this.manageLanguages}>Add Language</div>
                {LangData.map((exp) => {

                    if (exp.editLang === true) {
                        return (
                        <div className="lang-component" >
                            <div id="save-lang-button" key={exp.id} data={exp.id} onClick={this.manageLanguages}>Save</div>
                            <div className="cert-lang-wrapper">
                                <span>Language:</span>
                                <input id="lang-name" value={this.state.langName} key={exp.langName} data={exp.id} onChange={this.handleChange} />
                            </div>
                            <div className="cert-lang-wrapper">
                                <span>Proficiency:</span>
                                <input id="lang-proficiency" value={this.state.langProficiency} key={exp.langProficiency} data={exp.id} onChange={this.handleChange} />
                            </div>
                        </div>
                        );
                    } else {
                        return (
                            <div className="lang-component">
                                <div id="edit-lang-button" key={exp.id} data={exp.id} onClick={this.manageLanguages}>Edit</div>
                                <div id="remove-lang-button" key={exp.id} data={exp.id} onClick={this.manageLanguages}>Remove</div>
                                <div className="cert-lang-wrapper">
                                    <span>Language:</span>
                                    <div id="lang-name" key={exp.langName}>{exp.langName}</div>
                                </div>
                                <div className="cert-lang-wrapper">
                                    <span>Proficiency:</span>
                                    <div id="lang-proficiency" key={exp.langProficiency}>{exp.langProficiency}</div>
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