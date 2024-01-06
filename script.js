function toggleAccordion(button) {
    // 'content refers to the next element is referring to the div element with an .accordion-answer class"
    var content = button.nextElementSibling;
    // selects the icon elements from the HTML file
    let iconExpand = button.querySelector('.icon-expand');
    let iconCollapse = button.querySelector('.icon-collapse');
    
    // if the content is clicked on by the user
    if (content.style.display === "block") {
        // hides the accordion's answer, displays the expand icon, and hides the collapse icon
        content.style.display = "none";
        iconExpand.style.display = "block";
        iconCollapse.style.display = "none";
    } else {
         // shows the accordion's answer,  displays the collapse icon, and hides the expand icon
        content.style.display = "block";
        iconExpand.style.display = "none";
        iconCollapse.style.display = "block";
    }
}
