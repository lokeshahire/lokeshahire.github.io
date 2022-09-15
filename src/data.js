export const globalStyles = {
  "--grad": "linear-gradient(315deg,#48a9fe,#00cdac)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)",
  "--txtcolor": "#272341",
  "--p_color": "#00cdac",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "<LokeshAhire>";

// Main Page
export const main = {
  name: "Lokesh Ahire",
  doamin: "A MERN Stack Web Developer",
  resume:
    "https://drive.google.com/file/d/1ZF6xigCriJsxqW-A9FBmksl9FrZ9be3N/view?usp=sharing",
  pic: "https://github.com/lokeshahire/ImageGit/blob/main/105935374-removebg-preview.png?raw=true",
};

// AboutMe
export const aboutme = {
  imgLink:
    "https://static.wixstatic.com/media/2be1ce_864567900845418ebfd61e297637464d~mv2.gif",
  p1: "Hey, My name is Lokesh Ahire. I have completed my Bachelor of Engineering from K.K.Wagh College of Engineering, Nashik(M.H.).",
  p2: " Currently, I have expertise in C, C++, HTML, CSS, Bootstrap, JavaScript, React, Express, and MongoDB. I also have knowledge of SQL and Bit Manipulation. I would love to be a part of an innovative organization and use my programming skills to help bring creativity and innovation to the organization.",
  p3: " Apart from programming, I enjoy playing sports ⚽, reading books 📚, photography 📸, listening to music 🎵 and riding 🏍️.",
};

// Skills
export const whatido = {
  title: "Full Stack Development",

  details: [
    "Data Structures and Algorithm",
    "FrontEnd Development",
    "Backend Development",
    "Communication Skills",
    "Building responsive website using HTML,CSS,JS,React",
    "Creating backend application in Node, ExpressJS",
    "Building Simple RESTful CRUD APIs",
    "Knowledge of MongoDB Database",
    "Knowledge of various UI libraries",
  ],
  logos: [
    {
      name: "HTML5",
      iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
      id: "1",
    },
    {
      name: "CSS",
      iconifyClassName: "vscode-icons:file-type-css",
      id: "2",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "3",
    },
    {
      name: "ReactJS",
      iconifyClassName: "vscode-icons:file-type-reactjs",
      id: "4",
    },
    {
      name: "Redux",
      iconifyClassName: "logos:redux",
      id: "5",
    },
    {
      name: "NodeJS",
      iconifyClassName: "logos:nodejs",
      id: "6",
    },
    {
      name: "ExpressJS",
      iconifyClassName: "logos:express",
      id: "7",
    },
    {
      name: "MongoDB",
      iconifyClassName: "logos:mongodb",
      id: "8",
    },
    {
      name: "Postman",
      iconifyClassName: "logos:postman-icon",
      id: "9",
    },
    {
      name: "npm",
      iconifyClassName: "logos:npm-icon",
      id: "10",
    },
    {
      name: "GIT",
      iconifyClassName: "logos:git",
      id: "11",
    },
    {
      name: "Bootstrap",
      iconifyClassName: "logos:bootstrap",
      id: "12",
    },
    {
      name: "Material-UI",
      iconifyClassName: "logos:material-ui",
      id: "13",
    },
    {
      name: "MySQL",
      iconifyClassName: "logos:mysql",
      id: "14",
    },
    {
      name: "Netlify",
      iconifyClassName: "vscode-icons:file-type-netlify",
      id: "15",
    },
    {
      name: "VS Code",
      iconifyClassName: "vscode-icons:file-type-vscode",
      id: "16",
    },
  ],
};

// Project Details
export const details = [
  {
    id: 1,
    title: "J.Crew Clone Website",
    desc: `Shop JCrew.com for the Highest Quality Women's and Men's Clothing and see the entire selection of Children's Clothing, Cashmere Sweaters, Women's Dresses .`,
    feature: `Sign-in/Sign-up,
    Landing Page ,
    Menu Section,
    Product Page,
    Cart Section,
    Payment Page,`,
    tech: `Tech Stack: EJS | CSS | JavaScript | ReactJs | Redux | JSON`,
    img: "https://miro.medium.com/max/875/1*ru80flR8vGGCsI9i0MKLKQ.png",
    github: "https://github.com/lokeshahire/toothsome-week-3235",
    link: "lokesh-jcrew-clone.netlify.app/",
  },
  {
    id: 2,
    title: "NetMeds.com Clone",
    desc: `At netmeds.com make a wide range of prescription medicines and other health products conveniently available all across India.`,
    feature: `Sign-in/Sign-up,
   HomePage (Landing page),
   Add to Basket and checkout pages,
  Category Page,
  Product Page,
    Payment gateway integration,`,
    tech: `Tech Stack: HTML | CSS | JavaScript | LocalStorage | API`,
    img: "https://miro.medium.com/max/875/1*uboqNnyPrdAiuT1Jd0GDpA.png",
    link: "https://netmedclone-akash-alok-ashish-lokesh-parv-pooja.netlify.app/",
    github: "https://github.com/lokeshahire/NetMeds-Clone",
  },

  {
    id: 3,
    title: "Clockify Me Clone",
    desc: `Clockify is a time tracker and timesheet app`,
    feature: `Features:
    Sign-in/Sign-up,
    HomePage (Landing page),
    Download Page,
    Tracker Page,
   Report Page,
   Project Page`,
    tech: `Tech Stack: HTML | CSS | JavaScript | API | ES6  |`,
    img: "https://miro.medium.com/max/875/1*OJDJxmmyvEt2wHWhALjFQw.png",
    github: "https://github.com/lokeshahire/abrasive-trade-5771",
    link: "clockify-me-clone.netlify.app/",
  },
  {
    id: 4,
    title: "Todo App",
    desc: `A small Todo app to keep the our Todos`,
    feature: `Add Todos,
      Make Filter,
      Different Status,
      Paginations,`,
    tech: `Tech Stack: React | CSS | React JS | Exprees | JSON .`,
    img: "https://miro.medium.com/max/875/1*5okRkZpCr3qWTrOq_Mapeg.png",
    github: "https://github.com/lokeshahire/Todo-List-with-All-Functionality",
    link: "https://lokesh-todo-all-functionality.netlify.app/",
  },
  {
    id: 5,
    title: "Admission Database",
    desc: `It is help to make Admission Database with the help of simple steps`,
    feature: `Add Students,
    Students Database,
    Admitted,
    Rejected`,
    tech: `Tech Stack: HTML | CSS | JavaScript | ES6.`,
    img: "https://miro.medium.com/max/875/1*-HK33ZnwNYx-QQxv4s0eFg.png",
    link: "https://lokesh-masai-admission.netlify.app/",
    github: "https://github.com/lokeshahire/Masai-Admission-DataBase",
  },
  {
    id: 6,
    title: "EMPLOYEE RECORDS",
    desc: `It's a EMPLOYEE RECORDS App to Records different catergories of Employees,
  Recipe of the day.`,
    feature: `Add Employyes,
   Filter and Sort,
    Check Status,
   Delete Data`,
    tech: `Tech Stack: HTML | CSS | JavaScript`,
    img: "https://miro.medium.com/max/875/1*m-0B4yRN7r6HaUTBCyetjg.png",
    link: "https://lokesh-u2c3-masai-employee-records.netlify.app/",
    github: "https://github.com/lokeshahire/Masai-Employee-Records",
  },
];

// Social Media Links
export const links = [
  "https://www.linkedin.com/in/lokesh-ahire-30a184207/",
  "mailto:iamlokeshahire@gmail.com",
  "https://github.com/lokeshahire",
];
