import * as data from "../data.js";
import Item from "../assets/item.js";


export function addItem(str) {
  if(data.items[str]) {
    alert("that item already exists");
    return;
  }
  if(str === "") {
    alert("please enter a title for the item");
    return;
  }

  data.items[str] = new Item(str);

  data.dom.incomplete.appendChild(item(str))
}

export function finishItem(str, e) {

  if(e.path[0].parentNode.parentNode.id === "complete-items") return;

  let date = new Date();
  data.items[str].completed = (date.getHours() + 1) + ":" +
                               date.getMinutes() + ", " +
                               date.getDate() + "/" +
                               (date.getMonth() + 1) + "/" +
                               date.getFullYear();

  data.dom.complete.appendChild(e.path[0].parentNode);
  e.path[0].parentNode.removeChild(e.path[0])


}

export function deleteItem(str, e) {
  data.items[str] = null;
  e.path[0].parentNode.parentNode.removeChild(e.path[0].parentNode)
}

function item(str) {
  let elem = document.createElement("div");
  let header = document.createElement("h2");
  header.appendChild(document.createTextNode(str + " - " + data.items[str].created));
  elem.appendChild(header);

  let del = document.createElement("button");
  del.appendChild(document.createTextNode("delete"));
  del.addEventListener("click", (e) => {
    deleteItem(str, e);
  });

  let finish = document.createElement("button");
  finish.appendChild(document.createTextNode("finish"));
  finish.addEventListener("click", (e) => {
    finishItem(str, e);

  });

  elem.appendChild(del);
  elem.appendChild(finish);
  elem.setAttribute("class", "item")
  return elem;
}
