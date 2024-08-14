const signupForm = document.getElementById('signup_form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://<your-heroku-app>.herokuapp.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            // Optionally, redirect to another page or perform other actions
        } else {
            alert(result.message);
        }
    } catch (error) {
        alert('Error during sign up: ' + error.message);
    }
});
