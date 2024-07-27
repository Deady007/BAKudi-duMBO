const text ="Meri Pyaari Bakudi Mujhe ummeed hai ki yeh letter tumhe acche se mile aur tumhare chehre par ek muskaan le aaye. Main bas tumhe yeh batana chahta hoon ki tum mere liye kitni khaas ho.Har din, main tumhare pyaar mein aur bhi zyada girta jaata hoon. Tumhari khoobsurat aankhein aur tumhari pyaari si smile mere dil ko choo jati hai. Tumhare saath bitaye hue har pal mere liye bahut hi special hain.Tum mujhe apne aap se bhi jyada samajh paati ho... Tumhara pyar, tumhari care, aur tumhara mere liye hamesha supportive rehna—ye sab mujhe bohot khushi deta hai. Tumhare saath har choti si choti baat bhi kuch khaas lagti hai.Tumhari baaton se lekar tumhari muskurahat tak, sab kuch mere dil ko bahut pyara lagta hai. Tum mere shanti, khushi, aur meri soulmate ho. Tumhare saath hone se mera har din behtareen lagta hai.Mujhe tumhara saath aur tumhari pyaar ke liye Thank You kehna hai. I wish Ki Hum Aaage bhi ese hi saath me har pal ko enjoy kare and saath me yaadein create kare.Sabse Jyada pyaar ke saath,[Dumbo] And haa sorry for my silly mistakes";
const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
