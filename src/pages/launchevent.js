import React from 'react';
import launchVideo from '../assets/launch_video.mp4';
// Main App component
const launchevent = () => {
  return (
    <div className="container-wrapper">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

          :root {
            --white-bg: #F5F5F5;
            --light-brown: #BCAAA4;
            --dark-brown: #4E342E;
            --accent-brown: #8D6E63;
          }

          .container-wrapper {
            min-height: 100vh;
            background-color: var(--white-bg);
            color: var(--dark-brown);
            font-family: 'Roboto', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow: hidden;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 24px;
          }

          .header {
            text-align: center;
            padding: 100px 0;
            padding-bottom:30px;
          }

          .header h1 {
            font-size: 1.8rem; /* Decreased font size for the overall heading */
            font-weight: 700;
            line-height: 1.2;
            color: var(--dark-brown);
            margin: 0;
          }

          .highlight-text {
            font-size: 2.5rem; /* Increased font size for MAHARISHI */
            text-decoration: underline;
            font-weight: 900;
          }

          .content-section {
            background-color: #FFFFFF;
            border-radius: 1rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 40px;
            margin-bottom: 40px;
            transition: transform 0.3s ease-in-out;
          }

          .content-section:hover {
            transform: translateY(-5px);
          }

          .grid-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            align-items: flex-start;
          }
          
          @media (min-width: 768px) {
            .grid-container {
              grid-template-columns: 1fr 1fr;
            }
          }

          .video-container {
            width: 100%;
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid var(--accent-brown);
  display: flex;
  justify-content: center;
  align-items: center;
          }

          .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .text-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            line-height: 1.6;
          }

          .goals-section h2 {
            font-size: 2rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 2rem;
            color: #4E342E !important;
          }
          
          /* New, more specific rule for the h2 element */
          .container .goals-section h2 {
              color: var(--dark-brown);
              text-align: center;
              font-weight: 700;
          }

          .goals-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 1.5rem;
          }
          
          @media (min-width: 768px) {
            .goals-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 1024px) {
            .goals-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          .goal-card {
            background-color: #FFFFFF;
            border-radius: 1rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            padding: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
            border: 1px solid #E0E0E0;
          }

          .goal-card:hover {
            background-color: var(--light-brown);
            color: #FFFFFF;
            transform: translateY(-5px);
          }

          .goal-card:hover svg {
            stroke: #FFFFFF;
          }
          
          .icon-bg {
            background-color: var(--accent-brown);
            border-radius: 50%;
            padding: 12px;
            margin-bottom: 1rem;
          }

          .goal-card svg {
            stroke: var(--white-bg);
            transition: stroke 0.3s ease-in-out;
          }

          .goal-card h3 {
            font-weight: 700;
            font-size: 1.125rem;
            margin-bottom: 0.5rem;
          }

          .goal-card p {
            font-size: 0.875rem;
            color: var(--dark-brown);
            transition: color 0.3s ease-in-out;
          }

          .goal-card:hover p {
            color: #FFFFFF;
          }

          .final-paragraph {
            margin-top: 2.5rem; /* Added space above the last paragraph */
            text-align: center;
            line-height: 1.6;
          }
        `}
      </style>
      
      {/* Main container */}
      <div className="container">
        {/* Header Section */}
        <header className="header">
          <h1>Launch of <span className="highlight-text">MAHARISHI</span> at ICAR’s 97th Foundation Day</h1>
        </header>

        {/* Video and Core Content Section */}
        <section className="content-section">
          <div className="grid-container">
            {/* Video Player */}
            <div className="video-container">
              {/* This is a placeholder for your video. Replace the iframe src with your video URL. */}
              <video
                    src={launchVideo}
                    controls
                    autoPlay={false}
                    style={{ width: "100%", height: "100%" }}
                  >
                 Your browser does not support the video.
               </video>

            </div>

            {/* Text Content */}
            <div className="text-content">
              <p>
                The Millets and Other Ancient Grains International Research Initiative (MAHARISHI) was officially launched during the 97th Foundation Day of the Indian Council of Agricultural Research (ICAR), held at the C. Subramaniam Hall, NASC Complex, New Delhi.
              </p>
              <p>
                The event was inaugurated by the Union Minister of Agriculture and Farmers Welfare and Rural Development, Shri Shivraj Singh Chouhan, in the presence of distinguished scientists, policymakers, and stakeholders from across the agricultural research ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Initiative Goals Section as a grid of cards */}
        <section className="goals-section">
          <h2>The Initiative's Goals</h2>
          <div className="goals-grid">
            {/* Goal Card 1 */}
            <div className="goal-card">
              <span className="icon-bg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network"><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><path d="M16 11c-.5 1-1 2-2 3c-1 1-1.5 2-2 3"/><path d="M16 6.5V9c0 .6-.4 1-1 1h-2c-.6 0-1 .4-1 1v2"/><path d="M8 17.5V15c0-.6.4-1 1-1h2c.6 0 1-.4 1-1v-2"/><path d="M10 9c.5-1 1-2 2-3c1-1 1.5-2 2-3"/></svg>
              </span>
              <h3>Connect and Collaborate</h3>
              <p>
                Connect researchers and institutions so that knowledge and new findings are easily shared, gaps are identified, and research is made more openly accessible.
              </p>
            </div>

            {/* Goal Card 2 */}
            <div className="goal-card">
              <span className="icon-bg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-blocks"><path d="m21 16-4 4-4-4"/><path d="m3 12-4 4-4-4"/><path d="M17 20v-5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5"/><path d="M12 11V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8"/><path d="M22 11V3a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v8"/></svg>
              </span>
              <h3>Build Digital Platforms</h3>
              <p>
                Build digital platforms where experts can exchange data, share insights, and publish updates in a simple and accessible way.
              </p>
            </div>

            {/* Goal Card 3 */}
            <div className="goal-card">
              <span className="icon-bg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-plus"><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M16 19h6"/><path d="M19 16v6"/></svg>
              </span>
              <h3>Host Events & Workshops</h3>
              <p>
                Host training programmes, international workshops, and conferences to bring together scientists and young researchers from around the world.
              </p>
            </div>

            {/* Goal Card 4 */}
            <div className="goal-card">
              <span className="icon-bg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="8" r="6"/><path d="M15.4 14.5c.9-1 1.7-2.1 2-3.3"/><path d="M8.6 14.5c-.9-1-1.7-2.1-2-3.3"/><path d="M17.5 13.6c-1.2.9-2.8 1.4-4.5 1.4s-3.3-.5-4.5-1.4"/><path d="M12 15v7"/></svg>
              </span>
              <h3>Recognize & Innovate</h3>
              <p>
                Encourage innovation by recognizing outstanding contributions through research awards and prizes.
              </p>
            </div>
          </div>
          <p className="final-paragraph">
            Through these efforts, MAHARISHI will create an inclusive, international space that inspires collaboration, sparks innovation, and contributes to healthier diets, sustainable farming, and resilient food systems.
          </p>
        </section>
      </div>
    </div>
  );
};

export default launchevent;
