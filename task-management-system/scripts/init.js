const isAuthenticated = localStorage.getItem("isLoggedIn");

if (!isAuthenticated) window.location.href = "./pages/login.html";
else window.location.href = "./pages/home.html";
