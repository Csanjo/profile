const cards = document.querySelectorAll(".card-hello img")

cards.forEach((card, index) => {
    // Add a click event to each card that toggles the tapped state
    card.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle("tapped");
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
                paragraph.textContent = "I live in Japan and recently completed a web programming course. When I'm not building websites or learning new tech skills, I enjoy exploring food and trying new dishes. In my downtime I like playing board games, reading manga, or singing at karaoke. I'm always eager to learn, create, and share experiences. Let's connect.";
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
                $('#intro-sub').text("Full‑stack web developer based in Japan — building useful web apps and experimenting with UI/UX.");
                $('#paragraph').text("I live in Japan and recently completed a web programming course. When I’m not building websites or learning new tech skills, I enjoy exploring local food and trying new dishes. In my downtime I like playing board games, reading manga, or singing at karaoke. I’m always eager to learn, create, and share experiences. Let’s connect.");
                $('#projects').text("Projects")
                $('#coinhunter-des').text("A game where you collect as many coins as you can")
                $('#biteoff-des').text("An app that helps you find local deals in your area")
                $('#boardgame-des').text("An app that allows you to rent boardgames")
                $('#twitter-des').text("Make tweets, follow users, and like tweets")
                $('#landing-des').text("Created a landing page for coding classes")
                $('#petgoods-des').text("A React landing page for a pet goods store")
                $('#race-des').text("Simple racing using JavaScript")
                $('#video').text("Video")
                $('#video-description').text("My Demo Day after completing the LeWagon Web Development course showcasing BiteOff.")

            } else {
                $('#heading').text("こんにちは！");
                $('#about').text("自己紹介")
                $('#intro-sub').text("日本在住のフルスタック開発者。役立つウェブアプリを作り、UI/UXを試しています。");
                $('#paragraph').text("私は日本に住んでいて、最近ウェブプログラミングのコースを修了しました。ウェブサイトを作成したり新しい技術を学んでいないときは、食べ歩きや新しい料理を試すことが好きです。暇なときはボードゲームをしたり、マンガを読んだり、カラオケで歌ったりします。常に学び、創造し、経験を共有したいと考えています。ご連絡をお待ちしています。");
                $('#projects').text("プロジェクト")
                $('#coinhunter-des').text("できるだけ多くのコインを集めるゲーム")
                $('#biteoff-des').text("割引をしているレストランを探すことが出来る")
                $('#boardgame-des').text("簡単な操作でボードゲームのレンタル予約をすることが出来る")
                $('#twitter-des').text("ツイートやユーザーのフォロー、いいねをすることが出来る")
                $('#landing-des').text("ホームページのサンプル")
                $('#petgoods-des').text("ペット用品のためのReact製ランディングページ")
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
    let themeToggle = $("#themeToggle");

    if (window.innerWidth <= 768) {
            toggle.attr("data-on", "ENG").attr("data-off", "JP");
            if (themeToggle.length) themeToggle.attr("data-on", "D").attr("data-off", "L");
    } else {
            toggle.attr("data-on", "English").attr("data-off", "日本語");
            if (themeToggle.length) themeToggle.attr("data-on", "Dark").attr("data-off", "Light");
    }

    toggle.bootstrapToggle("destroy").bootstrapToggle();
    if (themeToggle.length) themeToggle.bootstrapToggle("destroy").bootstrapToggle();

    // If the visible theme button exists, wire it up to toggle theme and animate
    const themeButton = document.getElementById('themeButton');
    if (themeButton) {
        function updateThemeButton(t) {
            const icon = themeButton.querySelector('i');
            if (!icon) return;
            if (t === 'dark') { icon.className = 'fa-solid fa-moon'; }
            else { icon.className = 'fa-solid fa-sun'; }
            themeButton.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
            themeButton.classList.add('theme-anim');
            setTimeout(()=> themeButton.classList.remove('theme-anim'), 420);
        }

        // Initialize button icon from current applied theme
        const current = document.documentElement.getAttribute('data-theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        updateThemeButton(current);

        themeButton.addEventListener('click', function(){
            const now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', now);
            try { localStorage.setItem('site-theme', now); } catch(e){}
            updateThemeButton(now);
            // sync hidden input if present
            if (themeToggle && themeToggle.length) themeToggle.prop('checked', now === 'dark').change();
        });
    }
});

// Theme toggle: apply and persist theme (data-theme on <html>)
(function(){
    const themeInput = document.getElementById('themeToggle');
    const root = document.documentElement;

    function applyTheme(t) {
        root.setAttribute('data-theme', t);
        try { localStorage.setItem('site-theme', t); } catch(e){}
        if (themeInput) themeInput.checked = (t === 'dark');
    }

    const saved = (function(){
        try { return localStorage.getItem('site-theme'); } catch(e) { return null; }
    })() || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    applyTheme(saved);

    if (themeInput) {
        themeInput.addEventListener('change', function(){
            const t = this.checked ? 'dark' : 'light';
            applyTheme(t);
        });
    }

})();

// Contact modal behavior
(function(){
    const openBtn = document.getElementById('openContact');
    const modal = document.getElementById('contactModal');
    const closeBtn = document.getElementById('closeContact');
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('contactFeedback');
    let lastFocused = null;

    if (!openBtn || !modal || !form) return;

    function showModal() {
        lastFocused = document.activeElement;
        modal.setAttribute('aria-hidden','false');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        const first = form.querySelector('input, textarea, button');
        if (first) first.focus();
    }

    function hideModal() {
        modal.setAttribute('aria-hidden','true');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        feedback.textContent = '';
        form.reset();
        if (lastFocused) lastFocused.focus();
    }

    openBtn.addEventListener('click', showModal);
    closeBtn.addEventListener('click', hideModal);

    // close on backdrop click or elements marked with data-close
    modal.addEventListener('click', (e)=>{
        // if clicked an element that requests close (e.g., cancel or explicit data-close)
        if (e.target.closest('[data-close]')) {
            hideModal();
            return;
        }

        // if click occurred outside the dialog (on backdrop), close
        if (!e.target.closest('.modal-dialog')) {
            hideModal();
        }
    });

    // close on Esc
    document.addEventListener('keydown', (e)=>{
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') hideModal();
    });

    // simple focus trap
    modal.addEventListener('keydown', (e)=>{
        if (e.key !== 'Tab') return;
        const focusable = modal.querySelectorAll('a[href], button:not([disabled]), input, textarea');
        const first = focusable[0];
        const last = focusable[focusable.length-1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        feedback.textContent = 'Sending...';
        const endpoint = form.dataset.endpoint || form.getAttribute('action');
        const data = new FormData(form);

        try {
            const res = await fetch(endpoint, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
            if (res.ok) {
                feedback.textContent = 'Thanks — your message was sent.';
                form.querySelector('button[type="submit"]').disabled = true;
            } else {
                const json = await res.json().catch(()=>null);
                feedback.textContent = (json && json.error) ? json.error : 'Sorry — something went wrong.';
            }
        } catch (err) {
            // fallback to mailto
            feedback.textContent = 'Unable to send here — opening your email client.';
            const subject = encodeURIComponent('Contact from website');
            const body = encodeURIComponent('Name: ' + (data.get('name')||'') + '\n\n' + (data.get('message')||''));
            const mail = `mailto:${data.get('email')}?subject=${subject}&body=${body}`;
            window.location.href = mail;
        }
    });
})();

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
