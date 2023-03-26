$(function(){
    //Sidebar
    let sidebar = document.querySelector(".sidebar");
    let closeButton = document.querySelector(".sidebar .close-part .close");
    let openButton = document.querySelector("#down-nav-phone .container .logo i")

    openButton.addEventListener("click", function () {
        sidebar.classList.add("active-bar");
        sidebar.classList.remove("hide");
    })

    closeButton.addEventListener("click", function () {
        sidebar.classList.add("hide");
        sidebar.classList.remove("active-bar");
    })

    //Sidebar TabMenu
    let namesInSidebar = document.querySelectorAll(".for-names .names h6")
    let namesElems = document.querySelectorAll(".infos .elems")

    namesInSidebar.forEach(eachName => {
        eachName.addEventListener("click", function (e) {
            document.querySelector(".active-menu").classList.remove("active-menu");
            this.classList.add("active-menu");

            namesElems.forEach(eachElem => {
                if (this.getAttribute("data-id") == eachElem.getAttribute("data-id")) {
                    eachElem.classList.remove("d-none");
                } else {
                    eachElem.classList.add("d-none");
                }
            });
        })
    });
    
    //Input Background
    let inputs = document.querySelectorAll(".inputs");
    
    inputs.forEach(eachInput => {
        // eachInput.classList.remove("clicked-input")
        eachInput.addEventListener("click", function (e) {
            if(!this.classList.contains("clicked-input")){
                this.classList.add("clicked-input");
            }
        })
    });

    //Scroll to top button
    let scrollBtn = document.querySelector("#scrollBtn .btn");
    scrollBtn.addEventListener("click", function (e) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})