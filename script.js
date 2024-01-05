function toggleAccordion(button) {
    var content = button.nextElementSibling;
    // selects the icon elements from the HTML
    let iconExpand = button.querySelector('.icon-expand');
    let iconCollapse = button.querySelector('.icon-collapse');
    
    if (content.style.display === "block") {
        content.style.display = "none";
        // displays the expand icon and removes the collapse icon
        iconExpand.style.display = "block";
        iconCollapse.style.display = "none";
    } else {
        content.style.display = "block";
        // displays the collapse icon and removes the expand icon
        iconExpand.style.display = "none";
        iconCollapse.style.display = "block";
    }
}
