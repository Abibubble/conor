// --------------------------------------------------------------------- Copyright

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();

// -------------------------------------------------------------------- Hover functions

// Change the colors of socials links
function hover(id){
    let hoverLink = document.getElementById(id);
    switch (id) {
        case "facebook":
            hoverLink.style.color = "#1298f6";
            break;
        case "instagram":
            hoverLink.style.color = "#c9006b";
            break;
        case "youtube":
            hoverLink.style.color = "#ff0000";
            break;
        default:
            hoverLink.style.color = "#fff";
            break;
    }    
}

// Reset to normal after hover
function normal(id) {
	document.getElementById(id).style.color = "#fff";
}