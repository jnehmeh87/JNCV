function showExperience(field) {
  const experienceContent = document.getElementById("experience-content");
  let content = "";

  switch (field) {
    case "filmmaking":
    content = `
            <div class="button-container">
                <button id="downloadCVButton">
                    <a href="assets/pdf/Jad-Nehmeh-filmmaking-CV.pdf" download>Download Filmmaking CV</a>
                </button>
            </div>
            <section id="about" class="centered-container2">
              <h2>Executive Summary</h2>
              <p>
                Dynamic and versatile filmmaker with 17 years of extensive experience across all stages of production, 
                from directing and producing to cinematography and post-production. Adept at leading projects, mentoring 
                teams, and leveraging a comprehensive understanding of audiovisual storytelling. Passionate about creating 
                compelling visual content and eager to apply a broad skill set to diverse filmmaking endeavors.
              </p>
            </section>
            <section id="skills" class="centered-container2">
              <h2>Skills</h2>
              <div id="skills-content" style="display: flex; flex-wrap: wrap; justify-content: center;">
                <div class="education-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
                  <h4>Technical Skills</h4>
                  <p><strong>Camera Operation</strong>: DSLR, mirrorless, film cameras</p>
                  <p><strong>Lens Knowledge</strong>: Understanding of focal lengths, apertures, and depth of field</p>
                  <p><strong>Lighting</strong>: Knowledge of three-point lighting, natural light, and artificial lighting techniques</p>
                  <p><strong>Audio</strong>: Sound recording, microphone selection, and audio editing</p>
                  <p><strong>Video Editing</strong>: Proficiency in editing software (e.g., DaVinci Resolve, Adobe Premiere Pro, Final Cut Pro)</p>
                  <p><strong>Color Grading</strong>: Understanding of color theory and color correction techniques</p>
                  <p><strong>Screenwriting</strong>: Ability to write scripts, storyboards, and treatments</p>
                </div>
                <div class="education-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
                  <h4>Creative Skills</h4>
                  <p><strong>Storytelling</strong>: Ability to develop engaging narratives and characters</p>
                  <p><strong>Visual Composition</strong>: Understanding of framing, rule of thirds, and leading lines</p>
                  <p><strong>Cinematography</strong>: Knowledge of camera angles, movement, and shot selection</p>
                  <p><strong>Editing</strong>: Ability to pace a story effectively and create a cohesive narrative</p>
                  <p><strong>Sound Design</strong>: Understanding of sound effects, music, and dialogue mixing</p>
                  <p><strong>Collaboration</strong>: Ability to work effectively in teams and communicate ideas clearly</p>
                </div>
                <div class="education-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
                  <h4>Additional Skills</h4>
                  <p><strong>Production Management</strong>: Experience in budgeting, scheduling, and logistics</p>
                  <p><strong>Post-Production Supervision</strong>: Overseeing the post-production process</p>
                  <p><strong>Business Development</strong>: Networking and building relationships within the industry</p>
                  <p><strong>Marketing and Promotion</strong>: Understanding of film festivals, distribution, and online platforms</p>
                </div>
              </div>
            </section>
            <section id="experience" class="centered-container2">
              <h2>Work Experiences</h2>
              <div id="experiences-content" style="display: flex; flex-wrap: wrap; justify-content: center;">
              <div class="experience-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 44, 2, 0.1);">
                <h4>OWNER | JAD NEHMEH ENSKILD FIRMA</h4>
                <h5>STOCKHOLM | SINCE APR 2019</h5>
                <p>Spearheaded an independent tourism project, managing all aspects of film production.</p>
                <p>Undertook numerous freelance commissions for organizations including RFSL Ungdom, Mentora, CIS Films, Pop Films, and Beauty Bizz, serving as producer, director, editor, camera operator, and drone operator.</p>
                <p>Maintained and utilized a comprehensive suite of production equipment for various projects.</p>
              </div>
              <div class="experience-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 44, 2, 0.1);">
                <h4>POST-PRODUCER | EDITOR</h4>
                <h5>LEBANON, MIDDLE EAST & STOCKHOLM | SINCE 2006</h5>
                <p>Developed advanced proficiency in film editing, transitioning into a skilled post-producer.</p>
                <p>Delivered high-quality post-production for a diverse range of projects, including music video clips, documentaries, advertisements, reality shows, TV programs, and short films.</p>
                <p>Collaborated as a freelancer with esteemed production houses such as Beirut - Studio Vision, Kolja Post-production, Periba Production, Hani Khashfeh Production, Extreme Advertisement (Lebanon); Aflam Production (Riyadh); and Bahar Pars, Wafa Jamil, Shari Sabel Strandmark (Sweden).</p>
              </div>
              <div class="experience-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 44, 2, 0.1);">
                <h4>DIRECTOR & PRODUCTION LEADER</h4>
                <h5>MIDDLE EAST & STOCKHOLM | SINCE 2006</h5>
                <p>Directed the music video "If I had the power" in 2022, showcasing creative vision and leadership.</p>
                <p>Served as Assistant Director and Producer for various music video productions.</p>
                <p>Advanced to directing projects in 2012 and subsequently managed production for the "reality show - Ma3 Rabab" in 2014, filmed across Europe and personally post-produced.</p>
              </div>
              <div class="experience-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 44, 2, 0.1);">
                <h4>FREELANCER | MY LIFE IS A FILM</h4>
                <h5>VALLINGBY MUNICIPALITY | JAN 2019 - MAY 2019</h5>
                <p>Contributed to a project focused on empowering young individuals to experience filmmaking.</p>
                <p>Provided technical expertise and served as a finalizing editor for four short films.</p>
                <p>Mentored aspiring young directors throughout the project lifecycle.</p>
              </div>
              </div>
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
            <section id="education" class="centered-container2">
              <h2>Education</h2>
              <div id="education-content" style="display: flex; flex-wrap: wrap; justify-content: center;">
              <div class="education-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
                <h4>Diploma in Full Stack Software Development, E-commerce & Marketing</h4>
                <p>Code Institute</p>
                <p>February 2023 Credit Rated by The University of the West of Scotland</p>
              </div>
              <div class="education-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
                <h4>Swedish 2 (Sva 2)</h4>
                <p>Komvux Hermods AB, Stockholm, Sweden</p>
                <p>October 2021</p>
              </div>
              <div class="education-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
                <h4>English 6</h4>
                <p>Komvux Hermods AB, Stockholm, Sweden</p>
                <p>October 2020</p>
              </div>
              <div class="education-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
                <h4>Audiovisual Cinematography</h4>
                <p>AKU, Lebanon</p>
                <p>June 2009</p>
              </div>
              </div>
            </section>
        `;
      break;
    case "retail":
      content = `
            <div class="button-container">
                <button id="downloadCVButton">
                    <a href="assets/pdf/Jad-Nehmeh-retail-CV.pdf" download>Download Retail CV</a>
                </button>
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
    case "software":
      content = `
            <div class="button-container">
                <button id="downloadCVButton">
                    <a href="assets/pdf/Jad-Nehmeh-software-development-CV.pdf" download>Download Software Development CV</a>
                </button>
            </div>
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
                        <strong><h2>Full Stack Development Project</h2></strong>
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
                        <strong><h2>Django Development Project</h2></strong>
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
                        <strong><h2>Python Development Project</h2></strong>
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
                        <strong><h2>JavaScript Development Project</h2></strong>
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
                        <strong><h2>HTML & CSS Development Project</h2></strong>
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
