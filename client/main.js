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

function onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    let id_token = googleUser.getAuthResponse().id_token;

    $.ajax({
        method: 'POST',
        url: baseUrl + '/googleSignIn',
        headers: {
            token: id_token
        }
    })
        .done(token => {
            localStorage.setItem('token', token);
            console.log('sign in success', token);
            fetchTodos();
            auth()
        })
        .fail(err => {
            console.log('sign in failed', err);
        })

    console.log(id_token);
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

// function showMovies(event) {
//     event.preventDefault();
//     $.ajax({
//         method: 'GET',
//         url: baseUrl + '/movies',

//     })
// }

// function showSport(event) {

// }

// function showTravel(event) {

// }

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

// window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '{your-app-id}',
//       cookie     : true,
//       xfbml      : true,
//       version    : '{api-version}'
//     });
      
//     FB.AppEvents.logPageView();   
      
//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));


// function rdToProductionHouses() {
    
//   }

//   function rdToCasts() {
    
// }