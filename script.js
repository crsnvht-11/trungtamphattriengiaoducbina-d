function checkAnswer() {
  let answer = document.getElementById("answer").value;
  let result = document.getElementById("result");
  let sound = document.getElementById("sound");

  if(answer == "5") {
    result.innerHTML = "🎉 Chính xác! Bạn nhận được món quà 🎁✨";
    sound.play();
    showGift();
  } else {
    result.innerHTML = "❌ Sai rồi, thử lại nhé!";
  }
}

function showGift() {
  let gift = document.createElement("div");
  gift.innerHTML = "🎈🎁🌟🎊";
  gift.style.fontSize = "3em";
  document.body.appendChild(gift);
  setTimeout(() => gift.remove(), 3000);
}
