const baseUrl = 'http://localhost:3000';

$(document).ready(() => {
    auth()
})

function auth() {
    if(localStorage.token) {
        $('#dashboard-page').show();
        $('#login-page').hide();
        $('#register-page').hide();
    } else {
        $('#dashboard-page').hide();
        $('#login-page').show();
        $('#register-page').hide();
    }
}

function login(event) {
    event.preventDefault();
    const email = $('#email-login-value').val();
    const password = $('#password-login-value').val();
    $.ajax({
        method: 'POST',
        url: baseUrl + '/login',
        data: {
            email,
            password
        }
    })
        .done(data => {
            localStorage.setItem('token', data.token);
            auth();
        })
        .fail(err => {
            console.log(err)
        })
}

function register(event) {
    event.preventDefault();
    const username = $('#username-register-value').val();
    const email = $('#email-register-value').val();
    const password = $('#password-register-value').val();
    $.ajax({
        method: 'POST',
        url: baseUrl + '/register',
        data: {
            username,
            email,
            password
        }
    })
        .done(data => {
            localStorage.setItem('token', data.token);
            auth()
        })
        .fail(err => {
            console.log(err)
        })
}

$('#btn-register').on('click', () => {
    $('#dashboard-page').hide();
    $('#login-page').hide();
    $('#register-page').show();
})

$('#btn-login').on('click', () => {
    $('#dashboard-page').hide();
    $('#login-page').show();
    $('#register-page').hide();
})

$('#btn-logout').on('click', () => {
    localStorage.clear()
    auth()
})