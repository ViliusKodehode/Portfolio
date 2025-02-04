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
closeButton.className = "closebutton";
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

        const cvmaininfo = document.createElement("div");
        cvmaininfo.className = "cvmaininfo";
        const cvmaininfo1div = document.createElement("div");
        cvmaininfo1div.className = "cvmaininfo1div";
        cvmaininfo1div.textContent = "Picture here"
        const cvmaininfo2div = document.createElement("div");
        cvmaininfo2div.className = "cvmaininfo2div";
        const cvmainheader = document.createElement("h1")
        cvmainheader.className = "cvmainheader";
        cvmainheader.textContent = "Vilius Jurevicius"
        const cvmaintext = document.createElement("pre")
        cvmaintext.className = "cvmaintext"
        cvmaintext.textContent = `Jeg er en kreativ og måørettet person med solid kompetanse innen
        HTML, CSS, JavaScript, React og Pyhton.
        For tiden bygger jeg videre på mine ferdigheter gjennom praktiske prosjekter som fullstack utvikler.
        fullstack utvikler.Jer er rask til å lære nye teknologier, strukturet i arbeidsmetoden,
        og dedikert til å levere  kvalitetsresultater.
        Men en sterk  interesse for problemløsning og effektivitet, 
        trives jeg både i team og med selvstending arbeid. 
        `

        cvmaintext.className = "cvmaintext";
        cvmaininfo.appendChild(cvmaininfo1div);
        cvmaininfo.appendChild(cvmaininfo2div);
        cvmaininfo2div.appendChild(cvmainheader);
        cvmaininfo2div.appendChild(cvmaintext);
        popupBody.appendChild(cvmaininfo);
        
        for (let i = 1; i <= 6; i++) {
            const cvcontent = document.createElement("div");
            cvcontent.classList.add ("cvcontent");
            popupBody.appendChild(cvcontent);

            const uniqueId = `cvcontent${i}`;
            cvcontent.id = uniqueId;
        
        for (let j = 1; j <= 2; j++){
            const cvContentElement = document.createElement("div");
            cvContentElement.classList.add("cvContentElement");
            
            const uniqueId = `cvcontentelement${i}-${j}`;
            cvContentElement.id = uniqueId;
            
            cvcontent.appendChild(cvContentElement);

            if (uniqueId === "cvcontentelement1-1") {
                cvContentElement.textContent = "Utdanning";
            };
            if (uniqueId === "cvcontentelement1-2") {

                const educationh1 = document.createElement("h1");
                const educationtext1 = document.createElement("pre")
                const educationh2 = document.createElement("h1");
                const educationtext2 = document.createElement("pre")
                const educationh3 = document.createElement("h1");
                const educationtext3 = document.createElement("pre")

                educationh1.className = "educationtitle";
                educationh2.className = "educationtitle";
                educationh3.className = "educationtitle";
                educationtext1.className = "educationtext";
                educationtext2.className = "educationtext";
                educationtext3.className = "educationtext";

                educationh1.textContent = "Videregående utdanning Vg2";
                educationtext1.textContent = `
                IKT-servicefag
                Ulstein Vidaregaånde skule
                2018 September – 2019 June   
                `;

                educationh2.textContent = "Videregående utdanning Vg2";
                educationtext2.textContent = `
                Byggteknikk
                Herøy Vidaregaånde skule
                2017 September – 2018 Juli   
                `;

                educationh3.textContent = "Videregående utdanning Vg1";
                educationtext3.textContent = `
                Bygg og anleggsteknikk
                Herøy Vidaregaånde skule
                2016 September – 2017 Juli  
                `;

                cvContentElement.appendChild(educationh1);
                cvContentElement.appendChild(educationtext1);
                cvContentElement.appendChild(educationh2);
                cvContentElement.appendChild(educationtext2);
                cvContentElement.appendChild(educationh3);
                cvContentElement.appendChild(educationtext3);
            };

            if (uniqueId === "cvcontentelement2-1") {
                cvContentElement.textContent = "Arbeiderfaring";
            };
            if (uniqueId === "cvcontentelement2-2") {

                const workh1 = document.createElement("h1");
                const worktext1 = document.createElement("pre")
                const workh2 = document.createElement("h1");
                const worktext2 = document.createElement("pre")
                const workh3 = document.createElement("h1");
                const worktext3 = document.createElement("pre")
                const workh4 = document.createElement("h1");
                const worktext4 = document.createElement("pre")
                const workh5 = document.createElement("h1");
                const worktext5 = document.createElement("pre")

                workh1.className = "worktitle";
                workh2.className = "worktitle";
                workh3.className = "worktitle";
                workh4.className = "worktitle";
                workh5.className = "worktitle";
                worktext1.className = "worktext";
                worktext2.className = "worktext";
                worktext3.className = "worktext";
                worktext4.className = "worktext";
                worktext5.className = "worktext";

                workh1.textContent = "Arbeidpraksis at Ulstein Ulshav";
                worktext1.textContent = `
                En rekke arbeider fra pakking av frukt
                til programmering
                2021-2023   
                `;

                workh2.textContent = "Praksisplass på Furene Volda";
                worktext2.textContent = `
                Som IKT medarbeider
                2020 Mars
                `;

                workh3.textContent = "Praksisplass på Ulstein vidaregaånde skule";
                worktext3.textContent = `
                IKT servicefag Ulstein VGS
                2019 Mars     
                `;

                workh4.textContent = "Praksisplass på Kleven Veft As";
                worktext4.textContent = `
                IKT servicefag Ulstein VGS
                2019 Mars     
                `;

                workh4.textContent = "Snekkar,Slippen Nørevågen";
                worktext4.textContent = `
                I regi av Herøy vidaregånde skule
                2018 April   
                `;


                cvContentElement.appendChild(workh1);
                cvContentElement.appendChild(worktext1);
                cvContentElement.appendChild(workh2);
                cvContentElement.appendChild(worktext2);
                cvContentElement.appendChild(workh3);
                cvContentElement.appendChild(worktext3);
                cvContentElement.appendChild(workh4);
                cvContentElement.appendChild(worktext4);
                cvContentElement.appendChild(workh5);
                cvContentElement.appendChild(worktext5);
            };

            if (uniqueId === "cvcontentelement3-1") {
                cvContentElement.textContent = "Kurs";
            };
            if (uniqueId === "cvcontentelement3-2") {

                const coursesh1 = document.createElement("h1");
                const coursestext1 = document.createElement("pre")
                const coursesh2 = document.createElement("h1");
                const coursestext2 = document.createElement("pre")
                const coursesh3 = document.createElement("h1");
                const coursestext3 = document.createElement("pre")

                coursesh1.className = "coursestitle";
                coursesh2.className = "coursestitle";
                coursesh3.className = "coursestitle";
                coursestext1.className = "coursestext";
                coursestext2.className = "coursestext";
                coursestext3.className = "coursestext";

                coursesh1.textContent = "Kodehode";
                coursestext1.textContent = `
                2024 September - 2025
                Full-Stack utvikler course 
                `;

                coursesh2.textContent = "Python online course";
                coursestext2.textContent = `
                "From zero to hero" Udemy.com  
                `;

                coursesh3.textContent = "Jobbklubb";
                coursestext3.textContent = `
                2019 September
                Et kurs for hjelp til å skrive CV og Soknad.. 
                `;

                cvContentElement.appendChild(coursesh1);
                cvContentElement.appendChild(coursestext1);
                cvContentElement.appendChild(coursesh2);
                cvContentElement.appendChild(coursestext2);
                cvContentElement.appendChild(coursesh3);
                cvContentElement.appendChild(coursestext3);
            };

            if (uniqueId === "cvcontentelement4-1") {
                cvContentElement.textContent = "Tekniske erfaring";
            };

            if (uniqueId === "cvcontentelement4-2") {
                const techtext1 = document.createElement("pre")
                const techtext2 = document.createElement("pre")
                const techtext3 = document.createElement("pre")
                const techtext4 = document.createElement("pre")
                const techtext5 = document.createElement("pre")
                // const techtext6 = document.createElement("pre")
                // const techtext7 = document.createElement("pre")
                // const techtext8 = document.createElement("pre")
                // const techtext9 = document.createElement("pre")

                techtext1.className = "techtext";
                techtext2.className = "techtext";
                techtext3.className = "techtext";
                techtext4.className = "techtext";
                techtext5.className = "techtext";
                // techtext6.className = "techtext";
                // techtext7.className = "techtext";
                // techtext8.className = "techtext";
                // techtext9.className = "techtext";

                techtext1.textContent = "Særs god kunnskap innan video,foto og lydredigering";
                techtext2.textContent = "Jeg veit grunnleggande korleis ein programmerer produksjosnrobotar";
                techtext3.textContent = "God kunnskap om byggning";
                techtext4.textContent = "Lage logo for små bedrifta";
                techtext5.textContent = `God kjennskap til:
Ms Office, Camtasia studio, Inventor, AutoCAD, 
Vegas Movie studio, JavaScript, Unity, HTML,
CSS, React, Figma, GITHUB, Python,
og annen lyd/video/bilderedigeringsprogramvare
`

                cvContentElement.appendChild(techtext1);
                cvContentElement.appendChild(techtext2);
                cvContentElement.appendChild(techtext3);
                cvContentElement.appendChild(techtext4);
                cvContentElement.appendChild(techtext5);
            };

            if (uniqueId === "cvcontentelement5-1") {
                cvContentElement.textContent = "Ferdigheter";

            };
            if (uniqueId === "cvcontentelement4-2") {
                const ferdighetertitle1 = document.createElement("h3");
                ferdighetertitle1.textContent = "Språk:";
                ferdighetertitle1.className = "ferdighetertitle1";
                const ferdighetertext1 = document.createElement("pre");
                ferdighetertext1.className = "ferdighetertext1";
                ferdighetertext1.textContent=`
Norsk
Godt skriftlig og muntlig
Litauisk
Morsmål
Engelsk
Flytende skriftling og muntlig
Russisk
Grunnleggende
`

                const ferdighetertitle2 = document.createElement("h3")
                ferdighetertitle2.textContent= "Interesser:";
                ferdighetertitle2.className = "ferdighetertitle1";
                const ferdighetertext2 = document.createElement("pre");
                ferdighetertext2.className = "ferdighetertext1";
                ferdighetertext2.textContent=`
- Elsker å bruke fritden min på å lage prosjekter i REACT framwork.
- Stor fan av NBA(National Basketball Assocation).
- Likar å spela basketball og volleyball.
- Stor dataspillopplevelse.
- Interessant i ny teknologi.
- Veldig bra i geografi og verdshistorie.
- Godt på mattematikk og økonomi.
- Sjakk.
- Tegning.
- Liker å jobba med visualle program som video, bilde,lydredigering.
`               
 
                cvContentElement.appendChild(ferdighetertitle1);
                cvContentElement.appendChild(ferdighetertext1);
                cvContentElement.appendChild(ferdighetertitle2);
                cvContentElement.appendChild(ferdighetertext2);
            };
            if (uniqueId === "cvcontentelement6-1") {
                cvContentElement.textContent = "Referanser";
            };

        }}};
        if (popup.id === "projects") {
            const headerTitle = popupHeadertitle.querySelector("div");
            headerTitle.textContent = "Projects";
            for (let i = 1; i <= 5; i++) {
                const projectcontent = document.createElement("div");
                const uniqueId = `project${i}`;
                projectcontent.id = uniqueId;
                const projecttitle = document.createElement("h1");
                projecttitle.className = "projecttitle";
                const projectdescription = document.createElement("pre");
                projectdescription.className = "projectdescription";
                const projectlink = document.createElement("a");
                projectlink.className = "projectlink";
                projectcontent.className = "projectcontent";

                projectcontent.appendChild(projecttitle);
                projectcontent.appendChild(projectdescription);
                projectcontent.appendChild(projectlink);
                popupBody.appendChild(projectcontent);

                if (uniqueId === "project1"){
                    projecttitle.textContent = "Project Cafe Website";
                    projectdescription.textContent = `A small project, in this project I made a responsive website for cafe.`;
                    projectlink.href="https://github.com/ViliusKodehode/CaffeProject";
                    projectlink.target= "_blank"
                    projectlink.textContent="Link to GitHub";
                }
                if (uniqueId === "project2"){
                    projecttitle.textContent = "Project JuleKalender";
                    projectdescription.textContent = `A small project, in this project I made a functional Christmas Calendar.`;
                    projectlink.href ="https://github.com/ViliusKodehode/Julekalender";
                    projectlink.target="_blank"
                    projectlink.textContent = "Link to GitHub"
                }
                if (uniqueId === "project3"){
                    projecttitle.textContent = "PROJECT 3";
                    projectdescription.textContent = "Project description";
                    projectlink.textContent = "LINK"
                }
                if (uniqueId === "project4"){
                    projecttitle.textContent = "PROJECT 4"
                    projectdescription.textContent = "Project description";
                    projectlink.textContent = "LINK"
                }
            
        }};
        if (popup.id === "skills") {
            const headerTitle = popupHeadertitle.querySelector("div");
            headerTitle.textContent = "Skills";
            for (let i = 1; i <= 9; i++) {
                const skillcontent = document.createElement("div");
                const uniqueId = `skills${i}`;
                skillcontent.id = uniqueId;
                skillcontent.className = "skillcontent";
                popupBody.appendChild(skillcontent);

                if (uniqueId === "skills1"){
                    const skills1h1 = document.createElement("h1");
                    skills1h1.className = "skills1h1";
                    skills1h1.textContent = "JavaScript";
                    const knowledgebar1 = document.createElement("div");
                    knowledgebar1.className = "knowledgebar1";
                    const knowledgebaritem1 = document.createElement("div");
                    knowledgebaritem1.className = "knowledgebaritem1";
                    const knowledgebaritem2 = document.createElement("div");
                    knowledgebaritem2.className = "knowledgebaritem2";
                    const knowledgebaritem3 = document.createElement("div");
                    knowledgebaritem3.className = "knowledgebaritem3";
                    const knowledgebaritem4 = document.createElement("div");
                    knowledgebaritem4.className = "knowledgebaritem4";
                    const knowledgebaritem5 = document.createElement("div");
                    knowledgebaritem5.className = "knowledgebaritem5";
                    knowledgebar1.appendChild(knowledgebaritem1);
                    knowledgebar1.appendChild(knowledgebaritem2);
                    knowledgebar1.appendChild(knowledgebaritem3);
                    knowledgebar1.appendChild(knowledgebaritem4);
                    knowledgebar1.appendChild(knowledgebaritem5);
                    skillcontent.appendChild(skills1h1);
                    skillcontent.appendChild(knowledgebar1);
                }
                if (uniqueId === "skills2"){
                    const skills2h1 = document.createElement("h1");
                    skills2h1.className = "skills2h1";
                    skills2h1.textContent = "CSS"
                    const knowledgebar2 = document.createElement("div");
                    knowledgebar2.className = "knowledgebar2";
                    const knowledgebar2item1 = document.createElement("div");
                    knowledgebar2item1.className = "knowledgebar2item1";
                    const knowledgebar2item2 = document.createElement("div");
                    knowledgebar2item2.className = "knowledgebar2item2";
                    const knowledgebar2item3 = document.createElement("div");
                    knowledgebar2item3.className = "knowledgebar2item3";
                    const knowledgebar2item4 = document.createElement("div");
                    knowledgebar2item4.className = "knowledgebar2item4";
                    const knowledgebar2item5 = document.createElement("div");
                    knowledgebar2item5.className = "knowledgebar2item5";
                    knowledgebar2.appendChild(knowledgebar2item1);
                    knowledgebar2.appendChild(knowledgebar2item2);
                    knowledgebar2.appendChild(knowledgebar2item3);
                    knowledgebar2.appendChild(knowledgebar2item4);
                    knowledgebar2.appendChild(knowledgebar2item5);
                    skillcontent.appendChild(skills2h1);
                    skillcontent.appendChild(knowledgebar2);
                }
                if (uniqueId === "skills3"){
                    const skills3h1 = document.createElement("h1");
                    skills3h1.className = "skills3h1";
                    skills3h1.textContent = "React";
                    const knowledgebar3 = document.createElement("div");
                    knowledgebar3.className = "knowledgebar3";
                    const knowledgebar3item1 = document.createElement("div");
                    knowledgebar3item1.className = "knowledgebar3item1";
                    const knowledgebar3item2 = document.createElement("div");
                    knowledgebar3item2.className = "knowledgebar3item2";
                    const knowledgebar3item3 = document.createElement("div");
                    knowledgebar3item3.className = "knowledgebar3item3";
                    const knowledgebar3item4 = document.createElement("div");
                    knowledgebar3item4.className = "knowledgebar3item4";
                    const knowledgebar3item5 = document.createElement("div");
                    knowledgebar3item5.className = "knowledgebar3item5";
                    knowledgebar3.appendChild(knowledgebar3item1);
                    knowledgebar3.appendChild(knowledgebar3item2);
                    knowledgebar3.appendChild(knowledgebar3item3);
                    knowledgebar3.appendChild(knowledgebar3item4);
                    knowledgebar3.appendChild(knowledgebar3item5);
                    skillcontent.appendChild(skills3h1);
                    skillcontent.appendChild(knowledgebar3);
                }
                if (uniqueId === "skills4"){
                    const skills4h1 = document.createElement("h1");
                    skills4h1.className = "skills4h1";
                    skills4h1.textContent = "Python";
                    const knowledgebar4 = document.createElement("div");
                    knowledgebar4.className = "knowledgebar4";
                    const knowledgebar4item1 = document.createElement("div");
                    knowledgebar4item1.className = "knowledgebar4item1";
                    const knowledgebar4item2 = document.createElement("div");
                    knowledgebar4item2.className = "knowledgebar4item2";
                    const knowledgebar4item3 = document.createElement("div");
                    knowledgebar4item3.className = "knowledgebar4item3";
                    const knowledgebar4item4 = document.createElement("div");
                    knowledgebar4item4.className = "knowledgebar4item4";
                    const knowledgebar4item5 = document.createElement("div");
                    knowledgebar4item5.className = "knowledgebar4item5";
                    knowledgebar4.appendChild(knowledgebar4item1);
                    knowledgebar4.appendChild(knowledgebar4item2);
                    knowledgebar4.appendChild(knowledgebar4item3);
                    knowledgebar4.appendChild(knowledgebar4item4);
                    knowledgebar4.appendChild(knowledgebar4item5);
                    skillcontent.appendChild(skills4h1);
                    skillcontent.appendChild(knowledgebar4);
                }
                if (uniqueId === "skills5"){
                    const skills5h1 = document.createElement("h1");
                    skills5h1.className = "skills5h1";
                    skills5h1.textContent = "Figma";
                    const knowledgebar5 = document.createElement("div");
                    knowledgebar5.className = "knowledgebar5";
                    const knowledgebar5item1 = document.createElement("div");
                    knowledgebar5item1.className = "knowledgebar5item1";
                    const knowledgebar5item2 = document.createElement("div");
                    knowledgebar5item2.className = "knowledgebar5item2";
                    const knowledgebar5item3 = document.createElement("div");
                    knowledgebar5item3.className = "knowledgebar5item3";
                    const knowledgebar5item4 = document.createElement("div");
                    knowledgebar5item4.className = "knowledgebar5item4";
                    const knowledgebar5item5 = document.createElement("div");
                    knowledgebar5item5.className = "knowledgebar5item5";
                    knowledgebar5.appendChild(knowledgebar5item1);
                    knowledgebar5.appendChild(knowledgebar5item2);
                    knowledgebar5.appendChild(knowledgebar5item3);
                    knowledgebar5.appendChild(knowledgebar5item4);
                    knowledgebar5.appendChild(knowledgebar5item5);
                    skillcontent.appendChild(skills5h1);
                    skillcontent.appendChild(knowledgebar5);
                }
                if (uniqueId === "skills6"){
                    const skills6h1 = document.createElement("h1");
                    skills6h1.className = "skills6h1";
                    skills6h1.textContent = "Video Editing";
                    const knowledgebar6 = document.createElement("div");
                    knowledgebar6.className = "knowledgebar6";
                    const knowledgebar6item1 = document.createElement("div");
                    knowledgebar6item1.className = "knowledgebar6item1";
                    const knowledgebar6item2 = document.createElement("div");
                    knowledgebar6item2.className = "knowledgebar6item2";
                    const knowledgebar6item3 = document.createElement("div");
                    knowledgebar6item3.className = "knowledgebar6item3";
                    const knowledgebar6item4 = document.createElement("div");
                    knowledgebar6item4.className = "knowledgebar6item4";
                    const knowledgebar6item5 = document.createElement("div");
                    knowledgebar6item5.className = "knowledgebar6item5";
                    knowledgebar6.appendChild(knowledgebar6item1);
                    knowledgebar6.appendChild(knowledgebar6item2);
                    knowledgebar6.appendChild(knowledgebar6item3);
                    knowledgebar6.appendChild(knowledgebar6item4);
                    knowledgebar6.appendChild(knowledgebar6item5);
                    skillcontent.appendChild(skills6h1);
                    skillcontent.appendChild(knowledgebar6);
                }
                if (uniqueId === "skills7"){
                    const skills7h1 = document.createElement("h1");
                    skills7h1.className = "skills7h1";
                    skills7h1.textContent = "Photo Editing";
                    const knowledgebar7 = document.createElement("div");
                    knowledgebar7.className = "knowledgebar7";
                    const knowledgebar7item1 = document.createElement("div");
                    knowledgebar7item1.className = "knowledgebar7item1";
                    const knowledgebar7item2 = document.createElement("div");
                    knowledgebar7item2.className = "knowledgebar7item2";
                    const knowledgebar7item3 = document.createElement("div");
                    knowledgebar7item3.className = "knowledgebar7item3";
                    const knowledgebar7item4 = document.createElement("div");
                    knowledgebar7item4.className = "knowledgebar7item4";
                    const knowledgebar7item5 = document.createElement("div");
                    knowledgebar7item5.className = "knowledgebar7item5";
                    knowledgebar7.appendChild(knowledgebar7item1);
                    knowledgebar7.appendChild(knowledgebar7item2);
                    knowledgebar7.appendChild(knowledgebar7item3);
                    knowledgebar7.appendChild(knowledgebar7item4);
                    knowledgebar7.appendChild(knowledgebar7item5);
                    skillcontent.appendChild(skills7h1);
                    skillcontent.appendChild(knowledgebar7);
                }
                if (uniqueId === "skills8"){
                    const skills8h1 = document.createElement("h1");
                    skills8h1.className = "skills8h1";
                    skills8h1.textContent = "HTML";
                    const knowledgebar8 = document.createElement("div");
                    knowledgebar8.className = "knowledgebar8";
                    const knowledgebar8item1 = document.createElement("div");
                    knowledgebar8item1.className = "knowledgebar8item1";
                    const knowledgebar8item2 = document.createElement("div");
                    knowledgebar8item2.className = "knowledgebar8item2";
                    const knowledgebar8item3 = document.createElement("div");
                    knowledgebar8item3.className = "knowledgebar8item3";
                    const knowledgebar8item4 = document.createElement("div");
                    knowledgebar8item4.className = "knowledgebar8item4";
                    const knowledgebar8item5 = document.createElement("div");
                    knowledgebar8item5.className = "knowledgebar8item5";
                    knowledgebar8.appendChild(knowledgebar8item1);
                    knowledgebar8.appendChild(knowledgebar8item2);
                    knowledgebar8.appendChild(knowledgebar8item3);
                    knowledgebar8.appendChild(knowledgebar8item4);
                    knowledgebar8.appendChild(knowledgebar8item5);
                    skillcontent.appendChild(skills8h1);
                    skillcontent.appendChild(knowledgebar8);
                }
                if (uniqueId === "skills9"){
                    const skills9h1 = document.createElement("h1");
                    skills9h1.className = "skills9h1";
                    skills9h1.textContent = "GitHub";
                    const knowledgebar9 = document.createElement("div");
                    knowledgebar9.className = "knowledgebar9";
                    const knowledgebar9item1 = document.createElement("div");
                    knowledgebar9item1.className = "knowledgebar9item1";
                    const knowledgebar9item2 = document.createElement("div");
                    knowledgebar9item2.className = "knowledgebar9item2";
                    const knowledgebar9item3 = document.createElement("div");
                    knowledgebar9item3.className = "knowledgebar9item3";
                    const knowledgebar9item4 = document.createElement("div");
                    knowledgebar9item4.className = "knowledgebar9item4";
                    const knowledgebar9item5 = document.createElement("div");
                    knowledgebar9item5.className = "knowledgebar9item5";
                    knowledgebar9.appendChild(knowledgebar9item1);
                    knowledgebar9.appendChild(knowledgebar9item2);
                    knowledgebar9.appendChild(knowledgebar9item3);
                    knowledgebar9.appendChild(knowledgebar9item4);
                    knowledgebar9.appendChild(knowledgebar9item5);
                    skillcontent.appendChild(skills9h1);
                    skillcontent.appendChild(knowledgebar9);
                }
        }};
        if (popup.id === "contact") {
            const headerTitle = popupHeadertitle.querySelector("div");
            headerTitle.textContent = "Contact";
            for (let i = 1; i <= 3; i++) {
                const contactcontent = document.createElement("div");
                const contactcontenth1 = document.createElement("h1");
                contactcontenth1.className = "contactcontenth1";
                const contactcontentp = document.createElement("p");
                const uniqueId = `contact${i}`;
                contactcontent.id = uniqueId;
                contactcontent.className = "contactcontent";
                contactcontenth1.className = "contactcontenth1";
                contactcontentp.className = "contactscontentp";
                contactcontent.appendChild(contactcontenth1);
                contactcontent.appendChild(contactcontentp);
                popupBody.appendChild(contactcontent);

                if (uniqueId === "contact1"){
                    contactcontenth1.textContent = "Email Address"
                    contactcontentp.textContent = "Vilius0416@gmail.com"
                }
                if (uniqueId === "contact2"){
                    contactcontenth1.textContent = "Telephone Number"
                    contactcontentp.textContent = "+4793955717"
                }        
        }
        const githubdiv = document.createElement("div");
        githubdiv.className = "githubdiv";
        const githublogo = document.createElement("img");
        const githublink = document.createElement("a");
        githublogo.className = "githublogo";
        githublogo.src="Grafficfiles/github.png";
        githublink.href="https://github.com/ViliusKodehode";
        githublink.target="_blank";
        // const contactlastdiv = document.createElement("div");
        // contactlastdiv.className = "contactlastdiv";
        // const discordcontact = document.createElement("div");
        // discordcontact.className = "discordcontact";
        // const linkedincontact = document.createElement("div");
        // linkedincontact.className = "linkedincontact";
        // const discordlogo = document.createElement("img");
        // discordlogo.className = "discordlogo";
        // discordlogo.src = "Grafficfiles/Discord.png";
        // const linkedinlogo = document.createElement("img");
        // linkedinlogo.className= "linkedinlogo";
        // linkedinlogo.src="Grafficfiles/Linkedin.png";
        githublink.appendChild(githublogo)
        githubdiv.appendChild(githublink)
        popupBody.appendChild(githubdiv)
        // linkedincontact.appendChild(linkedinlogo);
        // discordcontact.appendChild(discordlogo);
        // contactlastdiv.appendChild(linkedincontact);
        // contactlastdiv.appendChild(discordcontact);
        // popupBody.appendChild(contactlastdiv); 
    };
        if (popup.id === "api") {
            const headerTitle = popupHeadertitle.querySelector("div");
            headerTitle.textContent = "API for a random joke";
            for (let i = 1; i <= 1; i++) {
                const apicontent = document.createElement("div");
                apicontent.className = "apicontent";
                popupBody.appendChild(apicontent);

            fetch(`https://v2.jokeapi.dev/joke/Programming`)
            .then(response => response.json())
            .then (data => {
                if(data.type === "single") {
                    document.querySelector(`.apicontent`).textContent = data.joke;
                } else if (data.type ===  "twopart") {
                   const setupText = document.createTextNode(data.setup);
                   const lineBreak = document.createElement("br");
                   const deliveryText = document.createTextNode(data.delivery);

                   apicontent.appendChild(setupText);
                   apicontent.appendChild(lineBreak);
                   apicontent.appendChild(deliveryText);

                }
            })
            .catch(err => {
                document.querySelector(`.apicontent`).textContent = "Out of jokes :(";
                console.err("Error with API:", err)
            });  
        }}
});
});

// const cometcontainer = document.createElement("div");
// cometcontainer.className = "cometcontainer";

// const comet = document.createElement("img");
// comet.className = "comet";
// comet.src = "Grafficfiles/comet.png";

// const comettext = document.createElement("h1");
// comettext.textContent = "      Click on planet to see content of it"
// comettext.className = "comettext";

// cometcontainer.appendChild(comettext);
// cometcontainer.appendChild(comet);
// document.body.appendChild(cometcontainer);

// education, experiences,skills,languages,hobbies

// const cvitem1 = document.getElementById("cvcontentelement1-2");
// cvitem1.textContent = "Education";

// const titletext = document.createElement("h1");
// titletext.textContent = "Education";

// cvitem1.appendChild(titletext);