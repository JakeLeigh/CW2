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
    postgradBtn.disabled = true;
    researchBtn.disabled = true;
  }
});

postgradBtn.addEventListener("click", function() {
  axios
    .get("https://raw.githubusercontent.com/JakeLeigh/CW2/master/module-2.json")
    .then(response => {
      let postgradCourses = response.data;
      renderHTML(postgradCourses);
    });
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
