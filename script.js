const mascot = document.getElementById('mascot');
const messages = [
    "✨ Keep grinding, you're doing great! ✨",
    "💡 Pro Tip: Take breaks to avoid tilt! 💡",
    "🎮 Game on, hero! You got this! 🎮",
    "🔥 Did you unlock any achievements today? 🔥"
];

mascot.addEventListener('click', function () {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
});
