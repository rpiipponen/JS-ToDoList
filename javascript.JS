

//Luo tehtävien poisto ominaisuus
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Luo tehtävien suorittaminen
var completeBtn = document.querySelector("li");
completeBtn.addEventListener('click', function(ev) {
  if (ev.target.className=== "done") {
    ev.target.classList.toggle('checked');
  }
}, false);



//Uuden tehtävän luonnin functio
function newTask() {
  var li = document.createElement("li");
  var input = document.getElementById("input").value;
  var taskText = document.createTextNode(input);
  li.appendChild(taskText);

  if (input == "") {
    alert("You must add a task to complete")
  }
  else {

    alert("Task has been succesfully added to the list!")
    document.getElementById("taskList").appendChild(li);
  }

  //Liitä luotuun tetävään "done" nappi
  var completeBtn = document.createElement("span");
  var text = document.createTextNode("Done");
  completeBtn.className = "done";
  completeBtn.appendChild(text);

  //Liitä luotuun tehtävään "close" nappi sekä lisää molemmat "close" ja "done" nappulat uuteen luotuun li elementtiin
  var removeBtn = document.createElement("span");
  var txt = document.createTextNode("Close");
  removeBtn.className = "close";
  removeBtn.appendChild(txt);
  li.append(removeBtn, completeBtn);

  //"Close" ja "done" nappien toiminnallisuus

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      alert("Task has been removed from the list")
    }
  }

  completeBtn.addEventListener('click', function(ev) {
    if (ev.target.className === "done") {
      ev.target.classList.toggle('checked');
      alert("Task has been completed!")
    }
  }, false);

}
