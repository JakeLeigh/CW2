let undergradBtn = document.querySelector("#undergrad");
let postgradBtn = document.querySelector("#postgrad");
let researchBtn = document.querySelector("#research");
let table = document.querySelector("#table");

undergradBtn.addEventListener("click", function() {
  axios
    .get("https://raw.githubusercontent.com/JakeLeigh/CW2/master/module-1.json")
    .then(response => {
      let undergradCourses = response.data;
      renderCourses(undergradCourses);
      let undergradModules = response.data.Module[1];
      console.log(undergradModules);
      // renderModules(undergradModules);
    })
    .catch(err => console.log(err));
});

function renderCourses(courses) {
  courses.forEach(course => {
    let row = table.insertRow(1);
    let courseName = row.insertCell(0);
    courseName.innerHTML = course.Course;
  });
}
// function renderModules(modules) {
//   modules.forEach(module => {
//     console.log(module);
//   });
// }
