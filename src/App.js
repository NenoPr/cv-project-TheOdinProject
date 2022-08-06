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
    this.setState({ height: height });
  }

  // componentDidUpdate(prevState) {
  //   const updateHeight = document.getElementById('div-for-printing').clientHeight;
  //   if (updateHeight !== this.state.height) {
  //     this.setState({ height: updateHeight });
  //   }
  //   console.log("Old height",this.state.height)
  //   console.log("New height",updateHeight)
  // }

  async reRender(holder) {
    console.log("AAAAAAAAAAAAAAAAAAAAAAA")
    const height = document.getElementById('div-for-printing').clientHeight;
    this.setState({ height: height });
    console.log("adawd",this.state.height)
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
          <div id="generate-cv" onMouseEnter={async () => {await this.reRender("Example");} }>
            <ReactToPrint
              trigger={() => (
                <button>Generate CV</button>
              )}
              content = {() => this.componentRef}
              documentTitle="CV Output"
              pageStyle={`@page { size: 1280px ${this.state.height}px; }`}
            />
          </div>
          <div id="footer"> CV Maker by :&nbsp;<img src={require("./GitHub-Mark-32px.png")} alt="Github logo" /><a href='https://github.com/NenoPr' target={"_blank"}>&nbsp;NenoPr</a></div>
        </div>
    )
  }
}

export default App;
