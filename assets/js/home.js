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
                    eachContent.classList.add("slider-animation");
                } else {
                    eachContent.classList.remove("active-words");
                    eachContent.classList.add("slider-animation");
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
                    eachContent.classList.add("slider-animation");
                } else {
                    eachContent.classList.remove("active-words");
                    eachContent.classList.add("slider-animation");
                }
            } else {
                eachContent.parentNode.lastElementChild.classList.add("active-words");
                eachContent.parentNode.children[0].classList.remove("active-words");
            }
        });
    }

    rightIcon.addEventListener("click", rightSlider);
    leftIcon.addEventListener("click", leftSlider);


    $('.products').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false
            },
            600: {
                items: 1,
                nav: false,
                loop: false
            },
            750: {
                items: 2,
                nav: true,
                loop: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    })

    let owlNav = document.querySelector(".owl-nav");
    owlNav.classList.remove("disabled");

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
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                loop: false
            },
            600: {
                items: 4,
                nav: false,
                loop: false
            },
            1000: {
                items: 7,
                nav: true,
                loop: false
            }
        }
    })
    //Trending Products Carousel
    $('.trending-products').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false
            },
            600: {
                items: 3,
                nav: false,
                loop: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })

    //Trending Products TabMenu
    let names = document.querySelectorAll("#trending-products .all-of-them .heads .list-type h6");
    let trends = document.querySelectorAll("#trending-products .all-of-them .products-list .allcards .allcontents");

    names.forEach(eachName => {
        eachName.addEventListener("click", function (e) {
            document.querySelector(".active-trend").classList.remove("active-trend");
            this.classList.add("active-trend");

            trends.forEach(eachTrend => {
                if (this.getAttribute("data-id") == eachTrend.getAttribute("data-id")) {
                    eachTrend.classList.remove("d-none");
                } else {
                    eachTrend.classList.add("d-none");
                }
            });
        })
    });

    //Top-selling Products Carousel
    $('.top-products').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: false
            },
            600: {
                items: 3,
                nav: false,
                loop: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })

    //Top Selling Products TabMenu
    let sellnames = document.querySelectorAll("#top-selling-products .all-of-them .heads .list-type h6");
    let topSellingProducts = document.querySelectorAll("#top-selling-products .all-of-them .products-list .allcards .allcontents");

    sellnames.forEach(eachSellName => {
        eachSellName.addEventListener("click", function (e) {
            document.querySelector(".active-list").classList.remove("active-list");
            this.classList.add("active-list");

            topSellingProducts.forEach(eachProduct => {
                if (this.getAttribute("data-id") == eachProduct.getAttribute("data-id")) {
                    eachProduct.classList.remove("d-none");
                } else {
                    eachProduct.classList.add("d-none");
                }
            });
        })
    });

    //Sticky navbar
    window.onscroll = function () { myFunction() };
    var navbar = document.getElementById("main-nav");
    var sticky = navbar.offsetTop;
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
    // function scrollPart(){
    //     var scrollLimit = 300;
    //     if (window.scrollY >= scrollLimit) {
    //         $("#scrollBtn .btn").classList.remove("d-none");
    //     }
    // }

    //Scroll to top button
    let scrollBtn = document.querySelector("#scrollBtn .btn");
    scrollBtn.addEventListener("click", function (e) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    // window.onscroll = function () {
    //     var scrollLimit = 300;
    //     if (window.scrollY >= scrollLimit) {
    //         $("#scrollBtn .btn").classList.remove("d-none");
    //     }
    // };

    AOS.init();
    AOS.init("fade-up");

    //ADD TO WISHLIST
    let products = [];
    let addWishlistBtns = document.querySelectorAll(".cards .img-part .heart");

    if (JSON.parse(localStorage.getItem("products")) != null) {
        products = JSON.parse(localStorage.getItem("products"));
    }

    addWishlistBtns.forEach(eachWishlist => {
        //get products SUP count 
        eachWishlist.addEventListener("click", function (e) {
            e.preventDefault();

            let itemImg = this.previousElementSibling.previousElementSibling.getAttribute("src");
            let itemName = this.parentNode.parentNode.children[1].children[1].innerHTML;
            let itemPrice = this.parentNode.parentNode.children[1].children[2].innerHTML;
            let itemID = this.parentNode.parentNode.getAttribute("data-id");
            let existProduct = products.find(m => m.id == itemID)
            if (existProduct != undefined) {
                this.classList.remove("fa-solid")
                this.classList.add("fa-regular")
                this.classList.add("open-hovered")

                //delete method
            } else {
                this.classList.remove("fa-regular")
                this.classList.remove("open-hovered")
                this.classList.add("fa-solid")
            }

            products.push({
                id: itemID,
                image: itemImg,
                name: itemName,
                price: itemPrice
            })
            localStorage.setItem("products", JSON.stringify(products));
            getProductsCount(products);
        })
    });
})