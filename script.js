function showPage(page) {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error("Error loading page:", error));
}

document.addEventListener("DOMContentLoaded", () => {
    showPage('user-list');
});
