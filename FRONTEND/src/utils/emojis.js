// emojis.js

const emojis = [
  // Your flat list of individual emojis
  "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣",
  "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "😘",
  "😗", "😙", "😚", "😋", "🐶", "🐱", "🐭", "🐹",
  "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮",
  "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇",
  "⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🥏",
  "🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑",
  "❤️", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎"
];

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

// ✅ Export both correctly
export { emojis, getRandomEmoji };
