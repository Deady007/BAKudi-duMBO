var i = 0;
var txt1 =
  " My Dearest Bakudi, I love you.<< I love your eyes, your beauty, your delicate smile, your cuteness. 💖<< I love your pain, your tears, your face, your sweet words. I love your forgiving nature, your shyness, your love, your desire, your ability to make every day special for me. <<I love your true self, and I love the person you consider your own. You mean the world to me, and I cherish every moment with you.<< Will you make my dreams come true and be the Radha to my Krishna, the Aditi to my Bunny, and my Bakudi forever?";
var speed = 5;

typeWriter();

function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<") {
      document.getElementById("text1").innerHTML += "</br>";
    } else if (txt1.charAt(i) == ">") {
      document.getElementById("text1").innerHTML = "";
    } else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "url('path-to-your-image.jpg')");
    } else {
      document.getElementById("text1").innerHTML += txt1.charAt(i);
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}


