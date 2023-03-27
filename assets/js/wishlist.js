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

    //Scroll to top button
    let scrollBtn = document.querySelector("#scrollBtn .btn");
    scrollBtn.addEventListener("click", function (e) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    //Wishlist
    let wishlisted = JSON.parse(localStorage.getItem("wishlisted"));
    let tableBody = document.querySelector("tbody");
    // let thead = document.querySelector("thead")
    // let warningMessage = document.querySelector(".warning");
    let cartPart = document.querySelector("#cart-part")
    let productTable = document.querySelector("#product-table")


    if (wishlisted.length != 0) {
        productTable.classList.remove("d-none")
        cartPart.classList.add("d-none")
        getWishlistCount(wishlisted);
        wishlisted.forEach(wish => {
            tableBody.innerHTML += `
            <tr data-id="${wish.id}">
            <td class="image"><img src="${wish.image}" alt="">
            </td>
            <td class="name">${wish.name}</td>
            <td class="oneprice">${wish.price}</td>
            <td class="stock">
                <span>In Stock</span>
            </td>
            <td class="select">
                <div class="choose">
                    <a href=""><i class="fa-solid fa-cart-plus"></i>add to cart</a>
                </div>
            </td>
            <td class="delete"><i class="fa-solid fa-x delete-all"></i></td>
        </tr>`;
            getWishlistCount(wishlisted);
        });

        let deleteBtns = document.querySelectorAll(".delete-all")
        for (let i = 0; i < deleteBtns.length; i++) {
            deleteBtns[i].addEventListener("click", function (e) {
                e.preventDefault();
                deleteBtns[i].parentElement.parentElement.remove();
                let shouldBeDeleted = wishlisted.find(m => m.id == deleteBtns[i].parentElement.parentElement.getAttribute("data-id"))
                let indexDeleted = wishlisted.indexOf(shouldBeDeleted)
                if (indexDeleted > -1) {
                    wishlisted.splice(indexDeleted, 1)
                }
                localStorage.setItem("wishlisted", JSON.stringify(wishlisted))
                let num = parseInt(document.querySelector(".wishlist-sup").innerText) - 1;
                document.querySelector(".wishlist-sup").innerText = num
            })
        }
    } else {
        productTable.classList.add("d-none")
        cartPart.classList.remove("d-none")
    }

    function getWishlistCount(arr) {
        let cnt = 0;
        for (const eachItem of arr) {
            cnt += eachItem.count;
            document.querySelector(".wishlist-sup").innerText = cnt;
        }
    }
})