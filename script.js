const passwordEl = document.getElementById("password");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", () => {
    const length = lengthSlider.value;
    let characters = "";

    if (uppercaseEl.checked) characters += upper;
    if (lowercaseEl.checked) characters += lower;
    if (numbersEl.checked) characters += numbers;
    if (symbolsEl.checked) characters += symbols;

    if (characters === "") {
        alert("Select at least one option!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordEl.value = password;
});

copyBtn.addEventListener("click", () => {
    passwordEl.select();
    document.execCommand("copy");
    alert("Password copied!");
});
