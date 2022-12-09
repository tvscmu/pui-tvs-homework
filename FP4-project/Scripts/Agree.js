document.getElementById("button5").addEventListener("mouseenter", run);

//Button animation on Agreepage
function run() {
    var btn = document.getElementById("button5");
    if (!btn.style.left) {
        // Default to 500 to start
        btn.style.left = "500px";
    } else {
        var posLeft = parseInt(btn.style.left); // parseInt ignores the px on the end
        if (posLeft >= 800) {
            btn.style.left = "200px";
        } else if (posLeft > 450) {
            posLeft += 150;
            btn.style.left = (posLeft + 150) + "px";
        }
    }
}