function headerCode(targetSection) {
    return `
<header class="navbar hide-in-mobile" id="navbar">
    <a class="logo innerlink" href="index.html#${targetSection}"><img id="logo" src="common-assets/logo.png"></a>
    <nav id="pc-nav-items" class="nav-items text-item-container">
        <ul>
            <li><a class="innerlink${targetSection == "featured" ? " highlighted" : ""}" href="index.html#featured"">Featured</a></li>
            <li><a class="innerlink${targetSection == "works" ? " highlighted" : ""}" href="index.html#works">Works</a></li>
            <li><a class="innerlink${targetSection == "projects" ? " highlighted" : ""}" href="index.html#projects">Projects</a></li>
            <li><a class="innerlink" href="index.html#about">About</a></li>
        </ul>
    </nav>
</header>
<div id="toc"></div>
`;
}
function footerNavbarCode(targetSection) {
    return `
    <div class="navbar-mobile hide-in-pc" id="navbar">
        <a class="logo innerlink" href="index.html#${targetSection}"><img src="common-assets/logowhite.png"></a>
        <nav class="nav-items">
            <ul>
                <li><a class="innerlink${targetSection == "featured" ? " highlighted" : ""}" href="index.html#featured">F</a></li>
                <li><a class="innerlink${targetSection == "works" ? " highlighted" : ""}" href="index.html#works">W</a></li>
                <li><a class="innerlink${targetSection == "projects" ? " highlighted" : ""}" href="index.html#projects">P</a></li>
                <li><a class="innerlink" href="index.html#about">A</a></li>
            </ul>
        </nav>
    </div>
`;
}
const footerCodeW = `
    <section id="works" class="section-container background-black">
        <h1>Works</h1>
        <p class="filter-text">Explore projects by</p>
        <div class="filter-buttons" role="radiogroup">
            <button type="button" class="filter-btn active" data-filter="all" aria-pressed="true">
                All
            </button>

            <button type="button" class="filter-btn" data-filter="ux-design" aria-pressed="false">
                UX Design
            </button>

            <button type="button" class="filter-btn" data-filter="visual-design" aria-pressed="false">
                Visual Design
            </button>

            <button type="button" class="filter-btn" data-filter="social" aria-pressed="false">
                Social Engagement
            </button>
        </div>
        <div class="content-container">
            <a class="innerlink ux-design" href="ourhomedoc.html">
                <div class="content-item">
                    <img src="home-assets/ourhomedoc.png" alt="OurHomeDoc">
                    <div class="hover-content">
                        <h3>OurHomeDoc</h3>
                        <p>Lead Designer at a Healthcare Startup Connecting Home-Visit Doctors with Patients</p>
                    </div>
                </div>
            </a>
            <a class="innerlink visual-design" href="seez-game-design.html">
                <div class="content-item">
                    <img src="home-assets/seez.png" alt="SeeZ Game Design">
                    <div class="hover-content">
                        <h3>SeeZ Game Design</h3>
                        <p>Internship at GoQba Technology</p>
                    </div>
                </div>
            </a>
            <a class="innerlink visual-design" href="seez-leaderboard.html">
                <div class="content-item">
                    <img src="home-assets/seez-leaderboard.png" alt="SeeZ Leaderboard">
                    <div class="hover-content">
                        <h3>SeeZ Leaderboard</h3>
                        <p>Internship at GoQba Technology</p>
                    </div>
                </div>
            </a>
            <a class="innerlink social" href="army-caregiving.html">
                <div class="content-item">
                    <img src="home-assets/army-caregiving.png" alt="Designs for Caregiving">
                    <div class="hover-content">
                        <h3>Designs for Caregiving</h3>
                        <p>Service for ROK/US Army</p>
                    </div>
                </div>
            </a>
            <a class="innerlink social" href="army-cultural.html">
                <div class="content-item">
                    <img src="home-assets/army-cultural.png" alt="Designs for Cultural Exchange">
                    <div class="hover-content">
                        <h3>Designs for Cultural Exchange</h3>
                        <p>Service for ROK/US Army</p>
                    </div>
                </div>
            </a>
            <a class="innerlink ux-design" href="yourwellcup.html">
                <div class="content-item">
                    <img src="home-assets/yourwellcup.png" alt="yourWellCup">
                    <div class="hover-content">
                        <h3>yourWellCup</h3>
                        <p>Provided design advice & suggestions for reusable cup rental service startup</p>
                    </div>
                </div>
            </a>
        </div>
    </section>
    <div class="subpage-mobile-margin hide-in-pc"></div>
`;
const footerCodeR = `
    <section id="featured" class="section-container background-black">
        <h1>Featured</h1>
        <p class="filter-text">Projects more aligned with</p>
        <div class="filter-buttons" role="radiogroup">
            <button type="button" class="filter-btn active" data-filter="all" aria-pressed="true">
                All
            </button>

            <button type="button" class="filter-btn" data-filter="prgrp" aria-pressed="false">
                Personal Robots
            </button>

            <button type="button" class="filter-btn" data-filter="figrp" aria-pressed="false">
                Fluid Interfaces
            </button>

            <button type="button" class="filter-btn" data-filter="fsgrp" aria-pressed="false">
                Future Sketches
            </button>
        </div>

        <div class="content-container">
            <a class="innerlink prgrp figrp fsgrp" href="ttokttok.html">
                <div class="content-item">
                    <img src="home-assets/ttokttok.png" alt="TTOKTTOK">
                    <div class="hover-content">
                        <h3>TTOKTTOK</h3>
                        <p>A personal smart subway guide customized for each user in every step of their subway
                            journey.<br><br><b>Universal Design Contest Second Award</b></p>
                    </div>
                </div>
            </a>
            <a class="innerlink prgrp figrp fsgrp" href="umds.html">
                <div class="content-item">
                    <img src="home-assets/umds.png" alt="UMDS">
                    <div class="hover-content">
                        <h3>UMDS</h3>
                        <p>A universal metro direction sign system that visualizes train destinations as icons and
                            provides auditory landmarks for visually impaired riders.<br><br><b>Universal Design
                                Contest Third Award</b></p>
                    </div>
                </div>
            </a>
            <a class="innerlink prgrp figrp" href="sleeptube.html">
                <div class="content-item">
                    <img src="home-assets/sleeptube.png" alt="SleepTube">
                    <div class="hover-content">
                        <h3>SleepTube</h3>
                        <p>A digital self-control tool to enhance the benefits of watching videos before
                            bedtime.<br><br><b>Proceedings of HCI Korea 2024</b></p>
                    </div>
                </div>
            </a>
            <a class="innerlink prgrp figrp fsgrp" href="udl.html">
                <div class="content-item">
                    <img src="home-assets/udl.png" alt="UDL Course Material Modification System">
                    <div class="hover-content">
                        <h3>UDL Course Material Modification System</h3>
                        <p>Undergraduate Researcher at Georgia Tech CoWell Lab</p>
                    </div>
                </div>
            </a>
            <a class="innerlink fsgrp" href="idea-island.html">
                <div class="content-item">
                    <img src="home-assets/idea-island.png" alt="Idea Island">
                    <div class="hover-content">
                        <h3>Idea Island</h3>
                        <p>Research Internship at SNU HCS Lab</p>
                    </div>
                </div>
            </a>
            <a class="innerlink prgrp" href="ai-ticketing.html">
                <div class="content-item">
                    <img src="home-assets/ai-ticketing.png" alt="VBATH">
                    <div class="hover-content">
                        <h3>AI-Assisted Ticketing for the Elderly</h3>
                        <p>2025 Korea-Nordic Future Challenge Group Project</p>
                    </div>
                </div>
            </a>
        </div>
    </section>
    <div class="subpage-mobile-margin hide-in-pc"></div>
`;
const footerCodeP = `
    <section id="projects" class="section-container background-black">
        <h1>Projects</h1>
        <p class="filter-text">Explore projects by</p>
        <div class="filter-buttons" role="radiogroup">
            <button type="button" class="filter-btn active" data-filter="all" aria-pressed="true">
                All
            </button>

            <button type="button" class="filter-btn" data-filter="ux-design" aria-pressed="false">
                UX Design
            </button>

            <button type="button" class="filter-btn" data-filter="visual-design" aria-pressed="false">
                Visual Design
            </button>

            <button type="button" class="filter-btn" data-filter="social" aria-pressed="false">
                Social Engagement
            </button>
        </div>
        <div class="content-container">
            <a class="innerlink ux-design" href="vbath.html">
                <div class="content-item">
                    <img src="home-assets/vbath.png" alt="VBATH">
                    <div class="hover-content">
                        <h3>VBATH</h3>
                        <p>A fully immersive bath experience</p>
                    </div>
                </div>
            </a>
            <a class="innerlink visual-design" href="gjgt.html">
                <div class="content-item">
                    <img src="home-assets/gjgt.png" alt="Rebranding Gyeongju Gotaek">
                    <div class="hover-content">
                        <h3>Rebranding Gyeongju Gotaek</h3>
                        <p>2023F Identity Design Final Project</p>
                    </div>
                </div>
            </a>
            <a class="innerlink ux-design" href="ramblin-realm.html">
                <div class="content-item">
                    <img src="home-assets/ramblin-realm.png" alt="Ramblin' Realm">
                    <div class="hover-content">
                        <h3>Ramblin’ Realm</h3>
                        <p>2025S Intro to UI Design Group Project</p>
                    </div>
                </div>
            </a>
            <a class="innerlink visual-design" href="metamorphosis.html">
                <div class="content-item">
                    <img src="home-assets/metamorphosis.png" alt="Metamorphosis">
                    <div class="hover-content">
                        <h3>Metamorphosis</h3>
                        <p>2024F 3D Graphic Design Final Project</p>
                    </div>
                </div>
            </a>
            <a class="innerlink social" href="snu-campus-tour.html">
                <div class="content-item">
                    <img src="home-assets/snu-mentoring.png" alt="Campus Tour Materials">
                    <div class="hover-content">
                        <h3>Campus Tour Materials</h3>
                        <p>for the 2024 SNU Mentoring Volunteer Event</p>
                    </div>
                </div>
            </a>
        </div>
    </section>
    <div class="subpage-mobile-margin hide-in-pc"></div>
`;


// Insert formatted header navbar
let header = document.getElementById("header-w");
if (header != null) header.innerHTML = headerCode("works");
else {
    header = document.getElementById("header-r");
    if (header != null) header.innerHTML = headerCode("featured");
    else {
        header = document.getElementById("header-p");
        if (header != null) header.innerHTML = headerCode("projects");
    }
}

// Insert formatted footer navbar
let footerId;
let footer = document.getElementById("footer-w");
if (footer != null) {
    footer.innerHTML = footerCodeW + footerNavbarCode("works");
    footerId = "footer-w";
}
else {
    footer = document.getElementById("footer-r");
    if (footer != null) {
        footer.innerHTML = footerCodeR + footerNavbarCode("featured");
        footerId = "footer-r";
    }
    else {
        footer = document.getElementById("footer-p");
        if (footer != null) {
            footer.innerHTML = footerCodeP + footerNavbarCode("projects");
            footerId = "footer-p";
        }
    }
}

// Insert table of contents
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}
const toc = document.getElementById("toc");


const intersectingSections = new Set();
let sections;
let observer = null;

function observerCallback(entries) {
    const tocLinks = document.querySelectorAll(".toc-item[data-target]");
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            intersectingSections.add(entry.target);
            // console.log(entry.target.id + " IN");
        }
        else {
            intersectingSections.delete(entry.target);
            // console.log(entry.target.id + " OUT");
        }
        // console.log(intersectingSections);
    });
    if (intersectingSections.size === 0) {
        tocLinks.forEach(i => i.classList.remove("active"));
        return;
    }

    const topSection = Array.from(intersectingSections)
        .sort(
            (a, b) =>
                a.getBoundingClientRect().top -
                b.getBoundingClientRect().top
        )[0];

    const id = topSection.id;

    tocLinks.forEach(i => i.classList.remove("active"));
    document.querySelector(`.toc-item[data-target="${id}"]`)?.classList.add("active");
}

function createObserver() {
    const navbarHeight = getNavbarHeight();
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: `-${navbarHeight}px 0px -80% 0px`,
        threshold: 0
    });
    sections.forEach(section => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", function () {
    const sectionHeaders = document.querySelectorAll(".subpage-section h2");
    let list = "";

    const validHeaders = Array.from(sectionHeaders).filter(
        header => !header.classList.contains("section-ignore")
    );
    validHeaders.forEach((header, idx) => {
        const id = "section-" + idx;
        header.parentElement.id = id;

        const emphOption = header.classList.contains("section-emph") ? " emph" : "";
        list += `<a href="#${id}" class="toc-item toc-hidable-item${emphOption}" data-target="${id}">${header.textContent}</a>`;
    });
    if (list) list = `<a class="toc-item" onclick="scrollToTop()">↑</a>` + list + `<a class="toc-item" onclick="scrollToBottom()">↓</a>`;
    toc.innerHTML = list;

    setSlideAnimation(0);

    sections = validHeaders.map(h => h.parentElement);
    createObserver();
});

window.addEventListener("resize", () => {
    createObserver();
});

const footerElement = document.getElementById(footerId);
function updateTOCVisibility() {
    const tocRect = toc.getBoundingClientRect();
    const footerRect = footerElement.getBoundingClientRect();

    if (tocRect.bottom >= footerRect.top) {
        toc.style.opacity = 0;
        toc.style.pointerEvents = "none";
    }
    else {
        toc.style.opacity = 1;
        toc.style.pointerEvents = "auto";
    }
}
window.addEventListener("scroll", updateTOCVisibility);