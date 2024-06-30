function individualsNetSalary(individualsNetSalary){
    

   // calculating NHIF deduction

   if (grossSalary <= 5999){

    NHIF = 150;

   }

   else if (grossSalary <= 7999){

    NHIF = 300;

   }

   else if (glossSalary <= 11999){

    NHIF = 400;

   }

   else if (glossSalary <= 14999){

    NHIF = 500;


   }
   else if (grossSalary <= 19999){

    NHIF = 600;

   }

   else if (grossSalary <= 24999){

    NHIF = 750;

   }

   else if (grossSalary <= 29999){

    NHIF = 850;

   }

   else if (grossSalary <= 34999){

    NHIF = 900;

   }

   else if (grossSalary <= 39999){

    NHIF = 950;

   }


   // CALCULATING THE TOTAL NET SALARY

   let individualsNetSalary = grossSalary - payee - NHIF;


}