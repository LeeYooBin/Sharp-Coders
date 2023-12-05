const userRecords = JSON.parse(localStorage.getItem('userRecords')) || [];
const loginButton = document.querySelector("#login-button");
const registerButton = document.querySelector("#register-button");

const isEmailRegistered = email => userRecords.some(record => record.email === email);

loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    const email = document.querySelector("#login-email");
    const password = document.querySelector("#login-password");
    const user = userRecords.find(record => record.email === email.value);

    if (user && user.password === password.value) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "home.html";
    } 
    else {
        alert('Credenciais inválidas');
        // email.value = "";
        // password.value = "";
        this.reset();
    }
});

registerButton.addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.querySelector("#register-name");
    const email = document.querySelector("#register-email");
    const password = document.querySelector("#register-password");

    if (isEmailRegistered(email.value)) {
        alert('Este email já está registrado.');
        // name.value = "";
        // email.value = "";
        // password.value = "";
        this.reset();
        return;
    }

    const tasks = [];
    const newUser = { 
        name: name.value, 
        email: email.value, 
        password: password.value, 
        tasks 
    };
    userRecords.push(newUser);

    localStorage.setItem('userRecords', JSON.stringify(userRecords));
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    window.location.href = "home.html";
});