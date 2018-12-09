function newpost() {
  var user = firebase.auth().currentUser;
  if (user) {
    var d = new Date();
    var newPostKey = firebase.database().ref().child("post/").push().key;
    firebase.database().ref("post/" + newPostKey)
      .set({
        uid: user.uid,
        createdAt: d.getTime(),
        reverseCreatedAt: -d.getTime(),
        contents: $("#message").val()
      })
      .then(function (result) {
        alert("Success");
      });
  }
}

function loadpost() {
  var user = firebase.auth().currentUser;
  if (user) {
    var ref = firebase.database().ref("post/");
    ref.orderByChild('uid').limitToLast(1).on('value', function (data) { // once 대신 on 하면 실시간 display (using timeline) (firebase 의 정책상 과금될 우려)
      data.forEach(function (sdata) {
        $("#message").val(sdata.val().contents);
        $("#message").attr('key', sdata.key);
      })
    })
  }
}

function update() {

  // var user = firebase.auth().currentUser;
  // if (user) {

  //   var _key = $("#message").attr('key');
  //   var ref = firebase.database().ref('post/' + _key + "/");
  //   var udata = {
  //     contents: $("#message").val(),
  //     newvalue: ''
  //   };
  //   ref.update(udata);

  // }

  var user = firebase.auth().currentUser;
  if (user) {
    var d = new Date();
    // var newPostKey = firebase.database().ref().child("post/").push().key;
    var _key = $("#message").attr('key');


    firebase.database().ref("post/" + _key)
      .set({
        uid: user.uid,
        createdAt: d.getTime(),
        reverseCreatedAt: -d.getTime(),
        contents: $("#message").val()
      })
      .then(function (result) {
        alert("Success");
      });
  }
}

function deletepost() {
  var _key = $("#message").attr('key');
  var ref = firebase.database().ref("post/" + _key + "/");

  ref.remove().then(function () { alert('Success'); })
    .catch(function (error) {
      console.log("Remove failed: " + error.message);
    });


}

$(function () {
  var count = $('#rank-list li').length;
  var height = $('#rank-list li').height();

  function step(index) {
    $('#rank-list ol').delay(2000).animate({
      top: -height * index,
    }, 500, function () {
      step((index + 1) % count);
    });
  }
  step(1);
});

function GPage_Load() {
  var input_name = $("#input_name").val();

  location.href = "https://www.google.com/search?q=" + input_name + "";
}

function YPage_Load() {
  var input_name = $("#input_name").val();

  location.href = "https://www.youtube.com/results?search_query=" + input_name + "";
}