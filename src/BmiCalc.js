
// const calculateBMI = (updateUser)=>{
//     const height = parseFloat(updateUser.height) / 100; 
//     const weight = parseFloat(updateUser.weight); 
  
//     if(height && weight && height <310 && weight < 300){
//       let bmi = (weight / (height * height)).toFixed(1); 
  
//       setBmiResult(bmi); 
//       bmiScale(bmi); 
//     }
  
//   }
  
//   const bmiScale = (bmi)=>{
//      const bmiCategories = {
//       underweight :{min:0, max:18.4},
//           normal: {min:18.5, max:24.9},
//           overweight:{min:25, max: 29.9},
//           'class 1 obese':{min:30, max:34.9},
//           'class 2 obese':{min:35, max:39.9},
//           'morbid obese':{min:40, max:Infinity}
//      }
  
//      for(let category in bmiCategories){
//       const range = bmiCategories[category];
      
//       if(bmi >= range.min && bmi <=range.max){
//         return setBmiStatus(category.replace(/([A-Z])/g, ' $1').toLowerCase()); 
//     }
//   }
//   return 'invalid bmi';
  
      
//      }

//      export default {bmiScale,calculateBMI}
  

