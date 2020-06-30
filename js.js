document.addEventListener("DOMContentLoaded", (e) => {
  const keys = document.querySelectorAll(".key");

  const keybindings = [
    "a",
    "w",
    "s",
    "e",
    "d",
    "f",
    "y",
    "h",
    "u",
    "j",
    "i",
    "k",
    "l",
    "p",
    ";",
    "[",
    "'",
  ];

  keys.forEach((key) => {
    let playNoteAudio = () => playnote(key);
    key.addEventListener("click", playNoteAudio);
  });

  document.addEventListener("keydown", callBack);
  function callBack(e) {
    if (e.repeat) return;
    const getkey = e.key;
    const key = keys[keybindings.indexOf(getkey)];
    if (keybindings.indexOf(getkey) > -1) {
      key.classList.add("active");
      playnote(key);
    }
  }

  function playnote(key) {
    console.log(key.dataset.note);
    const note = document.getElementById(key.dataset.note);
    note.currentTime = 0;
    note.play();
  }

  document.addEventListener("keyup", (e) => {
    if (keybindings.includes(e.key)) {
      keyup = keys[keybindings.indexOf(e.key)];
      const activeClass = keyup.classList.contains("active");
      if (activeClass) {
        keyup.classList.remove("active");
      }
    } else {
      console.log("Invalid Key!");
    }
  });
});
