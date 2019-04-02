let undergradBtn = document.querySelector("#undergrad");
let postgradBtn = document.querySelector("#postgrad");
let researchBtn = document.querySelector("#research");
let undergradTable = document.querySelector("#undergrad-table");
let postgradTable = document.querySelector("#postgrad-table");
let researchTable = document.querySelector("#research-table");
let counter = 1;

$("#postgrad").bind("click", () => {
  postgradLogic();
});

$("#undergrad").bind("click", () => {
  undergradLogic();
});

$("#research").bind("click", () => {
  researchLogic();
});

function renderHTML(courses) {
  courses.forEach(course => {
    console.log(course);
  });
}

function renderUndergrad(courses) {
  courses.forEach(course => {
    console.log(course);
    let row = undergradTable.insertRow(1);
    let courseName = row.insertCell(0);
    let moduleNames = row.insertCell(1);
    let moduleCodes = row.insertCell(2);
    let assignments = row.insertCell(3);
    let volumes = row.insertCell(4);
    let weights = row.insertCell(5);
    courseName.innerHTML = course.Course;
    moduleNames.innerHTML =
      "-" +
      course.Module[0].ModuleName +
      `<br> - ` +
      course.Module[1].ModuleName;
    moduleCodes.innerHTML =
      course.Module[0].ModuleCode + `<br>` + course.Module[1].ModuleCode;
    assignments.innerHTML =
      course.Module[0].Assignment + `<br>` + course.Module[1].Assignment;
    volumes.innerHTML =
      course.Module[0].Volume + `<br>` + course.Module[1].Volume;
    weights.innerHTML =
      course.Module[0].Weights + `<br>` + course.Module[1].Weights;
  });
}

function renderPostgrad(courses) {
  courses.forEach(course => {
    let row = postgradTable.insertRow(1);
    let courseName = row.insertCell(0);
    let moduleNames = row.insertCell(1);
    let moduleCodes = row.insertCell(2);
    let assignments = row.insertCell(3);
    let volumes = row.insertCell(4);
    let weights = row.insertCell(5);
    courseName.innerHTML = course.Course;
    moduleNames.innerHTML =
      "-" +
      course.Module[0].ModuleName +
      `<br> - ` +
      course.Module[1].ModuleName;
    moduleCodes.innerHTML =
      course.Module[0].ModuleCode + `<br>` + course.Module[1].ModuleCode;
    assignments.innerHTML =
      course.Module[0].Assignment + `<br>` + course.Module[1].Assignment;
    volumes.innerHTML =
      course.Module[0].Volume + `<br>` + course.Module[1].Volume;
    weights.innerHTML =
      course.Module[0].Weights + `<br>` + course.Module[1].Weights;
  });
}
function renderResearchTHML(courses) {
  courses.forEach(course => {
    let row = researchTable.insertRow(1);
    let courseName = row.insertCell(0);
    let courseLength = row.insertCell(1);
    let department = row.insertCell(2);
    courseName.innerHTML = course.Course;
    courseLength.innerHTML = course.CourseLength;
    department.innerHTML = course.Department;
  });
}

function postgradLogic() {
  axios
    .get("https://raw.githubusercontent.com/JakeLeigh/CW2/master/module-2.json")
    .then(response => {
      let postgradCourses = response.data;
      renderPostgrad(postgradCourses);
    })
    .catch(err => console.log(err));
  counter++;
  if (counter > 1) {
    postgradBtn.disabled = true;
  }
}

function undergradLogic() {
  axios
    .get("https://raw.githubusercontent.com/JakeLeigh/CW2/master/module-1.json")
    .then(response => {
      let undergradCourses = response.data;
      renderUndergrad(undergradCourses);
    })
    .catch(err => console.log(err));
  counter++;
  if (counter > 1) {
    undergradBtn.disabled = true;
  }
}

function researchLogic() {
  axios
    .get("https://raw.githubusercontent.com/JakeLeigh/CW2/master/module-3.json")
    .then(response => {
      let researchProjects = response.data;
      $("#table").remove();
      renderResearchTHML(researchProjects);
    })
    .catch(err => console.log(err));
  counter++;
  if (counter > 1) {
    researchBtn.disabled = true;
  }
}
