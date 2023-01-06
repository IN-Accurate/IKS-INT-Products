import "./About.css";
function About() {
  return (
    <div className="about-container" id="about-container">
      <div className="wrap">
        <div className="about-header">ABOUT</div>
        <div className="content-image">
          <div className="about-content">
            <p>
              The IKS Interns Team was born with the introduction of a new
              initiative by IEEE Kerala Section to select a group of resourceful
              interns to its Electronic Communications Coordination team. As a
              result, a team of sixteen interns was formed, headed by Ms. Sarada
              Jayakrishnan, Chair, IEEE Kerala Section, and handled by Mr. Alan
              Mathew, ECC, IEEE Kerala Section.{" "}
            </p>
            <p>
              Divided into three groups - Web Team, Design Team, and Content
              Team - the Interns Team consists of students from the different
              Student Branches of the Section.
            </p>
            <p>
              Conceived from an idea aimed at training and mentoring a selected
              number of students and transforming them into valuable volunteers
              determined to work for the betterment of the Section, the Interns
              Team has considerably grown to handle tasks within a professional
              network. In a span of seven months, the team has been successful
              in completing various projects and Section related activities,
              showcasing enhanced skillset, attained as a result of brilliant
              mentorship and rigorous team management.
            </p>
          </div>
          <div className="img-container">
            <img src="./Media/iks logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
