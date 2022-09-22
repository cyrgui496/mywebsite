document.getElementById("popupCloseIcon").addEventListener("click", closePopup);
function closePopup() {
    document.querySelector(".popup_container__displayBlock").className =
        "popup_container__displayNone";
}

document.getElementById("submitButton").addEventListener("click", openPopup);
function openPopup() {
    document.querySelector(".popup_container__displayNone").className =
        "popup_container__displayBlock";
}
