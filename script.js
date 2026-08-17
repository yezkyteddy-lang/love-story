const relationshipStart = new Date("2026-08-07T00:00:00+08:00");

const timelineData = [
  { label: "1st Monthsary", date: "2026-09-07", quote: "One month of us" },
  { label: "2nd Monthsary", date: "2026-10-07", quote: "Comfort, laughter, and us" },
  { label: "3rd Monthsary", date: "2026-11-07", quote: "A little more of forever" },
  { label: "4th Monthsary", date: "2026-12-07", quote: "Love in every little detail" },
  { label: "5th Monthsary", date: "2027-01-07", quote: "More warmth, more trust" },
  { label: "6th Monthsary", date: "2027-02-07", quote: "Six months of growing together" },
  { label: "7th Monthsary", date: "2027-03-07", quote: "A deeper kind of love" },
  { label: "8th Monthsary", date: "2027-04-07", quote: "A beautiful rhythm" },
  { label: "9th Monthsary", date: "2027-05-07", quote: "Nine months of us" },
  { label: "10th Monthsary", date: "2027-06-07", quote: "Ten months of growing" },
  { label: "11th Monthsary", date: "2027-07-07", quote: "Everything feels more certain" },
  { label: "1st Anniversary", date: "2027-08-07", quote: "One year of us" }
];

const loveLetters = {
  "2026-09-07": `Happy Monthsary, my love.

Donnah, this past month with you has felt like a gentle sunrise I never want to leave behind. From the moment we started this chapter together, my heart has felt calmer, warmer, and fuller. You are not just someone I like being around—you are someone I look forward to every day.

Thank you for being part of my life. Thank you for the sweetness, the comfort, the laughter, and the quiet moments that have made me feel like I am exactly where I am meant to be. Even the simplest days feel brighter when I know you are in them.

This first month has taught me that love is not only in the big gestures but in the way you make my world feel easier and happier. I am grateful for every smile, every conversation, and every little memory we have started building together.

Happy 1st Monthsary, my love. I hope we keep making beautiful memories, one month at a time, one story at a time, forever.

With all my love,
Michael`,
  "2026-10-07": `Happy 2nd Monthsary, Donnah.

Two months with you and I already feel like I know a different kind of happiness—a deeper, softer, more real one. Being with you has become so natural, and I love how easy it feels to be my true self around you. You bring a peace to my heart that I have never known before.

I love the little moments: the way we talk, the way we laugh, the way even silence feels comfortable with you. It feels like growing into someone who wants to keep choosing you every single day. And the more I understand you, the more I admire you.

Thank you for being patient, kind, and beautiful in the way that you love. You are one of the easiest people I want to be near, and I am so thankful that this story is ours.

Every month with you is another chapter of our story. I cannot wait to keep writing it with you.

Love always,
Michael`,
  "2026-11-07": `Happy 3rd Monthsary, Donnah.

Three months with you and I feel so lucky that this is the life I get to be part of. You have made my days feel more tender, more meaningful, and more alive. I love the way you make ordinary moments become memorable. A simple conversation with you can turn into a memory I want to hold onto forever.

What I admire most is the kind of person you are. Your heart, your warmth, your sweetness, and the way you love in a way that is genuine and thoughtful—it all leaves a mark on me. I am learning more about you every day, and every part of it makes me love you more.

Thank you for being my safe place and my favorite person to come home to in my thoughts. I hope you know how much I treasure being with you.

Happy 3rd Monthsary, my love. Let us keep making this story beautiful.

Always yours,
Michael`,
  "2026-12-07": `Happy 4th Monthsary, Donnah.

Four months with you and I feel like my heart has learned how to bloom in ways I never expected. You have become someone I deeply cherish, someone whose presence makes life feel softer and brighter. I have grown so used to your warmth and your love that even now, thinking of you brings me comfort and joy at the same time.

There is something beautiful about us—how we can laugh, be comfortable, and still feel this sweet spark between us. All the little things matter to me: the messages, the jokes, the way you make me feel seen, the way I feel at peace around you. They all make me love you more.

You are one of my favorite parts of each day, and I hope you never forget that. Thank you for filling my world with more light.

Happy 4th Monthsary, my love.

Forever grateful,
Michael`,
  "2027-01-07": `Happy 5th Monthsary, Donnah.

Five months with you feels like a simple yet profound blessing. It reminds me that love is not made only of grand moments, but of all the little ways two people show up for each other in everyday life. And you have shown up in the most beautiful ways.

I love how consistent you are in my life—not just in the big things, but in the quiet, beautiful details that make me feel loved without needing to be told. You are such a gentle part of my heart now. You are comfort. You are joy. You are the kind of person I want to keep growing with.

I can honestly say that every month with you adds a new reason for me to be grateful. Thank you for being so kind, so beautiful, and so cherished to me. I hope I remind you just how valuable you are.

Happy 5th Monthsary, my love. I love you more than I can say.

Always,
Michael`,
  "2027-02-07": `Happy 6th Monthsary, Donnah.

Six months with you and it feels like we have become so much more than a beginning. We have become a story that feels rooted in trust, softness, and deep affection. I am grateful for how good it feels to be with you and how natural life becomes when you are in it.

I admire you more than I can explain. You have this beautiful way of making people feel cared for and seen. You make me feel lighter, steadier, and more hopeful. When I think about us, I feel grateful for the way we have grown together and for how much beauty has come from this relationship.

Thank you for being patient with me, loving me in your own beautiful way, and making me want to keep choosing you. I want to keep learning more about you and sharing more of my life with you. That is how much you matter to me.

Happy 6th Monthsary, my love. Every month with you is another chapter I treasure.

With all my love,
Michael`,
  "2027-03-07": `Happy 7th Monthsary, Donnah.

Seven months with you and I still feel that same excitement I felt in the beginning, only deeper now. The love between us feels stronger, more real, and more beautiful with each passing month. It is not just the memories that matter—it is the way you have become such a warm and important part of my life.

You make my heart feel at peace while also making it flutter in the most wonderful ways. I love how comfortable we are with each other, how valued I feel around you, and how much I want to keep building this story with you. You are not just someone I love—you are someone I want to keep growing with, laughing with, and dreaming with.

Thank you for being beautifully you. Thank you for the way you make life feel sweeter and fuller. I am so grateful for every day that has led me to you.

Happy 7th Monthsary, my love.

Forever yours,
Michael`,
  "2027-04-07": `Happy 8th Monthsary, Donnah.

Eight months with you has made one thing even clearer to me: I am so grateful that you are in my life. You have become a part of my world in a way that feels steady, comforting, and deeply meaningful. With you, life feels more colorful, more gentle, and more alive.

I love how well we fit together—not perfectly, but in a way that feels honest and warm. The more time we spend together, the more I realize how much I enjoy your presence, your personality, your love, and the way you bring out the best parts of me.

There are so many reasons I love you, and I do not think I could count them all. But I know this: being with you is one of the best things that has ever happened to me. Thank you for being my love, my peace, and my favorite person.

Happy 8th Monthsary. I love you.

Michael`,
  "2027-05-07": `Happy 9th Monthsary, Donnah.

Nine months together and I am more in love with you than I ever thought possible. Every day you become more special to me, not because of some grand thing, but because of the way you make life feel beautiful in small, meaningful ways. You have made my heart feel so full.

I am grateful for the laughter, the comfort, the trust, and all the moments that have turned into memories. You are a person I want to keep learning about, keep loving, and keep choosing. I love that there is so much softness in us and so much love in the way we care for each other.

Thank you for making my world feel kinder and more beautiful. You are such a precious part of my life, and I hope you always know that.

Happy 9th Monthsary, my love.

With love,
Michael`,
  "2027-06-07": `Happy 10th Monthsary, Donnah.

Ten months with you and I cannot help but feel proud of us. We have come so far together, and every step has made this love feel even more real. I am so thankful for the way we have grown, the way we have learned each other, and the way we have built something beautiful out of time and care.

The more I know you, the more I admire you. You are beautiful in so many ways—inside and out—and being with you has taught me how gentle and fulfilling love can be. I love the way you make me smile, the way I feel safe around you, and the way every memory with you feels like a treasure.

I am so happy that this is our story. Thank you for being part of my life and for making every month more meaningful than the last.

Happy 10th Monthsary, my love.

Always yours,
Michael`,
  "2027-07-07": `Happy 11th Monthsary, Donnah.

Eleven months with you and I am overwhelmed by how much love has grown in this story. It is no longer just a beginning—it is something deeper, warmer, and much more certain. The time we have spent together has shaped me in the most beautiful way, and I have loved every part of it.

You have become such an important person in my life. I love the way you make me feel, the way you make my heart feel steady, and the way I can imagine the future more clearly because you are in it. Every month with you gives me more reasons to be grateful. You are the kind of love I want to keep choosing, again and again.

Thank you for being the person who makes life feel softer, sweeter, and more meaningful. I am so thankful to have you.

Happy 11th Monthsary, my love. I cannot wait for more chapters of us.

Love always,
Michael`,
  "2027-08-07": `Happy 1st Anniversary, my love.

Today is not just another date. Today is a full year of us—365 days of learning, loving, growing, laughing, comforting, and choosing each other again and again. And as I reflect on this year, I am filled with gratitude for the beautiful life we have shared together.

Donnah, you are one of the greatest blessings in my life. You have brought so much peace, happiness, and warmth into my world. I love the way you make ordinary days feel meaningful. I love the way you care, the way you listen, the way you make me feel seen, and the way your love has become such a comforting and unforgettable part of me.

This year has been full of little moments that I will always carry in my heart: the laughter, the sweet conversations, the quiet happiness, the comfort of your presence, and the feeling that I never want to be far from you. Every month, every day, every memory has taught me how much I love you and how much I want to keep building this life with you.

Thank you for being part of my life. Thank you for loving me with your whole heart. Thank you for being patient, kind, strong, beautiful, and so deeply loved by me. You are my favorite person, my favorite place, and my favorite chapter.

One year with you is just the beginning of the story I want to keep telling. I want more months, more laughs, more adventures, more milestones, more dreams, and more time with you. I want to keep loving you in every way I know how.

Happy 1st Anniversary, my love. Thank you for being my home, my joy, and my forever dream.

With all my love,
Michael`
};

const MEMORY_FILES = [
  "016451de-356b-4611-8846-5ea1e008348e.jpg",
  "1916c4f7-815c-4ddf-9b58-a4a701511aeb.jpg",
  "1f3f5d76-9f21-41d6-b74d-a6f74f2a011f.jpg",
  "3044a879-735f-4c51-b1f4-11e7760732fe.jpg",
  "4725a6a4-d390-4e50-ad67-3adf35bd9c0c.jpg",
  "5aa1abfb-ffc1-417c-8f96-9f856f47b882.jpg",
  "771454a0-838c-4ae8-8086-bf2b287715f9.jpg",
  "77b3bbfb-08d2-48ea-99b8-59ae3df17c61.jpg",
  "970b6489-b73b-456b-a053-fbe88185d79e.jpg",
  "a24203f3-be6d-4996-bfbd-2072583c5ff9.jpg",
  "c0726b67-169c-43ad-94c2-26bdb7c75f32.jpg",
  "f58f5efb-6b81-43a9-a61e-d90eb89649d4.jpg",
  "f9e11083-0eda-4edd-8474-6fcd600b0ee0.jpg"
];

const loveMessages = [
  "You're one of my favorite parts of every day.",
  "I'd still choose you in every version of our story.",
  "Another day, another reason to love you.",
  "Every second with you feels like a memory worth keeping.",
  "You make everything softer, sweeter, and more beautiful.",
  "My favorite place is anywhere you are.",
  "I love our little world more than I can say.",
  "You are my favorite kind of magic.",
  "Even my quietest thoughts somehow turn into you.",
  "The best part of my day is you.",
  "I love the life we are building together.",
  "There is no one I would rather be with.",
  "You make my heart feel at home.",
  "I still catch myself smiling when I think of you.",
  "Love feels easier when it is with you.",
  "My favorite memory is the one where you are in it.",
  "You make this life feel like a beautiful story.",
  "I am grateful for every little second with you.",
  "You are the reason my heart feels full.",
  "I love the way you make my world brighter.",
  "You are sweet, beautiful, and deeply loved.",
  "There is no one else I would choose.",
  "The world feels softer when you are in it.",
  "I want all of my tomorrows to be with you.",
  "I still fall for you in the quietest ways.",
  "You are the calm in my chaos.",
  "My heart keeps choosing you.",
  "You are my sweetest kind of forever.",
  "You make every ordinary day feel special.",
  "I love our story more than I can explain.",
  "Every chapter with you is beautiful.",
  "My life is better because you are in it.",
  "You are my favorite reason to smile.",
  "I love you more than yesterday, but less than tomorrow.",
  "You make my heart feel safe and full.",
  "Being with you feels like peace.",
  "You are my sweetest home.",
  "The best thing I ever did was love you.",
  "You are my favorite kind of happiness.",
  "I keep falling in love with you in new ways.",
  "You are worth every heartbeat.",
  "I love the way you make my world glow.",
  "You make even the smallest moments memorable.",
  "You are the light in my everyday life.",
  "I still want to know every part of your heart.",
  "Some days I just smile because I know you.",
  "I want forever to feel like your hand in mine.",
  "You are my favorite person to dream with.",
  "You make my life feel more beautiful.",
  "There is no version of my story without you.",
  "I love the life we are writing together.",
  "My heart is happiest when it belongs to you.",
  "Every day with you makes me love you more.",
  "I would choose you in every lifetime.",
  "You are my sweetest miracle.",
  "There is no one else I want beside me.",
  "Being yours is my favorite part of life.",
  "You make my heart feel full of home.",
  "I am still learning to love you in all the beautiful ways."
];

const storageKeys = {
  replies: "loveReplyStorage",
  notes: "loveWallNotesStorage",
  music: "musicPreferenceStorage",
  night: "nightModeStorage",
  lastLetter: "lastOpenedLetterStorage"
};

const appState = {
  currentLetterId: null,
  selectedMemory: 0,
  speechSynthesisActive: false,
  reasonIndex: 0
};


function safeReadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getManilaDateKey(date = new Date()) {
  return date.toLocaleDateString("en-CA", { timeZone: "Asia/Manila" });
}

function getLetterStateSignature() {
  return timelineData.map((item) => isLetterUnlocked(item.date) ? "1" : "0").join("");
}

function updateLockedLetterCountdowns() {
  document.querySelectorAll(".letter-card.locked[data-countdown-date]").forEach((card) => {
    const dateString = card.dataset.countdownDate;
    const countdown = getCountdownParts(getDateFromString(dateString));
    const fields = {
      days: countdown.days,
      hours: countdown.hours,
      minutes: countdown.minutes,
      seconds: String(countdown.seconds).padStart(2, "0")
    };
    Object.entries(fields).forEach(([name, value]) => {
      const el = card.querySelector(`[data-count="${name}"]`);
      if (el) el.textContent = value;
    });
  });
}

const memoryDescriptors = [
  "A little moment I never want to forget.",
  "One picture, a thousand memories.",
  "This smile will always be one of my favorites.",
  "Another chapter of us.",
  "I wish I could pause this moment forever.",
  "A tiny piece of our beautiful story.",
  "This is one of those memories I want to keep forever.",
  "A little light in my heart.",
  "A sweet memory worth holding onto.",
  "One of the things I love most about us."
];

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function formatDateTime(date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  }).format(date);
}

function getDateFromString(dateString) {
  return new Date(`${dateString}T00:00:00+08:00`);
}

function getCurrentTimeString() {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  return formatter.format(date);
}

function getCurrentDateString() {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  return formatter.format(date);
}

function getCountdownParts(targetDate) {
  const diff = targetDate.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function isLetterUnlocked(dateString) {
  const unlockTime = getDateFromString(dateString).getTime();
  return Date.now() >= unlockTime;
}

function getNextMonthsary() {
  const now = Date.now();
  for (const item of timelineData) {
    const target = getDateFromString(item.date).getTime();
    if (target > now) {
      return item;
    }
  }
  return timelineData[timelineData.length - 1];
}

function updatePhilippinesClock() {
  const timeEl = document.getElementById("philippinesTime");
  const dateEl = document.getElementById("philippinesDate");
  timeEl.textContent = getCurrentTimeString();
  dateEl.textContent = getCurrentDateString();
}

function renderTimeline() {
  const timelineList = document.getElementById("timelineList");
  timelineList.innerHTML = timelineData.map((item) => {
    const unlocked = isLetterUnlocked(item.date);
    const cardClass = unlocked ? "unlocked" : "locked";
    return `
      <div class="timeline-item">
        <div class="timeline-card ${cardClass}" data-timeline-date="${item.date}">
          <h4>♡ ${item.label}</h4>
          <div class="date">${formatDate(getDateFromString(item.date))}</div>
          <div class="quote">${item.quote}</div>
          <div class="timeline-status">${unlocked ? "💗 UNLOCKED" : "🔒 WAITING FOR ITS DAY"}</div>
        </div>
      </div>
    `;
  }).join("");
}

function renderRelationshipCounter() {
  const diff = Date.now() - relationshipStart.getTime();
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const months = Math.floor(totalSeconds / (30.4375 * 86400));
  const days = Math.floor((totalSeconds / 86400) % 30.4375);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("relationshipCounter").textContent = `${months} Months ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  document.getElementById("loveCounter").textContent = `${months} Months ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

  const next = getNextMonthsary();
  document.getElementById("nextMonthsaryText").textContent = formatDate(getDateFromString(next.date));
}

function renderNextMonthsaryCountdown() {
  const next = getNextMonthsary();
  const target = getDateFromString(next.date);
  const countdown = getCountdownParts(target);
  document.getElementById("nextMonthsaryCountdown").textContent = `${countdown.days} Days ${countdown.hours} Hours ${countdown.minutes} Minutes ${countdown.seconds} Seconds`;
}

function renderLetterSection() {
  const container = document.getElementById("letterContainer");
  container.innerHTML = timelineData.map((item) => {
    const unlocked = isLetterUnlocked(item.date);
    const countdown = getCountdownParts(getDateFromString(item.date));

    if (!unlocked) {
      return `
        <div class="letter-card locked" data-countdown-date="${item.date}">
          <div class="card-title">${item.label}</div>
          <div class="dynamic-date">${formatDate(getDateFromString(item.date))}</div>
          <div class="locked-state">
            <div class="locked-emoji">🔒</div>
            <div class="locked-text">THIS LETTER IS STILL WAITING FOR ITS DAY</div>
            <div class="countdown-box">
              <div class="count-box"><span class="num" data-count="days">${countdown.days}</span><span class="label">Days</span></div>
              <div class="count-box"><span class="num" data-count="hours">${countdown.hours}</span><span class="label">Hours</span></div>
              <div class="count-box"><span class="num" data-count="minutes">${countdown.minutes}</span><span class="label">Minutes</span></div>
              <div class="count-box"><span class="num" data-count="seconds">${String(countdown.seconds).padStart(2, "0")}</span><span class="label">Seconds</span></div>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="letter-card">
        <div class="card-title">${item.label}</div>
        <div class="dynamic-date">${formatDate(getDateFromString(item.date))}</div>
        <div class="letter-open-wrap">
          <h3>💗 YOUR MONTHSARY LETTER IS HERE 💗</h3>
          <button class="open-letter-btn" type="button" data-letter="${item.date}">OPEN MY LETTER</button>
        </div>
      </div>

      <div class="letter-card" data-letter-box="${item.date}">
        <div class="letter-outer">
          <div class="letter-envelope"></div>
          <div class="letter-paper">
            <h4>Michael Jet Maulas</h4>
            <h5>To Donnah Atasha A. Batchar</h5>
            <div class="letter-body">${loveLetters[item.date].replace(/\n/g, "<br>")}</div>
          </div>
        </div>

        <div class="read-controls">
          <button type="button" data-read="play">🔊 READ THIS LETTER TO ME</button>
          <button type="button" data-read="pause">⏸ PAUSE</button>
          <button type="button" data-read="resume">▶ RESUME</button>
          <button type="button" data-read="stop">⏹ STOP</button>
        </div>

        <div class="reply-box">
          <label>From: Donnah Atasha A. Batchar</label>
          <input type="text" value="Donnah Atasha A. Batchar" readonly />
          <label>Your Reply:</label>
          <textarea id="replyArea-${item.date}" placeholder="Write a sweet reply..."></textarea>
          <button type="button" data-send-reply="${item.date}">SEND LOVE LETTER BACK 💗</button>
        </div>
      </div>
    `;
  }).join("");

  setupLetterEvents();
}

function setupLetterEvents() {
  document.querySelectorAll(".open-letter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const letterDate = button.dataset.letter;
      const holder = document.querySelector(`[data-letter-box="${letterDate}"]`);
      if (!holder) return;

      const envelope = holder.querySelector(".letter-envelope");
      const paper = holder.querySelector(".letter-paper");
      envelope.classList.add("open");
      paper.classList.add("visible");
      appState.currentLetterId = letterDate;
      safeWriteStorage(storageKeys.lastLetter, letterDate);
      showNotification("💗 NEW LOVE LETTER UNLOCKED", "Your monthsary letter from Michael is ready to open.");
    });
  });

  document.querySelectorAll("[data-read]").forEach((button) => {
    button.addEventListener("click", () => {
      const letterDate = button.closest("[data-letter-box]")?.getAttribute("data-letter-box") || appState.currentLetterId;
      if (!letterDate) return;
      handleSpeechAction(button.dataset.read, loveLetters[letterDate]);
    });
  });

  document.querySelectorAll("[data-send-reply]").forEach((button) => {
    button.addEventListener("click", () => {
      const letterDate = button.dataset.sendReply;
      const textarea = document.getElementById(`replyArea-${letterDate}`);
      const message = textarea.value.trim();

      if (!message) {
        showNotification("💌 EMPTY REPLY", "Write a sweet message before sending.");
        return;
      }

      const replies = safeReadJSON(storageKeys.replies, []);
      replies.unshift({
        id: `${letterDate}-${Date.now()}`,
        month: letterDate,
        message,
        createdAt: new Date().toISOString(),
        displayDate: formatDateTime(new Date())
      });

      safeWriteStorage(storageKeys.replies, replies.slice(0, 100));
      textarea.value = "";
      renderReplies();
      showNotification("💌 NEW REPLY FROM DONNAH", "Your reply was saved to the love journal.");
    });
  });
}

function handleSpeechAction(action, text) {
  const synth = window.speechSynthesis;
  if (!synth) {
    showNotification("🔇 SPEECH NOT AVAILABLE", "This browser does not support speech synthesis.");
    return;
  }

  if (action === "play") {
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    utterance.lang = "en-US";
    const voices = synth.getVoices();
    const preferredVoice = voices.find((voice) => /en[- ](US|GB|AU)/i.test(voice.lang));
    if (preferredVoice) utterance.voice = preferredVoice;
    synth.speak(utterance);
    return;
  }

  if (action === "pause") synth.pause();
  if (action === "resume") synth.resume();
  if (action === "stop") synth.cancel();
}

function renderReplies() {
  const repliesList = document.getElementById("repliesList");
  const replies = safeReadJSON(storageKeys.replies, []);

  if (!replies.length) {
    repliesList.innerHTML = `
      <div class="reply-item">
        <strong>No replies yet.</strong>
        <small>When Donnah writes back, her love will appear here.</small>
      </div>
    `;
    return;
  }

  repliesList.innerHTML = replies.map((reply) => `
    <div class="reply-item">
      <strong>Donnah replied on ${escapeHtml(reply.displayDate || formatDateTime(new Date(reply.createdAt)))}</strong>
      <small>${escapeHtml(formatDate(new Date(reply.createdAt)))}</small>
      <div>${escapeHtml(reply.message).replace(/\n/g, "<br>")}</div>
    </div>
  `).join("");
}

function renderJourney() {
  const journeyList = document.getElementById("journeyList");
  const items = [
    { date: "August 7, 2026", title: "♡ The Beginning" },
    ...timelineData.map((item) => ({
      date: formatDate(getDateFromString(item.date)),
      title: `♡ ${item.label}`
    }))
  ];

  journeyList.innerHTML = items.map((item) => `
    <div class="journey-item">
      <strong>${item.date}</strong>
      <span>${item.title}</span>
    </div>
  `).join("");
}

function renderMemoryGalaxy() {
  const galaxy = document.getElementById("memoryGalaxy");
  galaxy.innerHTML = "";

  const ringConfigs = [
    { count: 10, radius: 150, offset: 0, speed: 0.5, scale: 1 },
    { count: 14, radius: 240, offset: 40, speed: -0.75, scale: 1.08 },
    { count: 18, radius: 330, offset: 90, speed: 0.8, scale: 1.12 },
    { count: 20, radius: 420, offset: 150, speed: -0.45, scale: 1.18 }
  ];

  ringConfigs.forEach((ring, ringIndex) => {
    for (let i = 0; i < ring.count; i++) {
      const item = document.createElement("div");
      item.className = "memory-orbit-item";
      const angle = (360 / ring.count) * i + ring.offset;
      const x = Math.cos((angle * Math.PI) / 180) * ring.radius;
      const y = Math.sin((angle * Math.PI) / 180) * ring.radius * 0.7;
      const z = (ringIndex % 2 === 0 ? 1 : -1) * (i % 4) * 42;
      item.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${angle}deg) scale(${ring.scale})`;

      const img = document.createElement("img");
      img.src = MEMORY_FILES[i % MEMORY_FILES.length];
      img.alt = "Our memory";
      img.loading = "lazy";
      img.addEventListener("click", () => openLightbox(i + ringIndex * 10));
      item.appendChild(img);
      galaxy.appendChild(item);
    }
  });

  const heart = document.getElementById("memoryHeart");
  heart.innerHTML = "";

  const heartMap = [
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0]
  ];

  heartMap.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (!cell) return;
      const tile = document.createElement("div");
      tile.className = "memory-heart-photo";
      const img = document.createElement("img");
      img.src = MEMORY_FILES[(rowIndex * 8 + colIndex) % MEMORY_FILES.length];
      img.alt = "Memory heart";
      img.loading = "lazy";
      tile.appendChild(img);
      tile.addEventListener("click", () => openLightbox((rowIndex * 8 + colIndex) % MEMORY_FILES.length));
      heart.appendChild(tile);
    });
  });
}

function renderMemoryStreams() {
  const rowOne = document.getElementById("streamRowOne");
  const rowTwo = document.getElementById("streamRowTwo");

  const repeat = [...MEMORY_FILES, ...MEMORY_FILES];
  rowOne.innerHTML = repeat.map((source, index) => `
    <button class="stream-card" type="button" data-memory-index="${index % MEMORY_FILES.length}">
      <img src="${source}" alt="Love memory ${index + 1}" loading="lazy" />
    </button>
  `).join("");

  rowTwo.innerHTML = [...repeat].reverse().map((source, index) => `
    <button class="stream-card" type="button" data-memory-index="${index % MEMORY_FILES.length}">
      <img src="${source}" alt="Love memory reverse ${index + 1}" loading="lazy" />
    </button>
  `).join("");
}

function renderTodayMemory() {
  const today = new Date();
  const dateKey = today.toLocaleDateString("en-CA", { timeZone: "Asia/Manila" });
  const sum = Array.from(dateKey).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = sum % MEMORY_FILES.length;
  const source = MEMORY_FILES[index];

  document.getElementById("todayMemoryCard").innerHTML = `
    <div><strong>Today's Memory</strong></div>
    <div>${new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Manila", month: "long", day: "numeric", year: "numeric" }).format(today)}</div>
    <img src="${source}" alt="Today's memory" />
    <div class="caption">"Another day, another reason to smile because of you."</div>
  `;
}

function renderLoveWall() {
  const wall = document.getElementById("loveWallNotes");
  const notes = safeReadJSON(storageKeys.notes, []);

  if (!notes.length) {
    wall.innerHTML = `
      <div class="memory-note">
        <strong>Our little universe is still waiting for new notes.</strong>
        <small>Add memories, sweet messages, or inside jokes.</small>
      </div>
    `;
    return;
  }

  wall.innerHTML = notes.map((note) => `
    <div class="memory-note">
      <strong>${escapeHtml(note.title)}</strong>
      <small>${escapeHtml(formatDate(new Date(note.date)))}</small>
      <div>${escapeHtml(note.text).replace(/\n/g, "<br>")}</div>
    </div>
  `).join("");
}

function saveMemoryNote() {
  const title = document.getElementById("memoryTitle").value.trim();
  const text = document.getElementById("memoryText").value.trim();

  if (!title || !text) {
    showNotification("✍️ INCOMPLETE NOTE", "Add a title and a sweet message first.");
    return;
  }

  const notes = safeReadJSON(storageKeys.notes, []);
  notes.unshift({ title, text, date: new Date().toISOString() });

  try {
    localStorage.setItem(storageKeys.notes, JSON.stringify(notes.slice(0, 100)));
  } catch {
    showNotification("⚠️ STORAGE FULL", "Your browser could not save the note.");
    return;
  }

  document.getElementById("memoryTitle").value = "";
  document.getElementById("memoryText").value = "";
  renderLoveWall();
  showNotification("♡ NEW LOVE NOTE", "Your memory has been added to our little universe.");
}

function showNotification(title, body) {
  const toastContainer = document.getElementById("toastContainer");
  if (toastContainer) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="title">${escapeHtml(title)}</span><span>${escapeHtml(body)}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3600);
  }

  const list = document.getElementById("notificationList");
  if (list) {
    const item = document.createElement("div");
    item.className = "notification-item";
    item.innerHTML = `<strong>${escapeHtml(title)}</strong><span>${escapeHtml(body)}</span><small>${escapeHtml(formatDateTime(new Date()))}</small>`;
    list.prepend(item);
  }
}

function openLightbox(index) {
  const viewer = document.getElementById("viewer");
  const image = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");
  const safeIndex = ((index % MEMORY_FILES.length) + MEMORY_FILES.length) % MEMORY_FILES.length;

  appState.selectedMemory = safeIndex;
  image.src = MEMORY_FILES[safeIndex];
  caption.textContent = memoryDescriptors[safeIndex % memoryDescriptors.length];
  viewer.classList.remove("hidden");

  document.getElementById("prevMemoryBtn").onclick = () => {
    appState.selectedMemory = (appState.selectedMemory - 1 + MEMORY_FILES.length) % MEMORY_FILES.length;
    image.src = MEMORY_FILES[appState.selectedMemory];
    caption.textContent = memoryDescriptors[appState.selectedMemory % memoryDescriptors.length];
  };

  document.getElementById("nextMemoryBtn").onclick = () => {
    appState.selectedMemory = (appState.selectedMemory + 1) % MEMORY_FILES.length;
    image.src = MEMORY_FILES[appState.selectedMemory];
    caption.textContent = memoryDescriptors[appState.selectedMemory % memoryDescriptors.length];
  };
}

function displayDailyLoveMessage() {
  const today = new Date();
  const dateKey = today.toLocaleDateString("en-CA", { timeZone: "Asia/Manila" });
  const total = Array.from(dateKey).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const message = loveMessages[total % loveMessages.length];
  document.getElementById("todayLoveMessage").textContent = `"${message}"`;
}

function initializeEvents() {
  const mobileNavToggle = document.getElementById("mobileNavToggle");
  const mainNav = document.querySelector(".main-nav");
  const navClose = document.querySelector(".nav-close");

  const setNavOpen = (open) => {
    if (!mainNav || !mobileNavToggle) return;
    mainNav.classList.toggle("open", open);
    mobileNavToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  };

  mobileNavToggle?.addEventListener("click", () => {
    setNavOpen(!mainNav.classList.contains("open"));
  });
  navClose?.addEventListener("click", () => setNavOpen(false));
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => setNavOpen(false));
  });

  document.getElementById("notificationsToggle")?.addEventListener("click", () => {
    document.getElementById("notificationCenter")?.classList.toggle("hidden");
  });
  document.getElementById("closeNotifications")?.addEventListener("click", () => {
    document.getElementById("notificationCenter")?.classList.add("hidden");
  });

  document.getElementById("surpriseBtn")?.addEventListener("click", () => {
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    document.getElementById("todayLoveMessage").textContent = `"${randomMessage}"`;
    showNotification("✨ SURPRISE ME", "A new sweet message appeared just for you.");
  });

  document.getElementById("secretBtn")?.addEventListener("click", () => {
    document.getElementById("todayLoveMessage").textContent = `"Michael loves Donnah more than yesterday, but less than tomorrow."`;
    showNotification("♡ CLICK ME", "A hidden love message has been revealed.");
  });

  const nightBtn = document.getElementById("nightModeToggle");
  const applyNightLabel = () => {
    const active = document.body.classList.contains("night-mode");
    if (nightBtn) nightBtn.textContent = active ? "☀️ LOVE DAY MODE" : "🌙 LOVE NIGHT MODE";
  };

  nightBtn?.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");
    safeWriteStorage(storageKeys.night, document.body.classList.contains("night-mode"));
    applyNightLabel();
  });

  const savedNightMode = safeReadJSON(storageKeys.night, false);
  if (savedNightMode) document.body.classList.add("night-mode");
  applyNightLabel();

  document.getElementById("memoryTitle")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      saveMemoryNote();
    }
  });

  document.getElementById("addMemoryBtn")?.addEventListener("click", saveMemoryNote);

  const closeViewer = () => {
    document.getElementById("viewer")?.classList.add("hidden");
  };

  document.querySelector(".close-lightbox")?.addEventListener("click", closeViewer);
  document.querySelector(".lightbox-backdrop")?.addEventListener("click", closeViewer);

  document.getElementById("enterUniverseBtn")?.addEventListener("click", () => {
    document.body.classList.toggle("memory-universe-mode");
    showNotification("🌌 MEMORY UNIVERSE", "You have entered a little galaxy of our love.");
  });

  document.getElementById("unlockAllBtn")?.addEventListener("click", () => {
    document.querySelector(".memory-heart-section")?.classList.add("memory-reveal");
    showNotification("💗 MEMORY FLOW", "The memory gallery is glowing. Monthsary letters remain date-locked.");
  });

  document.getElementById("surpriseMemoryBtn")?.addEventListener("click", () => {
    const index = Math.floor(Math.random() * MEMORY_FILES.length);
    openLightbox(index);
    showNotification("🎞 SURPRISE MEMORY", "A favorite moment has appeared for you.");
  });

  const reasonNext = document.getElementById("nextReasonBtn");
  reasonNext?.addEventListener("click", () => {
    appState.reasonIndex = (appState.reasonIndex + 1) % reasonsILoveYou.length;
    updateLoveReasons(appState.reasonIndex);
  });
  updateLoveReasons(appState.reasonIndex);

  document.getElementById("photoCountText").textContent = `${MEMORY_FILES.length} PHOTOS`;

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    setNavOpen(false);
    document.getElementById("notificationCenter")?.classList.add("hidden");
    closeViewer();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  });

  // Open the last saved letter after a short delay only if it is unlocked.
  const lastLetter = localStorage.getItem(storageKeys.lastLetter);
  if (lastLetter && isLetterUnlocked(lastLetter)) {
    setTimeout(() => {
      const holder = document.querySelector(`[data-letter-box="${lastLetter}"]`);
      if (!holder) return;
      holder.querySelector(".letter-envelope")?.classList.add("open");
      holder.querySelector(".letter-paper")?.classList.add("visible");
      appState.currentLetterId = lastLetter;
    }, 800);
  }
}

function safeWriteStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}


const reasonsILoveYou = [
  "Your smile makes my whole day warmer.",
  "You make ordinary moments feel special.",
  "You know how to make me laugh.",
  "You make my heart feel at home.",
  "You listen when I need someone.",
  "You make me want to become a better version of myself.",
  "You are beautiful inside and out.",
  "You make me feel understood.",
  "You remember the little things.",
  "You make conversations feel effortless.",
  "You make even quiet moments meaningful.",
  "You bring comfort when I need it.",
  "You are one of my favorite reasons to smile.",
  "You make me excited for tomorrow.",
  "You have a way of making me feel appreciated.",
  "You make life feel a little softer.",
  "You are someone I can be myself with.",
  "You make memories worth keeping.",
  "You make me feel lucky.",
  "You have a beautiful heart.",
  "You make my happiest moments even happier.",
  "You stay on my mind in the sweetest ways.",
  "You make me look forward to every new day.",
  "You make love feel gentle.",
  "You make the smallest gestures mean so much.",
  "You make me feel cared for.",
  "You have a smile I could look at forever.",
  "You make me feel like I belong.",
  "You bring color into my everyday life.",
  "You make me want to keep writing our story.",
  "You are my favorite person to talk to.",
  "You make me feel peaceful.",
  "You make my heart beat a little faster.",
  "You make me appreciate the little moments.",
  "You make my world brighter just by being in it.",
  "You are patient with me.",
  "You make me feel safe to share my thoughts.",
  "You make me laugh at random things.",
  "You are a beautiful part of my life.",
  "You make me happy without even trying.",
  "You inspire me to dream bigger.",
  "You make me believe in little forever moments.",
  "You are worth every heartbeat.",
  "You make distance feel smaller.",
  "You give me something beautiful to look forward to.",
  "You make every chapter of our story better.",
  "You have a kindness I deeply admire.",
  "You make me want to celebrate every milestone.",
  "You make me smile just by texting me.",
  "You make my heart feel full.",
  "You make home feel like a person.",
  "You make even busy days feel sweeter.",
  "You are easy to appreciate and impossible to forget.",
  "You bring out my softer side.",
  "You make me want to keep every photo.",
  "You turn simple moments into memories.",
  "You make me feel heard.",
  "You make me believe that love can grow every day.",
  "You make me proud to call you my love.",
  "You are one of the best parts of my life.",
  "You make me grateful for August 7, 2026.",
  "You give our story its own little magic.",
  "You make me excited about our future.",
  "You are the person I want beside me for more memories.",
  "You make me smile when I least expect it.",
  "You are worth celebrating.",
  "You make me want to slow down and enjoy the moment.",
  "You make my heart choose you again and again.",
  "You make the future feel exciting.",
  "You make every month feel like a new chapter.",
  "You make my life more meaningful.",
  "You make me treasure conversations.",
  "You make even random days memorable.",
  "You are one of the people I trust most.",
  "You make me feel appreciated.",
  "You have a way of making me forget my worries.",
  "You make me want to protect our memories.",
  "You make the world feel friendlier.",
  "You are beautiful in ways pictures cannot fully show.",
  "You make me feel hopeful.",
  "You make me want to keep learning about you.",
  "You make my heart calm down when life gets loud.",
  "You make me laugh when I need it most.",
  "You make me want to keep choosing you.",
  "You make every milestone matter.",
  "You make my days brighter.",
  "You are someone I never want to take for granted.",
  "You make me excited to open a new chapter.",
  "You make love feel like a safe place.",
  "You make me want to keep our story alive.",
  "You are a memory I never want to lose.",
  "You make me grateful for every second.",
  "You make my heart feel lighter.",
  "You make me want to celebrate even the small wins.",
  "You make me smile when I simply think of you.",
  "You make me believe our story can keep growing.",
  "You are my favorite kind of happiness.",
  "You are you, and somehow that is more than enough."
];

function updateLoveReasons(index) {
  const safe = ((index % reasonsILoveYou.length) + reasonsILoveYou.length) % reasonsILoveYou.length;
  const card = document.getElementById("reasonCard");
  const progress = document.getElementById("reasonProgress");
  if (!card || !progress) return;
  card.innerHTML = `
    <div class="reason-number">${String(safe + 1).padStart(2, "0")} — Reason #${safe + 1}</div>
    <p class="reason-text">${escapeHtml(reasonsILoveYou[safe])}</p>
  `;
  progress.textContent = `${safe + 1} / ${reasonsILoveYou.length}`;
}

function renderStaticExtras() {
  const openWhen = [
    ["💗 Open when you're sad", "Even on your hardest day, remember you are deeply loved and never alone in my heart."],
    ["💌 Open when you miss me", "Close your eyes for a moment and imagine me beside you, holding your hand and smiling at you."],
    ["🌙 Open when you can't sleep", "Rest your heart. Tomorrow can wait. Tonight, just remember that someone is always cheering for you."],
    ["✨ Open when you need motivation", "You are stronger and more capable than you sometimes realize. Keep going, my love."],
    ["🥹 Open when you need a hug", "Imagine the biggest warm hug from me. Stay there as long as you need."],
    ["😂 Open when you want to smile", "Here is your reminder that our story has so many more funny moments waiting for us."]
  ];

  const openWhenList = document.getElementById("openWhenList");
  if (openWhenList) {
    openWhenList.innerHTML = openWhen.map(([title, message]) => `
      <button class="open-when-card-item" type="button">
        <span>${escapeHtml(title)}</span>
        <span>♡</span>
        <div class="open-when-message">${escapeHtml(message)}</div>
      </button>
    `).join("");

    openWhenList.querySelectorAll(".open-when-card-item").forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("revealed");
        const title = button.querySelector("span")?.textContent || "Open when";
        showNotification(title, button.querySelector(".open-when-message")?.textContent || "");
      });
    });
  }

  const stats = [
    [String(timelineData.length), "Letters & milestones"],
    [String(MEMORY_FILES.length), "Memories"],
    [String(timelineData.length), "Milestones"],
    ["∞", "Love level"],
    ["7", "Our date"],
    ["1", "Love story"]
  ];
  const statsGrid = document.getElementById("loveStatsGrid");
  if (statsGrid) {
    statsGrid.innerHTML = stats.map(([value, label]) => `
      <div class="stat-box">
        <strong>${value}</strong>
        <span>${escapeHtml(label)}</span>
      </div>
    `).join("");
  }
}

function updateDynamicUI() {
  updatePhilippinesClock();
  const diff = Math.max(0, Date.now() - relationshipStart.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  const months = Math.floor(totalSeconds / (30.4375 * 86400));
  const days = Math.floor((totalSeconds / 86400) % 30.4375);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  renderRelationshipCounter();
  renderNextMonthsaryCountdown();
  updateLockedLetterCountdowns();

  const values = {
    togetherMonths: months,
    togetherDays: days,
    togetherHours: hours,
    togetherMinutes: minutes,
    togetherSeconds: seconds
  };
  Object.entries(values).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(value);
  });

  const next = getNextMonthsary();
  const countdown = getCountdownParts(getDateFromString(next.date));
  const countdownValues = {
    countdownDays: countdown.days,
    countdownHours: countdown.hours,
    countdownMinutes: countdown.minutes,
    countdownSeconds: countdown.seconds,
    monthsaryDays: countdown.days,
    monthsaryHours: countdown.hours,
    monthsaryMinutes: countdown.minutes,
    monthsarySeconds: countdown.seconds
  };
  Object.entries(countdownValues).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(value).padStart(id.toLowerCase().includes("seconds") ? 2 : 1, "0");
  });
}

function boot() {
  displayDailyLoveMessage();
  renderTimeline();
  renderLetterSection();
  renderReplies();
  renderJourney();
  renderMemoryGalaxy();
  renderMemoryStreams();
  document.querySelectorAll(".stream-card").forEach((card) => card.addEventListener("click", () => openLightbox(Number(card.dataset.memoryIndex || 0))));
  renderTodayMemory();
  renderLoveWall();
  renderStaticExtras();
  initializeEvents();
  updateDynamicUI();

  let lastLetterState = getLetterStateSignature();
  setInterval(() => {
    updateDynamicUI();

    const nextLetterState = getLetterStateSignature();
    if (nextLetterState !== lastLetterState) {
      lastLetterState = nextLetterState;
      renderTimeline();
      renderLetterSection();
      showNotification("💗 MONTHSARY UPDATE", "A new stage of our love story has arrived.");
    }
  }, 1000);

  setTimeout(() => {
    document.getElementById("loader")?.classList.add("hidden");
  }, 2600);
}

window.addEventListener("DOMContentLoaded", boot);

/* ==========================================================================
   31. PRIVATE COUPLE PHOTO VAULT
   - Local fallback uses IndexedDB so images do not blow up localStorage.
   - Firebase mode provides cross-device sync for the two authorized accounts.
   ========================================================================== */
(function privateCoupleVault() {
  const config = window.COUPLE_CONFIG || {
    mode: "local",
    allowedEmails: [],
    firebase: {}
  };

  const vaultState = {
    mode: String(config.mode || "local").toLowerCase(),
    currentUser: null,
    currentFilter: "all",
    items: [],
    visibleItems: [],
    objectUrls: [],
    db: null,
    storage: null,
    auth: null,
    useFirebase: false,
    firebaseReady: false,
    localDb: null,
    localReady: false,
    localPerson: localStorage.getItem("coupleLocalPerson") || "Michael"
  };

  const LOCAL_DB_NAME = "michaelDonnahPrivateVault";
  const LOCAL_STORE = "photos";
  const MAX_FILE_SIZE = 12 * 1024 * 1024;

  const el = (id) => document.getElementById(id);

  function setText(id, value) {
    const node = el(id);
    if (node) node.textContent = value;
  }

  function setHidden(id, hidden) {
    el(id)?.classList.toggle("hidden", Boolean(hidden));
  }

  function isAllowedEmail(email) {
    const list = Array.isArray(config.allowedEmails) ? config.allowedEmails : [];
    const normalized = String(email || "").trim().toLowerCase();
    return normalized && list.some((entry) => {
      const configured = String(entry || "").trim().toLowerCase();
      return configured && configured !== "MICHAEL_EMAIL_HERE" && configured !== "DONNAH_EMAIL_HERE" && configured === normalized;
    });
  }

  function personNameFromEmail(email) {
    const normalized = String(email || "").trim().toLowerCase();
    const allowed = Array.isArray(config.allowedEmails) ? config.allowedEmails : [];
    if (allowed[0] && normalized === String(allowed[0]).trim().toLowerCase()) return "Michael";
    if (allowed[1] && normalized === String(allowed[1]).trim().toLowerCase()) return "Donnah";
    return "Our Love Story";
  }

  function updateVaultModeUI() {
    const badge = el("vaultSecurityBadge");
    const authMessage = el("vaultAuthMessage");
    const localNotice = el("vaultLocalNotice");
    const loginForm = el("vaultLoginForm");

    if (vaultState.useFirebase) {
      badge?.classList.add("cloud-ready");
      if (badge) badge.textContent = "🔐 PRIVATE CLOUD MODE";
      if (authMessage) authMessage.textContent = "Only the two authorized Firebase accounts can open this shared photo vault.";
      localNotice?.classList.add("hidden");
      loginForm?.classList.remove("hidden");
      return;
    }

    badge?.classList.remove("cloud-ready");
    if (badge) badge.textContent = "🔐 LOCAL MODE";
    if (authMessage) authMessage.textContent = "Local mode works immediately, but photos saved here stay on this browser/device only.";
    localNotice?.classList.remove("hidden");
    loginForm?.classList.add("hidden");
  }

  function updateVaultAuthUI() {
    const signedIn = Boolean(vaultState.currentUser);
    setHidden("vaultManager", !signedIn && vaultState.useFirebase);
    setHidden("vaultLogoutBtn", !signedIn || !vaultState.useFirebase);

    if (!vaultState.useFirebase) {
      setHidden("vaultAuthBox", true);
      setHidden("vaultManager", false);
      setHidden("vaultLocalIdentity", false);
      setText("vaultSignedInAs", `${vaultState.localPerson}'s browser-only memory vault`);
      setText("vaultUserStatus", "Local photo mode — this device only");
      return;
    }
    setHidden("vaultLocalIdentity", true);

    setHidden("vaultAuthBox", false);
    setHidden("vaultManager", !signedIn);

    if (signedIn) {
      const userLabel = `${personNameFromEmail(vaultState.currentUser.email)} • ${vaultState.currentUser.email}`;
      setText("vaultUserStatus", `Signed in as ${userLabel}`);
      setText("vaultSignedInAs", `Signed in as ${userLabel}`);
    } else {
      setText("vaultUserStatus", "Not signed in");
      setText("vaultSignedInAs", "");
    }
  }

  function showVaultEmpty(message = "No private photos yet.") {
    const grid = el("vaultPhotoGrid");
    if (!grid) return;
    grid.innerHTML = `
      <div class="vault-empty-state">
        <strong>♡ Our private memories are waiting.</strong>
        <span>${escapeHtml(message)}</span>
      </div>
    `;
  }

  function clearObjectUrls() {
    vaultState.objectUrls.forEach((url) => URL.revokeObjectURL(url));
    vaultState.objectUrls = [];
  }

  function albumLabel(album) {
    if (album === "michael") return "♡ Michael";
    if (album === "donnah") return "♡ Donnah";
    return "♡ Our Memories";
  }

  function renderVaultGallery() {
    const grid = el("vaultPhotoGrid");
    if (!grid) return;

    const filtered = vaultState.items.filter((item) => vaultState.currentFilter === "all" || item.album === vaultState.currentFilter);
    vaultState.visibleItems = filtered;

    if (!filtered.length) {
      showVaultEmpty(
        vaultState.currentFilter === "all"
          ? "Add your first private photo memory above."
          : `No photos are saved in the ${vaultState.currentFilter} album yet.`
      );
      return;
    }

    grid.innerHTML = filtered.map((item, index) => {
      const imageSource = item.objectUrl || item.url || "";
      const deleteAllowed = vaultState.useFirebase
        ? Boolean(vaultState.currentUser && item.uploadedBy === vaultState.currentUser.uid)
        : true;
      return `
        <article class="vault-photo-card">
          <button class="vault-photo-button" type="button" data-vault-open="${escapeHtml(item.id)}" aria-label="Open ${escapeHtml(item.title || "memory")}">
            <img src="${escapeHtml(imageSource)}" alt="${escapeHtml(item.title || "Private couple memory")}" loading="lazy" />
          </button>
          ${deleteAllowed ? `<button class="vault-photo-delete" type="button" data-vault-delete="${escapeHtml(item.id)}" aria-label="Delete memory">✕</button>` : ""}
          <div class="vault-photo-meta">
            <strong>${escapeHtml(item.title || "Untitled memory")}</strong>
            <span>${escapeHtml(albumLabel(item.album))} • ${escapeHtml(item.uploaderName || "Our Love Story")}</span>
            <small>${escapeHtml(formatDateTime(item.createdAt ? new Date(item.createdAt) : new Date()))}</small>
            ${item.caption ? `<small>${escapeHtml(item.caption)}</small>` : ""}
          </div>
        </article>
      `;
    }).join("");

    grid.querySelectorAll("[data-vault-open]").forEach((button) => {
      button.addEventListener("click", () => openVaultViewer(button.dataset.vaultOpen));
    });
    grid.querySelectorAll("[data-vault-delete]").forEach((button) => {
      button.addEventListener("click", async () => {
        const item = vaultState.items.find((entry) => entry.id === button.dataset.vaultDelete);
        if (!item) return;
        const confirmed = window.confirm(`Delete “${item.title || "this memory"}”?`);
        if (!confirmed) return;
        await deleteVaultItem(item);
      });
    });
  }

  function setVaultFilter(filter) {
    vaultState.currentFilter = filter;
    document.querySelectorAll(".vault-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.vaultFilter === filter);
    });
    renderVaultGallery();
  }

  function openVaultViewer(itemId) {
    const item = vaultState.visibleItems.find((entry) => entry.id === itemId) || vaultState.items.find((entry) => entry.id === itemId);
    if (!item) return;

    const viewer = el("viewer");
    const image = el("lightboxImg");
    const caption = el("lightboxCaption");
    if (!viewer || !image || !caption) return;

    appState.selectedMemory = 0;
    image.src = item.objectUrl || item.url;
    image.alt = item.title || "Private couple memory";
    caption.textContent = `${item.title || "Our private memory"}${item.caption ? ` — ${item.caption}` : ""}`;
    viewer.classList.remove("hidden");

    const getIndex = () => Math.max(0, vaultState.visibleItems.findIndex((entry) => entry.id === item.id));
    const showAt = (index) => {
      if (!vaultState.visibleItems.length) return;
      const safe = (index + vaultState.visibleItems.length) % vaultState.visibleItems.length;
      const next = vaultState.visibleItems[safe];
      image.src = next.objectUrl || next.url;
      image.alt = next.title || "Private couple memory";
      caption.textContent = `${next.title || "Our private memory"}${next.caption ? ` — ${next.caption}` : ""}`;
    };

    const previous = el("prevMemoryBtn");
    const next = el("nextMemoryBtn");
    if (previous) previous.onclick = () => showAt(getIndex() - 1);
    if (next) next.onclick = () => showAt(getIndex() + 1);
  }

  function updateUploadProgress(percent, text) {
    const wrap = el("vaultUploadProgress");
    const bar = el("vaultProgressBar");
    const label = el("vaultProgressText");
    wrap?.classList.remove("hidden");
    if (bar) bar.style.width = `${Math.max(0, Math.min(100, percent))}%`;
    if (label) label.textContent = text;
  }

  function finishUploadProgress() {
    el("vaultUploadProgress")?.classList.add("hidden");
    const bar = el("vaultProgressBar");
    if (bar) bar.style.width = "0";
  }

  function getSelectedFiles() {
    const input = el("vaultPhotoFiles");
    return input?.files ? Array.from(input.files) : [];
  }

  function getUploadMeta() {
    return {
      album: el("vaultAlbum")?.value || "shared",
      title: el("vaultPhotoTitle")?.value.trim() || "A little moment",
      caption: el("vaultPhotoCaption")?.value.trim() || ""
    };
  }

  function validateFiles(files) {
    if (!files.length) {
      showNotification("📸 NO PHOTOS SELECTED", "Choose one or more pictures first.");
      return false;
    }
    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        showNotification("⚠️ IMAGE ONLY", `${file.name} is not an image file.`);
        return false;
      }
      if (file.size > MAX_FILE_SIZE) {
        showNotification("⚠️ FILE TOO LARGE", `${file.name} is larger than 12 MB.`);
        return false;
      }
    }
    return true;
  }

  function resetUploadForm() {
    if (el("vaultPhotoFiles")) el("vaultPhotoFiles").value = "";
    setText("vaultPhotoFileLabel", "Multiple JPG, PNG, WEBP or browser-compatible image files");
    if (el("vaultPhotoTitle")) el("vaultPhotoTitle").value = "";
    if (el("vaultPhotoCaption")) el("vaultPhotoCaption").value = "";
  }

  async function openLocalDb() {
    if (vaultState.localReady) return vaultState.localDb;
    vaultState.localDb = await new Promise((resolve, reject) => {
      const request = indexedDB.open(LOCAL_DB_NAME, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(LOCAL_STORE)) {
          db.createObjectStore(LOCAL_STORE, { keyPath: "id" });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("IndexedDB could not be opened."));
    });
    vaultState.localReady = true;
    return vaultState.localDb;
  }

  async function localPutPhoto(record) {
    const db = await openLocalDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(LOCAL_STORE, "readwrite");
      tx.objectStore(LOCAL_STORE).put(record);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error || new Error("Could not save local photo."));
    });
  }

  async function localGetPhotos() {
    const db = await openLocalDb();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(LOCAL_STORE, "readonly");
      const request = tx.objectStore(LOCAL_STORE).getAll();
      request.onsuccess = () => {
        const list = Array.isArray(request.result) ? request.result : [];
        list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        resolve(list);
      };
      request.onerror = () => reject(request.error || new Error("Could not read local photos."));
    });
  }

  async function localDeletePhoto(id) {
    const db = await openLocalDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(LOCAL_STORE, "readwrite");
      tx.objectStore(LOCAL_STORE).delete(id);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error || new Error("Could not delete local photo."));
    });
  }

  async function loadLocalVault() {
    try {
      clearObjectUrls();
      const list = await localGetPhotos();
      vaultState.items = list.map((item) => ({
        ...item,
        objectUrl: URL.createObjectURL(item.blob),
      }));
      vaultState.objectUrls = vaultState.items.map((item) => item.objectUrl);
      renderVaultGallery();
    } catch (error) {
      showNotification("⚠️ LOCAL VAULT ERROR", error?.message || "Your browser could not open the local photo vault.");
      showVaultEmpty("Your browser may have private storage disabled.");
    }
  }

  async function uploadLocalPhotos(files, meta) {
    updateUploadProgress(2, `Preparing ${files.length} photo${files.length === 1 ? "" : "s"}...`);
    const person = vaultState.currentUser?.email ? personNameFromEmail(vaultState.currentUser.email) : "Our Love Story";
    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      const id = `local-${Date.now()}-${i}-${crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2)}`;
      await localPutPhoto({
        id,
        album: meta.album,
        title: files.length > 1 ? `${meta.title} ${i + 1}` : meta.title,
        caption: meta.caption,
        uploadedBy: person,
        uploaderName: person,
        createdAt: new Date().toISOString(),
        blob: file,
        mimeType: file.type
      });
      updateUploadProgress(((i + 1) / files.length) * 100, `Saved ${i + 1} of ${files.length}`);
    }
    await loadLocalVault();
    resetUploadForm();
    finishUploadProgress();
    showNotification("💗 MEMORIES SAVED", "Your photos were added to this browser's private vault.");
  }

  async function firebaseUploadFile(file, meta, user, index, total) {
    const id = `${Date.now()}-${crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2)}`;
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-120);
    const path = `couple-memories/${user.uid}/${id}-${safeName}`;
    const ref = vaultState.storage.ref(path);
    const metadata = {
      contentType: file.type,
      customMetadata: {
        uploaderUid: user.uid,
        album: meta.album
      }
    };
    const task = ref.put(file, metadata);
    await new Promise((resolve, reject) => {
      task.on(
        "state_changed",
        (snapshot) => {
          const perFile = snapshot.totalBytes ? snapshot.bytesTransferred / snapshot.totalBytes : 0;
          const overall = ((index + perFile) / total) * 100;
          updateUploadProgress(overall, `Uploading ${index + 1} of ${total}… ${Math.round(perFile * 100)}%`);
        },
        reject,
        resolve
      );
    });

    const url = await ref.getDownloadURL();
    await vaultState.db.collection("coupleMemories").doc(id).set({
      album: meta.album,
      title: total > 1 ? `${meta.title} ${index + 1}` : meta.title,
      caption: meta.caption,
      url,
      storagePath: path,
      uploadedBy: user.uid,
      uploaderName: personNameFromEmail(user.email),
      uploaderEmail: user.email,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  async function uploadCloudPhotos(files, meta) {
    const user = vaultState.currentUser;
    if (!user || !vaultState.useFirebase) return;
    updateUploadProgress(0, "Starting secure upload...");
    try {
      for (let i = 0; i < files.length; i += 1) {
        await firebaseUploadFile(files[i], meta, user, i, files.length);
      }
      await loadCloudVault();
      resetUploadForm();
      finishUploadProgress();
      showNotification("🔐 PRIVATE MEMORIES SAVED", "Your photos are now synced to the private couple vault.");
    } catch (error) {
      finishUploadProgress();
      showNotification("⚠️ UPLOAD FAILED", firebaseFriendlyError(error));
    }
  }

  async function handleVaultUpload() {
    const files = getSelectedFiles();
    if (!validateFiles(files)) return;
    const meta = getUploadMeta();
    if (vaultState.useFirebase) {
      await uploadCloudPhotos(files, meta);
    } else {
      await uploadLocalPhotos(files, meta);
    }
  }

  function firebaseFriendlyError(error) {
    const code = String(error?.code || "");
    const messages = {
      "auth/invalid-email": "That email address is not valid.",
      "auth/invalid-credential": "The email or password is incorrect.",
      "auth/wrong-password": "The email or password is incorrect.",
      "auth/user-not-found": "That account does not exist yet.",
      "auth/email-already-in-use": "That email already has an account.",
      "auth/weak-password": "Use a stronger password with at least 6 characters.",
      "auth/too-many-requests": "Too many attempts. Wait a little and try again.",
      "permission-denied": "Firebase rules rejected this action. Check the two allowed emails in the rules files.",
      "storage/unauthorized": "Firebase Storage rules rejected this photo.",
      "storage/canceled": "The upload was canceled.",
      "storage/quota-exceeded": "The Firebase Storage quota was exceeded."
    };
    return messages[code] || error?.message || "Something went wrong.";
  }

  async function loadCloudVault() {
    if (!vaultState.useFirebase || !vaultState.currentUser) return;
    try {
      const snapshot = await vaultState.db.collection("coupleMemories").orderBy("createdAt", "desc").limit(200).get();
      vaultState.items = snapshot.docs.map((doc) => {
        const data = doc.data() || {};
        const createdAt = data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : (data.createdAt || new Date().toISOString());
        return { id: doc.id, ...data, createdAt };
      });
      renderVaultGallery();
    } catch (error) {
      showNotification("⚠️ VAULT COULD NOT LOAD", firebaseFriendlyError(error));
      showVaultEmpty("The cloud gallery could not be loaded. Check Firebase Firestore rules and indexes.");
    }
  }

  async function deleteVaultItem(item) {
    try {
      if (vaultState.useFirebase) {
        if (!vaultState.currentUser || item.uploadedBy !== vaultState.currentUser.uid) {
          showNotification("🔐 DELETE PROTECTED", "Only the person who uploaded this memory can delete it.");
          return;
        }
        await vaultState.storage.ref(item.storagePath).delete();
        await vaultState.db.collection("coupleMemories").doc(item.id).delete();
        showNotification("🗑 MEMORY DELETED", "That private photo was removed from the cloud vault.");
        await loadCloudVault();
      } else {
        await localDeletePhoto(item.id);
        showNotification("🗑 MEMORY DELETED", "That photo was removed from this browser's vault.");
        await loadLocalVault();
      }
    } catch (error) {
      showNotification("⚠️ DELETE FAILED", firebaseFriendlyError(error));
    }
  }

  async function signIn() {
    if (!vaultState.auth) return;
    const email = el("vaultEmail")?.value.trim();
    const password = el("vaultPassword")?.value;
    if (!email || !password) {
      showNotification("🔐 LOGIN REQUIRED", "Enter your email and password.");
      return;
    }
    if (!isAllowedEmail(email)) {
      showNotification("🔐 PRIVATE ACCESS", "That email is not one of the two authorized couple accounts.");
      return;
    }
    try {
      await vaultState.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      showNotification("⚠️ SIGN IN FAILED", firebaseFriendlyError(error));
    }
  }

  async function createAccount() {
    if (!vaultState.auth) return;
    const email = el("vaultEmail")?.value.trim();
    const password = el("vaultPassword")?.value;
    if (!email || !password) {
      showNotification("🔐 ACCOUNT DETAILS", "Enter the authorized email and a password first.");
      return;
    }
    if (!isAllowedEmail(email)) {
      showNotification("🔐 PRIVATE ACCESS", "Only the two authorized email addresses can create accounts.");
      return;
    }
    try {
      await vaultState.auth.createUserWithEmailAndPassword(email, password);
      showNotification("💗 ACCOUNT CREATED", "Your private couple account is ready.");
    } catch (error) {
      showNotification("⚠️ ACCOUNT NOT CREATED", firebaseFriendlyError(error));
    }
  }

  async function signOut() {
    try {
      await vaultState.auth?.signOut();
    } catch (error) {
      showNotification("⚠️ SIGN OUT FAILED", firebaseFriendlyError(error));
    }
  }

  async function initializeFirebaseVault() {
    if (!window.firebase || !window.firebase.initializeApp) {
      throw new Error("Firebase scripts did not load.");
    }
    if (!config.firebase || !config.firebase.apiKey || String(config.firebase.apiKey).startsWith("YOUR_")) {
      throw new Error("Firebase configuration placeholders are still in firebase-config.js.");
    }

    if (!firebase.apps.length) firebase.initializeApp(config.firebase);
    vaultState.auth = firebase.auth();
    vaultState.db = firebase.firestore();
    vaultState.storage = firebase.storage();
    vaultState.useFirebase = true;
    vaultState.firebaseReady = true;
    updateVaultModeUI();

    vaultState.auth.onAuthStateChanged(async (user) => {
      if (user && !isAllowedEmail(user.email)) {
        showNotification("🔐 ACCESS DENIED", "This account is not one of the two authorized couple accounts.");
        await vaultState.auth.signOut();
        return;
      }
      vaultState.currentUser = user || null;
      updateVaultAuthUI();
      if (user) {
        await loadCloudVault();
      } else {
        vaultState.items = [];
        renderVaultGallery();
      }
    });
  }

  async function initializeLocalVault() {
    vaultState.useFirebase = false;
    const personSelect = el("vaultLocalPerson");
    if (personSelect) personSelect.value = vaultState.localPerson;
    updateVaultModeUI();
    updateVaultAuthUI();
    await loadLocalVault();
  }

  function bindVaultEvents() {
    el("vaultLoginForm")?.addEventListener("submit", async (event) => {
      event.preventDefault();
      await signIn();
    });

    el("vaultCreateAccountBtn")?.addEventListener("click", createAccount);
    el("vaultLogoutBtn")?.addEventListener("click", signOut);
    el("vaultUploadBtn")?.addEventListener("click", handleVaultUpload);
    el("vaultLocalPerson")?.addEventListener("change", (event) => {
      vaultState.localPerson = event.target.value === "Donnah" ? "Donnah" : "Michael";
      localStorage.setItem("coupleLocalPerson", vaultState.localPerson);
      updateVaultAuthUI();
    });
    el("vaultRefreshBtn")?.addEventListener("click", async () => {
      if (vaultState.useFirebase) await loadCloudVault();
      else await loadLocalVault();
      showNotification("↻ MEMORY VAULT", "Your private photo gallery is up to date.");
    });

    el("vaultPhotoFiles")?.addEventListener("change", () => {
      const files = getSelectedFiles();
      setText("vaultPhotoFileLabel", files.length ? `${files.length} photo${files.length === 1 ? "" : "s"} selected` : "Multiple JPG, PNG, WEBP or browser-compatible image files");
    });

    document.querySelectorAll("[data-vault-filter]").forEach((tab) => {
      tab.addEventListener("click", () => setVaultFilter(tab.dataset.vaultFilter || "all"));
    });
  }

  window.addEventListener("beforeunload", clearObjectUrls);

  window.addEventListener("DOMContentLoaded", async () => {
    bindVaultEvents();
    try {
      if (vaultState.mode === "firebase") {
        await initializeFirebaseVault();
      } else {
        await initializeLocalVault();
      }
    } catch (error) {
      vaultState.useFirebase = false;
      updateVaultModeUI();
      updateVaultAuthUI();
      showNotification("🔐 PRIVATE VAULT", "Cloud mode is not ready, so the site is using the safe local photo fallback.");
      await loadLocalVault();
    }
  });
})();
