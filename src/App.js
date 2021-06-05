import Triangle from "./Classes/Triangle";
import {useState} from "react"

function App() {
    const [triangleType, setTriangleType] = useState("")
    const calcBtnClick = () => {
        const triangle = new Triangle(
            document.getElementById('a').value,
            document.getElementById('b').value,
            document.getElementById('c').value,
            document.getElementById("canvasBox")
        )
        if(triangle.validate()){
            console.log(triangle.triangleType())
            setTriangleType(triangle.triangleType())
        }
    }

  return (
    <div className="App">
          <div className="container">
              <div className="box">
                  <canvas
                      id="canvasBox"
                      className="triangle"
                      width= "400"
                      height="200"
                  ></canvas>
                  <div className="triangle-type">
                      {triangleType}
                  </div>
              </div>
              <div className="input">
                  <div className="input-field">
                      <label htmlFor="a">A-side:</label>
                      <input type="text" name="a" id="a"></input>
                  </div>
                  <div className="input-field">
                      <label htmlFor="b">B-side:</label>
                      <input type="text" name="b" id="b"></input>
                  </div>
                  <div className="input-field">
                      <label htmlFor="c">C-side:</label>
                      <input type="text" name="c" id="c"></input>
                  </div>
                  <button onClick={() => calcBtnClick()} id="calcBtn">Calculate</button>
              </div>
          </div>
          <div className="text-box">
              <div className="text-box__container">
                  <div className="header">Task 1</div>
                  <div className="body">
                      <ul>
                          <li>1.1 Try to list as many test case (attempts) as possible to test the software:</li>
                          <li>['5','5','5']</li>
                          <li>['5','4','3']</li>
                          <li>['a','b','c']</li>
                          <li>['@','#','(']</li>
                          <li>['1','1','9']</li>
                          <li>[' ',' ',' ']</li>
                      </ul>
                      <ul>
                          <li>1.2 Which of the listed test attempts are the 3 most important to validate that the
                              functionality works correctly?
                          </li>
                          <li>3, 4, 6</li>
                      </ul>
                  </div>
                  <div className="header">Task 2</div>
                  <div className="body">
                      <ul>
                          <li>
                              Please explain what this class might be used for and fill out the question marks in the
                              testing function below the class to show what values are expected:
                          </li>
                          <li>
                              This class might be used to validate country code or some other data, before sending it on
                              server side.
                          </li>
                          <li>
                              2.1	ValidationSuccess()<br></br>
                              2.2	ValidationSuccess()<br></br>
                              2.3	ValidationError(ERR_3_LETTER_COUNTRY_CODE)<br></br>
                              2.4	ValidationSuccess()<br></br>
                              2.5	ValidationError(ERR_3_LETTER_COUNTRY_CODE)
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
    </div>
  );
}

export default App;
