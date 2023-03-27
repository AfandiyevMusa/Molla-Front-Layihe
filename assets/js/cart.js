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

    //Coupon code area input background
    let inputAre = document.querySelector(".input");
    inputAre.addEventListener("click", function (e) {
        if (!this.classList.contains("clicked-input")) {
            this.classList.add("clicked-input");
        }
        // else {
        //     eachInput.classList.add("nonclicked-input");
        // }
    })

    //Adding Cart Part
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    let tableBody = document.querySelector("tbody");
    let input = document.querySelectorAll("input")
    let subtotal = document.querySelector(".subtotal p")
    let totalPrice = document.querySelector(".total p");
    let cartPart = document.querySelector("#cart-part")
    let productTable = document.querySelector("#product-table")

    if (cartProducts.length == 0) {
        productTable.classList.add("d-none")
        cartPart.classList.remove("d-none")
    } else {
        productTable.classList.remove("d-none")
        cartPart.classList.add("d-none")
        getProductsCount(cartProducts);
        cartProducts.forEach(eachProduct => {
            tableBody.innerHTML += `<tr data-id="${eachProduct.id}">
        <td class="image"><img src="${eachProduct.image}" alt=""></td>
        <td class="name">${eachProduct.name}</td>
        <td class="oneprice">$${parseFloat(eachProduct.price.substring(1))}</td>
        <td class="quantity">
            <i class="fa-solid fa-minus minus"></i>
            <input type="number" class="input text-center" min="1"
            max="10000" value="${eachProduct.count}">
            <i class="fa-solid fa-plus plus"></i>
        </td>
        <td class="total-product" style="color: #fcb941;">$${(parseFloat(eachProduct.price.substring(1)) * parseInt(eachProduct.count)).toFixed(2)}</td>
        <td class="delete"><i class="fa-solid fa-x delete-all"></i></td>
    </tr>`;
            getProductsCount(cartProducts);
        });

        let minusBtns = document.querySelectorAll(".quantity .minus")
        let plusBtns = document.querySelectorAll(".quantity .plus");

        for (let i = 0; i < minusBtns.length; i++) {
            minusBtns[i].addEventListener("click", function (e) {
                let decreasedProduct = cartProducts.find(m => m.id == minusBtns[i].parentElement.parentElement.getAttribute("data-id"))

                if (decreasedProduct.count > 1) {
                    decreasedProduct.count -= 1;
                    minusBtns[i].nextElementSibling.value = decreasedProduct.count;
                    let productLastPrice = minusBtns[i].parentElement.nextElementSibling.innerText.substring(1);
                    productLastPrice = (parseFloat(productLastPrice) - parseFloat(decreasedProduct.price.substring(1))).toFixed(2);
                    minusBtns[i].parentElement.nextElementSibling.innerText = "$ " + productLastPrice;
                    window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts))

                    document.querySelector(".cart sup").innerText--;
                    subtotal.innerText = "$" + `${total(JSON.parse(localStorage.getItem("cartProducts"))).toFixed(2)}`;
                    totalPrice.innerText = "$" + `${total(JSON.parse(localStorage.getItem("cartProducts"))).toFixed(2)}`;
                } else {
                    minusBtns[i].classList.add("unable")
                }
            })
        }

        for (let i = 0; i < plusBtns.length; i++) {
            plusBtns[i].addEventListener("click", function (e) {
                let increasedProduct = cartProducts.find(m => m.id == plusBtns[i].parentElement.parentElement.getAttribute("data-id"))
                increasedProduct.count += 1;
                plusBtns[i].previousElementSibling.value = increasedProduct.count;
                let productLastPrice = plusBtns[i].parentElement.nextElementSibling.innerText.substring(1);
                productLastPrice = (parseFloat(productLastPrice) + parseFloat(increasedProduct.price.substring(1))).toFixed(2);
                plusBtns[i].parentElement.nextElementSibling.innerText = "$ " + productLastPrice;

                window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
                document.querySelector(".cart sup").innerText++;
                subtotal.innerText = "$" + `${total(JSON.parse(localStorage.getItem("cartProducts"))).toFixed(2)}`;
                totalPrice.innerText = "$" + `${total(JSON.parse(localStorage.getItem("cartProducts"))).toFixed(2)}`;
            })
        }

        let deleteBtns = document.querySelectorAll(".delete-all")
        for (let i = 0; i < deleteBtns.length; i++) {
            deleteBtns[i].addEventListener("click", function (e) {
                e.preventDefault();
                deleteBtns[i].parentElement.parentElement.remove();
                let shouldBeDeleted = cartProducts.find(m => m.id == deleteBtns[i].parentElement.parentElement.getAttribute("data-id"))
                let indexDeleted = cartProducts.indexOf(shouldBeDeleted)
                if (indexDeleted > -1) {
                    cartProducts.splice(indexDeleted, 1)
                }
                localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
                let num = parseInt(document.querySelector(".cart sup").innerText) - parseInt(deleteBtns[i].parentElement.previousElementSibling.previousElementSibling.children[1].value);
                document.querySelector(".cart sup").innerText = num
                subtotal.innerText = "$" + `${total(JSON.parse(localStorage.getItem("cartProducts"))).toFixed(2)}`;
                totalPrice.innerText = "$" + `${total(JSON.parse(localStorage.getItem("cartProducts"))).toFixed(2)}`;
            })
        }

        subtotal.innerText = "$" + `${total(JSON.parse(localStorage.getItem("cartProducts"))).toFixed(2)}`;
        totalPrice.innerText = "$" + `${total(JSON.parse(localStorage.getItem("cartProducts"))).toFixed(2)}`;
    }
    function getProductsCount(arr) {
        let cnt = 0;
        for (const eachItem of arr) {
            cnt += eachItem.count;
        }
        document.querySelector(".cart sup").innerText = cnt;
    }

    function total(str) {
        let sum = 0;
        for (const eachStr of str) {
            sum += (parseFloat(eachStr.price.substring(1)) * parseFloat(eachStr.count))
        }
        return sum;
    }
















    //Scroll to top button
    let scrollBtn = document.querySelector("#scrollBtn .btn");
    scrollBtn.addEventListener("click", function (e) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})