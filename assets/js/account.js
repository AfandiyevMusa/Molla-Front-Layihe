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
    
    //Login TabMenu
    let choices = document.querySelectorAll("#register .all .register-part .upregister .tab-menu .for-names .names h4");
    let infos = document.querySelectorAll("#register .all .register-part .upregister .tab-menu .infos .elems");

    choices.forEach(eachChoice => {
        eachChoice.addEventListener("click", function (e) {
            document.querySelector(".active-sign").classList.remove("active-sign");
            this.classList.add("active-sign");

            infos.forEach(eachInfo => {
                if (this.getAttribute("data-id") == eachInfo.getAttribute("data-id")) {
                    eachInfo.classList.remove("d-none");
                } else {
                    eachInfo.classList.add("d-none");
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
            // else {
            //     eachInput.classList.add("nonclicked-input");
            // }
        })
    });

    //cart and wishlists icon numbers
    let wishlisted = JSON.parse(localStorage.getItem("wishlisted"));
    function getWishlistCount(arr) {
        let cnt = 0;
        for (const eachItem of arr) {
            cnt += eachItem.count;
            document.querySelector(".wishlist-sup").innerText = cnt;
        }
    }
    getWishlistCount(wishlisted);

    let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    function getProductsCount(arr) {
        let cnt = 0;
        for (const eachItem of arr) {
            cnt += eachItem.count;
            document.querySelector(".cart sup").innerText = cnt;
        }
    }
    getProductsCount(cartProducts);

    //Scroll to top button
    let scrollBtn = document.querySelector("#scrollBtn .btn");
    scrollBtn.addEventListener("click", function (e) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    window.addEventListener("scroll", function (e) {
        if (this.window.scrollY >= 376.5) {
            scrollBtn.style.opacity = 1;
        } else {
            scrollBtn.style.opacity = 0;
        }
    })
})