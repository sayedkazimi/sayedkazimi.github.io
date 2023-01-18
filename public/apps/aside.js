"use strict";
const asideWrapper = document.getElementById("aside-wrapper");
const mainAside = document.querySelector(".main-aside");
const menu = document.getElementById("menu");
const welcomeParagraph = document.getElementById("welcome-paragraph");
const mainNav = document.querySelector(".main-nav");
const cY = new Date().getFullYear();
/* 
    for displaying and non-displaying the elements
*/
let displaying = false;
function toggleDisplay (getElement)
{
    displaying = !displaying;
    if (displaying)
    {
        getElement.style.display = "flex";
    } else
    {
        getElement.style.display = "none";
    }
}
menu.addEventListener("click", function ()
{
    asideWrapper.style.display = "initial";
});

/* 
    for welcome paragraph
*/
let left = 90, originalText = welcomeParagraph.innerText, newText = "", x = 0;
function moveParagraph ()
{
    left = left - 0.15;
    welcomeParagraph.style.left = `${left}vw`;
    if (welcomeParagraph.offsetLeft < 0)
    {
        if (originalText.length > newText.length)
        {
            newText += originalText[x]; x++;
        }
    }

    if (-welcomeParagraph.offsetLeft >= welcomeParagraph.offsetWidth)
    {
        x = 0; newText = ""; left = 90;
    }
}
setInterval(moveParagraph, 15);

// gen content

function setContent_ ()
{
    const mainFooterEl = document.querySelector(".main-footer");
    if (mainFooterEl)
    {
        mainFooterEl.innerHTML = `
    <section class="container-footer">
    <section>
        <p>MAIN</p>
        <a href="/">HOME</a>
        <a href="/about.html">ABOUT</a>
    </section>
    <section class="github-stuff">
        <p>
            CODING EXPERIENCE
        </p>
        <a href="/projects.html">PROJECTS</a>
        <a href="/public/repositories.html">GITHUB REPOSITORIES</a>
    </section>
    <section>
        <p>
            CONTACTS
        </p>
        <a href="/public/contacts.html">DIRECT MESSAGE</a>
        <a href="https://be.linkedin.com/in/sayed-kazimi-0507/" target="_blank">LINKEDIN</a>
        <a href="https://github.com/Sayed94h" target="_blank">GITHUB</a>
    </section>
    <section>
        <p>MORE...</p>
        <a href="/projects.html">WEB APPS</a>
        <a href="#subscribe">SUBSCRIBE</a>
    </section>

</section>
<p class="copyright">
    &copy; SAYED KHALIL KAZIMI | ${cY}
</p>
    `;
    }

    if (asideWrapper)
    {
        asideWrapper.innerHTML = `
        <aside class="main-aside">
            <section class="aside-contacts">
                <div id="close-menu" onclick="document.getElementById('aside-wrapper').style.display = 'none'">X</div>
                <p>MAIN</p>
                <a href="/">HOME</a>
                <a href="/projects.html">PROJECTS</a>
                <a href="/about.html">ABOUT</a>
            </section>

            <section class="aside-contacts">
                <p>CONTACTS</p>
                <a href="/public/contacts.html">DIRECT MESSAGE</a>
                <a href="https://be.linkedin.com/in/sayed-kazimi-0507/" title="LinkedIn" target="_blank">LINKEDIN</a>
                <a href="https://github.com/Sayed94h" target="_blank">GITHUB</a>
            </section>
            <section class="aside-contacts">
                <p>MORE...</p>
                <a href="/projects.html">WEB APPS</a>
                <a href="#subscribe">SUBSCRIBE</a>
                <a href="/public/repositories.html">GITHUB REPOS</a>
            </section>
        </aside>
        `;
    }

    if (mainNav)
    {
        const pages = [
            {
                name: "Home",
                path: "/"
            },
            {
                name: "Projects",
                path: "/projects.html"
            },
            {
                name: "Contact",
                path: "/public/contacts.html"
            },
            {
                name: "About",
                path: "/about.html"
            }
        ];

        const pageTitle = document.title;

        pages.forEach(p =>
        {
            const aEl = document.createElement("a");

            aEl.href = p.path;
            let ic_ = "home";
            if (p.name === "Projects")
            {
                ic_ = "business";
            }

            if (p.name === "Contact")
            {
                ic_ = "call";
            }

            if (p.name === "About")
            {
                ic_ = "info";
            }

            if (pageTitle.includes(p.name))
            {
                aEl.classList.add("current");
            }

            if (pageTitle.includes("Welcome") && p.name === "Home")
            {
                aEl.classList.add("current");
            }

            aEl.innerHTML = `<span>${p.name.toUpperCase()}</span> <i class="material-icons">${ic_}</i>`;

            mainNav.appendChild(aEl);
        });

        let content_ = `
        <a href="/" class="current"><span>HOME</span> <i class="material-icons">home</i></a>
        <a href="/projects.html"><span>PROJECTS</span> <i class="material-icons">business</i></a>
        <a href="/public/contacts.html"><span>CONTACT</span> <i class="material-icons">call</i></a>
        <a href="/about.html"><span>ABOUT</span> <i class="material-icons">info</i></a>
        `;



    }

}

setContent_();
