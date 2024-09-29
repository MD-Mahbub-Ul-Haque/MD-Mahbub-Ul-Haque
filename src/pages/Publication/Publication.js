import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";


const journalPublications = [
  {
    title: "Multi Terrain Drones For End-To-End Ocean Monitoring And Protection.",
    link: "https://www.researchgate.net/publication/374974945_Multi-Terrain_Drones_For_End-To-End_Ocean_Monitoring_And_Protection",
    description: "IAC 2023, Baku, Azerbaĳan."
  },
  {
    title: "DeepSea Cluster: Detection and Classification of Anthropogenic Ocean Noise Using Satellite Images",
    link: "https://www.researchgate.net/publication/374921739_DeepSea_Cluster_Detection_and_Classification_of_Anthropogenic_Ocean_Noise_Using_Satellite_Images",
    description: "IAC 2023, Baku, Azerbaĳan."
  },
  {
    title: "Optimizing Autonomous Navigation of Unmanned Ground Vehicles in Challenging Terrain through Surface Analysis and AI",
    link: "https://www.researchgate.net/publication/374975082_Optimizing_Autonomous_Navigation_of_Unmanned_Ground_Vehicles_in_Challenging_Terrain_through_Surface_Analysis_and_AI",
    description: "IAC 2023, Baku, Azerbaĳan."
  },
  {
    title: "Small Satellites System Overview Simulator: Design and Evaluation",
    link: "https://www.researchgate.net/publication/375088755_Small_Satellites_System_Overview_Simulator_Design_and_Evaluation",
    description: "IAC 2023, Baku, Azerbaĳan."
  },
  {
    title: "DESIGN A SOFTWARE-DEFINED RADIO PLATFORM TO SUPPORT MULTI-FREQUENCY COMMUNICATIONS AND TUNING FOR SATELLITE SYSTEMS",
    link: "https://www.researchgate.net/publication/377299849_DESIGN_A_SOFTWARE-DEFINED_RADIO_PLATFORM_TO_SUPPORT_MULTI-FREQUENCY_COMMUNICATIONS_AND_TUNING_FOR_SATELLITE_SYSTEMS",
    description: "IAC 2023, Baku, Azerbaĳan."
  },
  // Add more journal publications as needed
];

const conferencePapers = [
  {
    title: "Computer-Generated Artificial Life Model:Algorithm for Hunters Hunting Preys",
    link: "http://dspace.bracu.ac.bd:8080/xmlui/handle/10361/16438",
    description: "Brac University, Dhaka, Bangladesh"
  },
  // {
  //   title: "Conference Paper Title 2",
  //   link: "http://example.com/conference2",
  //   description: "Short description of conference paper 2."
  // },
  // Add more conference papers as needed
];
 
  export const Publication = () => {
  return (
    <HelmetProvider>
      <Container className="Publication-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Publication | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Publication</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Conference Proceedings: Peer Reviewed</h3>
        </Col>
        <Col lg="7">
          <div>
            {journalPublications.map((pub, index) => (
              <div key={index} className="publication-item mb-3">
                <h4>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                </h4>
                <p>{pub.description}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Undergraduate Thesis</h3>
        </Col>
        <Col lg="7">
          <div>
            {conferencePapers.map((pub, index) => (
              <div key={index} className="publication-item mb-3">
                <h4>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                </h4>
                <p>{pub.description}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      

      
      </Container>
    </HelmetProvider>
    
  
  );
};


