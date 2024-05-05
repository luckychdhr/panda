const febHolidays = [
  "Dear Panda,",
  "First of all, I love you❤️",
  "Thode nakre h, pr fir me kis liye hu😌",
  "Thoda jayda bolti ho but my ears are only open for you",
  "And of course...",
  "You have a Big Brain 😅",
  "Jitna jldi gussa aata h utna he jldi shant",
  "Wese to chilled rehte ho, but becomes hot when near me",
  "You're the prettiest, cutest, funniest,",
  "sweetest girl alive.",
  "In one word, you're just perfect.😍",
  "I'm happy to have you🥰",
  "Bas thoda jayda sochti ho",
  "I'll always do my best to make you feel better",
  "Pr iska mtlb ye nhi ki sara sar he kha jao mera 😅",
  "Wese to 3-4 bottle me nashe nhi hote",
  "Pr ye aapki aankhe to ek palak me nashe me dal deti h",
  "And last, padai likhai kr liya kro, IAS IPS bano 😅",
  "Dont worry about me",
  "I am not going anywhere and not with anyone",
  "Just focus on your goals and dreams",
  "And yes i do get angry sometimes",
  "but you turns my anger into smile as soon as i see your face",
  "Sleep is very important to ache se soya kro😒",
  "This for you,",
  "Je ne suis peut-être pas ton premier amour",
  "Mais je serai le dernier",
  "Baki time time se snap aa jani chaiye",
  "Aur kuch bhi banao wo bhi 😋",
  "Bina ladai solve kiye kbhi nhi sounga",
  "Kbhi bhi itna jldi har nhi manni chaiye",
  "Gopi",
  "♥️♥️"
];
const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();
function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");
    liEl.style.setProperty("--day_idx", idx);
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
      }</time><span>${holiday}</span>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0);
}
function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);
  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");
  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );
  document.body.style.backgroundColor = window.getComputedStyle(
    newActiveEl
  ).backgroundColor;
  newActiveEl.classList.add("active");
}
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":
      adjustDay(1);
      break;
    default:
      return;
  }
});

