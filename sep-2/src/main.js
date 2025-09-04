import "./style.css";

// --- Basic error handling ---
try {
  throw new Error("Hello World");
} catch (e) {
  console.error(e);
} finally {
  console.log("after the error");
}

// --- Check for element existence ---
const app = document.getElementById("app");

if (!app) {
  throw new Error("Cannot find element with id 'app'");
}

try {
  app.addEventListener("click", () => console.log("hello from the listener"));
} catch (e) {
  console.error(e);
}

// --- Functions ---
function addOne(num) {
  return num + 1;
}

function logNumber(num) {
  console.log(num);
}

function addOneAndLog(num, callback) {
  const result = addOne(num);
  logNumber(result);
  if (callback) callback(result);
}

// --- setTimeout demo ---
try {
  setTimeout(() => addOneAndLog(1), 1000);
} catch (e) {
  console.log(e);
}

// --- Sync result ---
const resultsync = addOne(1);
console.log(resultsync);

// --- Async version ---
function addOneAsync(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject(new Error("Input must be a number"));
    } else {
      setTimeout(() => resolve(num + 1), 500);
    }
  });
}

// --- Promise chains ---
addOneAsync(2)
  .then((result) => console.log(result))
  .catch((e) => console.error(e));

addOneAsync(3)
  .then(logNumber)
  .then(() => addOneAsync(4))
  .then(logNumber)
  .then(logNumber)
  .then(logNumber)
  .catch((e) => console.error(e));
