import HealthyPlan from "./HealthyPlan"
import BmiLimitations from "./BmiLimitations"
const Bmi = () => {
  return (
    <div className="container-fluid">
    <div className="row mt-3 container bmi align-items-center
    mx-auto">
        <div className="col-md-6 col-sm-12">
            <img src="./images/image-man-eating.webp" className="img-fluid" alt="man eating" />
        </div>
        <div className="col-md-6 col-sm-12">
        <h2 className="my-3">What your BMI result means</h2>
<p >
A BMI range of 18.5 to 24.9 is considered a healthy weight. Maintaining a 
healthy weight may lower your chances of experiencing health issues later on, 
such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced 
fat and sugar content, incorporating ample fruits and vegetables. Additionally, 
strive for regular physical activity, ideally about 30 minutes daily for 
five days a week.
   </p>
   
        </div>

        <div className="rightImage img-fluid">
        <img src="./images/pattern-curved-line-left.svg" alt="left image" />
        </div>
      
    </div>
    
  {/* replace content */}

    <HealthyPlan />

   < BmiLimitations />
    </div>


  )
}

export default Bmi
