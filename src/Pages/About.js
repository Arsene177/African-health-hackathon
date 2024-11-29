import React, { useState, useEffect } from "react";
import "../CSS/About.css";
import Navbar from "../Components/Navbar";

const AboutUs = () => {
  const [showMoreMission, setShowMoreMission] = useState(false);
  const [showMoreSymptoms, setShowMoreSymptoms] = useState(false);
  const [showMoreTreatment, setShowMoreTreatment] = useState(false);
  const [showMoreMyths, setShowMoreMyths] = useState(false);
  const [showMoreFAQ, setShowMoreFAQ] = useState(false);

  useEffect(() => {
    // Load Botpress and additional scripts dynamically
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2024/11/28/16/20241128162335-GHH6Q1D4.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="about-us-container">
        {/* Hero Section */}
        <div className="about-us-hero">
          <h1>
            Welcome to <span>SaveCare</span>
          </h1>
          <p>Caring Beyond Limits</p>
        </div>

        {/* Mission Section */}
        <div className="about-us-content">
          <section className="about-us-mission">
            <h2>Our Mission</h2>
            <p>
              {showMoreMission ? (
                "We aim to revolutionize healthcare in Cameroon by providing an e-medical booklet for every Cameroonian. Our platform ensures secure and seamless access to medical records for patients and healthcare providers."
              ) : (
                "We aim to revolutionize healthcare in Cameroon by providing an e-medical booklet for every Cameroonian..."
              )}
            </p>
            <button onClick={() => setShowMoreMission(!showMoreMission)}>
              {showMoreMission ? "See Less" : "See More"}
            </button>
          </section>

          {/* About Sickle Cell Section */}
          <section className="about-us-team">
            <h2>About Sickle Cell</h2>
            <div className="team-members">
              {/* Symptoms */}
              <div className="team-member">
                <h3>Symptoms of Sickle Cell Disease</h3>
                <p>
                  {showMoreSymptoms ? (
                    "Sickle cell disease (SCD) is a genetic blood disorder where red blood cells, which are usually round and flexible, become crescent-shaped (like a sickle). These sickle-shaped cells can block blood flow in small blood vessels, causing pain and preventing oxygen from reaching tissues and organs. Symptoms include: Sudden, severe pain episodes, Fatigue due to anemia, Swelling in hands and feet, Frequent infections, Vision problems."
                  ) : (
                    "Sickle cell disease (SCD) is a genetic blood disorder where red blood cells become crescent-shaped. Symptoms include..."
                  )}
                </p>
                <button onClick={() => setShowMoreSymptoms(!showMoreSymptoms)}>
                  {showMoreSymptoms ? "See Less" : "See More"}
                </button>
              </div>

              {/* Treatment */}
              <div className="team-member">
                <h3>Treatment & Management</h3>
                <p>
                  {showMoreTreatment ? (
                    "There is no universal cure for sickle cell disease, but treatments can help manage symptoms: Pain management, Blood transfusions, Hydroxyurea medication, Bone marrow or stem cell transplant (in some cases), Gene therapy (experimental)."
                  ) : (
                    "There is no universal cure for sickle cell disease, but treatments can help manage symptoms..."
                  )}
                </p>
                <button onClick={() => setShowMoreTreatment(!showMoreTreatment)}>
                  {showMoreTreatment ? "See Less" : "See More"}
                </button>
              </div>

              {/* Myths */}
              <div className="team-member">
                <h3>Myths about Sickle Cell Disease</h3>
                <p>
                  {showMoreMyths ? (
                    "There are many misconceptions about sickle cell disease. Let’s break some myths: Myth 1: Sickle cell disease is contagious. Fact: It is inherited, not contagious. Myth 2: People with sickle cell disease cannot lead normal lives. Fact: With the right treatment and care, individuals can live healthy lives. Myth 3: Only African people have sickle cell disease. Fact: It affects people of various ethnicities including Mediterranean, Middle Eastern, and Indian populations."
                  ) : (
                    "There are many misconceptions about sickle cell disease. Let’s break some myths..."
                  )}
                </p>
                <button onClick={() => setShowMoreMyths(!showMoreMyths)}>
                  {showMoreMyths ? "See Less" : "See More"}
                </button>
              </div>
            </div>
          </section>

          {/* Resources Section */}
          <section className="about-us-resources">
            <h2>Resources for Families</h2>
            <div className="resources">
              <div className="resource-item">
                <h3>Sickle Cell Disease: A Guide for Families</h3>
                <p>
                  A comprehensive guide to understanding sickle cell disease, its symptoms, and treatment options.
                </p>
                <button>Download Guide</button>
              </div>
              <div className="resource-item">
                <h3>Watch: Understanding Sickle Cell Disease</h3>
                <p>
                  A short video explaining the basics of sickle cell disease, how it affects the body, and ways to manage it.
                </p>
                <a href="https://www.youtube.com/watch?v=fIIJmg_1hv0" target="_blank" rel="noopener noreferrer">
                  <button>Watch Video</button>
                </a>
                <a href="https://sickle-cell.com/forums" target="_blank" rel="noopener noreferrer">
                  <button>Sickel cell Forum</button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
