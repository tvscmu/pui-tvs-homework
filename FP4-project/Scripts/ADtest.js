//stores value "agree" in local storage on click on index.html page
function condition1() {
    console.log("Entered the function");

    var firstClick=document.getElementById("agree").textContent;
    console.log(firstClick);

    localStorage.setItem("fclick",firstClick);
    
    window.location.assign("Prompt2.html");

}
//stores value "agree" in local storage on click on prompt2 page
function condition2() {
    console.log("Entered the function");

    var secondClick=document.getElementById("agree").textContent;
    console.log(secondClick);

    localStorage.setItem("sclick",secondClick);

    finalTest()

}
//stores value "disagree" in local storage on click on index.html page
function condition3() {
    console.log("Entered the function");

    var fstClick=document.getElementById("disagree").textContent;
    console.log(fstClick);

    localStorage.setItem("fclick",fstClick);
    
    window.location.assign("Prompt2.html");
}

//stores value "disagree" in local storage on click on index.html page and redirects to disagreepage
function condition4() {
    console.log("Entered the function");

    var dClick=document.getElementById("disagree").textContent;
    console.log(dClick);

    localStorage.setItem("dclick",dClick);
    
    window.location.assign("disagreepage.html");
}


// checks if agree=agree to show agreepage or show disagreepage
function finalTest() {
    var t1=localStorage.getItem('fclick');
    console.log(t1);

    var t2=localStorage.getItem('sclick');
    console.log(t2);


    if (t1==t2) {
        currentTime();
        window.location.assign("Agreepage.html");
    }
    else {
        window.location.assign("disagreepage.html");
    }
    
}

// If agree=agree checks timestamp and shows time left to reattempt the prompts
function currentTime() {
    var timeStamp = new Date().getTime();
    var endStamp = timeStamp + 100000000;
    localStorage.setItem("endTime",endStamp);
    localStorage.setItem("timeNow",timeStamp);
    console.log("Agreepage accessed at",timeStamp);
    pageLimit();
}

// Shows time left to reattempt the promnpts
function pageLimit() {
    console.log("run")
    var deadline = localStorage.getItem('endTime');
    var x = setInterval(function() {
    var now = localStorage.getItem('timeNow');
    console.log(deadline);
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " 
    + hours + "h " + minutes + "m " + seconds + "s ";
    var timeStamp = new Date().getTime();
    localStorage.setItem("timeNow",timeStamp);
   
        if (t < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

}