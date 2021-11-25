import { Container, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';

import './Profile.css';

let summaryText = ["Detail oriented and reliable full-stack software developer with a bachelor's degree in Software Engineering, and 10 years of experience developing applications for web-based products.",
                   "Analytical software developer skilled at coding in Java, Python, ReactJS, NodeJS and other web languages.",
                   "Excellent time-management, multi-tasking, and prioritizing skills, able to handle complex projects, and meet tight deadlines.",
                   "Proven interpersonal, active listening, analysing and problem-solving skills; able to support clients efficiently and directly offering solid comprehension of cultural diversity.",
                   "Excellent written and verbal communication skills in English and Chinese.",
                   "Adaptable and hard worker able to work efficiently as part of a team or individually; ready to learn quickly and contribute to team success."
];

let skillsText = ["Programming development support",
                  "Troubleshooting and modifications",
                  "Software testing",
                  "Object oriented languages",
                  "Agile development frameworks",
                  "Expertise in Java 8+ (Spring framework, maven, multithread, microservice), Node.JS, Python, PHP",
                  "Expertise in JavaScript, ReactJS, VueJs, AngularJS, Html5, CSS3",
                  "Expertise in MySQL, Oracle PL/SQL, MongoDB, JDBC",
                  "Expertise in AWS, Azure, Google API",
                  "Expertise in CI/CD, Jira",
                  "Expertise in JSON, XML"
];

let experience= [{"name":"Digitcube.com @Hong Kong", 
                  "duty": ["Troubleshot and resolved problems with programs and systems.",
                            "Completed quality assurance reviews to assess accuracy of data and validate results.",
                            "Performed in-depth analysis to help solve diverse problems with program implementation and operations.",
                            "Utilized knowledge of data modeling and statistical analysis to note trends and draw conclusions.",
                            "Defined application problems by consulting with clients to evaluate procedures and processes.",
                            "Expanded systems with new features and structural components.",
                            "Assessed program risks by reviewing plans and analyzing available data.",
                            "Performed cost-benefit analysis on potential system upgrades to support purchase decisions.",
                            "Formulated and designed computer systems using data modeling, information engineering and structured analysis.",
                            "Codified system infrastructural details and operating procedures to strengthen controls and maintain performance."], 
                  "techStack": "Java 8+, JavaScript (node.js, ReactJS, jQuery, Bootstrap), html5, CSS, spring-maven, Restful API, oracle DB, MySQL, mongo DB, Python"},
                 {"name":"HP Enterprise @Hong Kong", 
                  "duty": ["Provide technical solutions to a wide range of system problems.",
                            "Analyze and evaluate user requirements by coordinating with the user to define problems, system availability, report requirement and system design problem.",
                            "Responsible to carry out the on-going support duty on system platforms, perform system change and re- configuration on support system software.",
                            "Monitor the system healthiness and carry out performance tuning, setup corresponding environments such as SIT, UAT and PRD.",
                            "Provide technical and consultative advice to users, handle user enquires both local and overseas, as well as technical support.",
                            "Coordinate with vendors and maintain systems."], 
                  "techStack": "Java 8, JavaScript (jQuery, Bootstrap), html5, CSS, Struts, oracle DB"},
                 {"name":"AIA - Technology shared service @Guangzhou, China", 
                  "duty": ["Develop, test and support applications for handling a large amount of data calculation and generate reports.",
                            "Provide ad-hoc support to ensure system running normally 7/24 by cooperating with relevant persons.",
                            "Writing and maintaining programs to meet users' functional requirements and company technical requirements."], 
                  "techStack": "Cobol, AS400, DB2, Java 7, Struts"},
];

function Profile() {
    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;



        return {
          width,
          height,
        };
      }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
    
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }
      }, [hasWindow]);

    return (
        <div className="back" style={{height: windowDimensions.height}}>
            <Container>
                <Row>
                    <Col className="myInfo" xs={12} sm={12} md={12} lg={3} style={{height: (windowDimensions.width >= 992 ? windowDimensions.height : "7.5rem")}}>
                        <div className="infoText"><h3>Gary | Jiawen WU</h3></div><br/>
                        <div className="infoText"><a href="mailto:garywu.jiawen@gmail.com">garywu.jiawen@gmail.com</a></div>
                        <div className="infoText">Winnipeg, MB</div>
                    </Col>
                    <Col className="myIntro" xs={12} sm={12} md={12} lg={9} style={{height: (windowDimensions.width >= 992 ? windowDimensions.height : `calc(${windowDimensions.height}px - 7.5rem)`)}}>
                        <div className="topBottomPadding"></div>

                        <div className="introTitle">SUMMARY</div>
                        <div className="hoverColor">
                            <ul>
                                {summaryText.map(function(item, idx){
                                    return <li>{item}</li>;
                                })}
                            </ul>
                        </div>
                        
                        <div className="introTitle">SKILLS</div>
                        <div className="hoverColor">
                            <ul>
                                {skillsText.map(function(item, i){
                                    return <li>{item}</li>;
                                })}
                            </ul>
                        </div>
                        
                        <div className="introTitle">EXPERIENCE</div>
                        <div className="hoverColor">
                            {experience.map(function(item, i){
                                return (
                                <div className="careerItem">
                                    <b>{item.name}</b>
                                    <ul>{item.duty.map(function(dt, i){return <li>{dt}</li>;})}</ul>
                                    <u className="techStack">Tech Stack:</u>
                                    <div className="techStack">{item.techStack}</div>
                                    <br/>
                                </div>
                                );
                            })}
                        </div>
                        
                        <div className="introTitle">EDUCATION</div>
                        <div className="hoverColor">
                            <b>Bachelor of Science: Software Engineering</b>
                            <p>South China University of Technology<br/>Sep 2007 - Jun 2011 </p>
                        </div>

                        <div className="introTitle">LANGUAGES</div>
                        <div className="hoverColor">
                            <Row xs="auto"> 
                                <Col xs={6}>English:</Col>
                                <Col xs={6}>Professional</Col>
                                <Col xs={6}>Chinese-Cantonese:</Col>
                                <Col xs={6}>Native</Col>
                                <Col xs={6}>Chinese-Mandarin:</Col>
                                <Col xs={6}>Native</Col>
                            </Row>
                        </div>
                        <div className="topBottomPadding"></div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;