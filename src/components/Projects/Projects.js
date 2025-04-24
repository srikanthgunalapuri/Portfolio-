// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           <strong className="purple">MY PROJECTS </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are My projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="E-commerce"
//               description='I developed e-commerce website built with React, when a user clicks the "Add to Cart" button, the selected product gets added to their cart list. Simultaneously, the count of items in the cart increases, reflecting the addition. Additionally, the total price of the cart dynamically updates to include the newly added product.'
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Vedarushi"
//               description="Developed a web online platform enabling users to book poojas, birthday wishes,vrathalu, and homalu ceremonies online. Implemented user-friendly interfaces forseamless booking experiences, facilitating smoother communication between users andpriests."
//               // ghLink="https://github.com"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Quiz App"
//               description=" Developed a web-based quiz application allowing users to take
//               online exams and view their results and percentages.
//               "
//               // ghLink="https://github.com"
//             />
//           </Col>

//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import arsha from "../../Assets/Projects/codeEditor.png"; // Replace with actual image
import vedarshi from "../../Assets/Projects/chatify.png"; // Replace with actual image
import quiz from "../../Assets/Projects/blog.png"; // Replace with actual image or keep existing one

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">MY PROJECTS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've recently worked on:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arsha}
              isBlog={false}
              title="Arsha Tuitions"
              description="An educational web platform providing tools for students, teachers, and admins to manage content, schedules, and communications. Built using React.js, Redux, and Material-UI with seamless REST API integration, form validation, and optimized state management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vedarshi}
              isBlog={false}
              title="Vedarshi"
              description="A spiritual services booking platform enabling users to schedule poojas, vrathams, and personalized birthday wishes online. Developed intuitive and responsive UI/UX using React.js, Bootstrap 5, and Material-UI. Integrated REST APIs for real-time updates and efficient booking flows."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz Application"
              description="A web-based quiz app where users can attempt online tests and view scores and percentages instantly. Developed using React.js with dynamic state management and user feedback features."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
