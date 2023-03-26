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

    //Members Slider
    $('.allmembers').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
            }
        }
    })

    //People Info Slider
    $('.allinfos').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            600: {
                items: 1,
                nav: false,
                loop: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    })

    //Scroll to top button
    let scrollBtn = document.querySelector("#scrollBtn .btn");
    scrollBtn.addEventListener("click", function (e) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    //Team members hover
    let allMembers = document.querySelectorAll(".each-member");
    allMembers.forEach(eachMember => {
        eachMember.addEventListener("mouseenter", function (e) {
            e.preventDefault();

            eachMember.classList.add("backgroundC")
            eachMember.children[3].classList.remove("d-none");
            eachMember.children[3].classList.add("slider-animation");
            eachMember.children[2].classList.add("hide-animation");
            eachMember.children[1].classList.add("hide-animation");
        })
    });

    allMembers.forEach(eachMember => {
        eachMember.addEventListener("mouseleave", function (e) {
            e.preventDefault();

            eachMember.classList.remove("backgroundC")
            eachMember.children[3].classList.add("d-none");
            eachMember.children[3].classList.remove("slider-animation");
            eachMember.children[2].classList.remove("hide-animation");
            eachMember.children[1].classList.remove("hide-animation");
        })
    });

})