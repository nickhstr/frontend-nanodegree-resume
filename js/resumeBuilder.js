/*
This is empty on purpose! Your code to build the resume will go here.
 */
var data = "%data%";

var bio = {
    "name": "Nick Hester",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(209) 620-2321",
        "email": "nickhstr@gmail.com",
        "github": "nickhstr",
        "location": "South San Francisco, CA"
    },
    "welcomeMessage": "Something, something, something, Dark Side.",
    "skills": [
        "HTML", "CSS", "JavaScript", "Project Management", "Sales"
    ],
    "biopic": "http://i1168.photobucket.com/albums/r498/nickhstr/FB_IMG_1447821803744_zps2zinmaw0.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
        var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
        var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

        //Header
        $("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic).append(formattedWelcomeMsg);

        //Contacts
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        
        //Skills
        if (bio.skills.length) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace(data, skill);
                $("#skills").append(formattedSkill);
            });
        }
    }
};

var work = {
    "jobs": [{
        "employer": "Wave Broadband",
        "title": "Sales Representative",
        "dates": "December 2015 - Present",
        "location": "Daly City, CA",
        "description": "What good is a reward if you ain't around to use it? Besides, attacking that battle station ain't my idea of courage. It's more like…suicide. Your eyes can deceive you. Don't trust them. I can't get involved! I've got work to do! It's not that I like the Empire, I hate it, but there's nothing I can do about it right now. It's such a long way from here."
    }, {
        "employer": "Comcast",
        "title": "Xfinity Sales Professional",
        "dates": "May 2015 - December 2015",
        "location": "San Francisco, CA",
        "description": "I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. Ye-ha! In my experience, there is no such thing as luck. You mean it controls your actions?"
    }],
    "display": function() {
        if (work.jobs.length) {
            $("#workExperience").append(HTMLworkStart);
            work.jobs.forEach(function(job) {
                var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
                var formattedTitle = HTMLworkTitle.replace(data, job.title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);

                var formattedDates = HTMLworkDates.replace(data, job.dates);
                $(".work-entry:last").append(formattedDates);

                var formattedWorkLocation = HTMLworkLocation.replace(data, job.location);
                $(".work-entry:last").append(formattedWorkLocation);

                var formattedWorkDescription = HTMLworkDescription.replace(data, job.description);
                $(".work-entry:last").append(formattedWorkDescription);
            });
        }
    }
};

var projects = {
    "projects": [{
        "title": "Calculator",
        "dates": "2016",
        "description": "A simple JavaScript calculator. For those days when you and Math don't get along.",
        "images": [
            "images/calculator.jpg"
        ],
        "link": "http://codepen.io/nickhstr/full/BjPzLJ/"
    }, {
        "title": "Pomodoro Timer",
        "dates": "2016",
        "description": "A no-frills Pomodoro Timer. This tool reminds you to take a quick break from being a beast. Both the timer and break counts are customizable.",
        "images": [
            "images/timer.jpg"
        ],
        "link": "http://codepen.io/nickhstr/full/qbMaJV/"
    }],
    "display": function() {
        if (projects.projects.length) {
            projects.projects.forEach(function(project) {
                $("#projects").append(HTMLprojectStart);

                var formattedTitle = HTMLprojectTitle.replace("#", project.link).replace(data, project.title);
                var formattedDates = HTMLprojectDates.replace(data, project.dates);
                var formattedDescription = HTMLprojectDescription.replace(data, project.description);

                $(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription);

                project.images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace(data, image);

                    $(".project-entry:last").append(formattedImage);
                });
            });
        }
    }
};

var education = {
    "schools": [{
        "name": "California State University, Chico",
        "location": "Chico, CA",
        "degree": "BS",
        "majors": [
            "Project Management",
            "Applied Computer Graphics"
        ],
        "dates": "2011 - 2015",
        "url": "http://www.csuchico.edu/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "March 2016 - Present",
        "url": "https://www.udacity.com/"
    }, {
        "title": "Full-Stack Development Certification",
        "school": "Free Code Camp",
        "date": "January 2016 - Present",
        "url": "http://www.freecodecamp.com/"
    }],
    "display": function() {
        if (education.schools.length) {
            education.schools.forEach(function(school) {
                $("#education").append(HTMLschoolStart);

                var formattedName = HTMLschoolName.replace(data, school.name);
                var formattedDegree = HTMLschoolDegree.replace(data, school.degree);
                var formattedNameDegree = formattedName + formattedDegree;
                var formattedDates = HTMLschoolDates.replace(data, school.dates);
                var formattedLocation = HTMLschoolLocation.replace(data, school.location);

                $(".education-entry:last").append(formattedNameDegree).append(formattedDates).append(formattedLocation);

                school.majors.forEach(function(major) {
                    var formattedMajor = HTMLschoolMajor.replace(data, major);

                    $(".education-entry:last").append(formattedMajor);
                });
            });
        }
        if (education.onlineCourses.length) {
            $("#education").append(HTMLonlineClasses);
            education.onlineCourses.forEach(function(course) {
                $("#education").append(HTMLonlineStart);

                var formattedTitle = HTMLonlineTitle.replace("#", course.url).replace(data, course.title);
                var formattedSchool = HTMLonlineSchool.replace(data, course.school);
                var formattedTitleSchool = formattedTitle + formattedSchool;
                var formattedDate = HTMLonlineDates.replace(data, course.date);

                $(".online-entry:last").append(formattedTitleSchool).append(formattedDate);
            });
        }
    }
};


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);