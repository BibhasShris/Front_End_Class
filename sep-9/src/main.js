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
