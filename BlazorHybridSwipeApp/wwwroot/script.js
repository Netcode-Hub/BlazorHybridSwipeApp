function addSwipeHandler(swipeItemId, buttonsId) {
    const swipeItem = document.getElementById(swipeItemId);
    const actionButtons = document.getElementById(buttonsId);

    if (!swipeItem || !actionButtons)
        return;

    const hammertime = new Hammer(swipeItem);
    hammertime.on("swipeleft", function () {
        swipeItem.style.transform = "translateX(-150px)";
        swipeItem.style.transition = "transform 0.3s ease-in-out";
        actionButtons.classList.add("visible");
    });
}

function restoreSwipe(swipeItemId, buttonsId) {
    const swipeItem = document.getElementById(swipeItemId);
    const actionButtons = document.getElementById(buttonsId);

    if (!swipeItem || !actionButtons)
        return;

    swipeItem.style.transform = "translateX(0)";
    swipeItem.style.transition = "transform 0.3s ease-in-out";
    actionButtons.classList.remove("visible");
}