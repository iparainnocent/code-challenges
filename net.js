function individualsNetSalary(individualsNetSalary){
    

   // calculating NHIF deduction

   if (grossSalary <= 6000){

    NHIF = 150;

   }

   else if (grossSalary <= 8000){

    NHIF = 300;

   }

   else if (glossSalary <= 12000){

    NHIF = 400;

   }

   else if (glossSalary <= 15000){

    NHIF = 500;


   }
   else if (grossSalary <= 20000){

    NHIF = 600;

   }

   else if (grossSalary <= 25000){

    NHIF = 750;

   }

   else if (grossSalary <= 30000){

    NHIF = 850;

   }

   else if (grossSalary <= 35000){

    NHIF = 900;

   }

   else if (grossSalary <= 40000){

    NHIF = 950;

   }


   
   // Calculate net salary
   const individualsNetSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

   console.log(`Gross Salary: KES ${grossSalary.toFixed(2)}`);
   console.log(`Payee (Tax): KES ${payee.toFixed(2)}`);
   console.log(`NHIF Deduction: KES ${nhifDeduction.toFixed(2)}`);
   console.log(`NSSF Deduction: KES ${nssfDeduction.toFixed(2)}`);
   console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);
 }
 
 calculateNetSalary();