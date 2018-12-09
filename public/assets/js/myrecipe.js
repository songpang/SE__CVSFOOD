
function myrecipeview() {

    var user = firebase.auth().currentUser;
    var myreciperef = firebase.database().ref('user/' + user.uid);
    if (user) {
        myreciperef.on('value', function (snapshot) {
            var message = snapshot.val();
            targeturl = message.likepost;

            targeturl = targeturl
            $("#rank1").attr("href", targeturl)
            $("#rank1").text("Song")
            // window.location.href = 'message.likepost';
            console.log(targeturl);
        });
    }
}


function param() {

    var url = "http://127.0.0.1:7001/abc/LoginForm.action?userId=para&userNm=파람";
    //var url = document.location.href;

    if (url.indexOf("?") > -1) {
        var splits = url.split("?"); //split("구분자"):tokenizer와 다른점은 split는 공백도 하나의 값을 가진다.
        var gets = splits[1];

        var para = gets.split("&");
        var len = para.length;

        for (var i = 0; i < len; i++) {
            var param = para[i].split("=");
            var name = param[0];
            var value = param[1];

            alert("name : " + name);
            alert("value : " + value);

        }

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
