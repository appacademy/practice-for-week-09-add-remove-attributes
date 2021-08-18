// NOTE: These values match the CSS class names to simplify JS code
const buttons = ["small", "medium", "large"];

// Store link to avoid typing it more than once
const sourceUrl = "https://www.pexels.com/photo/two-brown-trees-1632790/";

// ==============================================================
// COMPLETE THE 4 STEPS IN THE FOLLOWING SECTION
// ==============================================================

function createButton(id, label) {
    const btn = document.createElement("button");

    // STEP 1: Put label and id on each button
    //  - Consider which `inner...` attribute is best
    //  - Verify by refreshing page to see button text (SMALL, MEDIUM, LARGE)
    //  - Optional: Inspect using the browser's developer tools to see the ids
    // Your code here

    return btn;
}

function setImageSize(newSize) {
    const photo = document.getElementById("photo");
    // STEP 2: Assign class to photo for new size
    //  - All CSS is already written and class name is provided (newSize)
    //  - Verify by seeing image change size on button click
    //  - Image should be its smallest size on page refresh
    // Your code here

    // Reflect current size on the buttons
    buttons.forEach(item => {
        const btn = document.getElementById(item);
        // STEP 3: Assign "selected" class to button which matches new size
        //  - Also clear selected class from other buttons
        //  - Verify by seeing button turn black when clicked
        //  - Only one button should be black at a time
        //  - The SMALL button should be black on page refresh
        // Your code here
    });
}

function toggleSource(show) {
    const sourceElement = document.getElementById("photo-source");
    // STEP 4: Inject link to source when show is true, otherwise clear it
    //  - Consider which `inner...` attribute is best
    //  - Put the text "Source:" before the link
    //  - Go to location provided in sourceUrl constant (defined above)
    //  - Make link text same as the href
    //  - Verify by looking for source below the image (scroll page, if needed)
    // Your code here
}

// ==============================================================
// DO NOT EDIT BELOW THIS LINE
// ==============================================================

function setupContentControls() {
    const sourceToggle = document.getElementById("source-toggle");
    sourceToggle.addEventListener("click", (event) => {
        toggleSource(event.currentTarget.checked);
    });
}

function createImageSizingButtons() {
    const imageButtonsArea = document.getElementById("image-buttons");

    buttons.forEach(item => {
        const btn = createButton(item, item.toUpperCase());
        btn.addEventListener("click", () => setImageSize(item));
        imageButtonsArea.appendChild(btn);
    });
}

// Initialize page

setupContentControls();
createImageSizingButtons();
setImageSize("small");