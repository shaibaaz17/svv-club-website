function Home() {
    return (
        <div className="home">
            <section className="hero-section">

                <div className="hero-content">
                    <p className="hero-tagline">RISE • PLAY • SOAR</p>

                    <h1>
                        DREAM BIG.
                        <br />
                        PLAY <span>BIGGER.</span>
                    </h1>

                    <p className="hero-description">
                        Building confidence, friendships and champions
                        through the power of volleyball.
                    </p>

                    <div className="hero-buttons">
                        <a href="#join" className="hero-join-btn">
                            Join the Club
                        </a>

                        <a href="#programs" className="hero-explore-btn">
                            Explore Programs
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/hero-volleyball.jpg.jpg" alt="" />
                </div>
            </section>

            <section className="about-section" id="about">

                <div className="about-content">
                    <p className="section-tagline">WHO WE ARE</p>

                    <h2>
                        More Than A Game.
                        <span> A Community.</span>
                    </h2>

                    <p className="about-description">
                        At SVV Club, we believe volleyball is more than just a sport.
                        It's about building confidence, developing teamwork,
                        creating friendships and inspiring young athletes to dream bigger.
                    </p>

                    <a href="#programs" className="about-btn">
                        Discover Our Club →
                    </a>
                </div>

                <div className="about-stats">
                    <div className="stat-card">
                        <h3>01</h3>
                        <p>Teamwork</p>
                    </div>

                    <div className="stat-card">
                        <h3>02</h3>
                        <p>Confidence</p>
                    </div>

                    <div className="stat-card">
                        <h3>03</h3>
                        <p>Growth</p>
                    </div>
                </div>
            </section>

            <section className="programs-section" id="programs">
                <div className="section-heading">
                    <p className="section-tagline">WHAT WE OFFER</p>
                    <h2>Find Your Way to <span>Shine.</span></h2>
                    <p>Whether you're just starting or ready to compete, there's a place for you.</p>
                </div>

                <div className="program-cards">
                    <div className="program-card">
                        <div className="program-number">01</div>
                        <h3>Club Volleyball</h3>
                        <p>Build your skills, compete as a team and grow as an athlete.</p>
                        <a href="#join">Learn More →</a>
                    </div>

                    <div className="program-card">
                        <div className="program-number">02</div>
                        <h3>Skills Training</h3>
                        <p>Improve your serving, passing, setting and game confidence.</p>
                        <a href="#join">Learn More →</a>
                    </div>

                    <div className="program-card">
                        <div className="program-number">03</div>
                        <h3>Camps & Clinics</h3>
                        <p>Learn, practice and make new friends in an energetic environment.</p>
                        <a href="#join">Learn More →</a>
                    </div>
                </div>
            </section>

            <section className="training-section">
                <div className="training-content">
                    <p className="section-tagline">TRAIN WITH PURPOSE</p>
                    <h2>Stronger Skills. <span>Stronger You.</span></h2>
                    <p>
                        Every practice is an opportunity to learn, improve and become
                        a more confident player. Our training focuses on skills,
                        teamwork and sportsmanship.
                    </p>
                </div>

                <div className="training-highlights">
                    <div className="training-item">
                        <h3>01</h3>
                        <h4>Expert Coaching</h4>
                        <p>Learn with guidance and encouragement.</p>
                    </div>

                    <div className="training-item">
                        <h3>02</h3>
                        <h4>Skill Development</h4>
                        <p>Build strong fundamentals and technique.</p>
                    </div>

                    <div className="training-item">
                        <h3>03</h3>
                        <h4>Teamwork</h4>
                        <p>Grow together on and off the court.</p>
                    </div>
                </div>
            </section>

            <footer className="footer" id="join">
                <div className="footer-content">

                    <div className="footer-brand">
                        <h2>SVV <span>CLUB</span></h2>
                        <p>
                            Rise, play and soar. Building confident athletes
                            through teamwork, passion and volleyball.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <a href="#">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#programs">Programs</a>
                        <a href="#gallery">Gallery</a>
                    </div>

                    <div className="footer-links">
                        <h3>Get In Touch</h3>
                        <a href="mailto:info@svvclub.com">Email Us</a>
                        <a href="#join">Join Our Club</a>
                        <a href="https://svvclub.com/" target="_blank" rel="noreferrer">Official Website</a>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>© 2026 SVV Club. All Rights Reserved.</p>
                    <p>Made with passion for the game.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;