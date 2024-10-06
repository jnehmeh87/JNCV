function showExperience(field) {
  const experienceContent = document.getElementById("experience-content");
  let content = "";

  switch (field) {
    case "filmmaking":
    content = `
            <div style="text-align: right; margin-right: 20px;">
              <button><a href="test.pdf" download style="text-decoration: none; color: inherit;">Download CV</a></button>
            </div>
            <section id="about" class="centered-container2">
              <h2>Executive Summary</h2>
              <p>
                Versatile filmmaker with a proven track record in diverse genres. Experienced in documentary, 
                advertising, music video, short film, and corporate video production. Demonstrated expertise 
                in lighting, camera operation, and post-production editing. Skilled at developing creative 
                concepts within budget constraints. Seeking to leverage my skills to contribute to innovative 
                and impactful projects.
              </p>
            </section>
            <section id="skills" class="centered-container2">
              <h2>Technical Skills</h2>
              <ul>
                <li>Camera Operation: DSLR, mirrorless, film cameras</li>
                <li>Lens Knowledge: Understanding of focal lengths, apertures, and depth of field</li>
                <li>Lighting: Knowledge of three-point lighting, natural light, and artificial lighting techniques</li>
                <li>Audio: Sound recording, microphone selection, and audio editing</li>
                <li>Video Editing: Proficiency in editing software (e.g., DaVinci Resolve, Adobe Premiere Pro, Final Cut Pro)</li>
                <li>Color Grading: Understanding of color theory and color correction techniques</li>
                <li>Screenwriting: Ability to write scripts, storyboards, and treatments</li>
              </ul>
              <h2>Creative Skills</h2>
              <ul>
                <li>Storytelling: Ability to develop engaging narratives and characters</li>
                <li>Visual Composition: Understanding of framing, rule of thirds, and leading lines</li>
                <li>Cinematography: Knowledge of camera angles, movement, and shot selection</li>
                <li>Editing: Ability to pace a story effectively and create a cohesive narrative</li>
                <li>Sound Design: Understanding of sound effects, music, and dialogue mixing</li>
                <li>Collaboration: Ability to work effectively in teams and communicate ideas clearly</li>
              </ul>
              <h2>Additional Skills</h2>
              <ul>
                <li>Production Management: Experience in budgeting, scheduling, and logistics</li>
                <li>Post-Production Supervision: Overseeing the post-production process</li>
                <li>Business Development: Networking and building relationships within the industry</li>
                <li>Marketing and Promotion: Understanding of film festivals, distribution, and online platforms</li>
              </ul>
            </section>
            <div class="experience-item">
              <div class="job-info">
                <strong><h3>Filmmaking Project</h3></strong>
                <div><strong>Film School</strong> | Jan 2022</div>
              </div>
              <ul>
                <li>Directed and produced short films</li>
                <li>Collaborated with a team of filmmakers</li>
                <li>Edited videos using Adobe Premiere Pro</li>
              </ul>
            </div>
        `;
      break;
    case "retail":
      content = `
            <div class="experience-item">
                <div class="job-info">
                    <strong><h3>Retail Management</h3></strong>
                    <div><strong>Retail Store</strong> | Jan 2021</div>
                </div>
                <ul>
                    <li>Managed a team of sales associates</li>
                    <li>Handled customer service and complaints</li>
                    <li>Oversaw inventory and stock management</li>
                </ul>
            </div>
        `;
      break;
    case "software":
      content = `
            <section id="about" class="centered-container2">
                <h2>Executive Summary</h2>
                <p>
                    Dynamic, agile, and adaptable software developer with a strong
                    foundation in full-stack development and a passion for creating
                    innovative solutions. Adept at collaborating in cross-functional teams
                    and eager to apply my coding skills and problem-solving abilities to
                    contribute effectively to software projects.
                </p>
            </section>
            <section id="skills" class="centered-container2">
                <h2>Technical Skills</h2>
                <ul>
                    <li>Programming Languages: HTML, CSS, JavaScript, Python</li>
                    <li>Full-Stack Development: Front-end and Back-end</li>
                    <li>Databases: PostgreSQL, MySQL, MongoDB, AWS</li>
                    <li>Frameworks & Libraries: Django, jQuery, Bootstrap, Flask</li>
                    <li>Version Control: Heroku, GitHub, Git</li>
                    <li>Software Testing and Debugging</li>
                    <li>Web Marketing and SEO</li>
                </ul>
            </section>
            <section id="experience" class="centered-container2">
                <h2>Professional Experience</h2>
                <div class="experience-item">
                    <div class="job-info">
                        <strong><h3>Full Stack Development Project</h3></strong>
                        <div><strong>Code Institute</strong> | Jan 2023</div>
                    </div>
                    <ul>
                        <li>
                            Developed a professional filmmaking website featuring e-commerce
                            capabilities and secure payment processing using Stripe.
                        </li>
                        <li>
                            Optimizing the software development lifecycle through the
                            implementation of Agile methodologies.
                        </li>
                        <li>
                            Deployed project on Heroku and managed the database using AWS.
                        </li>
                        <li>
                            Project
                            <a href="https://ader-films.herokuapp.com" target="_blank" class="project-link"
                            >Ader Films</a
                            >.
                        </li>
                        <img
                            src="assets/images/proj5-mockup.png"
                            alt="Ader Films Project Mock up"
                        />
                    </ul>
                </div>
                <div class="experience-item">
                    <div class="job-info">
                        <strong><h3>Django Development Project</h3></strong>
                        <div><strong>Code Institute</strong> | Sep 2022</div>
                    </div>
                    <ul>
                        <li>
                            Developed a Django app for food recipes with robust CRUD
                            functionality and user experience features.
                        </li>
                        <li>
                            Employed PostgreSQL and Cloudinary for data storage and media
                            management.
                        </li>
                        <li>Deployed the app on Heroku.</li>
                        <li>
                            Project
                            <a href="https://foodupmood.herokuapp.com/" target="_blank" class="project-link"
                            >Food Mood</a
                            >.
                        </li>
                        <img
                            src="assets/images/proj4-mockup.png"
                            alt="Food Mood Project Mock up"
                        />
                    </ul>
                </div>
                <div class="experience-item">
                    <div class="job-info">
                        <strong><h3>Python Development Project</h3></strong>
                        <div><strong>Code Institute</strong> | Jan 2022</div>
                    </div>
                    <ul>
                        <li>
                            Created a 'Quiz' game in Python, deploying it on Heroku for user
                            testing.
                        </li>
                        <li>
                            Demonstrated proficiency in deploying applications on cloud
                            platforms.
                        </li>
                        <li>
                            Project
                            <a href="https://brain-maze.herokuapp.com/" target="_blank" class="project-link"
                            >Brain Maze</a
                            >.
                        </li>
                        <img
                            src="assets/images/proj3-mockup.png"
                            alt="Brain Maze Project Mock up"
                        />
                    </ul>
                </div>
                <div class="experience-item">
                    <div class="job-info">
                        <strong><h3>JavaScript Development Project</h3></strong>
                        <div><strong>Code Institute</strong> | Jul 2022</div>
                    </div>
                    <ul>
                        <li>
                            Designed an interactive flag guessing game using HTML, CSS, and
                            JavaScript, complete with scoring features.
                        </li>
                        <li>Published the game on GitHub.</li>
                        <li>
                            Project
                            <a href="https://jnehmeh87.github.io/Project_Two/" target="_blank" class="project-link"
                            >Guess the Flag</a
                            >.
                        </li>
                        <img
                            src="assets/images/proj2-mockup.png"
                            alt="Guess the Flag Project Mock up"
                        />
                        </ul>
                </div>
                <div class="experience-item">
                    <div class="job-info">
                        <strong><h3>HTML & CSS Development Project</h3></strong>
                        <div><strong>Code Institute</strong> | Sep 2021</div>
                    </div>
                    <ul>
                        <li>
                            Designed a website using HTML and CSS, including a Gallery and a
                            Sign Up page.
                        </li>
                        <li>Published the website on GitHub.</li>
                        <li>
                            Project
                            <a href="https://jnehmeh87.github.io/project_one/" target="_blank" class="project-link"
                            >Street Photography</a
                            >.
                        </li>
                        <img
                            src="assets/images/proj1-mockup.png"
                            alt="Street Photography Project Mock up"
                        />
                    </ul>
                </div>
            </section>
        `;
      break;
  }

  experienceContent.innerHTML = content;
}
