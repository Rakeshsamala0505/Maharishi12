import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/footer";
import Purpose from "./pages/purposeOfMaharishi"; // purpose_of_maharishi.js
import Genesis from "./pages/genesis"; // genesis.js
import G20 from "./pages/g20"; // g20.js
import Implementation from "./pages/ImplementationOfMaharishi"; // implementation.js
import Structure from "./pages/structure"; // structure.js
import ExpertWorkingGroup from "./pages/ExpertWorkingGroup"; // expert_working_groups.js
import Charter from "./pages/charter"; // charter.js
import Millets from "./pages/millets"; // millets.js
import AncientGrains from "./pages/ancient_grains"; // ancient_grains.js
import SustainableFarming from "./pages/sustainable_farming"; // sustainable_farming.js
import NutritionBenefits from "./pages/nutrition_benefits"; // nutrition_benefits.js
import projects from "./pages/projects"; // projects.js
import partners from "./pages/partners"; // partners.js
import IIMRResearch from "./pages/IIMRResearch"; // IIMR_research.js
import annualreports from "./pages/annual_reports"; // annual_reports.js
import newsletter from "./pages/NewsLetter"; // newsletter.js
import pressrelease from "./pages/PressReleases"; // pressrelease.js
import gallery from "./pages/gallery"; // gallery.js
import CommitteePage from "./pages/coordination_commitee"; // coordination_commitee.js
import ResearchCommitee from "./pages/research_commitee";
import ScientificCommitee from "./pages/scientific_commitee";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />{/* Home page */}
          <Route path="/purpose" element={<Purpose />} />
          <Route path="/genesis" element={<Genesis />} />
          <Route path="/g20" element={<G20 />} />
          <Route path="/implementation" element={<Implementation/>}/>
          <Route path="/structure" element={<Structure />} />
          <Route path="/expert_working_group" element={<ExpertWorkingGroup />} />
          <Route path="/charter" element={<Charter />} />
          <Route path="/millets" element={<Millets />} />
          <Route path="/ancient_grains" element={<AncientGrains />} />
          <Route path="/sustainable_farming" element={<SustainableFarming />} />
          <Route path="/nutrition_benefits" element={<NutritionBenefits />} />
          <Route path="/projects" element={<projects />} />
          <Route path="/partners" element={<partners />} />
          <Route path="/IIMR_research" element={<IIMRResearch />} />
          <Route path="/annual_reports" element={<annualreports />} />
          <Route path="/newsletter" element={<newsletter />} />
          <Route path="/pressrelease" element={<pressrelease />} />  
          <Route path="/gallery" element={<gallery />} />
          <Route path="/coordination_commitee" element={<CommitteePage />} />
          <Route path="/research_commitee" element={<ResearchCommitee />} />
          <Route path="/scientific_commitee" element={<ScientificCommitee />} />
          {/* Add more routes as needed */}
   
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
