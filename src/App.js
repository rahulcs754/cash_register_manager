//import react from "react";
import "./styles.css";

export default function App() {
  const noOfNotes = document.querySelectorAll(".noOfNotes");
  const noteList = [2000, 500, 100, 50, 10, 5, 1];
  const childbox = document.querySelectorAll(".childContainer");

  const nextClickHandler = (e) => {
    const billAmount = document.querySelector("#billAmount");
    const childbox = document.querySelectorAll(".childContainer");

    if (billAmount.value === "") {
      alert("Please Enter Bill Amount");
    } else {
      childbox[0].style.display = "block";
    }
  };

  /* Only number support */
  const NumericOnly = (e) => {
    //angka only
    const reg = /^[0-9\b]+$/;
    let preval = e.target.value;
    if (e.target.value === "" || reg.test(e.target.value)) return true;
    else e.target.value = preval.substring(0, preval.length - 1);
  };

  /* check button product */
  const checkClickHandler = (e) => {
    clearOldNoteCounter();
    const billAmount = document.querySelector("#billAmount");
    const givenAmount = document.querySelector("#givenAmount");

    if (givenAmount.value === "") {
      alert("Please enter cash given");
    } else {
      if (billAmount.value <= givenAmount.value) {
        let returnAmt = givenAmount.value - billAmount.value;

        for (let index = 0; index < noteList.length; index++) {
          let element = noteList[index];
          if (returnAmt >= element) {
            let notes = Math.floor(returnAmt / element);
            returnAmt = returnAmt - notes * element;
            noOfNotes[index].innerText = `${notes}`;
          }
        }
      } else {
        alert("bill amount should be less then given amount");
      }

      childbox[1].style.display = "block";
    }
  };

  function clearOldNoteCounter() {
    for (let notes of noOfNotes) {
      notes.innerText = "";
    }
  }

  return (
    <div className="container">
      <h2>Cash Register Manager</h2>
      <p>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </p>
      <h2>Bill Amount:</h2>
      <br />
      <input type="number" id="billAmount" onChange={NumericOnly} />
      <br />
      <br />
      <button onClick={nextClickHandler}>Next</button>

      <div className="childContainer">
        <h2>Cash Given</h2>
        <input type="number" id="givenAmount" onChange={NumericOnly} />
        <br />
        <br />
        <button onClick={checkClickHandler}>Check</button>
      </div>
      <div className="childContainer">
        <h2>Return Change:</h2>

        <table>
          <tbody>
            <tr>
              <td>No Of notes</td>
              <td className="noOfNotes"></td>
              <td className="noOfNotes"></td>
              <td className="noOfNotes"></td>
              <td className="noOfNotes"></td>
              <td className="noOfNotes"></td>
              <td className="noOfNotes"></td>
              <td className="noOfNotes"></td>
            </tr>
            <tr>
              <td>Note</td>
              <td>2000</td>
              <td>500</td>
              <td>100</td>
              <td>50</td>
              <td>20</td>
              <td>5</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
