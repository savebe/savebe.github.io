// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-recipes",
          title: "recipes",
          description: "Recipes I cook for mealprep.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/recipes/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-",
          title: '',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/axi5-orbit-project/";
            },},{id: "projects-pipeguard-robotics",
          title: 'PipeGuard Robotics',
          description: "Autonomous pipe inspection robot with real-time video and sensor feedback",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pipeguard-robotics_more-info/";
            },},{id: "projects-upper-limb-rehabilitation-exoskeleton",
          title: 'Upper-Limb Rehabilitation Exoskeleton',
          description: "Development and FEA optimization of a compact rehabilitation device",
          section: "Projects",handler: () => {
              window.location.href = "/projects/upper-limb-rehabilitation-exoskeleton/";
            },},{id: "recipes-sams-overnightoats",
          title: 'Sams Overnightoats',
          description: "",
          section: "Recipes",handler: () => {
              window.location.href = "/recipes/sams-overnightoats/";
            },},{id: "recipes-marry-me-chicken",
          title: 'Marry Me Chicken',
          description: "",
          section: "Recipes",handler: () => {
              window.location.href = "/recipes/marry-me-chicken/";
            },},{id: "recipes-spinach-zucchini-pasta-with-salmon",
          title: 'Spinach Zucchini Pasta with Salmon',
          description: "",
          section: "Recipes",handler: () => {
              window.location.href = "/recipes/spinach-zucchini-pasta-with-salmon/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/savebe", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/samuel-benz-0b3401354", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%6D%75%65%6C.%62%65%6E%7A@%68%69%73%70%65%65%64.%63%68", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
