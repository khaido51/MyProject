//Countdown Timer function 
//Declaring variables with hour, minute, second
var hour = null; // Hour
var minute = null; // Minute
var second = null; // Seocnd
var timeout = null; // Timeout
      
//This is the process of developing countdown timer      
			
function start()
    {
      //If value == "", dislay NaN:NaN:NaN to the clock
       if (hour === null){
		
			hour = parseInt(document.getElementById('hour_val').value);
            minute = parseInt(document.getElementById('minute_val').value);
            second = parseInt(document.getElementById('second_val').value);
		}

        //When the number of second = -1, we reduce the number of minute to 1 unit
		//For instance(given the time of 2:05, when countdown to 2:00, the second now almost less than 0
		//now reduce the minute 1 unit and  the second now equal to 59 
        if (second === -1){
			minute -= 1;
            econd = 59;
        }

        //We do the same with the minute
        if (minute === -1){
            hour -= 1;
			minute = 59;
        }

        //At this stage, when hour is = -1, its time out. Stop the function and alert to user time out
        if (hour == -1){
            clearTimeout(timeout);
            alert('Time out. Goodbye!!');
            return false;
        }

        //Displaying the Timer
        document.getElementById('hour').innerText = hour.toString();
        document.getElementById('minute').innerText = minute.toString();
        document.getElementById('second').innerText = second.toString();
		

        /*Decrese to 1 second and call it back after 1 second*/
         timeout = setTimeout(function(){
             second--;
             start();
			}, 1000);
         }
            
        function stop(){
            clearTimeout(timeout);
        }
			
			
			
		//Create agenda function	
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


