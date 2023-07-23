var todoarray = [];
var count = 0;
var completed = false;

function myfunc() {
  var a = document.getElementById("myText").value;
  todoarray.push(a);

  var list = document.createElement("li");
  var p = document.createElement("p");
  p.innerText = a;
  p.setAttribute("class", "todo");

  var button = document.createElement("button");
  var div = document.createElement("div");
  div.classList.add("empty");

  button.appendChild(div);
  button.onclick = color;

  button.addEventListener("click", function() {
    if (completed) {
      list.style.textDecoration = "none";
      div.style.backgroundColor = "white";
      completed = false;
    } else {
      list.style.textDecoration = "line-through";
      completed = true;
      div.style.backgroundColor = "black";
    }
  });

  var button1 = document.createElement("button");
  var ele = document.createElement("i");
  ele.setAttribute("style", "color: #141414;");
  ele.classList.add("fa-sharp", "fa-regular", "fa-circle-xmark");

  ele.addEventListener("click", function() {
    count--;
    list.remove();
    document.getElementById("count1").innerHTML = count;
  });

  button1.appendChild(ele);
  list.appendChild(button);
  list.appendChild(p);
  list.appendChild(button1);
  list.setAttribute("type", "circle");
  document.getElementById("list1").appendChild(list);
  count++;
  document.getElementById("count1").innerHTML = count;
}

function color() {
  var div = this.querySelector(".empty");
  var list = this.parentNode;
  if (completed) {
    list.style.textDecoration = "none";
    div.style.backgroundColor = "white";
    completed = false;
  } else {
    list.style.textDecoration = "line-through";
    div.style.backgroundColor = "black";
    completed = true;
  }
}

function completeAll() {
  var listItems = document.querySelectorAll("#list1 li");
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    var div = listItem.querySelector(".empty");
    listItem.style.textDecoration = "line-through";
    div.style.backgroundColor = "black";
  }
  completed = true;
}

function clearCompleted() {
  var listItems = document.querySelectorAll("#list1 li");
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    var div = listItem.querySelector(".empty");
    if (div.style.backgroundColor === "black") {
      listItem.remove();
      count--;
    }
  }
  document.getElementById("count1").innerHTML = count;
}
// Your existing JavaScript code goes here

function showAll() {
    var listItems = document.querySelectorAll("#list1 li");
    listItems.forEach(function(listItem) {
      listItem.style.display = "flex";
    });
    document.querySelector(".item button.active").classList.remove("active");
    document.querySelector(".item button:nth-child(1)").classList.add("active");
  }
  
  function showIncomplete() {
    var listItems = document.querySelectorAll("#list1 li");
    listItems.forEach(function(listItem) {
      var div = listItem.querySelector(".empty");
      if (div.style.backgroundColor !== "black") {
        listItem.style.display = "flex";
      } else {
        listItem.style.display = "none";
      }
    });
    document.querySelector(".item button.active").classList.remove("active");
    document.querySelector(".item button:nth-child(2)").classList.add("active");
  }
  
  function showCompleted() {
    var listItems = document.querySelectorAll("#list1 li");
    listItems.forEach(function(listItem) {
      var div = listItem.querySelector(".empty");
      if (div.style.backgroundColor === "black") {
        listItem.style.display = "flex";
      } else {
        listItem.style.display = "none";
      }
    });
    document.querySelector(".item button.active").classList.remove("active");
    document.querySelector(".item button:nth-child(3)").classList.add("active");
  }
  
  document.querySelector(".item button:nth-child(1)").addEventListener("click", showAll);
  document.querySelector(".item button:nth-child(2)").addEventListener("click", showIncomplete);
  document.querySelector(".item button:nth-child(3)").addEventListener("click", showCompleted);
  