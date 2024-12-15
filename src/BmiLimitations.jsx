

const BmiLimitations = () => {
  return (
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
  )
}

export default BmiLimitations
