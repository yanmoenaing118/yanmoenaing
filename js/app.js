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
    approaches: [],
  },
  {
    logo: "midas.png",
    projectName: "Midascreatives",
    projectLink: "https://midascreatives.com.mm/",
    projectBrief: `Midas Creatives is a creative agency which is established and founded in Singapore. They help companies grow business and revenue. They deliver strong branding identity through marketing communications across all media.`,
    approaches: [],
  },
  {
    logo: "player.ico",
    projectName: "My Playlist",
    projectLink: "https://myplaylist.vercel.app/",
    projectBrief: `A music player with beautifully animated particle effects. The
      lyric is translated into English.`,
    techBrief: `I created this player using React + Redux. Styled-componets is used for the styling.`,
    approaches: [],
  },

  {
    logo: "venuslab.svg",
    projectName: "Venus Lab Website Clone",
    projectLink: "https://venuslab-clone.vercel.app/",
    projectBrief: `This is the cloned website of https://venuslab.co.<br /> I created this website as part of the interview process when I applied for the job.`,
    techBrief: `NextJS - Styled Components`,
    approaches: [],
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

  return {
    state: {
      activeIndex: 0,
    },
    setState(newState) {
      this.state = { ...newState };
      this.render();
    },
    render() {
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

      projectImg.src =
        "/assets/" +
        projects[this.state.activeIndex].logo;
      projectTitle.textContent = projects[this.state.activeIndex].projectName;
      projectUrl.textContent = projects[this.state.activeIndex].projectLink;
      projectUrl.href = projects[this.state.activeIndex].projectLink;
      projectAbout.textContent = projects[this.state.activeIndex].projectBrief;
    },
  };
}

function setUpCount() {
    const count = document.getElementById("count");
    return {
        current: 1,
        setState(current) {
            this.current = current;
            this.render();
        },
        render() {
            count.textContent = `${this.current} / 5`;
        }
    }
}


/** Setup Elements */
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");


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
  count.setState(activeIndex + 1);
});

nextBtn.addEventListener("click", () => {
  if (activeIndex >= projects.length - 1) {
      activeIndex = 0;
    project.setState({ activeIndex });
  } else {
    activeIndex += 1;
    project.setState({ activeIndex });
  }
  count.setState(activeIndex + 1);

});
