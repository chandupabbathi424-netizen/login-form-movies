
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const username = document.getElementById("username").value;
        const number = document.getElementById("number").value;
        const email = document.getElementById("email").value;

        if (username === "") {
            alert("Please Enter Name");
        }

        else if (number === "") {
            alert("Please Enter Number");
        }

        else if (email === "") {
            alert("Please Enter Email");
        }

        else {

            
            localStorage.setItem("username", username);

            alert("Login Successful");

            
            window.location.href = "home.html";
        }

    });

}

const welcomeUser = document.getElementById("welcomeUser");

if (welcomeUser) {

    const storedUser = localStorage.getItem("username");

    welcomeUser.textContent = "Welcome, " + storedUser;

}

const bookButtons = document.querySelectorAll(".bookBtn");

const bookingMessage = document.getElementById("bookingMessage");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const movieName = button.dataset.movie;

        
        localStorage.setItem("movie", movieName);

        alert(movieName + " Ticket Booked Successfully");

        bookingMessage.textContent =
            "Your ticket for " + movieName + " has been booked successfully 🎉";

    });
});

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        localStorage.clear();

        alert("Logged Out Successfully");

        window.location.href = "index.html";

    });

}