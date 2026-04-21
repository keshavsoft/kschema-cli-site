fetch("before.js")
    .then(r => r.text())
    .then(code => {
        document.getElementById("beforeCode").textContent = code;
    });

function createAPI() {
    fetch("after.js")
        .then(r => r.text())
        .then(code => code.replaceAll("{subRoute}", "V1"))
        .then(code => {
            document.getElementById("outputCode").innerHTML = code;
        });
};

function goNext() {
    window.location.href = "routes.html";
}