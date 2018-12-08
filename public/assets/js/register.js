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

var firebaseEmailAuth; //파이어베이스 email 인증 모듈 전역변수
var firebaseDatabase; //파이어베이스 db 모듈 전역변수
var userInfo; //가입한 유저의 정보. object 타입

firebaseEmailAuth = firebase.auth();
firebaseDatabase = firebase.database();

//가입 성공했을 때 호출 되는 함수 - 위의 firebase의 인증 모듈과 다른 database 모듈임을 확인하자.
function logUser() {

  name = $('#txtname').val();
  phone = $("#txtphone").val();
  var user = firebase.auth().currentUser;
  if (user) {
    firebase.database().ref("user/" + userInfo.uid)
      .set({
        name: name,
        phone: phone
      })
      .then(function (result) {
        alert("Success");
      });
  }

  alert("가입성공");
 
  //메인 페이지로 이동시키고 세션 저장시키기
  window.location.href = "./index.html"

}

function signup2() {

  var email = $('#txtemail').val();
  password = $('#txtpasswd').val();
  name = $('#txtname').val();
  phone = $("#txtphone").val();
  //이메일로 가입 버튼 눌렀을 때 작동되는 함수 - firebase 인증 모듈
  firebaseEmailAuth.createUserWithEmailAndPassword(email, password).then(function () {

    userInfo = firebase.auth().currentUser;; //가입 후 callBack 함수로 생성된 유저의 정보가 user에 담겨서 넘어온다. 전역변수에 할당.

    //뭐가 찍히는지 직접 체크해보세요.
    console.log("userInfo/" + userInfo); //오브젝트 타입
    console.log("userInfo.currentUser/" + userInfo.currentUser); //안됨
    console.log("userInfo.uid/" + userInfo.uid); //vPArtCHqPpOeIOpidEfug0Kgq3v1

    //성공했을 때 작동되는 함수
    logUser();

  }, function (error) {
    //에러가 발생했을 때 
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);

  });

}