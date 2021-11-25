const resume = {
    "basics": {
        "Name" : 'Umapreethi Santhanakrishnan',
        "Email" : 'umapreethi123.up@gmail.com',
        "degree": 'B.E,EEE',
        "summary": 'A self-taught Front-End Developer skilled in HTML,CSS,JS and WordPress. I am passionate about design and development of website using modern technologies.',
        "location": {
            "address": '11050 Cedar Hills Blvd Apt 242',
            "City": 'Minnetonka',
            "State": 'Minnepolis',
            "code": 55305
        },
    },
    "skills": ["HTML","CSS","JS","React","WordPress"],
    "workExperience": [
        {
          "duration": "2021 Oct - present",
          "Company": "DevLaunchers",
          "position": "Volunteer React Developer",
          "summary": "Creating an Education platform using React. I am working on Front-End development in creating pages for users, learning modules"
        },
        {
            "duration": "2021 Oct - present",
            "Company": "Heart Of The Valley",
            "position": "Volunteer Front-End Engineer",
            "summary": "Developing a mapping platform for arts in bay area.Developing the map using Mapbox GL and using API to get the arts location, description,image and more details to show it to the user.Developing the search functionality to provide the different categories of art for the user to choose"
          },
          {
            "duration": "2020 Sept - Dec",
            "Company": "Udacity Bootcamp",
            "position": "Front-End NanoDegree",
            "summary": "Created a blog website using HTML and CSS. Learned build tools webpack and API. Built aweather Journal App, a web application using NLP and Travel App. I used Git for developing all the projects"
          },
    ],
    "projects": [
        {
            "topic": "Mental Mentor",
            "description": "Built the project for Hackathon.Worked with a team of five members to build a web application which will help to bridge thegap between patients and therapists.Built using HTML, CSS, JS, Node JS, Express JS, MongoDB. I worked in setting up the environment for frontend and backend. I worked on creating a quesstionaire component on frontend and worked on backend to get users data to store in DB."
        },
        {
            "topic": "Travel App",
            "description": "Built a Travel App through which I learned about how to setup Node + Express environment to develop a web application on local server.Using Express I set up server side routes and execute client side handlers for GET and POST requests. I learned how to implement asynchronous javascript with the Fetch APIs and Web APIs. I used Webpack as a build tool and used two development modes which are production and development mode. I learned about loaders and plugins while using webpack."
        },
    ],
    "Volunteer Experince": [
        {
            "duration": "2020 June - present",
            "Company": "WonderSeed Foundation",
            "position": "WordPress Web Developer",
            "summary": "Created a website in WordPress.Implemented SEO,GA and optimizing the website for better user experience."
          },
          {
            "duration": "2020 Dec - 2021 Mar",
            "Company": "Stray Animal Foundation",
            "position": "WordPress Web Developer",
            "summary": "Created a website in WordPress."
          },
          {
            "duration": "2021 Feb - 2021 June",
            "Company": "Code Nation",
            "position": "Teaching Assistant",
            "summary": "Taught HTML,CSS,JS to students"
          },
    ],
    "Education": [
        {
            "duration":"Aug 2010 - Apr 2014",
            "degree": "B.E, EEE",
            "College": "Sri Ramakrishna Institute Of Technology"
        }
    ]
    
          

          
    
}

//for(const )

let basic = resume.basics;
console.log(basic);
console.log(resume);

basics.innerHTML = `
<div>
   <div class="name">
   ${resume.basics.Name}
   </div>
   <div class="name">
   ${resume.basics.Email}
   </div>
   <div class="name">
   ${resume.basics.degree}
   </div>
</div>`;