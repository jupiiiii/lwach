const signupForm = document.getElementById('signup_form');
let tg = window.Telegram.WebApp;

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

                if (username.length < 3) {
                    document.getElementById('error').innerText = 'Username should be at least 3 characters!';
                    return;
                }

                if (email.length < 5) {
                    document.getElementById('error').innerText = 'Please enter your correct email!';
                    return;
                }

                if (password.length < 5) {
                    document.getElementById('error').innerText = 'Password cannot be less than 5 characters!';
                    return;
                }


                let userData = {
                    username: username,
                    email: email,
                    password: password
                }
                tg.sendData(JSON.stringify(complaint));
                tg.close();
                
});

