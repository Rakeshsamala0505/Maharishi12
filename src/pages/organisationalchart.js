  import React, { useState } from "react";
  import "../styles/g20.module.css";

  /**
   * Coordinates & colours are tuned to match the PNG you shared.
   * - The boxes are <div>s absolutely‑placed inside a relative wrapper
   * - The red connectors are one SVG with <path> elements so we can animate the stroke‑dasharray
   *   (they will draw themselves on mount)
   * - Click any box to open a centred white modal with room for photos / extra text
   */

  const BOXES = [
    {
      id: "manager",
      label: "Manager\nand\nSecretariat",
      x: 40,
      y: 210,
      w: 220,
      h: 100,
      bg: "#820021",
      fg: "#fff",
      people: [
        {
          name: "Varun Patel",
          role: "General Manager",
          photo:
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?fit=crop&w=80&h=80",
        },
      ],
    },
    {
      id: "govBoard",
      label: "MAHARISHI\nGovernance\nBoard",
      x: 350,
      y: 40,
      w: 260,
      h: 100,
      bg: "#6a3d00",
      fg: "#fff",
      people: [
        {
          name: "Dr. A. Sharma",
          role: "Chairperson",
          photo:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fit=crop&w=80&h=80",
        },
        {
          name: "Ms. K. Rao",
          role: "Member",
          photo:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?fit=crop&w=80&h=80",
        },
      ],
    },
    {
      id: "research",
      label: "Research\nAdvisory\nGroup",
      x: 350,
      y: 200,
      w: 260,
      h: 100,
      bg: "#a55f00",
      fg: "#fff",
      people: [
        {
          name: "Dr. P. Verma",
          role: "Lead Advisor",
          photo:
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fit=crop&w=80&h=80",
        },
      ],
    },
    {
      id: "scientific",
      label: "Scientific\nPanel",
      x: 350,
      y: 360,
      w: 260,
      h: 100,
      bg: "#d48a00",
      fg: "#fff",
      people: [
        {
          name: "Prof. S. Iyer",
          role: "Chief Scientist",
          photo:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=80&h=80",
        },
      ],
    },
    {
      id: "ewg",
      label: "Expert Working\ngroup (EWG)",
      x: 165,
      y: 520,
      w: 260,
      h: 100,
      bg: "#f5d1b3",
      fg: "#000",
      people: [
        {
          name: "Ms. L. Kaur",
          role: "EWG Coordinator",
          photo:
            "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?fit=crop&w=80&h=80",
        },
      ],
    },
  ];

  export default function OrganisationalChart() {
    const [active, setActive] = useState(null);

    return (
      <>
        <div className="chartWrapper">
          {/* SVG Connectors */}
          <svg
            className="connectors"
            width="100%"
            height="650"
            viewBox="0 0 650 650"
          >
            <defs>
              <marker
                id="arrowHead"
                markerWidth="8"
                markerHeight="8"
                refX="4"
                refY="4"
                orient="auto"
              >
                <path d="M0,0 L8,4 L0,8 Z" fill="#c40016" />
              </marker>
            </defs>

            {/* 1. Manager up → Governance Board */}
            <path
              d="M 150 210 V 90 H 350"
              className="arrowPath"
              markerEnd="url(#arrowHead)"
            />

            {/* 2. Manager right → Research Advisory (back arrow) */}
            <path
              d="M 260 260 H 350"
              className="arrowPath"
              markerEnd="url(#arrowHead)"
            />

            {/* 3. Manager right‑down → Scientific Panel */}
            <path
              d="M 150 310 V 420 H 350"
              className="arrowPath"
              markerEnd="url(#arrowHead)"
            />

            {/* 4. Manager down → EWG */}
            <path
              d="M 150 310 V 570 H 295"
              className="arrowPath"
              markerEnd="url(#arrowHead)"
            />
          </svg>

          {/* Boxes */}
          {BOXES.map((b) => (
            <div
              key={b.id}
              className="box"
              style={{
                left: b.x,
                top: b.y,
                width: b.w,
                height: b.h,
                backgroundColor: b.bg,
                color: b.fg,
              }}
              onClick={() => setActive(b)}
            >
              {b.label.split("\n").map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          ))}
        </div>

        {/* Modal */}
        {active && (
          <div className="modalOverlay" onClick={() => setActive(null)}>
            <div className="modalCard" onClick={(e) => e.stopPropagation()}>
              <h2>{active.label.replace(/\n/g, " ")}</h2>
              <div className="peopleList">
                {active.people.map((p) => (
                  <div key={p.name} className="personRow">
                    <img src={p.photo} alt={p.name} />
                    <div>
                      <div className="personName">{p.name}</div>
                      <div className="personRole">{p.role}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="closeBtn" onClick={() => setActive(null)}>
                ✕
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
