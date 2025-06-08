import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weight , setWeight] = useState(0);
  const [height , setHeight] = useState(0);
  const [bmi , setBmi] = useState(0);
  const [message , setMessage] = useState("");

  let calBmi = (event)=>{
      event.preventDefault();
      if(weight === 0 || height === 0){
        alert("Please Enter Valid Values");
      }
      else{
        let bmi = (weight / ((height*height) * 703));
        setBmi(bmi);

        if(bmi < 25){
          setMessage("you are underweight");
        }
        else if(bmi >= 25 && bmi <= 30){
          setMessage("fit hai boos!");
        }
        else{
          setMessage("overweight!")
        }
      }
  }

  let reload = () =>{
    window.location.reload();
  }

  return (
      <div className='App'>
        <div className='container'>
             <h2>BMI Calculator</h2>
             <form onSubmit={calBmi}>
              <div>
                <label htmlFor="weight">Weight (ibs) : </label>
                <input 
                  type="number" 
                  name="weight" 
                  id="weight" 
                  placeholder='Enter your Weight' 
                  value={weight} onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="height"> Height (in) :</label>
                <input 
                  type="number" 
                  name="height" 
                  id="height" 
                  placeholder='Enter your height' 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className='btns'>
                <button className='btn' type='submit'>Submit</button>
                <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
              </div>

              <div className='center'>
                <h3>Your BMI is : {bmi}</h3>
                <p>{message}</p>
              </div>
             </form>
        </div>
      </div>
  )
}

export default App
