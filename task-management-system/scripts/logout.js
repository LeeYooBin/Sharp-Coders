const logout = document.querySelector(".logout");

logout.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");

    window.location.href = "../index.html";
});