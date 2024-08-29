import {useState} from 'react'
import './App.css'

const App = () => {

  const[height,setHeight] = useState("");
  const[weight,setweight] = useState("");
  const[bmi,setBmi] = useState(null);
  const[bmiStatus,setBmiStatus] = useState("");
  const[errorMessage,setErrorMessage] = useState("");

  function CalculateBmi (){
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if(isValidHeight && isValidWeight){
      const heightInMeters = height / 100;
      const BMI = weight / (heightInMeters * heightInMeters);
      setBmi(BMI.toFixed(2));
      if(BMI < 18.5){
        setBmiStatus("Underweight");
      }else if(BMI >= 18.5 && BMI < 24.9){
        setBmiStatus("Normal Weight");
      }else if(BMI >= 24.9 && BMI < 29.9){
        setBmiStatus("Overweight");
      }else{
        setBmiStatus("Obese");
      }
      setErrorMessage("");
    }else{
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please Enter valid numeric values to get the report")
    }
  }

  function Clear(){
    setHeight("")
    setweight("")
    setBmi(null)
    setBmiStatus("")
  }

  return (
    <>
      <div className='bmi-calculator'>
        <div className='box'></div>
        <div className='data'>
          <h1>BMI CALCULATOR</h1>
          {errorMessage && <p className='error'>{errorMessage}</p>}
          <div className='input-container'>
            <label htmlFor='height'>Height(cm):</label>
            <input type='number' id='height' value={height} placeholder='Enter Height in cms' onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className='input-container'>
            <label htmlFor='weight'>Weight(kg):</label>
            <input type='number' id='weight' value={weight} placeholder='Enter Weight in kgs' onChange={(e) => setweight(e.target.value)} />
          </div>
          <button onClick={CalculateBmi}>Calculate BMI</button>
          <button onClick={Clear}>Clear</button>
          {bmi!==null && (
            <div className='result'>
              <p>{bmi}</p>
              <p>{bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App;
