const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn) {
    searchBtn.addEventListener("click", function () {

        const searchText = searchInput.value.trim();

        if (searchText === "") {
            alert("Please enter something to search.");
        } else {
            alert("Searching for: " + searchText);
        }

    });
}


// ---------- REGISTER FUNCTION ----------

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const mobile = document.getElementById("mobile").value;

        const user = {
            name: name,
            email: email,
            password: password,
            mobile: mobile
        };

        localStorage.setItem("farmConnectUser", JSON.stringify(user));

        alert("Registration successful!");

        window.location.href = "login.html";
    });
}


// ---------- LOGIN FUNCTION ----------

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;


        // ADMIN LOGIN

        if (email === "admin@gmail.com" && password === "admin123") {

            alert("Admin login successful!");

            window.location.href = "admin.html";

            return;
        }


        // USER LOGIN

        const storedUser = localStorage.getItem("farmConnectUser");

        if (storedUser) {

            const user = JSON.parse(storedUser);

            if (email === user.email && password === user.password) {

                localStorage.setItem("loggedInUser", user.name);

                alert("Login successful!");

                window.location.href = "user.html";

            } else {

                alert("Invalid email or password.");

            }

        } else {

            alert("No registered user found. Please register first.");

        }

    });
}


// ---------- SERVICE BUTTONS ----------

const serviceButtons = document.querySelectorAll(".product input");

serviceButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const serviceName = button.parentElement.querySelector("h3").innerText;

        alert("You selected: " + serviceName);

    });

});


// ---------- WELCOME USER ----------

const loggedInUser = localStorage.getItem("loggedInUser");

const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeMessage && loggedInUser) {

    welcomeMessage.innerText = "Welcome, " + loggedInUser + "!";

}