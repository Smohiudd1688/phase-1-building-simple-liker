// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//select all the hearts and add an event listener to each one
const allHearts = document.querySelectorAll('.like-glyph');
for (const heart of allHearts) {
  heart.addEventListener('click', handleLike);
}

//callback functions that handles the click events of the heart
function handleLike (event) {
  let heart = event.target;
  console.log(heart);
  mimicServerCall()
  .then (message => {
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.classList.add('activated-heart');
      //console.log(heart);
    } else {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  })
  .catch(error => {
    const errorMessage = document.querySelector('#modal');
    errorMessage.style.visibility = 'visible';
    setTimeout(() => {
      errorMessage.style.visibility = 'hidden';
    }, 3000);
  })
}



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
