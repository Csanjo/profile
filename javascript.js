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
            const projects = document.getElementById('projects');
            const video = document.getElementById('video');

            if (isEnglish) {
                heading.textContent = "三條 クリスチアン";
                about.textContent = "自己紹介";
                paragraph.textContent = "これは簡単な言語切り替えボタンです。";
                projects.textContent = "プロジェクト";
                video.textContent = "ビデオ";
            } else {
                heading.textContent = "Christian Sanjo";
                about.textContent = "About me";
                paragraph.textContent = "I live in Japan and recently completed a web programming course 💻, diving into the exciting world of coding and development. When I’m not building websites or learning new tech skills, you’ll likely find me exploring the vibrant food scene 🍣🍜, trying out new and unique dishes. In my downtime, I’m passionate about board games 🎲—whether it’s a strategic challenge or a light-hearted game night with friends, it’s my favorite way to unwind and connect. I’m always eager to learn, create, and share experiences. Let’s connect! 🤝";
                projects.textContent = "Projects";
                video.textContent = "Video";
            }

            isEnglish = !isEnglish;
        }

      $(document).ready(function () {
        $('#langToggle').change(function () {
            if ($(this).prop('checked')) {
                $('#heading').text("Hello!");
                $('#about').text("About me")
                $('#paragraph').text("I live in Japan and recently completed a web programming course 💻. When I’m not building websites or learning new tech skills, I will likely being trying out new and unique food 🍣🍜. I love playing boardgames 🎲, reading manga 📚, or singing at karaoke 🎤.I’m always eager to learn, create, and share experiences. Let’s connect! 🤝");
                $('#projects').text("Projects")
                $('#coinhunter-des').text("A game where you collect as many coins as you can")
                $('#biteoff-des').text("An app that helps you find local deals in your area")
                $('#boardgame-des').text("An app that allows you to rent boardgames")
                $('#twitter-des').text("Make tweets, follow users, and like tweets")
                $('#landing-des').text("Created a landing page for coding classes")
                $('#race-des').text("Simple racing using JavaScript")
                $('#video').text("Video")
                $('#video-description').text("My Demo Day after completing the LeWagon Web Development course showcasing BiteOff.")

            } else {
                $('#heading').text("こんにちは！");
                $('#about').text("自己紹介")
                $('#paragraph').text("私は日本に住んでいて、最近ウェブプログラミングのコースを修了しました💻。食べることが趣味で、ウェブサイトを作ったり、新しい技術スキルを学んだりしていないときは、SNSなどで見つけたユニークなご飯を食べに出かけています。暇なときには、ボードゲーム🎲をしたり、マンガ📚を読んだり、カラオケ🎤で歌ったりするのが大好きです。私は常に学び、創造し、経験を共有することに意欲的です。沢山の方と交流を深めたいと考えています。ご連絡をお待ちしております！🤝");
                $('#projects').text("プロジェクト")
                $('#coinhunter-des').text("できるだけ多くのコインを集めるゲーム")
                $('#biteoff-des').text("割引をしているレストランを探すことが出来る")
                $('#boardgame-des').text("簡単な操作でボードゲームのレンタル予約をすることが出来る")
                $('#twitter-des').text("ツイートやユーザーのフォロー、いいねをすることが出来る")
                $('#landing-des').text("ホームページのサンプル")
                $('#race-des').text("主にJavaScriptを使用したシンプルなレーシングゲーム")
                $('#video').text("ビデオ")
                $('#video-description').text("LeWagon Web Development コースを修了した際に行った発表の動画です。BiteOffでご覧いただけます。")
            }
        });
    });

    let typed;

    function initTypedText(stringsArray) {
        if (typed) typed.destroy();
        typed = new Typed(".type-text", {
            strings: stringsArray,
            typeSpeed: 150,
            backSpeed: 150,
            loop: false
        });
    }


$(document).ready(function () {

  let isEnglish = $("#langToggle").prop("checked");
  initTypedText(isEnglish ? ["Christian Sanjo!"] : ["三條クリスチアン！"]);


  $("#langToggle").change(function () {
      let isEnglish = $(this).prop("checked");
      if (isEnglish) {
          initTypedText(["Christian Sanjo!"]);
      } else {
          initTypedText(["三條クリスチアン！"]);
      }
  });
});


window.addEventListener("load", function() {
  let toggle = $("#langToggle");

  if (window.innerWidth <= 768) {
      toggle.attr("data-on", "ENG").attr("data-off", "JP");
  } else {
      toggle.attr("data-on", "English").attr("data-off", "日本語");
  }

  toggle.bootstrapToggle("destroy").bootstrapToggle();
});

const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
