# faq-accordion

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued Improvement](#continued-improvement)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This is for a FAQ accordion for the FrontEndMentor site.

### Screenshot

Find the final screenshot using this file path: insert screenshot here

### Links

- Solution URL: https://github.com/Lolito-Lindsey-Official/faq-accordion
- Live Site URL: https://lolito-lindsey-official.github.io/faq-accordion/

- Used for personal experimentation: https://www.freecodecamp.org/news/build-an-accordion-menu-using-html-css-and-javascript/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- JavaScript (a mix DOM manipulation and function parameters)

### Continued Improvement

I plan on continuing to improve my DOM manipulation skills as it is interesting to me. It fired up new project ideas (like a feelings check-up app and a user greeting app) when I went through the process. 

Here are some code snippet highlights for me, where I did the most growth and learning:

```html
 <!--onClick is used to link the HTML with the JavaScript-->
  <button class="accordion-button" onclick="toggleAccordion(this)">
```

```html
  <footer class="attribution">
    Challenge by <a href="https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz" target="_blank">Frontend Mentor</a>
    Coded by <a href="https://github.com/Lolito-Lindsey-Official/faq-accordion" target="_blank">lolito-lindsey-official</a>
  </footer>
```

```css
    background-image: url("/faq-accordion/assets/images/background-pattern-desktop.svg"); 
    background-position: top;
    background-repeat: repeat-x;
    background-size: 200vh;
    background-color: hsl(275, 100%, 97%);
```

```js
    // if the content is clicked on by the user
    if (content.style.display === "block") {
        // hides the accordion's answer, displays the expand icon, and hides the collapse icon
        content.style.display = "none";
        iconExpand.style.display = "block";
        iconCollapse.style.display = "none";
    } 
    
    else {
         // shows the accordion's answer,  displays the collapse icon, and hides the expand icon
        content.style.display = "block";
        iconExpand.style.display = "none";
        iconCollapse.style.display = "block";
    }
```



## Author

- Website - https://lolito-lindsey-official.github.io/
- Frontend Mentor - https://www.frontendmentor.io/profile/Lolito-Lindsey-Official
