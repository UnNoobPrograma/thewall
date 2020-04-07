const states = {
  IDLE: "idle",
  HIDED: "hided",
  SHOW: "show",
  LOADED: "loaded"
};

const tweet = document.querySelector(".tweet");
const avatar = document.querySelector(".avatar");
const username = document.querySelector(".username");
const text = document.querySelector(".text");
const media = document.querySelector(".media");

function changeTweet() {
  tweet.dataset.state = states.HIDED;

  tweet.addEventListener("transitionend", transitionCallback);
}

function transitionCallback() {
  username.textContent = "Link";
  text.textContent = "New text";
  tweet.dataset.state = states.LOADED;

  setTimeout(() => {
    tweet.dataset.state = states.SHOW;
  }, 0);

  tweet.removeEventListener("transitionend", transitionCallback);
}

document.addEventListener("click", () => {
  changeTweet();
});
