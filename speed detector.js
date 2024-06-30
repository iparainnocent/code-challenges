function speedOfTheCar (){

    if (speed < 70){

        console.log("OK");
    }

    else {
        
        const demeritPoints = ("5km/s above speed limit(70)");
        console.log(`ponts, ${demeritPoints}`)


        if (demeritPoints > 12) {
            console.log("lisence suspended");
        }
    }
}