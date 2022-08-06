import React, { Component } from "react";
import App from "../App";
import uniqid from "uniqid"
import {editCertData, CertCompleted, createNewCert, removeCert} from "./CertificatesData";

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            isInEditState: false,

            certTitle: "",
            certProvider: "",
            certDesc: "",
            durationFrom: "",
            durationTo: "",
            id: "",

        }
    }


    handleChange = (e) => {

        console.log(e.target.attributes["data"].value)

        if (e.target.id === "cert-title") { this.setState({ certTitle: e.target.value}) }
        else if  (e.target.id === "cert-provider") { this.setState({ certProvider: e.target.value})}
        else if  (e.target.id === "cert-desc") { this.setState({ certDesc: e.target.value})}
        else if  (e.target.id === "duration-from") { this.setState({ durationFrom: e.target.value})}
        else if  (e.target.id === "duration-to") { this.setState({ durationTo: e.target.value})}

    }

    

    manageEducation = (e) => {
        console.log("You clicked the Edit work experiences button! This is the event ",e.target)

        if (e.target.innerText === "Edit") {
            CertCompleted.map((exp) => {
            if (exp.id === e.target.attributes.data.value) {
                console.log("I give up")
                // I give up
                
                this.setState({ 
                    isInEditState: false,

                    certTitle: exp.certTitle,
                    certProvider: exp.certProvider,
                    certDesc: exp.certDesc,
                    durationFrom: exp.durationFrom,
                    durationTo: exp.durationTo,
                    id: exp.id,
                 })

                if (exp.editCert === true) exp.editCert = false
                else exp.editCert = true
            } else if (exp.editCert === true) exp.editCert = false
            });
        } else if (e.target.innerText === "Add Education") {
            let noSkip = true;
            CertCompleted.map((data) => {
                if (data.editCert === true) noSkip = false
            })
            if (noSkip) {
                const newExpData = createNewCert()
                this.setState({ 
                    isInEditState: false,

                    certTitle: newExpData.certTitle,
                    certProvider: newExpData.certProvider,
                    certDesc: newExpData.certDesc,
                    durationFrom: newExpData.durationFrom,
                    durationTo: newExpData.durationTo,
                    id: newExpData.id,
                })
            }
            
        } else if (e.target.innerText === "Remove") {
            removeCert(e)
        } else {
            editCertData(this.state)
        }
        
        this.setState( prevState => ({
            isInEditState: !prevState.isInEditState
        }));
        console.log(`The work Experiences is now in ${this.state.isInEditState ? `viewing mode` : `edit mode`}` )
    }


    render() {

        if (CertCompleted[0] === undefined) {
            return (
                <div id="certification-container">
                    <div id="add-cert-button" onClick={this.manageEducation}>Add Certificate</div>
                </div>
            )} else {
                return (
                    <div id="certification-container">
                        <div id="certification-title" >Certificates</div>
                        <div id="add-cert-button" onClick={this.manageEducation}>Add Certificate</div>
                        {CertCompleted.map((exp) => {
        
                            if (exp.editCert === true) {
                                return (
                                <div className="cert-component" >
                                    <div id="save-cert-button" key={exp.id} data={exp.id} onClick={this.manageEducation}>Save</div>
                                    <div className="cert-info-wrapper">
                                        <span>Title:</span>
                                        <input id="cert-title" value={this.state.certTitle} key={exp.certTitle} data={exp.id} onChange={this.handleChange} />
                                    </div>
                                    <div className="cert-info-wrapper">
                                        <span>Area of Study:</span>
                                        <input id="cert-provider" value={this.state.certProvider} key={exp.certProvider} data={exp.id} onChange={this.handleChange} />
                                    </div>
                                    <div className="cert-info-wrapper">
                                        <span>Course Description:</span>
                                        <textarea rows={5} id="cert-desc" value={this.state.certDesc} key={exp.certDesc} data={exp.id} onChange={this.handleChange} />
                                    </div>
                                    <div className="cert-info-wrapper">
                                        <span>Duration From:</span>
                                        <input id="duration-from" value={this.state.durationFrom} key={exp.durationFrom} data={exp.id} onChange={this.handleChange} />
                                    </div>
                                    <div className="cert-info-wrapper">
                                        <span>Duration To:</span>
                                        <input id="duration-to" value={this.state.durationTo} key={exp.durationTo} data={exp.id} onChange={this.handleChange} />
                                    </div>
                                </div>
                                );
                            } else {
                                return (
                                    <div className="cert-component">
                                        <div id="edit-cert-button" key={exp.id} data={exp.id} onClick={this.manageEducation}>Edit</div>
                                        <div id="remove-cert-button" key={exp.id} data={exp.id} onClick={this.manageEducation}>Remove</div>
                                        <div className="cert-info-wrapper">
                                            <span>Title:</span>
                                            <div id="cert-title" key={exp.certTitle}>{exp.certTitle}</div>
                                        </div>
                                        <div className="cert-info-wrapper">
                                            <span>Area of Study:</span>
                                            <div id="cert-provider" key={exp.certProvider}>{exp.certProvider}</div>
                                        </div>
                                        <div className="cert-info-wrapper">
                                            <span>Description:</span>
                                            <div id="cert-desc" key={exp.certDesc}>{exp.certDesc}</div>
                                        </div>
                                        <div className="cert-info-wrapper">
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
}

export default Experience;