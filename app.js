const news = [
  {
    id: 1,
    category: "iran",
    source: "ISW",
    title: "Khamenei orders military commanders to prepare retaliation without geographic limits",
    summary: "Supreme Leader Mojtaba Khamenei directed top commanders to expand targeting options if the US or Israel strikes. Mediators continue talks in Doha and Tehran.",
    time: "2h ago",
    url: "https://understandingwar.org/research/middle-east/iran-update-october-31-2026/"
  },
  {
    id: 2,
    category: "iran",
    source: "Reuters",
    title: "Iranian envoys meet Qatari mediators as threat of new US strikes looms after midterms",
    summary: "Talks in Doha focus on paths out of the conflict. US has not yet committed to direct negotiations. Oil tankers continue to face risks in Hormuz.",
    time: "4h ago",
    url: "https://www.reuters.com/world/iran/"
  },
  {
    id: 3,
    category: "iran",
    source: "Times of Israel",
    title: "US warns Gulf allies strikes on Iran could begin November 4",
    summary: "Regional buildup continues. Trump says Iran wants to keep negotiating and Washington has time. Three tankers hit by mines near Hormuz.",
    time: "6h ago",
    url: "https://www.timesofisrael.com/topic/strait-of-hormuz/"
  },
  {
    id: 4,
    category: "markets",
    source: "Reuters",
    title: "Nasdaq faces $2 trillion wipeout in October as AI spending fears deepen",
    summary: "Big Tech earnings intensified scrutiny of whether massive AI investment can generate returns. Tech sector posts largest monthly loss in months.",
    time: "1d ago",
    url: "https://www.reuters.com/markets/us/"
  },
  {
    id: 5,
    category: "markets",
    source: "Business Times",
    title: "Wall Street closes sharply lower as AI cash burn fears spark tech sell-off",
    summary: "Nasdaq down 2.9%. Intel and Amazon results amplified concerns. Chip stocks led the decline with the broader index off more than 15% for the month.",
    time: "1d ago",
    url: "https://www.businesstimes.com.sg/"
  },
  {
    id: 6,
    category: "geopolitics",
    source: "JFeed",
    title: "Trump: Iran wants talks, Washington has time",
    summary: "President says Tehran keeps negotiating. Administration weighs renewed strikes after midterms. Vance opened a channel with Rezaei.",
    time: "5h ago",
    url: "https://www.jfeed.com/"
  },
  {
    id: 7,
    category: "geopolitics",
    source: "India Today",
    title: "Trump insists Iran war will get wrapped up soon, nuclear weapon never",
    summary: "No timeline given. Diplomatic efforts continue via Qatar while military options remain open after the election.",
    time: "1d ago",
    url: "https://www.indiatoday.in/"
  },
  {
    id: 8,
    category: "business",
    source: "Reuters",
    title: "China factory activity shrinks for third time in four months",
    summary: "Soft domestic demand and export weakness continue. Relevant for global supply chains and commodity demand.",
    time: "1d ago",
    url: "https://www.reuters.com/"
  }
];

const briefing = [
  {
    title: "Iran conflict status",
    text: "Diplomatic track remains active through Qatari mediators. Iran says US tone has shifted after Vance letter. Military preparations continue on both sides. Hormuz shipping faces ongoing mine and interdiction risks. Midterms this week may affect next US decision window."
  },
  {
    title: "Markets",
    text: "Tech and AI-related names under pressure. Nasdaq on track for large October loss as investors question returns on heavy capital spending. Oil elevated on Hormuz and regional risk. Broader indices lower."
  },
  {
    title: "Watch points",
    text: "Any US decision post-midterms. Iranian response thresholds. Energy flows through Hormuz. AI capex commentary from remaining earnings."
  }
];

function renderFeed(category = "all") {
  const feed = document.getElementById("feed");
  const filtered = category === "all" ? news : news.filter(n => n.category === category);
  feed.innerHTML = filtered.map(item => `
    <div class="card" onclick="window.open('${item.url}', '_blank')">
      <div class="source">${item.source}</div>
      <h3>${item.title}</h3>
      <div class="summary">${item.summary}</div>
      <div class="meta"><span>${item.time}</span><span>→</span></div>
    </div>
  `).join("");
}

function renderBriefing() {
  const el = document.getElementById("brief-content");
  el.innerHTML = briefing.map(b => `
    <div class="brief-item">
      <h4>${b.title}</h4>
      <p>${b.text}</p>
    </div>
  `).join("");
}

document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderFeed(btn.dataset.cat);
  });
});

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.section).classList.add("active");
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

renderFeed();
renderBriefing();
