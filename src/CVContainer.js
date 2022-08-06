import React from 'react';
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import './App.css';
import './css/BasicInfo.css'
import './css/Experience.css'
import './css/Education.css'
import './css/Certificates.css'
import './css/Skills.css'
import './css/Languages.css'
import './css/ExtraInfo.css'
import BasicInfo from './components/BasicInfo';
import Experience from './components/Experience';
import Education from './components/Education'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Languages from './components/Languages'
import ExtraInfo from './components/ExtraInfo'


class CVContainer extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
          <div id="main-content-container">
            <div id="profile-info-container">
              <BasicInfo />
            </div>
            <div id="root-experience-container">
              <Experience />
            </div>
            <div id="root-education-container">
              <Education />
            </div>
            <div id="root-certificates-container">
              <Certificates />
            </div>
            <div id="root-skills-container">
              <Skills />
            </div>
            <div id="root-languages-container">
              <Languages />
            </div>
            <div id="root-extra-container">
              <ExtraInfo />
            </div>
          </div>
    )
  }
}

export default CVContainer;
