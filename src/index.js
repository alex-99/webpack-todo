import * as appItems from "./app-item/app-item.js";
import * as data from "./data.js";

import "./assets/style/style.sass"


function setup() {
  const appRoot = document.getElementById("app-root");

  let addInput = document.createElement("div");
  addInput.setAttribute("class", "new-item");


  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.id = "input";

  let button = document.createElement("button");
  button.appendChild(document.createTextNode("add item"));

  button.addEventListener("click", () => {
    appItems.addItem(document.getElementById("input").value);
    document.getElementById("input").value = ""
  });

  addInput.appendChild(input)
  addInput.appendChild(button)

  appRoot.appendChild(addInput);

  let incomplete = document.createElement("div");
  incomplete.setAttribute("class", "item-list");
  incomplete.setAttribute("id", "incomplete-items");
  appRoot.appendChild(incomplete);

  let complete = document.createElement("div");
  complete.setAttribute("class", "item-list");
  complete.setAttribute("id", "complete-items");
  appRoot.appendChild(complete);


  data.dom.incomplete = document.getElementById("incomplete-items");
  data.dom.complete = document.getElementById("complete-items");

  for(let status in data.dom) {
    let header = document.createElement("h1");
    header.appendChild(document.createTextNode(status + " items"))
    data.dom[status].appendChild(header)
  }

  data.dom.approot = appRoot;



};

setup();

appItems.addItem("hello");
appItems.addItem("world");
appItems.addItem("shower");
appItems.addItem("sleep");
