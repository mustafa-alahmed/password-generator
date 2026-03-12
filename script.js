const small_letters = "abcdefghijklmnopqrstuvwxyz";
const capital_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const length_input = document.getElementById("length");
const include_uppercase = document.getElementById("include-uppercase");
const include_numbers = document.getElementById("include-numbers");
const include_symbols = document.getElementById("include-symbols");
const include_lowercase = document.getElementById("include-lowercase");
const generate_password = document.getElementById("generate-password");
const password = document.getElementById("password");
const copy_password = document.getElementById("copy-password");
const optionCheckboxes = [
    include_uppercase,
    include_numbers,
    include_symbols,
    include_lowercase
];
function getRandomCharacter() {
    const checked = optionCheckboxes.filter(cb => cb.checked);
    let a ;
    for (let i = 0;i < checked.length;i++){
        a = i;
    }
    const randomType = Math.floor(Math.random() * (a + 1));
    const type = checked[randomType].id;
    if (type === "include-uppercase") {
        return capital_letters[Math.floor(Math.random() * capital_letters.length)];
    }
    else if (type === "include-numbers") {
        return numbers[Math.floor(Math.random() * numbers.length)];
    }
    else if (type === "include-symbols") {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
    else if (type === "include-lowercase") {
        return small_letters[Math.floor(Math.random() * small_letters.length)];
    }
}
function updateOptionState() {
    const checked = optionCheckboxes.filter(cb => cb.checked);
    if (checked.length <= 1) {
        optionCheckboxes.forEach(cb => {
            cb.disabled = cb.checked;
        });
    } else {
        optionCheckboxes.forEach(cb => {
            cb.disabled = false;
        });
    }
}
optionCheckboxes.forEach(cb => {
    cb.addEventListener('change',event => {
        updateOptionState();
    });
});
updateOptionState();
generate_password.addEventListener('click', event => {
    let repassword = "";
    for (let x = 0;x < length_input.value;x++){
        repassword += getRandomCharacter();
    }
    password.value = repassword
})
copy_password.addEventListener('click', event => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        if (password.value) {
            navigator.clipboard.writeText(password.value)
            password.style.animation = "shadow 1s ease"
            setTimeout(()=> {
                password.style.animation = "none"
            },1000)
        }
    }
})