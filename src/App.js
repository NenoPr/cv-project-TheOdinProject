import React from 'react';
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { ComponentToPrint } from 'react-to-print';
import './App.css';
import CVContainer from './CVContainer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  getInitialState() {
  	return { state: 0 };
  }
  

  componentDidMount() {
    const height = document.getElementById('div-for-printing').clientHeight;
    this.setState({ height });
  }

  render() {

    return (
        <div id="main-container">
          <div id="header"> CV Maker 📝</div>
          <div id="div-holding-print">
            <div ref={el=>this.componentRef=el} id="div-for-printing">
              <CVContainer />
            </div>
          </div>
          <div id="generate-cv">
          <ReactToPrint
            trigger={() => (
              <button>Generate CV</button>
            )}
            content = {() => this.componentRef}
            documentTitle="CV Output"
            pageStyle={`@page { size: 1280px ${this.state.height + 20}px; }`}

          />
          
          </div>

          <div id="footer"> CV Maker by :&nbsp;<img src={require("./GitHub-Mark-32px.png")} alt="Github logo" /><a href='https://github.com/NenoPr' target={"_blank"}>&nbsp;NenoPr</a></div>
        </div>
    )
  }
}

export default App;
