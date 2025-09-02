import "./style.css";

//basic error handling
try {
  throw new Error("Hello World");
} catch (e) {
  console.error(e);
} finally {
  console.log("after the error");
}

//error when elemet is not found
const app = document.getElementById("app");

if (!app) {
  throw new Error("Cannot find element with id 'app'");
}

app.addEventListener("click", () => console.log("hello from the listener"));

//option 2
// ...existing code...

//option 2
try {
  app.addEventListener("click", () => console.log("hello from the listener"));
} catch (e) {
  console.error(e);
}

//setTimeout
function addOne(num) {
  return num + 1;
}

function logNumber(num) {
  console.log(num);
}

function addOneAndLog(num, callback) {
  const result = addOne(1);
  logngumber(result);
}

try {
  setTimeout(addOneAndLog, 1000);
} catch (e) {
  console.log(e);
}
