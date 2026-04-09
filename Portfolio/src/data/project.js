export const projects = [
  /* ==========================
     KOMPASS AI
     ========================== */
  {
    id: "kompass-ai",

    // Card
    cardTitle: "Kompass AI SEB",
    cardSubtitle: "Enterprise knowledge platform developed with ZHAW",

    // Panel
    panelTitle: "Kompass AI SEB",
    panelSubtitle: "Enterprise-wide knowledge platform for AI-related work",

    panelDetails: [
      "Developed in collaboration with ZHAW",
      "Used organization-wide across SEB",
      "Provides structured guidance for AI processes"
    ],

    images: [
      "/images/projects/Kompass/KompassFirst.png",
      "/images/projects/Kompass/KompassSecond.png",
      "/images/projects/Kompass/KompassThird.png"
    ],

    hasCaseStudy: true,

    // ✅ Case Study
    caseStudy: {
      intro:
        "Kompass AI was developed as a central knowledge platform to support employees in navigating AI-related topics, processes, and responsibilities within the organization.",

      sections: [
        {
          title: "Context",
          text:
            "With increasing interest in AI across departments, there was a need for a shared understanding of guidelines, terminology, and approved use cases. Existing information was scattered across documents and informal channels.",
          image: "/images/projects/Kompass/KompassFirst.png"
        },
        {
          title: "Challenge",
          text:
            "The main challenge was to create a platform that was accessible to non-technical users while still providing enough depth for advanced roles, without overwhelming either group.",
          image: "/images/projects/Kompass/KompassSecond.png"
        },
        {
          title: "Solution",
          text:
            "Kompass AI was structured as a role-based knowledge hub, offering curated content, clear process descriptions, and practical examples to guide users through AI-related work.",
          image: "/images/projects/Kompass/KompassThird.png"
        }
      ],

      outcome:
        "The platform is actively used across the organization and serves as a reliable reference point for AI-related questions, helping teams work more confidently and consistently with AI."
    }
  },

  /* ==========================
     BUDGET PLANNER
     ========================== */
  {
    id: "budget-planner",

    // Card
    cardTitle: "Budget Planner",
    cardSubtitle: "Role-based budgeting and planning system",

    // Panel
    panelTitle: "Enterprise Budget Planner",
    panelSubtitle: "Structured budget planning with role-aware workflows",

    panelDetails: [
      "Role-based budget visibility",
      "Automated budget lifecycle states",
      "Used in an operational business context"
    ],

    images: [
      "/images/projects/Budget/FirstScreen.png",
      "/images/projects/Budget/SecondScreen.png",
      "/images/projects/Budget/ThirdScreen.png"
    ],

    hasCaseStudy: true,

    // ✅ Case Study
    caseStudy: {
      intro:
        "The Budget Planner was designed to replace spreadsheet-based budgeting processes and support structured financial planning across multiple departments and roles.",

      sections: [
        {
          title: "Context",
          text:
            "Budget planning involved multiple stakeholders with different responsibilities. Existing tools provided little transparency, were error-prone, and required significant manual coordination.",
          image: "/images/projects/Budget/FirstScreen.png"
        },
        {
          title: "Challenge",
          text:
            "The key challenge was balancing flexibility for department leads with the need for central control, validation, and clear approval states throughout the budgeting cycle.",
          image: "/images/projects/Budget/SecondScreen.png"
        },
        {
          title: "Solution",
          text:
            "A web-based budgeting system was implemented with clearly defined roles, automated calculations, and state-based workflows to guide users step by step through the planning process.",
          image: "/images/projects/Budget/ThirdScreen.png"
        }
      ],

      outcome:
        "The solution reduced manual effort, improved budget transparency, and provided a consistent framework for financial planning across departments."
    }
  },

  /* ==========================
     TEAMVIEW
     ========================== */
  {
    id: "teamview",

    // Card
    cardTitle: "TeamView",
    cardSubtitle: "Mobile attendance and team overview app",

    // Panel
    panelTitle: "TeamView",
    panelSubtitle: "Mobile-first app for attendance and team transparency",

    panelDetails: [
      "Daily attendance overview",
      "Structured absence submission",
      "Optimized for mobile usage"
    ],

    images: [
      "/images/projects/TV/TVfirst.png",
      "/images/projects/TV/TVsecond.png",
      "/images/projects/TV/TVthird.png"
    ],

    hasCaseStudy: true,

    // ✅ Case Study
    caseStudy: {
      intro:
        "TeamView was developed to give teams a clear and simple overview of daily attendance and absences, optimized for mobile use in everyday operations.",

      sections: [
        {
          title: "Context",
          text:
            "Teams needed a fast way to see who was present, absent, or working remotely without relying on emails or manual tracking methods.",
          image: "/images/projects/TV/TVfirst.png"
        },
        {
          title: "Challenge",
          text:
            "The application had to be intuitive, quick to use, and suitable for mobile devices, while still providing reliable and up-to-date information.",
          image: "/images/projects/TV/TVsecond.png"
        },
        {
          title: "Solution",
          text:
            "TeamView was built as a lightweight mobile-friendly application with a clear daily overview and easy absence submission workflows.",
          image: "/images/projects/TV/TVthird.png"
        }
      ],

      outcome:
        "The app improved transparency within teams and reduced communication overhead by providing a single source of truth for attendance information."
    }
  }
];
