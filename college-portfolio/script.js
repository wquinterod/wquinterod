/* Wilson Quintero - CSS Interaction and JavaScript practice */
// Clicking the button changes the coding tip. This uses a click event,
// an array, and textContent to update the page without reloading it.
const codingTips = [
    "Small, regular practice is a great way to improve your web development skills.",
    "Use semantic HTML elements to give your page a clear and meaningful structure.",
    "CSS Grid is useful for arranging content in rows and columns.",
    "Use a browser's developer tools to inspect styles and find layout problems.",
    "Give links and buttons clear labels so visitors know what will happen when they click."
];

const tipButton = document.querySelector("#coding-tip-button");
const tipText = document.querySelector("#coding-tip-text");
let currentTip = 0;

if (tipButton && tipText) {
    tipButton.addEventListener("click", function () {
        currentTip = (currentTip + 1) % codingTips.length;
        tipText.textContent = codingTips[currentTip];
        tipButton.textContent = currentTip === codingTips.length - 1
            ? "Start again ↻"
            : "Show another tip →";
    });
}
