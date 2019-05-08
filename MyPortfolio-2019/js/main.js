var myList = new Array();
var newRec;
class Portfolio
{
    constructor(title, firstName, lastName, DOB, sex, maritalStatus, email, profilePic, interests, street, city, province, Intermediate, Diploma, Bachelor, Masters, softSkills, hardSkills, ide, semesterI, semesterII, semesterIII, semesterIV, project1, project2, project3, project4, project5, project6, project7, project8)
    {
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = DOB;
        this.sex = sex;
        this.maritalStatus = maritalStatus;
        this.email = email;
        this.profilePic = profilePic;
        this.interests = interests;
        this.street = street;
        this.city = city;
        this.province = province;
        this.Intermediate = Intermediate;
        this.Diploma = Diploma;
        this.Bachelor = Bachelor;
        this.Masters = Masters;
        this.softSkills = softSkills;
        this.hardSkills = hardSkills;
        this.ide = ide;
        this.semesterI = semesterI;
        this.semesterII = semesterII;
        this.semesterIII = semesterIII;
        this.semesterIV = semesterIV;
        this.project1 = project1;
        this.project2 = project2;
        this.project3 = project3;
        this.project4 = project4;
        this.project5 = project5;
        this.project6 = project6;
        this.project7 = project7;
        this.project8 = project8;

    } // end of constructor
} // end of class Planets

$(document).ready(function ()
{
    $.ajax({
        type: "GET", url: "dataFiles/portfolio.json",
        dataType: "json", success: loadJSON,
        error: function (e)
        {
            alert(`${e.status} - ${e.statusText}`);
        }
    });
}); // end of doc ready

function loadJSON(data)
{
    console.log(data);
    start = data.portfolio;
    newRec = new Portfolio
        (
            start.personalInformation.title,
            start.personalInformation.firstName,
            start.personalInformation.lastName,
            start.personalInformation.DOB,
            start.personalInformation.sex,
            start.personalInformation.maritalStatus,
            start.personalInformation.email,
            start.personalInformation.profilePic,
            start.personalInformation.interests,
            start.personalInformation.address.street,
            start.personalInformation.address.city,
            start.personalInformation.address.province,
            start.education.Intermediate,
            start.education.Diploma,
            start.education.Bachelor,
            start.education.Masters,
            start.skills.softSkills,
            start.skills.hardSkills,
            start.skills.ide,
            start.courses.semesterI,
            start.courses.semesterII,
            start.courses.semesterIII,
            start.courses.semesterIV,
            start.projects.project1,
            start.projects.project2,
            start.projects.project3,
            start.projects.project4,
            start.projects.project5,
            start.projects.project6,
            start.projects.project7,
            start.projects.project8,
        );

    myList.push(newRec);

    console.log(myList);

    mainScreen(data);
} // end of loadJSON


function mainScreen(data)
{
    var counter = 0;
    function showData()
    {
        $("#btn_pInfo").show();
        $("#btn_academics").show();
        $("#btn_skills").show();
        $("#btn_projects").show();
        $("#btn_courses").show();
        $("#resume").show();
        $("#tbl_PInfo").html("");
    }


    for (x = 0; x < myList.length; x++)
    {
        $("#headTitle").html(`${myList[x].title}`);


        $("#my_name").html(`${myList[x].lastName}, ${myList[x].firstName}`);

        // for page2
        $("#profileName").html(`${myList[x].lastName}, ${myList[x].firstName}`);
        $("#btn_pInfo").html(`Personal Information`);
        $("#btn_pInfo").css("text-align", "center");
        $("#btn_academics").html(`Academics`);
        $("#btn_academics").css("text-align", "center");
        $("#btn_skills").html(`Skills`);
        $("#btn_skills").css("text-align", "center");
        $("#btn_courses").html(`Courses Completed`);
        $("#btn_courses").css("text-align", "center");
        $("#btn_projects").html(`Projects`);
        $("#btn_projects").css("text-align", "center");
        $("#resume").html(`Resume`);
        $("#resume").css("text-align", "center");


    }

    $("#btn_pInfo").on('click', function ()
    {
        $("#btn_academics").toggle(2000);
        $("#btn_skills").toggle(2000);
        $("#btn_projects").toggle(2000);
        $("#btn_courses").toggle(2000);
        $("#resume").toggle(2000);
        $("#tbl_PInfo").html("");
        var num = counter++;

        if ((num % 2) == 0)
        {
            for (x = 0; x < myList.length; x++)
            {
                $("#tbl_PInfo").append(`
         <tr>
         <td><strong id="strong"> DOB:</strong>${myList[x].DOB}</td>
         </tr>
          <tr>
         <td> <strong id="strong">Sex:</strong> ${myList[x].sex}</td>
         </tr>
          <tr>
         <td> <strong id="strong">Marital Status:</strong> ${myList[x].maritalStatus}</td>
         </tr>
          <tr>
         <td> <strong id="strong">Email:</strong> ${myList[x].email}</td>
         </tr>
          <tr>
         <td><strong id="strong">Interests:</strong> ${myList[x].interests}</td>
         </tr>
          <tr>
         <td> <strong id="strong">Address:</strong> ${myList[x].street}, ${myList[x].city}, ${myList[x].province} </td>
         </tr>
         `);
            }
        }
        else
        {
            showData();

        }
    });


    $("#btn_pInfo").css("cursor", "pointer");

    // for Academics
    $("#btn_academics").on("click", function ()
    {

        $("#btn_pInfo").toggle(2000);
        $("#btn_skills").toggle(2000);
        $("#btn_projects").toggle(2000);
        $("#tbl_PInfo").toggle(2000);
        $("#btn_courses").toggle(2000);
        $("#resume").toggle(2000);
        $("#tbl_academics").html("");


        var num = counter++;
        if ((num % 2) == 0)
        {
            for (x = 0; x < myList.length; x++)
            {
                $("#tbl_academics").append(`
          <tr>
          <td><strong id="strong">Intermediate:</strong> ${myList[x].Intermediate}</td>
          </tr>
           <tr>
        <td><strong id="strong">Diploma:</strong> ${myList[x].Diploma}</td>
         </tr>
           <tr>
        <td><strong id="strong">Bachelor:</strong> ${myList[x].Bachelor}</td>
       </tr>
          <tr>
          <td><strong id="strong">Masters:</strong> ${myList[x].Masters}</td>
          </tr>
           <tr>
         `);
            }
        }
        else
        {
            showData();
        }

    });
    $("#btn_academics").css("cursor", "pointer");



    // for skills
    $("#btn_skills").on("click", function ()
    {

        $("#btn_pInfo").toggle(2000);
        $("#btn_academics").toggle(2000);
        $("#btn_projects").toggle(2000);
        $("#tbl_PInfo").toggle(2000);
        $("#btn_courses").toggle(2000);
        $("#tbl_academics").hide();
        $("#resume").toggle(2000);
        $("#tbl_skills").html("");

        var num = counter++;
        if ((num % 2) == 0)
        {
            for (x = 0; x < myList.length; x++)
            {
                $("#tbl_skills").append(
                    `
          <tr>
          <td><strong id="strong">Soft Skills:</strong><br> ${myList[x].softSkills}</td>
          </tr>
           <tr>
        <td><strong id="strong">Hard Skills:</strong><br> ${myList[x].hardSkills}</td>
         </tr>
            <tr>
        <td><strong id="strong">IDE:</strong><br> ${myList[x].ide}</td>
         </tr>
            `
                );
            }

        }
        else
        {
            showData();
        }

    });
    $("#btn_skills").css("cursor", "pointer");


    // for courses
    $("#btn_courses").on("click", function ()
    {

        $("#btn_pInfo").toggle(2000);
        $("#btn_academics").toggle(2000);
        $("#btn_projects").toggle(2000);
        $("#tbl_PInfo").toggle(2000);
        $("#btn_skills").toggle(2000);
        $("#resume").toggle(2000);
        $("#tbl_skills").hide();
        $("#tbl_courses").html("");

        var num = counter++;
        if ((num % 2) == 0)
        {
            for (x = 0; x < myList.length; x++)
            {
                $("#tbl_courses").append(
                    `
          <tr>
          <td><strong id="strong">Semester-I:</strong> ${myList[x].semesterI}</td>
          </tr>
           <tr>
        <td><strong id="strong">Semester-II:</strong> ${myList[x].semesterII}</td>
         </tr>
         <tr>
          <td><strong id="strong">Semester-III:</strong> ${myList[x].semesterIII}</td>
          </tr>
           <tr>
        <td><strong id="strong">Semester-IV:</strong> ${myList[x].semesterIV}</td>
         </tr>
            `
                );
            }
        }
        else
        {
            showData();
        }


    });
    $("#btn_courses").css("cursor", "pointer");


    //for projects
    $("#btn_projects").on("click", function ()
    {
        $("#btn_pInfo").toggle(2000);
        $("#btn_academics").toggle(2000);
        $("#btn_courses").toggle(2000);
        $("#tbl_PInfo").toggle(2000);
        $("#btn_skills").toggle(2000);
        $("#resume").toggle(2000);
        $("#tbl_courses").hide();
        $("#tbl_projects").html("");

        var num = counter++;
        if ((num % 2) == 0)
        {
            for (x = 0; x < myList.length; x++)
            {
                $("#tbl_projects").append(
                    `
          <tr>
          <td><strong id="strong">Project-I:</strong> ${myList[x].project1}</td>
          </tr>
           <tr>
        <td><strong id="strong">Project-II:</strong> ${myList[x].project2}</td>
         </tr>
         <tr>
          <td><strong id="strong">Project-III:</strong> ${myList[x].project3}</td>
          </tr>
           <tr>
        <td><strong id="strong">Project-IV:</strong> ${myList[x].project4}</td>
         </tr>
         <tr>
        <td><strong id="strong">Project-V:</strong> ${myList[x].project5}</td>
         </tr>
         <tr>
        <td><strong id="strong">Project-VI:</strong> ${myList[x].project6}</td>
         </tr>
         <tr>
        <td><strong id="strong">Project-VII:</strong> ${myList[x].project7}</td>
         </tr>
          <tr>
        <td><strong id="strong">Project-VIII:</strong> ${myList[x].project8}</td>
         </tr>
            `
                );
            }
        }
        else
        {
            showData();
        }

    });
    $("#btn_projects").css("cursor", "pointer");


} //end of mainScreen
