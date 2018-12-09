function likepostup() {
    var user = firebase.auth().currentUser;

    if (user) {

        var s = location.href;

        firebase.database().ref("user/" + user.uid)
            .update({
                likepost: s,
            })
            .then(function (result) {
                alert("Success");
            });
    }
}

