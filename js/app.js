const programmingJokesWithEmojis = [
  "Why do programmers prefer dark mode? 🌑 Because light attracts bugs. 🐛",
  "Why do Java developers wear glasses? 🤓 Because they can't C#. 🖥️",
  "How many programmers does it take to change a light bulb? 💡 None, that's a hardware problem. 🔧",
  "Why was the JavaScript developer sad? 😢 Because he didn't know how to null his feelings. 💔",
  "Why do programmers hate nature? 🌲 Too many bugs. 🐜",
  "Why don't programmers like to use the elevator? 🚪 They prefer the steps. 👟",
  "What is a programmer's favorite hangout place? The Foo Bar. 🍻",
  "How do you comfort a JavaScript bug? 🐞 You console it. 🖥️",
  "Why was the developer broke? 💸 Because he used up all his cache. 💾",
  "What do you call 8 hobbits? 🧙‍♂️ A hobbyte. 🧝‍♂️",
  "Why did the programmer quit his job? 👨‍💻 He didn't get arrays. 🛠️",
  "Why was the computer tired when it got home? 🏠 Because it had a hard drive. 🚗",
  "What’s a programmer's favorite type of music? 🎵 Algo-rhythm. 🕺",
  "Why do programmers prefer iOS development? 🍏 Because they don't like dealing with Windows. 🪟",
  "Why do programmers never get lost? 🗺️ They always have a route. 📍",
  "What’s a programmer's least favorite room in a house? 🏠 The loop. 🔄",
  "Why was the developer afraid of the forest? 🌳 It had too many branches. 🌲",
  "Why don’t programmers like to eat while coding? 🍴 Because they don’t want to byte off more than they can chew. 🖥️",
  "Why do Python developers have so much energy? ⚡ Because they love their GILty pleasures. 🐍",
  "What do you call a group of 8 bits? 🧩 A byte to eat. 🍴",
  "Why did the programmer bring a ladder? 🪜 To reach the higher-level abstraction. 🖥️",
  "Why do programmers prefer Linux? 🐧 Because it’s open to interpretation. 🛠️",
  "What’s a programmer's favorite sports team? 🏅 The loops. 🔄",
  "Why was the coder always calm? 😌 Because he knew how to handle exceptions. 🚧",
  "Why do programmers love nature? 🌱 Because it has no dependencies. 🔗",
  "Why do programmers love coffee? ☕ Because it keeps them Java'd up. 👨‍💻",
  "What’s a programmer's favorite subject? 📚 Binary arts. 🖥️",
  "Why do C++ programmers make bad partners? 👫 They overuse friend functions. 🤝",
  "Why did the array break up with the loop? 💔 It didn’t want to keep iterating over the same thing. 🔄",
  "Why don’t programmers trust HTML? 👀 It’s full of angles. ⌨️",
  "Why do programmers prefer working at night? 🌙 The stack is lighter. 🖥️",
  "Why was the JavaScript developer scared of the DOM? 🏢 It was too hierarchical. 📜",
  "What’s a programmer's favorite exercise? 💪 The push-up and pull-request. 🚀",
  "What’s a programmer's favorite game? 🏓 Ping pong (requests and responses). 🌐",
  "Why don’t programmers like sports? ⚽ They hate when their code breaks. 🛠️",
  "Why did the programmer go broke? 💸 He lost his domain. 🌐",
  "Why do developers love pizza? 🍕 Because they love to have slices. 🖥️",
  "Why was the Python code so strict? 🐍 Because it followed the rules of indentation. 📏",
  "Why do developers hate stairs? 🪜 They always have one step too many. 🔄",
  "What’s a programmer's favorite type of joke? 🤔 Recursive ones. 🔁",
  "Why did the function break up with the class? 💔 It felt too constrained. 📜",
  "Why do programmers prefer headphones? 🎧 To avoid merge conflicts. 🔀",
  "Why do JavaScript developers rarely shower? 🚿 Because they avoid callbacks. 📞",
  "Why don’t programmers like to travel? ✈️ They hate crossing borders. 🌐",
  "Why was the web developer always calm? 😌 Because he knew how to handle requests. 🌐",
  "Why did the programmer stay home? 🏠 He didn’t want to lose his cache. 💾",
  "Why don’t developers trust elevators? 🚪 Too many levels. 🔼",
  "What’s a programmer's favorite dish? 🍲 JSON soup. 🥄",
  "Why don’t programmers trust the cloud? ☁️ Because it’s always shady. 🌥️",
];
const btn = document.getElementById("btn");
const joke = document.getElementById("joke");

function randomColor() {
  let str = String([Math.floor(Math.random() * 90)]);
  return "#" + str.repeat(3);
}

function handleClick() {
  joke.textContent = "Loading...";
  joke.style.color = "#000";
  document.body.style.background = `linear-gradient(90deg,${randomColor()} 0%,${randomColor()} 35%,${randomColor()} 100%)`;
  setTimeout(() => {
    let index = Math.floor(
      Math.random() * programmingJokesWithEmojis.length - 1
    );
    joke.textContent = programmingJokesWithEmojis[index];
    joke.style.color = "";
    return joke;
  }, 1000);
}
btn.addEventListener("click", handleClick);
