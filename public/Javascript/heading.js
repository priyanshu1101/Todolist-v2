var heading = document.querySelector(".taskheading");
heading.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        if(heading.innerText.trim().toLowerCase()=="today")
        {
            window.location.href = "/";
        }
        else{
            window.location.href = "/"+heading.innerText.trim().toLowerCase();
        }
    }
})