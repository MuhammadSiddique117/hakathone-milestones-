// Generate references to the form and display
var form = document.getElementById("Resume-Form");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload 
    // collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b> Editable Resume</b> </h2>\n    <h3>Personal Information</h3>\n    <p><b>Name: </b> <span contenteditale = \"true\">".concat(name, " </span></p>\n    <p><b> Email: </b> <span contenteditale = \"true\"> ").concat(email, "</span></p>;\n    <p> <b> Phone: </b>  <span contenteditale = \"true\">").concat(phone, "</span> </p>;\n    \n    <h3> Education</h3>\n    <p contenteditale = \"true\">").concat(education, "\n    \n    <h3>Experience</h3>\n    <p contenteditale = \"true\">").concat(experience, "\n    \n    <h3> Skills</h3>\n    <p contenteditale = \"true\"> ").concat(skills);
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error(" The resume element is missing.");
    }
});
