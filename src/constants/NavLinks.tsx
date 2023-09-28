const NavItems = {
  projects: {
    id: "projects",
    title: "Projects",
  },
  about: {
    id: "about",
    title: "About",
  },
  contact: {
    id: "contact",
    title: "Contact",
  },
  resume: {
    id: "resume",
    title: "Resume",
    url: "",
  },
};

const NavLinks = [
  {
    id: NavItems.projects.id,
    title: NavItems.projects.title,
  },
  {
    id: NavItems.about.id,
    title: NavItems.about.title,
  },
  {
    id: NavItems.contact.id,
    title: NavItems.contact.title,
  },
  {
    id: NavItems.resume.id,
    title: NavItems.resume.title,
  },
];

export { NavItems, NavLinks };
