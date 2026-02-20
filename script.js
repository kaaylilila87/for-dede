onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

const text = "aya sayang banget sama dede, aya minta maaf yaaa sayanggg :>";
const loveText = document.getElementById("loveText");

let i = 0;

function typeWriter() {
  if (i < text.length) {
    loveText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

setTimeout(() => {
  loveText.style.opacity = "1";
  typeWriter();
}, 1000);
