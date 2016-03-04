/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name": "Nick Hester",
	"role": "Web Developer",
	"contactInfo": {
		"mobile": "(209) 620-2321",
		"email": "nickhstr@gmail.com",
		"github": "nickhstr",
		"location": "South San Francisco"
	},
	"pictureUrl": "http://i1168.photobucket.com/albums/r498/nickhstr/FB_IMG_1447821803744_zps2zinmaw0.jpg",
	"welcomeMsg": "Something, something, something, Dark Side.",
	"skills": [
		"HTML", "CSS", "JavaScript", "Project Management", "Sales"
	]
};
var work = {
	"jobs": [
	{
		"employer": "Wave Broadband",
		"title": "Sales Representative",
		"dates": "December 2015 - Present",
		"location": "Daly City, CA",
		"description": "What good is a reward if you ain't around to use it? Besides, attacking that battle station ain't my idea of courage. It's more like…suicide. Your eyes can deceive you. Don't trust them. I can't get involved! I've got work to do! It's not that I like the Empire, I hate it, but there's nothing I can do about it right now. It's such a long way from here."
	},
	{
		"employer": "Comcast",
		"title": "Xfinity Sales Professional",
		"dates": "May 2015 - December 2015",
		"location": "San Francisco, CA",
		"description": "I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. Ye-ha! In my experience, there is no such thing as luck. You mean it controls your actions?"
	}
	]
};


var education = {};
education["name"] = "Udacity";
education["years"] = "2016 - Present";
education["city"] = "Mountain View, CA";

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

//Header
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').append(formattedBioPic);
$('#header').append(formattedWelcomeMsg);

//Contacts
$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
$('#topContacts').append(formattedGithub);
$('#topContacts').append(formattedLocation);

//Skills
if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
	bio.skills.forEach(function(skill) {
		var formattedSkill = HTMLskills.replace("%data%", skill);
		$('#skills').append(formattedSkill);
	});
};

//Work
function displayWork() {
	work.jobs.forEach(function(job) {	
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		$('.work-entry:last').append(formattedDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
		$('.work-entry:last').append(formattedWorkLocation);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
		$('.work-entry:last').append(formattedWorkDescription);
	});
};

displayWork();


