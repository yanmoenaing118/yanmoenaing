const $ = (selector) => document.querySelector(selector);
const createEl = (el) => document.createElement(el);

let activeIndex = 0;

const projects = [
  {
    logo: "olive-go.jpg",
    projectName: "Olive Go - Home Improvement",
    projectLink: "https://olivego.com/",
    projectBrief: `Customers will be able to shop from anywhere across the nation for a
      full range of home improvement products with installation, repair, and
      maintenance services that complement every product available on the
      platform.`,
    approaches: [
      {
        label: "NextJS",
        color: "green",
      },
      {
        label: "Styled JSX",
        color: "indigo",
      },
      {
        label: "SWR",
        color: "cyan",
      },
    ],
  },
  {
    logo: "midas.png",
    projectName: "Midascreatives",
    projectLink: "https://midascreatives.com.mm/",
    projectBrief: `Midas Creatives is a creative agency which is established and founded in Singapore. They help companies grow business and revenue. They deliver strong branding identity through marketing communications across all media.`,
    approaches: [
      {
        label: "NextJS",
        color: "green",
      },
      {
        label: "Framer Motion",
        color: "gold",
      },
      {
        label: "Styled JSX",
        color: "cyan",
      },
    ],
  },
  {
    logo: "player.ico",
    projectName: "My Playlist",
    projectLink: "https://myplaylist.vercel.app/",
    projectBrief: `A music player with beautifully animated particle effects. The
      lyric is translated into English.`,
    techBrief: `I created this player using React + Redux. Styled-componets is used for the styling.`,
    approaches: [
      {
        label: "React",
        color: "blue",
      },
      {
        label: "Redux ToolKit",
        color: "purple",
      },
      {
        label: "Styled Components",
        color: "lightgreen",
      },
    ],
  },

  {
    logo: "venuslab.svg",
    projectName: "Venus Lab Website Clone",
    projectLink: "https://venuslab-clone.vercel.app/",
    projectBrief: `This is the cloned website of https://venuslab.co.<br /> I created this website as part of the interview process when I applied for the job.`,
    techBrief: `NextJS - Styled Components`,
    approaches: [
      {
        label: "NextJS",
        color: "green",
      },
      {
        label: "Intersection Observer",
        color: "gold",
      },
      {
        label: "Styled Components",
        color: "lightgreen",
      },
    ],
  },

  {
    logo: "github.png",
    projectName: "Github Account",
    projectLink: "https://github.com/yanmoenaing118",
    projectBrief: `Frontend Mentor Challenges, Website Inspiration and Rest API development.`,
    techBrief: `JavaScript, TypeScript, SCSS, React, Vue, Angular`,
    approaches: [
      {
        label: "React",
        color: "cyan",
      },
      {
        label: "Vue",
        color: "green",
      },
      {
        label: "Angular",
        color: "red",
      },
      {
        label: "Rest API",
        color: "gold",
      },
    ],
  },

  {
    logo: "codepen.svg",
    projectName: "My Pens on CodePen.io",
    projectLink: "https://codepen.io/yanmoenaing118",
    projectBrief: `Beautiful pens I created to learn new things.`,
    techBrief: `CSS, SCSS, Animation, DOM`,
    approaches: [],
  },
];

/** Renderers */

const commonSetupUtils = {
  setState(state) {
    this.state = { ...state };
    if (this.render && typeof this.render === "function") {
      this.render();
    }
  },
};

function setUpProject() {
  const projectsContainer = document.getElementById("projects");
  const projectEl = document.createElement("div");
  const projectImgWrapper = document.createElement("div");
  const projectImg = document.createElement("img");
  const projectTitle = document.createElement("h2");
  const projectUrl = document.createElement("a");
  const projectAbout = document.createElement("p");
  const projectApproaches = document.createElement("div");
  const tags = document.createElement("div");

  projectUrl.setAttribute("target", "_blank");

  let publicAPI = Object.create(commonSetupUtils);
  publicAPI.state = {
    activeIndex: 0,
  };
  publicAPI.render = function () {
    const child = projectsContainer.querySelector("project");
    if (child) {
      projectsContainer.removeChild(child);
    }
    projectImgWrapper.appendChild(projectImg);
    projectEl.appendChild(projectImgWrapper);
    projectEl.appendChild(projectTitle);
    projectEl.appendChild(projectUrl);
    projectEl.appendChild(projectAbout);
    projectApproaches.appendChild(tags);
    projectEl.appendChild(projectApproaches);
    projectsContainer.appendChild(projectEl);

    projectEl.classList.add("project");
    projectImgWrapper.classList.add("project__img");
    projectTitle.classList.add("project__title");
    projectUrl.classList.add("project__url");
    projectAbout.classList.add("project__about");
    projectApproaches.classList.add("project__tech");
    tags.classList.add("tag__list");
    tags.innerHTML = "";

    projects[this.state.activeIndex].approaches.forEach(({ label, color }) => {
      const tagItem = document.createElement("div");
      tagItem.textContent = label;
      tagItem.classList.add("tag__item");
      tagItem.classList.add(`b-color--${color}`);
      tags.appendChild(tagItem);
    });

    projectImg.src = "/assets/" + projects[this.state.activeIndex].logo;
    projectTitle.textContent = projects[this.state.activeIndex].projectName;
    projectUrl.textContent = projects[this.state.activeIndex].projectLink;
    projectUrl.href = projects[this.state.activeIndex].projectLink;
    projectAbout.textContent = projects[this.state.activeIndex].projectBrief;
  };

  return publicAPI;
}

function setUpCount() {
  const count = document.getElementById("count");
  let publicAPI = Object.create(commonSetupUtils);
  publicAPI.state = {
    current: 1,
  };
  publicAPI.render = function () {
    count.textContent = `${this.state.current} / ${projects.length}`;
  };
  return publicAPI;
}

function createTextAnimation() {
  const nameEl = document.querySelector(".intro__title");
  const text = "Yan Moe Naing";
  console.log(text);
  const DELAY = 0.1;
  let totalDelay = DELAY;

  nameEl.innerHTML = "Hi, I'm " + text.split('').map((text,idx) => `<span style='animation-delay:${idx*50}ms'  >${text.trim() ? text:'&nbsp;'}</span>`).join("");

  // for (let i = 0; i < text.length; i++) {
  //   const p = document.createElement("p");
  //   for (let j = 0; j < text[i].length; j++) {
  //     const span = document.createElement("span");
  //     span.textContent = text[i][j];
  //     span.setAttribute("style", `animation-delay:${totalDelay}s;`);
  //     totalDelay += DELAY;
  //     p.appendChild(span);
  //   }

  //   nameEl.appendChild(p);
  // }
  return {
    totalDelay,
  };
}

/** Setup Elements */
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const menuBtn = document.getElementById("hamburger");
const mobileNav = document.querySelector(".mobile");
const mobileNavLinks = mobileNav.querySelectorAll("ul li a");

const desc = document.querySelector(".intro__desc");
const projectsBtn = document.querySelector(".intro__ca a");
const { totalDelay } = createTextAnimation();

setTimeout(() => {
  // we need a better sequence
  desc.classList.add("show");
  setTimeout(() => {
    projectsBtn.classList.add("show");
  }, totalDelay * 500);
}, totalDelay * 1000);

const project = setUpProject();
project.render();
const count = setUpCount();
count.render();

/** Set state and rerender elements */
prevBtn.addEventListener("click", () => {
  if (activeIndex < 0) {
    activeIndex = projects.length - 1;
    project.setState({ activeIndex: activeIndex });
  } else {
    project.setState({ activeIndex });
    activeIndex -= 1;
  }
  count.setState({ current: activeIndex + 1 });
});

nextBtn.addEventListener("click", () => {
  if (activeIndex >= projects.length - 1) {
    activeIndex = 0;
    project.setState({ activeIndex });
  } else {
    activeIndex += 1;
    project.setState({ activeIndex });
  }
  count.setState({ current: activeIndex + 1 });
});
menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
  menuBtn.classList.toggle("active");
});
mobileNavLinks.forEach((el) => {
  el.addEventListener("click", () => {
    mobileNav.classList.remove("show");
    menuBtn.classList.remove("active");
  });
});
