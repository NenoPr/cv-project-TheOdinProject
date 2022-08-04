import React, { Component } from "react";
import uniqid from "uniqid"

const CertCompleted = [{
    certTitle: "Full-Stack Web Developer",
    certProvider: "The Odin Project",
    certDesc: "An online learning resource that covers Full-Stack Web Development with HTML, CSS, Javascript, Node etc.",
    durationFrom: "28.05.2022.",
    durationTo: "30.09.2022.",
    id: "CertCompleted_1",
    editCert: false,
}]

const createNewCert = () => {

    CertCompleted.push({
        certTitle: "",
        certProvider: "",
        certDesc: "",
        durationFrom: "",
        durationTo: "",
        id: uniqid(),
        editCert: true,
    })

    return CertCompleted[CertCompleted.length-1]
}

const removeCert = (e) => {

    let counter = 0;
    CertCompleted.map((data) => {
        if (data.id === e.target.attributes["data"].value) {
            CertCompleted.splice(counter,1)
        }
        counter++;
    })
}


const editCertData = (newProps) => {

    const props = newProps
    CertCompleted.map((data) => {
        if (data.id === props.id) {

            data.certTitle = props.certTitle
            data.certProvider = props.certProvider
            data.certDesc = props.certDesc
            data.durationFrom = props.durationFrom
            data.durationTo = props.durationTo
            data.id = props.id
            data.editCert = false

        }
    })
}

export {editCertData, CertCompleted, createNewCert, removeCert};