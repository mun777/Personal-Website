function change(){

    if(localStorage.getItem("color") != "style.css"){
        document.getElementById("page_style").href = "style.css";
        localStorage.setItem("color", "style.css");
    }
    else{
        document.getElementById("page_style").href = "style.css";
        localStorage.setItem("color", "style.css");

        document.getElementById("page_style").href = "betterstyle.css";
        localStorage.setItem("color", "betterstyle.css");
    } 
}

window.onload = function() {
	if(!localStorage.getItem("color")) {
		localStorage.setItem("color", "style.css");
	}
	document.getElementById("page_style").setAttribute("href", localStorage.getItem("color"));
}