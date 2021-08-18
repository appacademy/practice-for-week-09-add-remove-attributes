# Practice: Add and Remove Attributes

In the practice, you will be given an HTML page with a checkbox and a set of 
buttons. The checkbox should control whether an HTML link is present on the 
page. The buttons will adjust the CSS class which controls the size of a 
figure containing an image and caption.

The code you need to write will set attributes of HTML DOM elements. The work 
has been broken down into a few short steps which can be done in 1-5 lines of 
code each.

The rest of the code has been written for you, so all you'll need to do is fill
in the code where indicated.

## Set up

Clone the starter from the **Download** link at the bottom of this page.

## Instructions

Open __index.html__ in your browser. Remember to refresh whenever you make
changes. You should add `console.log()` statements as needed to help you 
understand and expand the existing code.

Open __control-attributes.js__ in VS Code, and complete the code as indicated
in the comments.

## Tips and Hints

Think about the use cases where `innerHTML` is better than `innerText`, and 
vice versa.

Remember that links are made with anchor tags like `<a href=""></a>`.

In order to use `document.getElementById()` to retrieve a DOM element, the `id` 
attribute needs to be set on that element. This applies whether the element is 
in your HTML, or made using `document.createElement()`.