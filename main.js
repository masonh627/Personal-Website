// TODO:
// Add information to contact form
// Input info about 10 classes
// Make information form work and do stuff ig

// Get all web elements
const FORMSUBMIT = document.getElementById("submit");
const PROJECTLIST = document.getElementById("projectlist");
const COURSELIST = document.getElementById("courseslist");
const HOBBIES = document.getElementById("hobbies");
const ABOUTME = document.getElementById("aboutme");
const INTERESTS = document.getElementById("interests");
const ADDRESS = document.getElementById("contactinfo");
const FORM = document.getElementById("contactform");

// Define the about me data
const ABOUT_ME_DATA = [
    "Name: Mason Hedger", // Name
    "School: Southeast Missouri State University", // Education
    "Grade: Freshman", // Grade
    "GPA: 3.87", // GPA
    "Current Occupation: Consultant Agent", // Current job
];

// List of my current hobbies
const HOBBY_DATA = [
    "Coding",
    "Learning",
    "Creating Projects",
    "Networking",
    "Organizing"
];

// All things interesting to me
const INTERESTS_DATA = [
    "OpSec",
    "Intersection of AI and Cyber",
    "Linux Distros",
    "PC Setup"
]

// All of my course data
// I ran out of major related classes, so i ended up adding normal ones too.
const COURSE_DATA = [
    ["CS 155", "Computer Science 1", "Error Handling","Input Sanatation", "OOP", "Java Based"], // Main title, smaller subtitle, what i learned
    ["IS 245", "Web Development & Security", "DOM Manipulation", "JS", "CSS", "HTML"],
    ["CS 245", "Discrete Structures", "Set & Functions", "Sequences", "Proof-Writing", "O(n) notation"],
    ["TN 275", "Intro to Networking", "IpV4 & IpV6", "Network Config", "Server Confiugration"],
    ["MA 223", "Elementary Statistics", "Probability Distributions", "Data Visualising"],
    ["MA 155", "Statistical Reasoning", "Drawing Conclusion from Data", "Assertations"],
    ["BA 252", "Business Communication", "Formal Communcation", "Proper Etiquette"],
    ["CS 101", "Intro to Computer Science", "Python", "Project Managment", "Collaborative Programming"],
    ["EN 101", "English Composition", "Grammar rules", "APA and MLA", "Logical arguments"],
    ["EN 102", "Rhet & Crit Thinking", "Mediums of Communication", "Digital Communication"]
]

// ALL of my project data, continues the same form as course data
const PROJECT_DATA = [
    ["Java Game API", "https://github.com/masonh627/Java-Game-API", "Provides the developer with a simple library to make 2D games."],
    ["This Website", "https://github.com/masonh627/Personal-Website", "The GitHub repo for this very website"]
]

// all of my contact info
const CONTACT_INFO = [];


// Function that loads the about me data on the page
function listAboutMe(){
    let list = document.createElement("ul");

    for(let i = 0; i < ABOUT_ME_DATA.length; i++){
        let item = document.createElement("li");

        item.textContent = ABOUT_ME_DATA[i];
        list.appendChild(item);
    }

    let bio = document.createElement("p")

    bio.innerText = "Hello! My name is Mason Hedger, I study cybersecurity at SEMO. I am always eager to learn and push myself. I have been an avid programmer since the age of 9, I love to tinker and learn the why behind the how!" // Plain text introduction of myself

    ABOUTME.appendChild(list);
    ABOUTME.appendChild(bio);
}

// Function that loads the hobby data on the page
function listHobbies() {
    let list = document.createElement("ol");

    for(let i = 0; i < HOBBY_DATA.length; i++){
        let item = document.createElement("li");

        item.textContent = HOBBY_DATA[i];
        list.appendChild(item);
    }

    HOBBIES.appendChild(list);
}

// Function that loads the interest data on the page
function listInterests() {
    let list = document.createElement("ol");

    // Itterate over array and add data to list parent
    for(let i = 0; i < INTERESTS_DATA.length; i++){
        let item = document.createElement("li");

        item.textContent = INTERESTS_DATA[i];
        list.appendChild(item);
    }

    INTERESTS.appendChild(list);
}

// Function that fills in the information for the courses
function fillCourses(){
    for(let i = 0; i < COURSE_DATA.length; i++){
        // Course number
        let course = document.createElement("li");
        course.innerText = COURSE_DATA[i][0];
        course.setAttribute("class", "course")

        // Subheading that is the proper title of the class
        let subheading = document.createElement("h6");
        subheading.innerHTML = COURSE_DATA[i][1];
        course.appendChild(subheading)

        // Bulleted list of things learned
        let list = document.createElement("ol");
        // Loop and add the rest of the bulleted data
        for(let k = 2; k < COURSE_DATA[i].length; k++){
            let item = document.createElement("li");
            item.innerHTML = COURSE_DATA[i][k];

            list.appendChild(item);
        }

        // Once all the data is filled add it to course list
        course.appendChild(list)
        COURSELIST.appendChild(course);

    }
}

// Function that fills in the information for the courses
function fillProjects(){
    // Iterate over all projects
    for(let i = 0; i < PROJECT_DATA.length; i++){
        // Course number
        let project = document.createElement("li");
        project.innerText = PROJECT_DATA[i][0];
        project.setAttribute("class", "project")

        // Spacing
        project.appendChild(document.createElement("br"))

        // Create small link at the top
        let link = document.createElement("a");
        link.setAttribute("href", PROJECT_DATA[i][1])
        link.setAttribute("target", "_blank");
        link.innerText = "See the project here";
        project.appendChild(link);

        // Fill the box with the description of the project
        let description = document.createElement("p");
        description.innerHTML = PROJECT_DATA[i][2];
        project.appendChild(description);

        PROJECTLIST.appendChild(project);
    }
}


// Fills in my personal contact details
function fillContactInfo() {
    // information for all of my contact info
    let email = "masonhedger.buisness@proton.me"
    let cell = "1 (309) 830-7666"
    let github = "https://github.com/masonh627"

    ADDRESS.innerHTML = `<p>Email: ${email}<br>Cell: ${cell}<br>Github: <a href=${github} class="link">${github}</a></p>`
}

// code that is called when the contact form is submitted
function contactSubmit() {

    // Get data from contact form
    let formdata = new FormData(FORM);

    // get all the form data
    let firstName = formdata.get("firstname");
    let lastName = formdata.get("lastname");
    let email = formdata.get("email");
    let additionalInfo = formdata.get("info");
    // alert user to confirm that this data is correct
    if (window.confirm("Does this info look correct?\nName: " + firstName + " " + lastName + "\nEmail: " + email + "\nAdditional Info: " + additionalInfo)){
        console.log("Client entered form data");
        console.log(firstName, lastName, email, additionalInfo);
    }
}

// Main function that handles DOM maniplation order
function main() {
    listAboutMe()
    listHobbies()
    listInterests()
    fillCourses()
    fillProjects()
    fillContactInfo()
}

main() 

// Contact form submit button listener
document.getElementById("submit").addEventListener("click", contactSubmit)