/* ============================================================
   script.js — Vanilla JS for Hackathon Landing Page
   ============================================================ */

// ── DATA ──
const CHALLENGES = [
  { id: "01", title: "Smart Traffic Management", img: "assets/challenges/1.jpg", desc: "Develop an AI-driven solution to dynamically control traffic signals based on live camera feeds and vehicle density." },
  { id: "02", title: "Healthcare Companion", img: "assets/challenges/2.jpg", desc: "Create a web or mobile application that integrates wearable data to provide health insights and medication reminders." },
  { id: "03", title: "Legal Contract Summarizer", img: "assets/challenges/3.jpg", desc: "Build an NLP-based tool to scan long legal contracts and output simplified summaries with key clauses and deadlines." },
  { id: "04", title: "Flood Risk Predictor", img: "assets/challenges/4.jpg", desc: "Design a predictive model using remote sensing data and live hydrology feeds to forecast and alert flood risks in urban zones." },
  { id: "05", title: "Digital Certificate Verifier", img: "assets/challenges/5.jpg", desc: "Create a decentralized platform that allows institutions to issue and verify digital certificates securely." },
  { id: "06", title: "Immersive Campus Tour", img: "assets/challenges/6.jpg", desc: "Design a prototype that enables prospective students to explore university campuses remotely with immersive visuals." },
  { id: "07", title: "Smart Waste Classifier", img: "assets/challenges/7.jpg", desc: "Build a machine-learning system that classifies waste into biodegradable, recyclable, and hazardous categories using a live camera feed." },
  { id: "08", title: "Emergency Communication App", img: "assets/challenges/8.jpg", desc: "Develop a communication app that uses peer-to-peer protocols or SMS fallback to function in areas with limited internet." },
  { id: "09", title: "ISL Gesture Translator", img: "assets/challenges/9.jpg", desc: "Build an AI-driven app that uses computer vision to translate ISL gestures into text and speech in multiple Indian languages." },
  { id: "10", title: "Mental Health Assistant", img: "assets/challenges/10.jpg", desc: "Design a conversational assistant trained to provide mental health first aid and connect users to professionals during crises." },
  { id: "11", title: "Crop Disease Detector", img: "assets/challenges/11.jpg", desc: "Build a pipeline that processes aerial imagery to detect crop disease and recommend corrective actions." },
  { id: "12", title: "Visually Impaired Assistant", img: "assets/challenges/12.jpg", desc: "Create a mobile assistant that helps visually impaired users navigate unfamiliar environments using spatial audio cues." }
];

const TIMELINE = [
  { title: "Registrations and Idea Submission Open", date: "Thu, Jul 04, 2025", active: true },
  { title: "Introductory and Problem Statement Explainer Session", date: "Thu, Jul 08, 2025", active: false },
  { title: "Mentor-Mentee Connects - Begins", date: "Thu, Jul 08, 2025", active: false },
  { title: "Mentor-Mentee Connects - Ends", date: "Tue, Jul 16, 2025", active: false },
  { title: "Final Project Submission", date: "Fri, Jul 25, 2025", active: false },
  { title: "Results Declaration", date: "Wed, Jul 30, 2025", active: false }
];

const FAQS = [
  { id: "01", question: "Who can participate in the hackathon?", answer: "Undergraduate, Graduate/Postgraduate, and PhD students currently enrolled in an Indian institution.", purple: false },
  { id: "02", question: "What should be the ideal team size?", answer: "Each team must consist of 3 to 4 members, possibly from different colleges/universities.", purple: true },
  { id: "03", question: "What is the cost of participating?", answer: "Participation is entirely free. No registration or submission fee is required.", purple: false },
  { id: "04", question: "Can a recent graduate participate?", answer: "Only current students from the 2024-25 academic year are eligible.", purple: true }
];

const ARROW_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10"/><path d="M7 7v10"/><path d="m7 7 10 10"/></svg>';

// ── RENDER CHALLENGES ──
function renderChallenges() {
  const list = document.getElementById("challengesList");
  if (!list) return;
  list.innerHTML = CHALLENGES.map(ch => `
    <li class="challenge-item" data-id="${ch.id}">
      <article>
        <div class="challenge-item__mobile">
          <div class="challenge-item__header">
            <div class="challenge-item__meta">
              <span class="challenge-item__num">[${ch.id}]</span>
              <h3 class="challenge-item__title">${ch.title}</h3>
            </div>
            <span class="challenge-item__arrow">${ARROW_SVG}</span>
          </div>
          <div class="challenge-item__body">
            <div class="challenge-item__img-wrap"><img src="${ch.img}" alt="Challenge ${ch.id}" loading="lazy" /></div>
            <p>${ch.desc}</p>
            <div class="bracket-btn"><div class="cb-tl"></div><div class="cb-tr"></div><div class="cb-bl"></div><div class="cb-br"></div><button>Learn More</button></div>
          </div>
        </div>
        <div class="challenge-item__desktop">
          <div class="challenge-item__num-col"><span>[</span><span class="challenge-item__num-val">${ch.id}</span><span>]</span></div>
          <div class="challenge-item__img-col"><img src="${ch.img}" alt="Challenge ${ch.id}" loading="lazy" /></div>
          <div class="challenge-item__content-col">
            <h3 class="challenge-item__title">${ch.title}</h3>
            <div class="challenge-item__body">
              <p>${ch.desc}</p>
              <div class="bracket-btn"><div class="cb-tl"></div><div class="cb-tr"></div><div class="cb-bl"></div><div class="cb-br"></div><button>Learn More</button></div>
            </div>
          </div>
          <span class="challenge-item__arrow">${ARROW_SVG}</span>
        </div>
      </article>
    </li>
  `).join("");

  // Accordion logic
  let activeId = null;
  list.addEventListener("click", (e) => {
    const item = e.target.closest(".challenge-item");
    if (!item) return;
    const id = item.dataset.id;
    if (activeId === id) {
      item.classList.remove("active");
      activeId = null;
    } else {
      list.querySelectorAll(".challenge-item.active").forEach(el => el.classList.remove("active"));
      item.classList.add("active");
      activeId = id;
    }
  });
}

// ── RENDER TIMELINE ──
function renderTimeline() {
  const mobile = document.getElementById("timelineMobile");
  const desktop = document.getElementById("timelineDesktop");
  if (!mobile || !desktop) return;

  mobile.innerHTML = TIMELINE.map((ev, i) => `
    <li class="tl-mobile__item reveal">
      <div class="tl-dot ${ev.active ? "tl-dot--active" : ""}">${ev.active ? '<div class="tl-dot__inner"></div>' : ""}</div>
      <div class="tl-mobile__content">
        <h3 class="${ev.active ? "tl--active-text" : ""}">${ev.title}</h3>
        <div class="tl-progress"><div class="tl-progress__fill ${ev.active ? "tl-progress__fill--full" : ""}"></div></div>
        <p>${ev.date}</p>
      </div>
    </li>
  `).join("");

  desktop.innerHTML = TIMELINE.map((ev, i) => `
    <li class="tl-desktop__item reveal">
      <h3 class="${ev.active ? "tl--active-text" : ""}">${ev.title}</h3>
      <div class="tl-progress tl-progress--lg"><div class="tl-progress__fill ${ev.active ? "tl-progress__fill--full" : ""}"></div></div>
      <p>${ev.date}</p>
    </li>
  `).join("");
}

// ── RENDER FAQ ──
function renderFAQ() {
  const list = document.getElementById("faqList");
  if (!list) return;
  list.innerHTML = FAQS.map(faq => `
    <li class="faq-item reveal">
      <div class="faq-item__mobile">
        <div class="faq-item__top">
          <div class="faq-badge ${faq.purple ? "faq-badge--purple" : ""}">${faq.id}</div>
          <h3 class="${faq.purple ? "faq-q--purple" : ""}">${faq.question}</h3>
        </div>
        <p class="faq-item__answer">${faq.answer}</p>
      </div>
      <div class="faq-item__desktop">
        <div class="faq-badge ${faq.purple ? "faq-badge--purple" : ""}">${faq.id}</div>
        <div class="faq-item__question"><h3 class="${faq.purple ? "faq-q--purple" : ""}">${faq.question}</h3></div>
        <div class="faq-item__answer-col"><p>${faq.answer}</p></div>
      </div>
    </li>
  `).join("");
}

// ── NAVBAR TOGGLE ──
function initNavbar() {
  const btn = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("mobileMenu");
  const navbar = document.getElementById("navbar");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const open = navbar.classList.toggle("nav-open");
    btn.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("nav-open");
      btn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

// ── TIMELINE DRAG SCROLL ──
function initTimelineDrag() {
  const el = document.getElementById("timelineDesktop");
  if (!el) return;
  let isDragging = false, startX = 0, scrollStart = 0;
  el.addEventListener("mousedown", (e) => { isDragging = true; startX = e.pageX - el.offsetLeft; scrollStart = el.scrollLeft; el.classList.add("grabbing"); });
  el.addEventListener("mouseleave", () => { isDragging = false; el.classList.remove("grabbing"); });
  el.addEventListener("mouseup", () => { isDragging = false; el.classList.remove("grabbing"); });
  el.addEventListener("mousemove", (e) => { if (!isDragging) return; e.preventDefault(); const x = e.pageX - el.offsetLeft; el.scrollLeft = scrollStart - (x - startX) * 2; });
}

// ── SCROLL REVEAL (IntersectionObserver) ──
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal--visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ── SMOOTH SCROLL WITH OFFSET ──
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id === "#" || id === "#register") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
}

// ── INIT ──
document.addEventListener("DOMContentLoaded", () => {
  renderChallenges();
  renderTimeline();
  renderFAQ();
  initNavbar();
  initTimelineDrag();
  initSmoothScroll();
  // Delay reveal init slightly so dynamically-rendered elements are in DOM
  requestAnimationFrame(() => {
    initScrollReveal();
  });
});
