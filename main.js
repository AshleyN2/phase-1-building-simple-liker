// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartsData = document.querySelectorAll(".like-glyph");

//document.getElementById('modal').hidden = true;
document.getElementById('modal').className = 'hidden';


function likeKey(e) {
  const heart = e.target;
  mimicServerCall("http://mimicServer.example.com")
    .then(function(){
      if ( heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch(function m(error) {
      const modal = document.getElementById('modal');
      //document.getElementById('modal').hidden = false;
      modal.classList.toggle('visible'); 
      modal.innerText = error;
      setTimeout(modal.hidden=true, 3000);
    });
}


for (const item of heartsData) {
  item.addEventListener("click", likeKey);
}






/*
fetch(mimicServerCall("http://mimicServer.example.com"))
.then((e) => {
    if (e.target.innerText === EMPTY_HEART) {
      e.target.innerText = FULL_HEART;
      e.target.className = ('activated-heart');
    } else {
      e.target.classList.remove('activated-heart')
      e.target.innerText = EMPTY_HEART
    }
  })

.catch(function(error){
  return errorModal;
  setTimeout(error, 3000);
})
*/


/*
const heartsData = document.querySelectorAll(".like-glyph");

function likeKey(e) {
  const heart = e.target;
  mimicServerCall("http://mimicServer.example.com")
    .then(function(){
      if ( heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "full-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch(function(error) {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 3000);
    });
}

for (const item of heartsData) {
  item.addEventListener("click", likeKey);
}
*/

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
