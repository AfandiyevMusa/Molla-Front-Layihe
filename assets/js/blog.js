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
        if (!this.classList.contains("clicked-input")) {
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

    //Currency
    let chooseOneOf = document.querySelector("#up-nav .language-part .money-part span")
    let chooseEuro = document.querySelector("#up-nav .language-part .money-part .drop-money .euro")
    let chooseUsd = document.querySelector("#up-nav .language-part .money-part .drop-money .usd")

    if (localStorage.getItem('currencyChoice')) {
        chooseOneOf.innerText = localStorage.getItem('currencyChoice');
    }

    chooseEuro.addEventListener("click", function (e) {
        chooseOneOf.innerText = chooseEuro.innerText;
        localStorage.setItem('currencyChoice', chooseEuro.innerText);
    });

    chooseUsd.addEventListener("click", function (e) {
        chooseOneOf.innerText = chooseUsd.innerText;
        localStorage.setItem('currencyChoice', chooseUsd.innerText);
    });

    //Language
    let chooseLanguage = document.querySelector("#up-nav .language-part .lang-part span")
    let chooseEnglish = document.querySelector("#up-nav .language-part .lang-part .drop-lang .english")
    let chooseFrench = document.querySelector("#up-nav .language-part .lang-part .drop-lang .french")
    let chooseSpanish = document.querySelector("#up-nav .language-part .lang-part .drop-lang .spanish")

    if (localStorage.getItem('languageChoice')) {
        chooseLanguage.innerText = localStorage.getItem('languageChoice');
    }

    chooseEnglish.addEventListener("click", function (e) {
        chooseLanguage.innerText = chooseEnglish.innerText;
        localStorage.setItem('languageChoice', chooseEnglish.innerText);
    });

    chooseFrench.addEventListener("click", function (e) {
        chooseLanguage.innerText = chooseFrench.innerText;
        localStorage.setItem('languageChoice', chooseFrench.innerText);
    });

    chooseSpanish.addEventListener("click", function (e) {
        chooseLanguage.innerText = chooseSpanish.innerText;
        localStorage.setItem('languageChoice', chooseSpanish.innerText);
    });
})