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
                <div class="education-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #ffd50071; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
                  <h4>Technical Skills</h4>
                  <p><strong>Camera Operation</strong>: DSLR, mirrorless, film cameras</p>
                  <p><strong>Lens Knowledge</strong>: Understanding of focal lengths, apertures, and depth of field</p>
                  <p><strong>Lighting</strong>: Knowledge of three-point lighting, natural light, and artificial lighting techniques</p>
                  <p><strong>Audio</strong>: Sound recording, microphone selection, and audio editing</p>
                  <p><strong>Video Editing</strong>: Proficiency in editing software (e.g., DaVinci Resolve, Adobe Premiere Pro, Final Cut Pro)</p>
                  <p><strong>Color Grading</strong>: Understanding of color theory and color correction techniques</p>
                  <p><strong>Screenwriting</strong>: Ability to write scripts, storyboards, and treatments</p>
                </div>
                <div class="education-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #ffd50071; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
                  <h4>Creative Skills</h4>
                  <p><strong>Storytelling</strong>: Ability to develop engaging narratives and characters</p>
                  <p><strong>Visual Composition</strong>: Understanding of framing, rule of thirds, and leading lines</p>
                  <p><strong>Cinematography</strong>: Knowledge of camera angles, movement, and shot selection</p>
                  <p><strong>Editing</strong>: Ability to pace a story effectively and create a cohesive narrative</p>
                  <p><strong>Sound Design</strong>: Understanding of sound effects, music, and dialogue mixing</p>
                  <p><strong>Collaboration</strong>: Ability to work effectively in teams and communicate ideas clearly</p>
                </div>
                <div class="education-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #ffd50071; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
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
              <div class="experience-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #00ff447d; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 44, 2, 0.1);">
                <h4>OWNER | JAD NEHMEH ENSKILD FIRMA</h4>
                <h5>STOCKHOLM | SINCE APR 2019</h5>
                <p>Spearheaded an independent tourism project, managing all aspects of film production.</p>
                <p>Undertook numerous freelance commissions for organizations including RFSL Ungdom, Mentora, CIS Films, Pop Films, and Beauty Bizz, serving as producer, director, editor, camera operator, and drone operator.</p>
                <p>Maintained and utilized a comprehensive suite of production equipment for various projects.</p>
              </div>
              <div class="experience-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #00ff447d; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 44, 2, 0.1);">
                <h4>POST-PRODUCER | EDITOR</h4>
                <h5>LEBANON, MIDDLE EAST & STOCKHOLM | SINCE 2006</h5>
                <p>Developed advanced proficiency in film editing, transitioning into a skilled post-producer.</p>
                <p>Delivered high-quality post-production for a diverse range of projects, including music video clips, documentaries, advertisements, reality shows, TV programs, and short films.</p>
                <p>Collaborated as a freelancer with esteemed production houses such as Beirut - Studio Vision, Kolja Post-production, Periba Production, Hani Khashfeh Production, Extreme Advertisement (Lebanon); Aflam Production (Riyadh); and Bahar Pars, Wafa Jamil, Shari Sabel Strandmark (Sweden).</p>
              </div>
              <div class="experience-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #00ff447d; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 44, 2, 0.1);">
                <h4>DIRECTOR & PRODUCTION LEADER</h4>
                <h5>MIDDLE EAST & STOCKHOLM | SINCE 2006</h5>
                <p>Directed the music video "If I had the power" in 2022, showcasing creative vision and leadership.</p>
                <p>Served as Assistant Director and Producer for various music video productions.</p>
                <p>Advanced to directing projects in 2012 and subsequently managed production for the "reality show - Ma3 Rabab" in 2014, filmed across Europe and personally post-produced.</p>
              </div>
              <div class="experience-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #00ff447d; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 44, 2, 0.1);">
                <h4>FREELANCER | MY LIFE IS A FILM</h4>
                <h5>VALLINGBY MUNICIPALITY | JAN 2019 - MAY 2019</h5>
                <p>Contributed to a project focused on empowering young individuals to experience filmmaking.</p>
                <p>Provided technical expertise and served as a finalizing editor for four short films.</p>
                <p>Mentored aspiring young directors throughout the project lifecycle.</p>
              </div>
              </div>
            </section>
            <section id="projects" class="centered-container2">
              <h2>Projects</h2>
              <div class="project-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #0004ff86; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); text-align: center;">
                <h4>Min resa med RFSL Ungdom!</h4>
                <h5>RFSL Ungdom 2025 | Stockholm</h5>
                <div class="reel-grid-container">
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DE1rj_lu8YL/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:200px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
                  <div style="padding:16px;">
                    <a href="https://www.instagram.com/reel/DE1rj_lu8YL/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
                      <div style=" display: flex; flex-direction: row; align-items: center;">
                        <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
                        <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
                          <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
                          <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
                        </div>
                      </div>
                      <div style="padding: 19% 0;"></div>
                      <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
                        <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                              <g>
                                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div style="padding-top: 8px;">
                        <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div>
                      </div>
                      <div style="padding: 12.5% 0;"></div>
                      <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">
                        <div>
                          <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div>
                          <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div>
                          <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div>
                        </div>
                        <div style="margin-left: 8px;">
                          <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div>
                          <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div>
                        </div>
                        <div style="margin-left: auto;">
                          <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div>
                          <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div>
                          <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;">
                        <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div>
                        <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div>
                      </div>
                    </a>
                    <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DFHtFWiuwkr/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by RFSL Ungdom (@rfslungdom)</a></p>
                  </div>
                </blockquote>
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DFHtFWiuwkr/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:200px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DFZurJAu_zw/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:200px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DGPsf6EvEOI/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:200px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DGU2ITvPZxM/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:200px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DHTxVrvCrGS/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:200px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DHaXmRJzRzn/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:200px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DJD4FNBCkbU/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:200px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DJHu_vOC8a8/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:200px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DKv3XXzRE3Y/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:200px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DK8vzSqiY9W/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:200px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DLB5Z7OCQkr/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:200px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>
                </div>
              </div>
              <div id="projects-content" style="display: flex; flex-wrap: wrap; justify-content: center;">
              <div class="project-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #0004ff86; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); text-align: center;">
                <h4>If I had the Power</h4>
                <h5>RFSL Ungdom 2023 | Stockholm</h5>
                <a href="https://www.youtube.com/embed/TbKMOsnkXkA" target="_blank" style="display: inline-block;">
                  <iframe width="400" height="225" src="https://www.youtube.com/embed/TbKMOsnkXkA" title="If I had the Power | RFSL Ungdom | Newcomers Youth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="display: block; margin: auto;"></iframe>
                </a>
              </div>
              <div class="project-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #0004ff86; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); text-align: center;">
                <h4>If I had the Power</h4>
                <h5>RFSL Ungdom 2023 | Stockholm</h5>
                <a href="https://www.youtube.com/embed/TbKMOsnkXkA" target="_blank" style="display: inline-block;">
                  <iframe width="400" height="225" src="https://www.youtube.com/embed/TbKMOsnkXkA" title="If I had the Power | RFSL Ungdom | Newcomers Youth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="display: block; margin: auto;"></iframe>
                </a>
              </div>
              <div class="project-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #0004ff86; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); text-align: center;">
                <h4>If I had the Power</h4>
                <h5>RFSL Ungdom 2023 | Stockholm</h5>
                <a href="https://www.youtube.com/embed/TbKMOsnkXkA" target="_blank" style="display: inline-block;">
                  <iframe width="400" height="225" src="https://www.youtube.com/embed/TbKMOsnkXkA" title="If I had the Power | RFSL Ungdom | Newcomers Youth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="display: block; margin: auto;"></iframe>
                </a>
              </div>
              <div class="project-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #0004ff86; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); text-align: center;">
                <h4>If I had the Power</h4>
                <h5>RFSL Ungdom 2023 | Stockholm</h5>
                <a href="https://www.youtube.com/embed/TbKMOsnkXkA" target="_blank" style="display: inline-block;">
                  <iframe width="400" height="225" src="https://www.youtube.com/embed/TbKMOsnkXkA" title="If I had the Power | RFSL Ungdom | Newcomers Youth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="display: block; margin: auto;"></iframe>
                </a>
              </div>
              </div>
            </section>
            <section id="education" class="centered-container2">
              <h2>Education</h2>
              <div id="education-content" style="display: flex; flex-wrap: wrap; justify-content: center;">
              <div class="education-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #9e000077; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
                <h4>Diploma in Full Stack Software Development, E-commerce & Marketing</h4>
                <p>Code Institute</p>
                <p>February 2023 Credit Rated by The University of the West of Scotland</p>
              </div>
              <div class="education-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #9e000077; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
                <h4>Swedish 2 (Sva 2)</h4>
                <p>Komvux Hermods AB, Stockholm, Sweden</p>
                <p>October 2021</p>
              </div>
              <div class="education-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #9e000077; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
                <h4>English 6</h4>
                <p>Komvux Hermods AB, Stockholm, Sweden</p>
                <p>October 2020</p>
              </div>
              <div class="education-item" style="flex: 1 1 300px; margin: 10px; padding: 15px; border: 1px solid #9e000077; border-radius: 8px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);">
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
