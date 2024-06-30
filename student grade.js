function findStudentGrade(){
    let marks = prompt("enter the student marks 0-100");

    if (isNaN(marks) || marks < 0 || marks > 100){

        console.log("Marks should be between 0 and 100.");

    }
    
    if (marks >= 79) {
        return "A";
    }

    else if (marks >= 60){
        return "B";
    }

    else if (marks >= 49){
        return "C";
    }

    else if (marks >= 40){
        return "D"
    }

    else {
        return "E";
    }

}