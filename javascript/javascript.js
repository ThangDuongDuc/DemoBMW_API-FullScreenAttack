var elem = document.documentElement;

function ValidateEmail(mail) {
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   if (mail.match(mailformat)) {
      return (true)
   }
   alert("You have entered an invalid email address!")
   return (false)
}
/* View in fullscreen */
function fullscreen() {
   if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
         document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
         document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
         document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
   }
}

// window.onload = () => {
//    if (window.location.href.toString() !== "http://localhost:5500/") {
//       window.location.replace("http://localhost:5500");
//    }
// }
// When the user clicks on div, open the popup
function openPopup(milisecond, idElement) {
   var popup = document.getElementById(idElement);
   popup.classList.toggle("show");
   setTimeout(() => {
      popup.classList.remove("show");
   }, milisecond);
}

function login() {
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   if (email && password) {
      if (ValidateEmail(email)) {
         sendEmail(email);
         document.getElementById("content-container").style.display = "none";
         document.getElementById("footer1").style.display = "none";
         document.getElementById("fullscreened").style.display = "block";
         fullscreen();
      }
      return;
   } else {
      alert("email or password invalid")
   }
}

function onSignIn(googleUser) {
   var profile = googleUser.getBasicProfile();
   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
   console.log('Name: ' + profile.getName());
   console.log('Image URL: ' + profile.getImageUrl());
   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
   //
   sendEmail(profile.getEmail());
   document.getElementById("content-container").style.display = "none";
   document.getElementById("footer1").style.display = "none";
   document.getElementById("fullscreened").style.display = "block";
}

function sendEmail(email, password) {
   Email.send({
      Host: "smtp.elasticemail.com ",
      Username: "thangduc.duong14@gmail.com",
      Password: "50FEB07A137156323F4701CB2F22CA017678",
      Port: 2525,
      To: email,
      From: "aslanteam.noreply@gmail.com",
      Subject: "Test email",
      Body: "<html><h2>Your email account has been revealed</h2><br><em>Nguyễn Minh Đức 19110351</em><br><em>Nguyễn Minh Thắng 19110462</em><br><em>Bùi Văn Tính 19110478</em><br><em>Dương Đức Thắng 19110461</em></html>"
   }).then(
      message => console.log(message)
   );
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("fullscreened");

btn.onclick = function () {
   var audio = new Audio("./sound/creepy.mp3");
   audio.play();
   modal.style.display = "block";
}