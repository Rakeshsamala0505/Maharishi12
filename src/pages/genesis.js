import React from "react";
import "../styles/genesis.css";

const timelineData = [
  {
    title: "MIIRA Framework",
    details: [
      "➤ G20: Millet International Initiative for Research and Awareness (MIIRA)",
      "➤ Suggested in Theme 1 of G20-AWG Issue Note",
      "➤ Work in line with 2030 Agenda for SDGs",
    ],
    date: "December 2022",
  },
  {
    title: "Formulation of MAHARISHI",
    details: [
      "➤ 2nd Agriculture Deputies Meeting (ADM), AWG-G20",
      "➤ Millets And Other Ancient Grains Research Initiative (MAHARISHI)",
      "➤ Transformed MIIRA into MAHARISHI",
    ],
    date: "March 2023",
  },
  {
    title: "Incorporation in ODCS",
    details: [
      "➤ G20-Agriculture Ministers’ Meeting (AMM)",
      "➤ MAHARISHI was welcomed by Agriculture Ministers during G20 AMM, Hyderabad",
      "➤ Incorporated in Outcome Document & Chair Summary Report (ODCS)",
    ],
    date: "June 2023",
  },
  {
    title: "Inclusion in NDLD",
    details: [
      "➤ G20 Summit, New Delhi",
      "➤ G20 members encouraged efforts to strengthen research cooperation",
      "➤ Agreed to form secretariat, based in IIMR, Hyderabad",
    ],
    date: "September 2023",
  },
  {
    title: "Secretariat Formation",
    details: [
      "➤ Establish mechanisms to connect researchers and institutions, enhancing research dissemination",
      "➤ Identifying gaps and needs for identified crops",
    ],
    date: "Ongoing",
  },
];

const Timeline = () => {
  return (
    <div className="timeline">
      <h1 className="journey-header">Genesis of MAHARISHI</h1>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`step ${index % 2 === 0 ? "step-up" : "step-down"}`}>
                
            <div className="round-ball"></div>
            {index % 2 !== 0 && <div className="date">{item.date}</div>}
            <h3>{item.title}</h3>
            {item.details.map((detail, i) => (
              <p key={i}>{detail}</p>
            ))}
            {index % 2 === 0 && <div className="date">{item.date}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
