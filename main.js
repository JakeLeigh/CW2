var moduleContainer = document.getElementById("module-info");
let undergradBtn = document.querySelector("#undergrad");
let postgradBtn = document.querySelector("#postgrad");
let researchBtn = document.querySelector("#research");

undergradBtn.addEventListener("click", function() {
  axios
    .get("https://raw.githubusercontent.com/JakeLeigh/CW2/master/module-1.json")
    .then(response => {
      let undergradData = response.data;
      renderHTML(undergradData);
    })
    .catch(err => console.log(err));
});

// undergradBtn.addEventListener("click", function() {
//   var ourRequest = new XMLHttpRequest();
//   ourRequest.open(
//     "GET",
//     "https://raw.githubusercontent.com/JakeLeigh/CW2/master/module-1.json"
//   );
//   ourRequest.onload = function() {
//     //console.log(ourRequest.responseText);
//     var ourData = JSON.parse(ourRequest);
//     renderHTML(ourData);
//     console.log(ourData);
//   };
// });

function renderHTML(courses) {
  var htmlString = "";

  courses.forEach(course => {
    console.log(course);
    htmlString += "<p>" + course.Course + "</p>";
  });

  moduleContainer.insertAdjacentHTML("beforeend", htmlString);
}
