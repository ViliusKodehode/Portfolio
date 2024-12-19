///////////////////////////////  Background body video 

const video = document.createElement("video");
video.className = "backgroundvideo";
video.autoplay = true;
video.loop = true;
video.muted = true;

const source = document.createElement('source');
source.src = "/Grafficfiles/Space.mp4"; 
source.type = "video/mp4";

video.appendChild(source);
document.body.appendChild(video);

//////////////////////////////// Background body video

const maincontainer = document.createElement("div");
maincontainer.className = "maincontainer";
document.body.appendChild(maincontainer);

//////////////////// Main planet

const mainplanet = document.createElement("div");
mainplanet.classList.add("mainplanet");
const maintext1 = document.createElement("h1");
maintext1.className = "maintext1"
maintext1.textContent = "Vilius Jurevicius"
const maintext2 = document.createElement('p');
maintext2.className = "maintext2"
maintext2.textContent = `
Portfolio pitch
text text
text text
text text
`

mainplanet.appendChild(maintext1)
mainplanet.appendChild(maintext2);
maincontainer.appendChild(mainplanet);

//////////////////// Main planet

const orbitContainer = document.createElement("div");
orbitContainer.className = "orbit-container";
maincontainer.appendChild(orbitContainer);

const planets = [
   {name: "cv", text: "CV"},
   {name: "projects", text: "Projects"},
   {name: "skills", text: "Skills"},
   {name: "contact", text: "Contact"},
   {name: "api", text: "API"},
];

planets.forEach((item) => {
    const planet = document.createElement("div");
    planet.classList.add(item.name, "planet");
    planet.textContent = item.text;
    orbitContainer.appendChild(planet);
});

const popup = document.createElement("div");
popup.className = "planetcontent";

const closeButton = document.createElement("button");
closeButton.className = "close-btn";
closeButton.textContent = "x"; 

 const popupmaincontainer = document.createElement("div");
 popupmaincontainer.className = "popupmaincontainer";

const popupHeader = document.createElement("div");
popupHeader.className = "popupheader";

const popupHeadertitle = document.createElement("div");
popupHeadertitle.className = "popupheadertitle";

const popupBody = document.createElement("div");
popupBody.className = "popupbody";

const popupclosearea = document.createElement("div");
popupclosearea.className = "popupclosearea";

const blankarea = document.createElement("div");
blankarea.className = "blankarea";

popupmaincontainer.appendChild(popupclosearea);
popupclosearea.appendChild(blankarea);
popupclosearea.appendChild(closeButton)
popupHeadertitle.appendChild(popupHeader)
popupmaincontainer.appendChild(popupHeadertitle);
popupmaincontainer.appendChild(popupBody);
popup.appendChild(popupmaincontainer);
document.body.appendChild(popup);

closeButton.addEventListener("click",() => {
    popup.style.display = "none";
    orbitContainer.classList.remove("paused");
});

const planetElements = document.querySelectorAll(".planet");

planetElements.forEach((planetElements,index) => {
    planetElements.addEventListener("click", () => {
        orbitContainer.classList.add("paused");
        popup.id = planets[index].name
        popup.style.display = "flex";
    });
});
