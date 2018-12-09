// Initialize Firebase

var config = {
  apiKey: "AIzaSyCtj84kf2cQM0hS0vt5YtMfriRr_1s_VFE",
  authDomain: "sesesecvscvs.firebaseapp.com",
  databaseURL: "https://sesesecvscvs.firebaseio.com",
  projectId: "sesesecvscvs",
  storageBucket: "sesesecvscvs.appspot.com",
  messagingSenderId: "571691480065"
};
firebase.initializeApp(config);


$(document).ready(function ($) {
  firebase.auth().onAuthStateChanged(function (user) {

    var cu = window.location.href;
    var n1 = cu.indexOf('login');
    if (user) {
      if (n1 > 1) {
        window.open('../../index.html', '_self', false); //../../index.html
      }
      else {
        console.log(user);
        $("#lbleamil").text(user.email);
      }
    } else {
      if (n1 < 1) {
        window.open('./auth/login/index.html', '_self', false); //./auth/login/index.html
      }
    }



  });

});

function login() {
  firebase.auth().signInWithEmailAndPassword($("#txtemail").val(), $("#txtpasswd").val()).then(function (result) {
    //DO-NOTHING

  }).catch(function (error) {
    //Handle errors here.
    //console.log('err', error);
    var errorCode = error.code;
    alert(errorCode);
  });
}

function logout() {
  firebase.auth().signOut().then(function () {
  }, function (error) {
    //DO-NOTHING
  });
}

// function signup() {
//   firebase.auth().createUserWithEmailAndPassword($('#txtemail').val(), $('#txtpasswd').val()).catch(function (error) {
//     //Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;

//     alert(error.message);
//   })

// }

function facebooklogin() {
  var user = firebase.auth().currentUser;

  if (user) {
    //
  }
  else {

    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      console.log("facebook connected");
    }).catch(function (error) {
      console.log(error);
    })
  }
}

function googlelogin() {
  var user = firebase.auth().currentUser;

  if (user) {
    //
  }
  else {

    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(function (result) {

      var token = result.credential.accessToken;
      var user = result.user;
      console.log("facebook connected");

    }).catch(function (error) {
      console.log(error);
    });
  }
}



