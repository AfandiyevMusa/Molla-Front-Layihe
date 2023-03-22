$(function(){
    //Sidebar Home
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

    //Sidebar Shop
    let filterBar = document.querySelector("#filter-for-phone .all");
    // let closePart = document.querySelector(".sidebar .close-part .close");
    let settingsButton = document.querySelector("#settings .all .button")

    settingsButton.addEventListener("click", function () {
        filterBar.classList.add("active-filter");
        filterBar.classList.remove("hide-filter");
    })

    // closePart.addEventListener("click", function () {
    //     filterBar.classList.add("hide-filter");
    //     filterBar.classList.remove("active-filter");
    // })
})