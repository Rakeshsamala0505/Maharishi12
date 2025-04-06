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
import Projects from "./pages/projects"; // projects.js
import Partners from "./pages/partners"; // partners.js
import IIMRResearch from "./pages/IIMRResearch"; // IIMR_research.js
import AnnualReports from "./pages/annual_reports"; // annual_reports.js
import Newsletter from "./pages/NewsLetter"; // newsletter.js
import Pressrelease from "./pages/PressReleases"; // pressrelease.js
import Gallery from "./pages/gallery"; // gallery.js

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
          <Route path="/projects" element={<Projects />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/IIMR_research" element={<IIMRResearch />} />
          <Route path="/annual_reports" element={<AnnualReports />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/pressrelease" element={<Pressrelease />} />  
          <Route path="/gallery" element={<Gallery />} />
   
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
