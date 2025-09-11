import "./style.css";
import { classroomInformation, plusOne } from "./myModule";

console.log(classroomInformation);

console.log(plusOne(5));

import * as myModule from "./myModule";
console.log(myModule.classroomInformation);
console.log(myModule.plusOne(5));

import { classroomInformation as myClassroomInformation } from "./myModule";
console.log(myClassroomInformation);

import plustwo from "./myModuleDefaultExport.js";
console.log(plustwo(7));

import _ from "lodash";
console.log(_.chunk(["a", "b", "c", "d"], 2));

function search(value) {
  console.log(value);
}

const searchBar = document.getElementById("search");
searchBar.addEventListener("input", (e) => {
  // search(e.target.value);
  // debouncedSearch(e.target.value);
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    search(searchBar.value);
    timeoutId = undefined;
  }, 200);
});
