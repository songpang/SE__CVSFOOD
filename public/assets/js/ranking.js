function newlike() {
  var user = firebase.auth().currentUser;
  if (user) {
    var d = new Date();
    var newPostKey = firebase.database().ref().child("like/").push().key;
    firebase.database().ref("like/" + newPostKey)
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

