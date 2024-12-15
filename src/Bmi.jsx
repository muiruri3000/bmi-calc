
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
      
    </div>
    
    
    <div className="row my-3 container mx-auto">
    <div className="col-12 col-md-4">
  <div className="row">

    <div className="col-12 col-sm-3 col-md-12 d-flex ">
      <div className="icon_container">
        <img src="./images/icon-eating.svg" alt="eating" />
      </div>
    </div>


    <div className="col-12 col-sm-9 col-md-12">
      <h3 >  Healthy eating</h3>
      <p>
      Healthy eating promotes weight control, disease prevention, better digestion, 
      immunity, mental clarity, and mood.
      </p>
    </div>
  </div>
</div>
      <div className="col-12 col-md-4">
  <div className="row">

    <div className="col-12 col-sm-3 col-md-12 d-flex ">
      <div className="icon_container">
        <img src="./images/icon-exercise.svg" alt="exercise" />
      </div>
    </div>


    <div className="col-12 col-sm-9 col-md-12">
      <h3> Regular exercise</h3>
      <p>
      Exercise improves fitness, aids weight control, elevates mood, and reduces disease 
      risk, fostering wellness and longevity.
      </p>
    </div>
  </div>
</div>


<div className="col-12 col-md-4">
  <div className="row">

    <div className="col-12 col-sm-3 col-md-12 d-flex ">
      <div className="icon_container">
        <img src="./images/icon-sleep.svg" alt="sleep" />
      </div>
    </div>


    <div className="col-12 col-sm-9 col-md-12">
      <h3> Adequate sleep</h3>
      <p>
      Sleep enhances mental clarity, emotional stability, and physical wellness, promoting 
      overall restoration and rejuvenation.
      </p>
    </div>
  </div>
</div>

    </div>
    <div className="row container mb-5 mx-auto  g-3">
      <div className="col-md-6 col-12">
      <h2>Limitations of BMI</h2>
                <p>
                  Although BMI is often a practical indicator of healthy weight, it is not suited for
                  every person. Specific groups should carefully consider their BMI outcomes, and in
                  certain cases, the measurement may not be beneficial to use.
                </p>
        </div>      
      <div className="col-md-6 col-sm-6 col-12">
        
      <div className="card p-3 shadow text-center">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <img src="./images/icon-gender.svg" alt="Race Icon" className="img-fluid icon-image me-2"/>
                    <h5 className="mb-0">Gender</h5>
                  </div>
                  <p>  The development and body fat composition of girls and boys vary with age. Consequently, 
                  a child&apos;s age and gender are considered when evaluating their BMI.</p>
                </div>
        </div> 

        <div className="col-12 col-sm-6 col-md-4 d-none d-lg-block col-lg-4 mx-auto">
                <div className="card shadow p-3 text-center">
                  <div className="d-flex align-items-center justify-content-center mb-3 ">
                  <img src="./images/pattern-curved-line-right.svg" className="image-fluid" alt="right curved line" />
                  </div>
                  
                </div>
              </div>
              <div className="col-12 col-sm-6  col-md-6 col-lg-4 ">
                <div className="card shadow  p-3 text-center">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <img src="./images/icon-age.svg" alt="age Icon" className="img-fluid icon-image me-2"/>
                    <h5 className="mb-0">Age</h5>
                  </div>
                  <p>  In aging individuals, increased body fat and muscle loss may cause BMI to underestimate 
                  body fat content.</p>
                </div>
              </div>
            <div className="col-12 col-sm-6 col-lg-4 col-md-6 col-sm-4 mx-auto">
                <div className="card shadow p-3 text-center">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <img src="./images/icon-muscle.svg" alt="muscle Icon" className="img-fluid icon-image me-2"/>
                    <h5 className="mb-0">Muscle</h5>
                  </div>
                  <p>  BMI may misclassify muscular individuals as overweight or obese, as it doesn&apos;t 
                  differentiate muscle from fat.</p>
                </div>
              </div>

              <div className="col-12 col-sm-6  col-md-6 col-lg-4">
                <div className="card shadow  p-3 text-center">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <img src="./images/icon-pregnancy.svg" alt="pregnancy Icon" className="img-fluid icon-image me-2"/>
                    <h5 className="mb-0">Pregnancy</h5>
                  </div>
                 <p>Expectant mothers experience weight gain due to their growing baby. Maintaining a 
  healthy pre-pregnancy BMI is advisable to minimise health risks for both mother 
  and child.</p>
               
                </div>
              </div>
              
              <div className="col-12 col-sm-6 col-lg-4 mx-md-0">
                <div className="card shadow p-3 text-center">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <img src="./images/icon-race.svg" alt="Race Icon" className="img-fluid icon-image me-2"/>
                    <h5 className="mb-0">Race</h5>
                  </div>
                <p>  Certain health concerns may affect individuals of some Black and Asian origins at 
  lower BMIs than others. To learn more, it is advised to discuss this with your 
  GP or practice nurse.
</p>
               </div>
              </div>
              
     
    </div>
    </div>


  )
}

export default Bmi
