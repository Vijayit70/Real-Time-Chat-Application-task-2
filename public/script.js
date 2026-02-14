const socket = io();

const messageInput = document.getElementById("message");

function sendMessage() {
  if (messageInput.value.trim() !== "") {
    socket.emit("chat message", messageInput.value);
    messageInput.value = "";
  }
}

// 🔹 ENTER KEY SUPPORT
messageInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

socket.on("chat message", (msg) => {
  const item = document.createElement("li");
  item.textContent = msg;
  document.getElementById("messages").appendChild(item);
});
