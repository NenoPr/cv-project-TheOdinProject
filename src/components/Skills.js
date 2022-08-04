import React, { Component } from "react";
import App from "../App";
import uniqid from "uniqid"
import {editSkillData, SkillsData, createNewSkill, removeSkill} from "./SkillsData";

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            isInEditState: false,

            skillName: "",
            skillProficiency: "",
            skillDesc: "",
            id: "",

        }
    }


    handleChange = (e) => {

        console.log(e.target.attributes["data"].value)

        if (e.target.id === "skill-name") { this.setState({ skillName: e.target.value}) }
        else if  (e.target.id === "skill-proficiency") { this.setState({ skillProficiency: e.target.value})}
        else if  (e.target.id === "skill-desc") { this.setState({ skillDesc: e.target.value})}

    }

    

    manageSkill = (e) => {
        console.log("You clicked the Edit work experiences button! This is the event ",e.target)

        if (e.target.innerText === "Edit") {
            SkillsData.map((exp) => {
            if (exp.id === e.target.attributes.data.value) {
                console.log("I give up")
                // I give up
                
                this.setState({ 
                    isInEditState: false,

                    skillName: exp.skillName,
                    skillProficiency: exp.skillProficiency,
                    skillDesc: exp.skillDesc,
                    id: exp.id,
                 })

                if (exp.editSkill === true) exp.editSkill = false
                else exp.editSkill = true
            } else if (exp.editSkill === true) exp.editSkill = false
            });
        } else if (e.target.innerText === "Add Skill") {
            let noSkip = true;
            SkillsData.map((data) => {
                if (data.editSkill === true) noSkip = false
            })
            if (noSkip) {
                const newExpData = createNewSkill()
                this.setState({ 
                    isInEditState: false,

                    skillName: newExpData.skillName,
                    skillProficiency: newExpData.skillProficiency,
                    skillDesc: newExpData.skillDesc,
                    id: newExpData.id,
                })
            }
            
        } else if (e.target.innerText === "Remove") {
            removeSkill(e)
        } else {
            editSkillData(this.state)
        }
        
        this.setState( prevState => ({
            isInEditState: !prevState.isInEditState
        }));
        console.log(`The work Experiences is now in ${this.state.isInEditState ? `viewing mode` : `edit mode`}` )
    }


    render() {

        return (
            <div id="skills-container">
                <div id="skills-title" >Skills</div>
                <div id="add-skill-button" onClick={this.manageSkill}>Add Skill</div>
                {SkillsData.map((exp) => {

                    if (exp.editSkill === true) {
                        return (
                        <div className="skill-component" >
                            <div id="save-skill-button" key={exp.id} data={exp.id} onClick={this.manageSkill}>Save</div>
                            <div className="skill-info-wrapper">
                                <span>Skill:</span>
                                <input id="skill-name" value={this.state.skillName} key={exp.skillName} data={exp.id} onChange={this.handleChange} />
                            </div>
                            <div className="skill-info-wrapper">
                                <span>Proficiency:</span>
                                <input id="skill-proficiency" value={this.state.skillProficiency} key={exp.skillProficiency} data={exp.id} onChange={this.handleChange} />
                            </div>
                            <div className="skill-info-wrapper">
                                <span>Description:</span>
                                <textarea rows={5} id="skill-desc" value={this.state.skillDesc} key={exp.skillDesc} data={exp.id} onChange={this.handleChange} />
                            </div>
                        </div>
                        );
                    } else {
                        return (
                            <div className="skill-component">
                                <div id="edit-skill-button" key={exp.id} data={exp.id} onClick={this.manageSkill}>Edit</div>
                                <div id="remove-skill-button" key={exp.id} data={exp.id} onClick={this.manageSkill}>Remove</div>
                                <div className="skill-info-wrapper">
                                    <span>Skill:</span>
                                    <div id="skill-name" key={exp.skillName}>{exp.skillName}</div>
                                </div>
                                <div className="skill-info-wrapper">
                                    <span>Proficiency:</span>
                                    <div id="skill-proficiency" key={exp.skillProficiency}>{exp.skillProficiency}</div>
                                </div>
                                <div className="skill-info-wrapper">
                                    <span>Description:</span>
                                    <div id="skill-desc" key={exp.skillDesc}>{exp.skillDesc}</div>
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