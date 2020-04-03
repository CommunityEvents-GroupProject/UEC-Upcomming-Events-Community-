const baseUrl = 'http://localhost:3000';

$(document).ready(() => {
    auth()
})

function auth() {
    if(localStorage.token) {
        $('#dashboard-page').show();
        $('#login-page').hide();
        $('#register-page').hide();
        $('#logout-page').show();
        $('#movies-page').show();
    } else {
        $('#dashboard-page').hide();
        $('#login-page').show();
        $('#register-page').hide();
        $('#logout-page').hide();
        $('#movies-page').hide();
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

function showMovies(event) {
    event.preventDefault();
    var cards = $('.card');

cards.each( (index, card) => {
  $(card).prepend("<div class='shineLayer'></div>")
});

$(".card").mousemove( function(event) {
  
  var card = this;
  var mouseCoord = {
    x: event.offsetX,
    y: event.offsetY
  };
  
  //cleanup
  mouseCoord.x = mouseCoord.x < 0 ? 0 : mouseCoord.x;
  mouseCoord.x = mouseCoord.x > $(card).width() ? $(card).width() : mouseCoord.x;
  mouseCoord.y = mouseCoord.y < 0 ? 0 : mouseCoord.y;
  mouseCoord.y = mouseCoord.y > $(card).height() ? $(card).height() : mouseCoord.y;

  
  var transformCard = "scale3d(1.08, 1.08, 1.08) perspective(700px)";
  transformCard += " ";
  //rotateX between -9 and +9
  transformCard += "rotateX(" + ( ( ( (mouseCoord.y / $(card).height()) * 18 ) - 9 )) + "deg)";
  transformCard += " ";
  //rotateY between -13 and +13
  transformCard += "rotateY(" + ( ( ( (mouseCoord.x / $(card).width()) * 26 ) - 13 ) * -1 ) + "deg)";
  
  transformCard += " ";
  //translateX between -3 and +3
  transformCard += "translateX(" + ( ( (mouseCoord.x / $(card).width()) * 6 ) - 3 ) + "px)";
  transformCard += " ";
  //translateY between -5 and +5
  transformCard += "translateY(" + ( ( (mouseCoord.y / $(card).height()) * 10 ) - 5 ) + "px)";
  
  $(card).css("transform", transformCard);
  
  //rotateX between -5 and +5
  var transformCardImage = "rotateX(" + ( ( ( (mouseCoord.y / $(card).height()) * 10 ) - 5 ) * -1 ) + "deg)";
  transformCardImage += " ";
  //rotateX between -13 and +13
  transformCardImage += "rotateY(" + ( ( ( (mouseCoord.x / $(card).width()) * 26 ) - 13 ) * -1 ) + "deg)";
  $(card).find("img").css("transform", transformCardImage);
  
  //opacity of ShineLayer between 0.1 and 0.4
  var backgroundShineLayerOpacity = ((mouseCoord.y / $(card).height()) * 0.3) + 0.1;
  //bottom=0deg; left=90deg; top=180deg; right=270deg;
  var backgroundShineLayerDegree = (Math.atan2(mouseCoord.y - ($(card).height()/2), mouseCoord.x - ($(card).width()/2)) * 180/Math.PI) - 90;
  backgroundShineLayerDegree = backgroundShineLayerDegree < 0 ? backgroundShineLayerDegree += 360 : backgroundShineLayerDegree
  var backgroundShineLayer = "linear-gradient(" + backgroundShineLayerDegree + "deg, rgba(255,255,255," + backgroundShineLayerOpacity + ") 0%, rgba(255,255,255,0) 80%)";
  $(card).find(".shineLayer").css("background", backgroundShineLayer);
});

$(".card").mouseenter( function(event) {
  $(".card").addClass("blur");
  $(this).removeClass("blur");
});

$(".card").mouseleave( function(event) {
  var card = this;
  $(card).css("transform", "scale3d(1, 1, 1)");
  $(card).find("img").css("transform", "");
  $(card).find(".shineLayer").css("background", "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 80%)");

  $(".card").removeClass("blur");
});
}

function showSport(event) {

}

function showTravel(event) {

}

$('#btn-register').on('click', () => {
    $('#dashboard-page').hide();
    $('#login-page').hide();
    $('#register-page').show();
    $('#logout-page').hide();
})

$('#btn-login').on('click', () => {
    $('#dashboard-page').hide();
    $('#login-page').show();
    $('#register-page').hide();
    $('#logout-page').hide();
})

$('#btn-logout').on('click', () => {
    localStorage.clear()
    auth()
})

$('#btn-guide').on('click', () => {
    $('.guide').append(`
        <div id="btn-back">
            <button onclick="showDashboard()">back</button>
        </div>
    `)
    $('#dashboard-page').hide();
    $('#login-page').hide();
    $('#register-page').hide();
    $('#guide').hide();
    $('#logout-page').hide();
})

$('#card-movies').on('click', () => {
    showMovies(event);
})

//movies-page

