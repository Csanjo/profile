const cards = document.querySelectorAll(".card-hello img")

cards.forEach((card, index) => {

  // Example: Add a click event to each card
  card.addEventListener('click', () => {
    event.currentTarget.classList.toggle("tapped");
  });
});


let isEnglish = true;

        function toggleLanguage() {
            const heading = document.getElementById('heading');
            const about = document.getElementById('about');
            const paragraph = document.getElementById('paragraph');

            if (isEnglish) {
                heading.textContent = "三條 クリスチアン";
                about.textContent = "自己紹介";
                paragraph.textContent = "これは簡単な言語切り替えボタンです。";
            } else {
                heading.textContent = "Christian Sanjo";
                about.textContent = "About me";
                paragraph.textContent = "I live in Japan and recently completed a web programming course 💻, diving into the exciting world of coding and development. When I’m not building websites or learning new tech skills, you’ll likely find me exploring the vibrant food scene 🍣🍜, trying out new and unique dishes. In my downtime, I’m passionate about board games 🎲—whether it’s a strategic challenge or a light-hearted game night with friends, it’s my favorite way to unwind and connect. I’m always eager to learn, create, and share experiences. Let’s connect! 🤝";
            }

            isEnglish = !isEnglish;
        }
