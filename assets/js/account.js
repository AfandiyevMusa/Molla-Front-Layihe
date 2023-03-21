$(function(){
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
        })
    });

})