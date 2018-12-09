
function myrecipeview() {

    var user = firebase.auth().currentUser;
    var myreciperef = firebase.database().ref('user/' + user.uid);
    if (user) {
        myreciperef.on('value', function (snapshot) {
            var message = snapshot.val();
            targeturl = message.likepost;

            targeturl = targeturl
            $("#rank1").attr("href", targeturl)
            $("#rank1").text("Lastest Recipe Link Here")
            // window.location.href = 'message.likepost';
            console.log(targeturl);
        });
    }
}

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

function likecount() {
    var user = firebase.auth().currentUser;

    if (user) {

        firebase.database().ref("post/" + user.uid)
            .update({
                likepost: s,
            })
            .then(function (result) {
                alert("Success");
            });
    }
}


function regist(today, collect) {
    firebase.database().ref('todayVisit/' + today + '/').set({
        userCollect: collect
    });
}

/*값을 빼보자*/
function show(today) {
    firebase.database().ref('todayVisit/' + today + '/').on('value', function (e) {
        var message = e.val();
        console.log(message.userCollect);
    });
}
