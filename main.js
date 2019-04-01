let undergradBtn = document.querySelector("#undergrad");
let postgradBtn = document.querySelector("#postgrad");
let researchBtn = document.querySelector("#research");
let table = document.querySelector("#table");
let counter = 1;

undergradBtn.addEventListener("click", function() {
  axios
    .get("https://raw.githubusercontent.com/JakeLeigh/CW2/master/module-1.json")
    .then(response => {
      let undergradCourses = response.data;
      renderHTML(undergradCourses);
    })
    .catch(err => console.log(err));
  counter++;
  if (counter > 1) {
    undergradBtn.disabled = true;
  }
});

postgradBtn.addEventListener("click", function() {
  axios
    .get("https://raw.githubusercontent.com/JakeLeigh/CW2/master/module-2.json")
    .then(response => {
      let postgradCourses = response.data;
      $("#table tbody tr").innerHTML = "";
      renderHTML(postgradCourses);
    })
    .catch(err => console.log(err));
  counter++;
  if (counter > 1) {
    postgradBtn.disabled = true;
  }
});

researchBtn.addEventListener("click", function() {
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
});

function renderHTML(courses) {
  courses.forEach(course => {
    console.log(course);
    let row = table.insertRow(1);
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
    console.log(course);
    //table titles assigned
    let titleRow = table.insertRow(0);
    let courseTitle = titleRow.insertCell(0);
    let courseLengthTitle = titleRow.insertCell(1);
    let courseDepartmentTitle = titleRow.insertCell(2);
    courseTitle = "Course Name";
    courseLengthTitle = "Course Length";
    courseDepartmentTitle = "Department";
  });
}
