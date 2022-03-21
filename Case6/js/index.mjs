import { getTasks, setTasks } from "./models.mjs";
import { removeCompletedHandler, dataToHTMLList } from "./controllers.mjs";

dataToHTMLList(getTasks())

document.querySelector("button").addEventListener("click", removeCompletedHandler);