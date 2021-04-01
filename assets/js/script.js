// --------------------------------------------------------------------- Copyright

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();

// -------------------------------------------------------------------- Hover functions

// Change the colors of links
function hover(id){
    let hoverLink = document.getElementById(id);
    switch (id) {
        case "nav-home":
            hoverLink.style.color = "#fed89a";
            break;
        case "nav-photos":
            hoverLink.style.color = "#a2daff";
            break;
        case "nav-videos":
            hoverLink.style.color = "#c8a2c8";
            break;
        case "nav-contact":
            hoverLink.style.color = "#a5e8a5";
            break;
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