document.addEventListener("DOMContentLoaded", function () {
    var svg1 = document.getElementById("svg-1");
    var svg2 = document.getElementById("svg-2");
    var svg3 = document.getElementById("svg-3");

    svg1.addEventListener('click', function () {
        confirm('ℹ️> Add on Discord:\n🔥>  gqdThinky')
    });
    svg2.addEventListener('click', function () {
        window.open('https://github.com/gqdThinky', '_blank');
    });
    svg3.addEventListener('click', function () {
        window.open('mailto:gqdThinky@gmail.com', '_blank');
    });

    ////////////////////////////////////////////////////

    var btnPortfolio = document.getElementById("button-portfolio");

    btnPortfolio.addEventListener('click', function () {
        alert("⚠️ Work In Progress (WIP)! ⚠️")
    });
});