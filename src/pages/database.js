import React from "react";
import "../styles/database.css";

export default function Databases() {
  const cards = [
    {
      title: "MILLETS NEWS",
      text: `Secretary Department of agriculture research and exbhibition, (DARE) and Director General ICAR,
      Dr.Himanshu Pathak visited the ICAR-IIMR on 29.02.25 to review the progress of millet research and
      development activities being carried out at the institute. During his visit, he interacted with the scientists
      and staff of the institute and appreciated the efforts being made for the promotion of millet cultivation
      and utilization in the country.`,
      button: "MILLETS NEWS",
      icon: "/icons/DB_icon2.png",   // Replace with your icon/path
    },
    {
      title: "MILLET DATABASE",
      text: `The Indian Institute of Millets Research (IIMR) formerly Directorate of Sorghum Research 
      (DSR) and National Research Centre for Sorghum (NRCS), is the central agency to work on all 
      aspects of millet/sorghum research and development under the auspicious of Indian Council 
      of Agricultural Research (ICAR).`,
      button: "MILLETS NEWS",
      icon: "/icons/Database.png",   // Replace with your icon/path
    },
    {
      title: "OTHER DATABASES AND LINKS",
      text: `This section provides links to other online 
      tools, databases, and resources on Millets.`,
      button: "OTHER DATABASES",
      icon: "/icons/DB_icon3.png",   // Replace with your icon/path
    },
  ];

  return (
    <div className="db-container">
      <h1 className="db-title">DATABASES</h1>

      <p className="db-subtitle">
        We are diligently working to facilitate access to information regarding 
        leading researchers and international research projects concerning millet, 
        sustainable development, and food security.
      </p>

      <p className="db-subtitle">
        If you have questions regarding our databases, or need specific help, 
        please contact us through the below options.
      </p>

      <hr className="db-divider" />

      <div className="db-cards">
        {cards.map((item, i) => (
          <div className="db-card" key={i}>
            <img className="db-icon" src={item.icon} alt="" />
            <h2 className="db-card-title">{item.title}</h2>
            <p className="db-card-text">{item.text}</p>
            <button className="db-btn">{item.button}</button>
          </div>
        ))}
      </div>
           
    </div>
    
  );
}
