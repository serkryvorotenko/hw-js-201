const formLogin = document.getElementById('formLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');

formLogin.addEventListener('submit', function (ev) {
    ev.preventDefault();
    let json = JSON.stringify({
        email: email.value,
        password: password.value
    });

    fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: json
    })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            if (response.error) {
                alert(response.error)
            } else {
                window.location.href = 'list.html';
            }
        })
        .catch(() => {
            alert(`Network Error`);
        })
})
