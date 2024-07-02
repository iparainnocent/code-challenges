function getStudentGrade() {
    while (true) {
      let marks = prompt("Enter the student's marks (0-100):");
  
      if (marks === null) {
        return; // User cancelled the prompt
      }
  
      marks = parseFloat(marks);
  
      if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Marks must be between 0 and 100. Please try again.");
        continue;
      } else if (marks >= 80) {
        return "A";
      } else if (marks >= 60) {
        return "B";
      } else if (marks >= 49) {
        return "C";
      } else if (marks >= 40) {
        return "D";
      } else {
        return "E";
      }
    }
  }