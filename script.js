"use strict";

const siteConfig = {
  defaultLanguage: "ko",
  canonicalUrl: "https://your-username.github.io/your-repo-name/"
};

const portfolioData = {
  contact: {
    email: "hello@example.com",
    githubUrl: "https://github.com/your-github-id",
    linkedinUrl: "https://www.linkedin.com/in/your-linkedin-id/"
  },
  projects: {
    ko: [
      {
        title: "팀 협업 대시보드",
        period: "2025.10 - 2025.12",
        summary: "프로젝트 진행 현황을 시각화하고 이슈 우선순위를 관리하는 대시보드를 구축했습니다.",
        tech: ["HTML", "CSS", "JavaScript", "REST API"],
        links: {
          github: "https://github.com/your-github-id/project-dashboard",
          demo: "https://example.com/dashboard-demo"
        }
      },
      {
        title: "이커머스 프런트엔드 개선",
        period: "2025.05 - 2025.08",
        summary: "상품 탐색과 결제 흐름을 단순화하여 전환율 개선에 기여한 리뉴얼 프로젝트입니다.",
        tech: ["JavaScript", "Accessibility", "Performance"],
        links: {
          github: "https://github.com/your-github-id/ecommerce-refresh"
        }
      },
      {
        title: "개인 생산성 웹앱",
        period: "2024.11 - 2025.02",
        summary: "할 일 관리와 루틴 트래킹을 결합한 웹앱으로, 사용자 리텐션 향상을 목표로 개발했습니다.",
        tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        links: {
          github: "https://github.com/your-github-id/productivity-app",
          demo: "https://example.com/productivity-demo"
        }
      }
    ],
    en: [
      {
        title: "Team Collaboration Dashboard",
        period: "Oct 2025 - Dec 2025",
        summary: "Built a dashboard that visualizes project progress and helps teams prioritize issues quickly.",
        tech: ["HTML", "CSS", "JavaScript", "REST API"],
        links: {
          github: "https://github.com/your-github-id/project-dashboard",
          demo: "https://example.com/dashboard-demo"
        }
      },
      {
        title: "E-commerce Frontend Refresh",
        period: "May 2025 - Aug 2025",
        summary: "Led a frontend renewal that simplified product discovery and checkout flow for better conversion.",
        tech: ["JavaScript", "Accessibility", "Performance"],
        links: {
          github: "https://github.com/your-github-id/ecommerce-refresh"
        }
      },
      {
        title: "Personal Productivity Web App",
        period: "Nov 2024 - Feb 2025",
        summary: "Developed a routine + task management app focused on retention through clear daily workflows.",
        tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        links: {
          github: "https://github.com/your-github-id/productivity-app",
          demo: "https://example.com/productivity-demo"
        }
      }
    ]
  }
};

const copy = {
  ko: {
    meta: {
      title: "Your Name | 포트폴리오",
      description: "개발자 포트폴리오 웹사이트입니다. 프로젝트, 기술 스택, 연락처를 확인할 수 있습니다."
    },
    brand: "Your Name",
    skipToContent: "본문으로 건너뛰기",
    menu: {
      open: "메뉴 열기",
      close: "메뉴 닫기"
    },
    language: {
      label: "Language",
      toggleButton: "EN",
      toggleAria: "영어로 전환"
    },
    nav: {
      about: "소개",
      skills: "기술",
      projects: "프로젝트",
      contact: "연락"
    },
    hero: {
      eyebrow: "Problem Solver Developer",
      title: "사용자 경험을 개선하는 웹 개발자",
      subtitle: "기획부터 배포까지, 빠르게 실험하고 안정적으로 전달하는 제품 개발을 지향합니다.",
      ctaProjects: "프로젝트 보기",
      ctaContact: "연락하기",
      profileAlt: "프로필 이미지 자리",
      caption: "현재 프로필 이미지를 준비 중입니다."
    },
    section: {
      about: { kicker: "About", title: "소개" },
      skills: { kicker: "Skills", title: "기술 스택" },
      projects: { kicker: "Projects", title: "프로젝트" },
      contact: { kicker: "Contact", title: "연락하기" }
    },
    about: {
      p1: "복잡한 문제를 작은 단위로 나누고, 빠르게 프로토타입을 만들어 검증하는 과정을 즐깁니다.",
      p2: "프런트엔드와 API 연동 경험을 바탕으로 사용자 중심의 제품을 구현합니다.",
      stats: [
        { label: "주요 경력", value: "3+ Years Building Web" },
        { label: "완료 프로젝트", value: "20+ Project Releases" },
        { label: "협업 방식", value: "Agile, Clear Communication" }
      ]
    },
    skills: {
      intro: "현재 가장 자주 사용하는 도구와 기술입니다.",
      categories: [
        {
          title: "Frontend",
          items: ["Semantic HTML", "Responsive CSS", "Vanilla JavaScript", "Accessibility"]
        },
        {
          title: "Data & API",
          items: ["REST API Integration", "JSON Data Modeling", "Client-side Caching"]
        },
        {
          title: "Quality",
          items: ["Performance Optimization", "Cross-browser Testing", "Debugging Workflow"]
        },
        {
          title: "Collaboration",
          items: ["Git/GitHub", "Issue-driven Development", "Documentation"]
        }
      ]
    },
    projects: {
      intro: "문제 정의부터 배포까지 직접 담당한 프로젝트를 소개합니다.",
      ctaGithub: "GitHub",
      ctaDemo: "Live Demo"
    },
    contact: {
      intro: "협업 제안이나 채용 문의는 아래 채널로 편하게 연락 주세요.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn"
    },
    footer: {
      copy: "© {year} Your Name. All rights reserved."
    }
  },
  en: {
    meta: {
      title: "Your Name | Portfolio",
      description: "Developer portfolio site with selected projects, tech stack, and contact channels."
    },
    brand: "Your Name",
    skipToContent: "Skip to main content",
    menu: {
      open: "Open menu",
      close: "Close menu"
    },
    language: {
      label: "Language",
      toggleButton: "KO",
      toggleAria: "Switch to Korean"
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Problem Solver Developer",
      title: "Web Developer Improving Real User Experience",
      subtitle: "I build products from idea to release, balancing fast iteration with reliable delivery.",
      ctaProjects: "View Projects",
      ctaContact: "Get in Touch",
      profileAlt: "Profile image placeholder",
      caption: "Profile image is being prepared."
    },
    section: {
      about: { kicker: "About", title: "About Me" },
      skills: { kicker: "Skills", title: "Tech Stack" },
      projects: { kicker: "Projects", title: "Projects" },
      contact: { kicker: "Contact", title: "Contact" }
    },
    about: {
      p1: "I enjoy breaking complex problems into clear steps and validating ideas with fast prototypes.",
      p2: "With frontend and API integration experience, I focus on building products around user needs.",
      stats: [
        { label: "Experience", value: "3+ Years Building Web" },
        { label: "Completed Work", value: "20+ Project Releases" },
        { label: "Collaboration", value: "Agile, Clear Communication" }
      ]
    },
    skills: {
      intro: "Tools and technologies I use most often.",
      categories: [
        {
          title: "Frontend",
          items: ["Semantic HTML", "Responsive CSS", "Vanilla JavaScript", "Accessibility"]
        },
        {
          title: "Data & API",
          items: ["REST API Integration", "JSON Data Modeling", "Client-side Caching"]
        },
        {
          title: "Quality",
          items: ["Performance Optimization", "Cross-browser Testing", "Debugging Workflow"]
        },
        {
          title: "Collaboration",
          items: ["Git/GitHub", "Issue-driven Development", "Documentation"]
        }
      ]
    },
    projects: {
      intro: "Selected projects where I handled the full cycle from problem definition to release.",
      ctaGithub: "GitHub",
      ctaDemo: "Live Demo"
    },
    contact: {
      intro: "Feel free to reach out through the channels below for collaboration or hiring.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn"
    },
    footer: {
      copy: "© {year} Your Name. All rights reserved."
    }
  }
};

const state = {
  language: siteConfig.defaultLanguage
};

const elements = {
  menuToggle: document.getElementById("menuToggle"),
  menuToggleLabel: document.getElementById("menuToggleLabel"),
  primaryNav: document.getElementById("primaryNav"),
  languageToggle: document.getElementById("languageToggle"),
  skillsList: document.getElementById("skillsList"),
  projectList: document.getElementById("projectList"),
  contactEmailLink: document.getElementById("contactEmailLink"),
  contactGithubLink: document.getElementById("contactGithubLink"),
  contactLinkedinLink: document.getElementById("contactLinkedinLink"),
  footerCopy: document.getElementById("footerCopy"),
  canonicalLink: document.getElementById("canonicalLink")
};

function getNestedValue(source, path) {
  return path.split(".").reduce((current, key) => {
    if (current && Object.prototype.hasOwnProperty.call(current, key)) {
      return current[key];
    }
    return undefined;
  }, source);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    };
    return map[char];
  });
}

function safeGetLanguage() {
  try {
    const stored = window.localStorage.getItem("portfolioLanguage");
    if (stored && Object.prototype.hasOwnProperty.call(copy, stored)) {
      return stored;
    }
  } catch (error) {
    return siteConfig.defaultLanguage;
  }
  return siteConfig.defaultLanguage;
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem("portfolioLanguage", language);
  } catch (error) {
    return;
  }
}

function setMetaContent(id, value) {
  const tag = document.getElementById(id);
  if (tag && typeof value === "string") {
    tag.setAttribute("content", value);
  }
}

function applyTranslations(language) {
  const languageCopy = copy[language];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = getNestedValue(languageCopy, key);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.getAttribute("data-i18n-alt");
    const value = getNestedValue(languageCopy, key);
    if (typeof value === "string") {
      element.setAttribute("alt", value);
    }
  });

  const footerTemplate = getNestedValue(languageCopy, "footer.copy");
  if (typeof footerTemplate === "string") {
    elements.footerCopy.textContent = footerTemplate.replace("{year}", String(new Date().getFullYear()));
  }
}

function renderSkills(language) {
  const categories = getNestedValue(copy[language], "skills.categories");
  if (!Array.isArray(categories)) {
    elements.skillsList.innerHTML = "";
    return;
  }

  const cards = categories.map((category) => {
    const items = Array.isArray(category.items) ? category.items : [];
    return `
      <article class="skill-card">
        <h3>${escapeHtml(category.title)}</h3>
        <ul>
          ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    `;
  });

  elements.skillsList.innerHTML = cards.join("");
}

function renderProjects(language) {
  const projects = portfolioData.projects[language];
  const githubLabel = getNestedValue(copy[language], "projects.ctaGithub") || "GitHub";
  const demoLabel = getNestedValue(copy[language], "projects.ctaDemo") || "Live Demo";

  if (!Array.isArray(projects) || projects.length === 0) {
    elements.projectList.innerHTML = "";
    return;
  }

  const cards = projects.map((project) => {
    const techList = Array.isArray(project.tech) ? project.tech : [];
    const demoLink = project.links && project.links.demo
      ? `<a class="button-link secondary" href="${escapeHtml(project.links.demo)}" target="_blank" rel="noreferrer noopener">${escapeHtml(demoLabel)}</a>`
      : "";

    return `
      <article class="project-card">
        <div class="project-header">
          <h3>${escapeHtml(project.title)}</h3>
          <span class="project-period">${escapeHtml(project.period)}</span>
        </div>
        <p class="project-summary">${escapeHtml(project.summary)}</p>
        <ul class="tech-list">
          ${techList.map((tech) => `<li>${escapeHtml(tech)}</li>`).join("")}
        </ul>
        <div class="project-actions">
          <a class="button-link primary" href="${escapeHtml(project.links.github)}" target="_blank" rel="noreferrer noopener">${escapeHtml(githubLabel)}</a>
          ${demoLink}
        </div>
      </article>
    `;
  });

  elements.projectList.innerHTML = cards.join("");
}

function readableUrl(url) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function renderContact() {
  const { email, githubUrl, linkedinUrl } = portfolioData.contact;

  elements.contactEmailLink.href = `mailto:${email}`;
  elements.contactEmailLink.textContent = email;

  elements.contactGithubLink.href = githubUrl;
  elements.contactGithubLink.textContent = readableUrl(githubUrl);

  elements.contactLinkedinLink.href = linkedinUrl;
  elements.contactLinkedinLink.textContent = readableUrl(linkedinUrl);
}

function setMenuState(expanded) {
  const languageCopy = copy[state.language];
  const ariaLabel = expanded ? languageCopy.menu.close : languageCopy.menu.open;

  elements.menuToggle.setAttribute("aria-expanded", String(expanded));
  elements.menuToggle.setAttribute("aria-label", ariaLabel);
  elements.menuToggleLabel.textContent = ariaLabel;
  elements.primaryNav.classList.toggle("is-open", expanded);
}

function updateSeo(language) {
  const metadata = copy[language].meta;

  document.title = metadata.title;
  setMetaContent("metaDescription", metadata.description);
  setMetaContent("metaOgTitle", metadata.title);
  setMetaContent("metaOgDescription", metadata.description);
  setMetaContent("metaTwitterTitle", metadata.title);
  setMetaContent("metaTwitterDescription", metadata.description);
  setMetaContent("metaOgUrl", siteConfig.canonicalUrl);

  if (elements.canonicalLink) {
    elements.canonicalLink.setAttribute("href", siteConfig.canonicalUrl);
  }
}

function setLanguage(language) {
  if (!Object.prototype.hasOwnProperty.call(copy, language)) {
    return;
  }

  state.language = language;
  saveLanguage(language);

  document.documentElement.lang = language;
  applyTranslations(language);
  renderSkills(language);
  renderProjects(language);
  renderContact();
  updateSeo(language);

  const toggleText = getNestedValue(copy[language], "language.toggleButton") || "EN";
  const toggleAria = getNestedValue(copy[language], "language.toggleAria") || "Switch language";
  elements.languageToggle.textContent = toggleText;
  elements.languageToggle.setAttribute("aria-label", toggleAria);

  setMenuState(false);
}

function bindEvents() {
  elements.menuToggle.addEventListener("click", () => {
    const isExpanded = elements.menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isExpanded);
  });

  elements.languageToggle.addEventListener("click", () => {
    const nextLanguage = state.language === "ko" ? "en" : "ko";
    setLanguage(nextLanguage);
  });

  document.querySelectorAll("#primaryNav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        setMenuState(false);
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    const isMenuOpen = elements.menuToggle.getAttribute("aria-expanded") === "true";
    if (!isMenuOpen) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const clickedInsideHeader = target.closest(".site-header");
    if (!clickedInsideHeader) {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setMenuState(false);
    }
  });
}

function initialize() {
  const requiredElements = [
    elements.menuToggle,
    elements.menuToggleLabel,
    elements.primaryNav,
    elements.languageToggle,
    elements.skillsList,
    elements.projectList,
    elements.contactEmailLink,
    elements.contactGithubLink,
    elements.contactLinkedinLink,
    elements.footerCopy
  ];

  if (requiredElements.some((element) => !element)) {
    return;
  }

  const preferredLanguage = safeGetLanguage();
  setLanguage(preferredLanguage);
  bindEvents();
}

initialize();
