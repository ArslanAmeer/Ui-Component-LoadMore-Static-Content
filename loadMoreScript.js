document.addEventListener("DOMContentLoaded", function () {

    var divs = document.querySelectorAll("#inLoader");
    if (divs.length != 0 && divs.length > 6) {
        for (let i = 6; i < divs.length; i++) {
            divs[i].classList.toggle('hiddenContent');
        }
    }

    const elToLoad = document.getElementById("loadmore");
    elToLoad.addEventListener("click", () => {

        var hiddenDivs = document.querySelectorAll(".hiddenContent");
        const items = hiddenDivs.length;
        if (items == 0) {
            elToLoad.innerText = 'No More Content';
            elToLoad.removeAttribute('href');
        } else if (items != 0 && items > 3) {
            for (let i = 0; i < 3; i++) {
                hiddenDivs[i].classList.toggle('hiddenContent');
            }
        } else {
            for (let i = 0; i < items; i++) {
                hiddenDivs[i].classList.toggle('hiddenContent');
            }
        }

    });
});