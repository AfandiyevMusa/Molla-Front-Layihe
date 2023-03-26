$(function () {
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

    //Search area input background
    let input = document.querySelector(".input");
    input.addEventListener("click", function (e) {
        if(!this.classList.contains("clicked-input")){
            this.classList.add("clicked-input");
        }
        // else {
        //     eachInput.classList.add("nonclicked-input");
        // }
    })

    //Sidebar of Blog
    let blogBar = document.querySelector("#phone-content .all");
    let settingsButton = document.querySelector("#settings .all .button")

    settingsButton.addEventListener("click", function () {
        if (blogBar.classList.contains("hide-filter")) {
            blogBar.classList.add("active-filter");
            blogBar.classList.remove("hide-filter");
            settingsButton.classList.add("slide-settings")
        } else {
            blogBar.classList.remove("active-filter");
            blogBar.classList.add("hide-filter");
            settingsButton.classList.remove("slide-settings")
        }
    })

    //Scroll to top button
    let scrollBtn = document.querySelector("#scrollBtn .btn");
    scrollBtn.addEventListener("click", function (e) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})