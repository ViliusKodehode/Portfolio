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
const maintext2 = document.createElement('pre');
maintext2.className = "maintext2"
maintext2.textContent = `
Im an enthusiastic 
web developer with skills 
in HTML, CSS, 
JavaScript and Figma. 
Im currently expanding my 
expertise through a 
full-stack developer course, 
where I have been working 
on creating responsive 
and user-friendly web applications. 
I love solving problems through code
and bringing ideas to life 
with clean and creative designs.
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

////////////////// Popup 

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
    // orbitContainer.classList.remove("paused");
});

const planetElements = document.querySelectorAll(".planet");

planetElements.forEach((planetElements,index) => {
    planetElements.addEventListener("click", () => {
        // orbitContainer.classList.add("paused");
        popup.id = planets[index].name;
        popupBody.id = planets[index].name + "popupbody";
        popup.style.display = "flex";

        while(popupBody.firstChild) {
            popupBody.removeChild(popupBody.firstChild);
        }

        if (popup.id === "cv") {
            const headerTitle = popupHeadertitle.querySelector("div");
            headerTitle.textContent = "CV";
        
        for (let i = 1; i <= 5; i++) {
            const cvcontent = document.createElement("div");
            cvcontent.className = "cvcontent";
            popupBody.appendChild(cvcontent);
        
        for (let j = 1; j <= 2; j++){
            const cvContentElement = document.createElement("div");
            cvContentElement.className = "cvContentElement";
            cvContentElement.id = "cvcontentelement" + j;
            // cvContentElement.textContent = " Content of cv ";
            cvcontent.appendChild(cvContentElement);
        }}};
        if (popup.id === "projects") {
            const headerTitle = popupHeadertitle.querySelector("div");
            headerTitle.textContent = "Projects";
            for (let i = 1; i <= 5; i++) {
                const projectcontent = document.createElement("div");
                projectcontent.className = "projectcontent";
                popupBody.appendChild(projectcontent);
            
        }};
        if (popup.id === "skills") {
            const headerTitle = popupHeadertitle.querySelector("div");
            headerTitle.textContent = "Skills";
            for (let i = 1; i <= 5; i++) {
                const skillcontent = document.createElement("div");
                skillcontent.className = "skillcontent";
                popupBody.appendChild(skillcontent);
            
        }};
        if (popup.id === "contact") {
            const headerTitle = popupHeadertitle.querySelector("div");
            headerTitle.textContent = "Contact";
            for (let i = 1; i <= 1; i++) {
                const contactcontent = document.createElement("div");
                contactcontent.className = "contactcontent";
                popupBody.appendChild(contactcontent);
            
        }};
        if (popup.id === "api") {
            const headerTitle = popupHeadertitle.querySelector("div");
            headerTitle.textContent = "API";
            for (let i = 1; i <= 1; i++) {
                const apicontent = document.createElement("div");
                apicontent.className = "apicontent";
                popupBody.appendChild(apicontent);
            
        }}
});
});
// education, experriences,skills,languages,hobbies

