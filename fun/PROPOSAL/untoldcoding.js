var i = 0;
var txt1 =
  "Bakudi, from the first time we met, there was something magical between us. Every moment we spend together, whether it's laughing, talking, or just being in each other's presence, feels incredibly special to me. << You’ve become such an important part of my life, and I can’t help but smile whenever I think about you. Your kindness, your smile, and the way you care for me are things I treasure more than words can express. << Today, I want to take a step forward and make our bond even stronger. I’ve realized that my feelings for you go beyond just friendship. I care about you deeply, and I want to be more than just friends. << So, with all my heart, I’m asking you something very important. [Take a deep breath and hold her hands.] << BAKudi, would you do me the honor of being my girlfriend? I promise to cherish you, support you, and make every moment we share together as wonderful as it can be. I want to continue building beautiful memories with you, and I hope you feel the same way. << Will you be my girlfriend?";
var speed = 35;

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


