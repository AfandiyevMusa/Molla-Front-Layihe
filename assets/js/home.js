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

    //Slider
    let leftIcon = document.querySelector(".chevrons .left");
    let rightIcon = document.querySelector(".chevrons .right");
    let allContents = document.querySelectorAll(".each-content");

    function rightSlider() {
        let activeImage = document.querySelector(".active-img");
        activeImage.classList.remove("active-img");
        if (activeImage.nextElementSibling != null) {
            activeImage.nextElementSibling.classList.add("active-img");
        } else {
            activeImage.parentNode.firstElementChild.classList.add("active-img");
        }

        allContents.forEach(eachContent => {
            if (activeImage.nextElementSibling != null) {
                if (activeImage.nextElementSibling.getAttribute("data-id") == eachContent.getAttribute("data-id")) {
                    eachContent.classList.add("active-words");
                } else {
                    eachContent.classList.remove("active-words");
                }
            } else {
                eachContent.parentNode.firstElementChild.classList.add("active-words");
                eachContent.parentNode.children[1].classList.remove("active-words");
            }
        });
    }

    function leftSlider() {
        let activeImage = document.querySelector(".active-img");
        activeImage.classList.remove("active-img");
        if (activeImage.previousElementSibling != null) {
            activeImage.previousElementSibling.classList.add("active-img");
        } else {
            activeImage.parentNode.lastElementChild.classList.add("active-img");
        }

        allContents.forEach(eachContent => {
            if (activeImage.previousElementSibling != null) {
                if (activeImage.previousElementSibling.getAttribute("data-id") == eachContent.getAttribute("data-id")) {
                    eachContent.classList.add("active-words");
                } else {
                    eachContent.classList.remove("active-words");
                }
            } else {
                eachContent.parentNode.lastElementChild.classList.add("active-words");
                eachContent.parentNode.children[0].classList.remove("active-words");
            }
        });
    }

    rightIcon.addEventListener("click", rightSlider);
    leftIcon.addEventListener("click", leftSlider);

    //Owl Carousel Plugin
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            500:{
                items:1,
                nav:false
            },
            900:{
                items:2,
                nav:true
            },
            1200:{
                items:4,
                nav:false,
                loop:false
            }
        }
    })

    //Products TabMenu
    let captions = document.querySelectorAll("#products-tab-menu .products-menu .for-products-name .product-names h4");
    let allDetails = document.querySelectorAll("#products-tab-menu .products-menu .details .allcontents");
    
    captions.forEach(eachCaption => {
        eachCaption.addEventListener("click", function (e) {
            document.querySelector(".active-tab").classList.remove("active-tab");
            this.classList.add("active-tab");

            allDetails.forEach(eachDetail => {
                if (this.getAttribute("data-id") == eachDetail.getAttribute("data-id")) {
                    eachDetail.classList.remove("d-none");
                } else {
                    eachDetail.classList.add("d-none");
                }
            });
        })
    });

    //Brand Carousel
    $('.allbrands').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            }
        }
    })







})