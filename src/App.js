import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/footer";
import AboutMaharishi from "./pages/aboutmaharishi"; // aboutmaharishi.js
import Genesis from "./pages/genesis"; // genesis.js
import OrganisationalChart from "./pages/organisationalchart"; // organisationalchart.js
import SteeringCommitee from "./pages/steering_commitee"; // structure.js
import MilletsEwg from "./pages/millets_ewg"; // expert_working_groups.js
import AncientGrainsEwg from "./pages/ancientgrains_ewg"; // ancientgrains_ewg.js
import ClimateEwg from "./pages/climate_ewg"; // climate_ewg.js
import Charter from "./pages/charter"; // charter.js
import Millets from "./pages/millets"; // millets.js
import AncientGrains from "./pages/ancient_grains"; // ancient_grains.js
import SustainableFarming from "./pages/sustainable_farming"; // sustainable_farming.js
import AssociatedPrograms from "./pages/associated_programs"; // associated_programs.js
import AnnualReports from "./pages/annual_reports"; // annual_reports.js
import MaharishiLibrary from "./pages/maharishilibrary"; // maharishilibrary.js
import NewsLetter from "./pages/NewsLetter"; // newsletter.js
import PressRelease from "./pages/PressReleases"; // pressrelease.js
import Gallery from "./pages/gallery"; // gallery.js
import ResearchCommitee from "./pages/research_commitee";
import Opportunities from "./pages/opportunities"; // opportunities.js
import SecretariatCommitee from "./pages/secretariat"; // secretariat_commitee.js
import WorldMapSection from "./pages/WorldMapSection"; // WorldMapSection.js 
import ScrollToTop from "./pages/ScrollToTop"; // ScrollToTop.jsx
import GoverningBoard from "./pages/governing_board"; // governing_board.js
import EarlyCareerResearcher from "./pages/earlycareerresearcher"; // earlycareerresearcher.js
import CaseStudies from "./pages/casestudies"; // casestudies.js
import Magic from "./pages/magic"; // partners.js
import Events from "./pages/projects"; // events.js
import Blog from "./pages/blog"; // blog.js
import LaunchEvent from "./pages/launchevent"; // LaunchEvent.js
import Databases from "./pages/database";
import Results from "./pages/results";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />{/* Home page */}
          <Route path="/aboutmaharishi" element={<AboutMaharishi />} />
          <Route path="/genesis" element={<Genesis />} />
          <Route path="/organisationalchart" element={<OrganisationalChart />} />
          <Route path="/steering_commitee" element={<SteeringCommitee />} />
          <Route path="/Millets_Ewg" element={<MilletsEwg />} />
          <Route path="/AncientGrains_Ewg" element={<AncientGrainsEwg/>} />
          <Route path="/Climate_Ewg" element={<ClimateEwg/>} />
          <Route path="/charter" element={<Charter />} />
          <Route path="/millets" element={<Millets />} />
          <Route path="/ancient_grains" element={<AncientGrains />} />
          <Route path="/sustainable_farming" element={<SustainableFarming />} />
          <Route path="/annual_reports" element={<AnnualReports />} />
          <Route path="/maharishilibrary" element={<MaharishiLibrary />} /> 
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="/pressrelease" element={<PressRelease />} />  
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/research_commitee" element={<ResearchCommitee />} />
          <Route path="/governing_board" element={<GoverningBoard />} />
          <Route path="/secretariat_commitee" element={<SecretariatCommitee />} />
          <Route path="/world_map" element={<WorldMapSection />} /> {/* World Map Section */}
          <Route path="/associated_programs" element={<AssociatedPrograms />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/earlycareerresearcher" element={<EarlyCareerResearcher />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/magic" element={<Magic />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="launchevent" element={<LaunchEvent />} />
          <Route path="/databases" element={<Databases />} />
          <Route path="/results" element={<Results />} />
          
          {/* Add more routes as needed */}
        
   
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
