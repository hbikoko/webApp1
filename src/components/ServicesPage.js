import React from "react";
import "./styles/ServicesPage.css";
import sankofa from "../assets/sankofa.png";
import africa from "../assets/africaMap.png";
import baobab from "../assets/baobabTree.png";
import adin from "../assets/adin.png";
import communityPic from "../assets/community.jpg";
import currentProjectsPic from "../assets/portland.png";
import policyPic from "../assets/congress.png";

function ServicesPage() {
  // The text for each container
  const heritageText = (
    <>
      <div style = {{ fontSize: "12px"}}></div>
      AFRHEEC, the African Heritage Education and Empowerment Community, 
      is dedicated to exploring the rich history and cultural heritage 
      of Africa and its enduring impact on the Black American experience. 
      By exploring the historical journey of brutalized Africans terrorized 
      into becoming Americans, AFRHEEC aims to foster a deeper understanding 
      of the challenges and triumphs faced by Black communities today. <br />
      <br />
      Through initiatives focused on retracing ancestral roots, restoring 
      cultural practices, building strong communities, and reclaiming 
      authentic identities, AFRHEEC empowers individuals to connect with 
      their African heritage and navigate the complexities of modern society <br />
      <br />
      no matter their geographical displacement spurred by the African Diaspora.
    </>
  );

  const communityText = `
    AFRHEEC recognizes the vital role of community in African culture. We 
    strive to build strong, supportive Black communities where children can 
    thrive in safe, nurturing environments. By creating spaces free from fear 
    and discrimination, our mission is to empower parents to raise confident, 
    well-rounded children without fear for their safety. AFRHEEC is committed 
    to designing a haven that envelopes the Black community with a sense of 
    belonging and purpose. Through shared experiences, cultural traditions, 
    and mutual support, we believe in uplifting one another and inspiring 
    our future generations.
  `;

  const currentProjectsText = `
    AFRHEEC, the African Heritage Education and Empowerment Community, is 
    dedicated to uplifting the Black community through education, culture, 
    and empowerment. To learn more about our current projects and initiatives, 
    including our culturally responsive work, click the icon below.
  `;

  const policyText = `
    AFRHEEC is committed to advocating for policies that promote justice, 
    equity, and empowerment for the Black community. To learn more about our 
    stance on critical issues such as immigration reform, Black civil rights, 
    voter rights, and more, click the icon below to explore our policy positions 
    and advocacy efforts.
  `;

  return (
    <div className="services-page">
      <div className="services-container">

        {/* Card 1: Heritage & History */}
        <div className="service-item">
          {/* The parent that provides perspective */}
          <div className="flip-card">
            {/* The child that actually rotates */}
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={africa} alt="Heritage & History" />
                <h2>Heritage & History</h2>
              </div>
              <div className="flip-card-back">
                <p>{heritageText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Community */}
        <div className="service-item">
          {/* The parent that provides perspective */}
          <div className="flip-card">
            {/* The child that actually rotates */}
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={baobab} alt="Community" />
                <h2>Community</h2>
              </div>
              <div className="flip-card-back">
                <p>{communityText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Current Projects */}
        <div className="service-item">
          {/* The parent that provides perspective */}
          <div className="flip-card">
            {/* The child that actually rotates */}
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={adin} alt="Current Projects" />
                <h2>Current Projects</h2>
              </div>
              <div className="flip-card-back">
                <p>{currentProjectsText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Policy & Positions */}
        <div className="service-item">
          {/* The parent that provides perspective */}
          <div className="flip-card">
            {/* The child that actually rotates */}
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={sankofa} alt="Policy & Positions" />
                <h2>Current Projects</h2>
              </div>
              <div className="flip-card-back">
                <p>{policyText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;



