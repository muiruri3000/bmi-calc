import { useState } from "react";

const Header = () => {
const [user, setUser] = useState({
  
  height: '',    
  weight: '',   
  feet: '',     
  inches: '',    
  stones: '',    
  pounds: '',    
  system: 'metric', // Default system
}); 

const [bmiResult, setBmiResult] = useState(null); 
const [bmiStatus, setBmiStatus] = useState("");
const [selectedSystem, setSelectedSystem] = useState('metric');

const handleSystemChange = (e) =>{
  setSelectedSystem(e.target.id)
}


const handleChange = (e)=>{
  const {name, value} = e.target; 

  const updateUser = {
    ...user,
    [name]:value,
  };
  setUser(updateUser);

  if(updateUser.height && updateUser.weight || updateUser.feet & updateUser.inches && updateUser.pounds && updateUser.stones){
    calculateBMI(updateUser)
  }
};


const calculateBMI = (updateUser)=>{



  if(selectedSystem === 'metric'){
  
  const height = parseFloat(updateUser.height) / 100; 
  const weight = parseFloat(updateUser.weight); 

  if(height && weight && height <310 && weight < 300){
    let bmi = (weight / (height * height)).toFixed(1); 
  
    setBmiResult(bmi); 
    bmiScale(bmi); 
  }else{
    
      setBmiResult(null);
      setBmiStatus("Invalid Input");
    
  }
  
 
  }

   
  if(selectedSystem === 'imperial'){
    const feet = parseFloat(updateUser.feet) || 0;
    const inches = parseFloat(updateUser.inches) || 0;
    const stones = parseFloat(updateUser.stones) || 0;
    const pounds = parseFloat(updateUser.pounds) || 0;

    const totalHeightInInches = feet * 12 + inches;
    const totalWeightInPounds = stones * 14 + pounds;

    if (totalHeightInInches > 0 && totalWeightInPounds > 0) { // Validations
      const bmi = ((totalWeightInPounds / (totalHeightInInches * totalHeightInInches)) * 703).toFixed(1);
      setBmiResult(bmi);
      bmiScale(bmi);

   
    } else {
      setBmiResult(null);
      setBmiStatus("Invalid Input");
    }
  }

}

const bmiScale = (bmi)=>{
   const bmiCategories = {
    underweight :{min:0, max:18.4},
        normal: {min:18.5, max:24.9},
        overweight:{min:25, max: 29.9},
        'class 1 obese':{min:30, max:34.9},
        'class 2 obese':{min:35, max:39.9},
        'morbid obese':{min:40, max:Infinity}
   }

   for(let category in bmiCategories){
    const range = bmiCategories[category];
    
    if(bmi >= range.min && bmi <=range.max){
       setBmiStatus(category.replace(/([A-Z])/g, ' $1').toLowerCase()); 
       return;
  }
}
return 'invalid bmi';

    
   }

  return (
    <>
    
    <div className="header ">
      <div className="banner row " >
        
        <img src="../public/images/logo.svg" alt="logo" />
        <div className="img_container col-sm-12 col-md-8" >
        
        </div>
        <div className="rightSide col-md-4 col-sm-12">
        <div className="calcContainer">

<h5>Enter your details:</h5>
          <div className="row">
            <div className="col">
              <div className="form-check">
                <input
                 type="radio" 
                 name="system" 
                 id="metric" 
                 className="form-check-input" 
                 min="1" 
                 onChange={handleSystemChange}

                 checked = {selectedSystem === 'metric'}/>
                <label htmlFor="Metric" className="form-check-label">Metric</label>
              </div>
            </div>
            <div className="col">
              <label htmlFor="Imperial" className="form-check-label">
                <input 
                type="radio" 
                name="system" 
                min="1" 
                className="form-check-input" 
                id="imperial"
                onChange={handleSystemChange}

                checked = {selectedSystem === 'imperial'}
                /> Imperial
              </label>
            </div>
          </div>
          {selectedSystem === "metric" && (
          <div className="row metricDisplay my-4">
            <div className="col">
              <label className="form-check-label d-block" htmlFor="height">Height</label>
              <div className="input-group">
                <input 
                type="number"
                className="form-control" 
                name="height" 
                id="height"
                value={user.height}
                onChange={handleChange}
                />
                <span className="input-group-text">cm</span>
              </div>
            </div>
            <div className="col">
              <label className="form-check-label d-block" htmlFor="weight">Weight</label>
              <div className="input-group">
                <input 
                type="number" 
                className="form-control" 
                name="weight" 
                id="weight"
                value={user.weight}
                onChange={handleChange}
                />
                <span className="input-group-text">kg</span>
              </div>
            </div>
          </div>

          )}

          {selectedSystem==="imperial" && (
          <div className="imperialDisplay ">
            <div className="row my-3">
              <div className="col">
                <label className="form-check-label d-block" htmlFor="ft">Height</label>
                <div className="input-group">
                  <input 
                  type="number" 
                  className="form-control" 
                  name="feet" id="feet"
                  onChange={handleChange}
                  />
                  <span className="input-group-text">ft</span>
                </div>
              </div>
              <div className="col">
                <label className="form-check-label d-block" htmlFor="in">.</label>
                <div className="input-group">
                  <input 
                  type="number" 
                  className="form-control" 
                  name="inches" 
                  id="inches"
                  onChange={handleChange}
                  />
                  <span className="input-group-text">in</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-check-label d-block" htmlFor="st">Weight</label>
                <div className="input-group">
                  <input 
                  type="number" 
                  className="form-control" 
                  name="stones" 
                  id="stones"
                  onChange={handleChange}
                  />
                  <span className="input-group-text">st</span>
                </div>
              </div>
              <div className="col">
                <label className="form-check-label d-block" htmlFor="lbs">.</label>
                <div className="input-group">
                  <input 
                  type="number" 
                  className="form-control" 
                  name="pounds" 
                  id="pounds"
                  onChange={handleChange}
                  />
                  <span className="input-group-text">lbs</span>
                </div>
              </div>
            </div>
          </div>

          )}

          <div className="displayDiv text-white">
            <div className="row align-items-center">
           
            
            <div className="col-md-4 col-sm-5">
              <h6>Your BMI is...</h6>
              <p id="bmi">{bmiResult}</p>
            </div>
            <div className="col-md-8 col-sm-7">
              <p>Based on your bmi you are <span id="result">{bmiStatus}</span>. <span id="ideal"></span></p>
            </div>
            
            </div>
          </div>
        </div>


    </div>
    </div>
 
  </div>
    </>
  )
}

export default Header
