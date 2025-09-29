import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/charter.css"; // Importing external CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faWallet,
  faBuilding,
  faFlask,
  faUsers,
  faCogs,
  faUserSecret,
  faCalendarCheck,
  faShieldAlt,
  faBook,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

const Maharishi = () => {
  return (
    <div className="container-fluid main-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Charter</h3>
        <ul>
          <li>
            <a href="#principles-of-governance">
              <FontAwesomeIcon icon={faGavel} /> PRINCIPLES OF GOVERNANCE OF MAHARISHI 
            </a>
          </li>
          <li>
            <a href="#purpose-of-charter">
              <FontAwesomeIcon icon={faWallet} /> PURPOSE OF THE CHARTER  
            </a>
          </li>
          <li>
            <a href="#scope-financial-resources">
              <FontAwesomeIcon icon={faBuilding} /> SCOPE AND FINANCIAL RESOURCES OF MAHARISHI  
            </a>
          </li>
          <li>
            <a href="#steering-committee">
              <FontAwesomeIcon icon={faFlask} /> STEERING COMMITTEE  
            </a>
          </li>
          <li>
            <a href="#maharishi-governing-board">
              <FontAwesomeIcon icon={faFlask} /> MAHARISHI GOVERNING BOARD 
            </a>
          </li>
          <li>
            <a href="#research-advisory-group">
              <FontAwesomeIcon icon={faUsers} />  RESEARCH ADVISORY GROUP  
            </a>
          </li>
          <li>
            <a href="#expert-working-groups">
              <FontAwesomeIcon icon={faCogs} /> EXPERT WORKING GROUPS 
            </a>
          </li>
          <li>
            <a href="#maharishi-initiative-manager">
              <FontAwesomeIcon icon={faUserSecret} />  MAHARISHI INITIATIVE MANAGER  
            </a>
          </li>
          <li>
            <a href="#secretariat">
              <FontAwesomeIcon icon={faCalendarCheck} /> SECRETARIAT  
            </a>
          </li>
          <li>
            <a href="#organisation-of-committees-meetings-and-minutes">
              <FontAwesomeIcon icon={faShieldAlt} /> ORGANISATION OF COMMITTEES’ MEETINGS AND MINUTES
            </a>
          </li>
          <li>
            <a href="#confidentiality">
              <FontAwesomeIcon icon={faBook} /> CONFIDENTIALITY
            </a>
          </li>
          <li>
            <a href="#publication">
              <FontAwesomeIcon icon={faCogs} /> PUBLICATION 
            </a>
          </li>
          <li>
            <a href="#intellectual-property">
              <FontAwesomeIcon icon={faExchangeAlt} />  INTELLECTUAL PROPERTY  
            </a>
          </li><li>
            <a href="#commencement">
              <FontAwesomeIcon icon={faExchangeAlt} />  COMMENCEMENT, MODIFICATION, CESSATION AND WITHDRAWAL  
            </a>
          </li><li>
            <a href="#legal-disclaimer">
              <FontAwesomeIcon icon={faExchangeAlt} />  LEGAL DISCLAIMER 
            </a>
          </li><li>
            <a href="#interpretation-and-application">
              <FontAwesomeIcon icon={faExchangeAlt} /> INTERPRETATION AND APPLICATION  
            </a>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="content">
        <section id="principles-of-governance">
          <h2>PRINCIPLES OF GOVERNANCE OF MAHARISHI</h2>
          <div className="point">
            <h3>The MAHARISHI is governed by the following principles:</h3>
            <li>Collaboration through Shared Vision </li>
            <li>Connectivity through Transparency </li>
            <li>Innovation through Recognition  </li>
            <li>Inclusivity through Engagement </li>
            <li>Empowerment through Opportunity</li>
            <li>Knowledge through Access </li>
          </div>
        </section>

        <section id="purpose-of-charter">
          <h2>PURPOSE OF THE CHARTER </h2>
          <div className="point">
            <h3>The purpose of the Charter is to set forth the basic principles of MAHARISHI, concerning:</h3>
            <li>Member Roles and Responsibilities within MAHARISHI  </li>
            <li>Governance and Organizational Structure of MAHARISHI  </li>
            <li>Allocation and Oversight of the MAHARISHI Budget  </li>
            <li>Implementation of MAHARISHI Recommendations into Actionable Strategies </li>
          </div>
        </section>

        <section id="scope-financial-resources">
              <h2>SCOPE AND FINANCIAL RESOURCES OF MAHARISHI</h2>
              <div class="point">
                <h3>1. SCOPE OF THE MAHARISHI</h3>
                <ul>
                  <li>The purpose of the MAHARISHI is to coordinate research programmes in millets and 
                   ancient grain crops at the international level </li>
                  <li>Optimization and pooling of resources to enhance economic efficiencies </li>
                  <li>Add value to the existing national and international public and private initiatives </li>
                  <li>Facilitating and encouraging linkages between countries to harness the advances in 
                   millet and ancient grain research and development for sustainable global benefits </li>
                  <li>Ensuring competence for reinforcing food security, nutritional value and safety </li>
                  <li>Addressing rapidly changing environment, while taking into account societal demands 
                   for sustainable and resilient agricultural production systems</li>
                </ul>
                  <h3>2. FINANCIAL RESOURCES OF THE MAHARISHI</h3>
                   <p>MAHARISHI will establish Secretariat at ICAR-Indian Institute of Millets Research, 
                    Hyderabad. Each Member will join the contributing to the annual budget of MAHARISHI in 
                    the form of a membership fee.</p>
                    <p>Every year on the date 31st March Secretariat will send an invoice in the name of the 
                    Managing Institution to each Member to collect their subscription.</p>
                    <h3>The amount of annual contributions will be as follows:</h3>
                    <h4>For Institutions:</h4>
                <ul>
                      <li>Based in G20 members States: USD$ 25,000/-</li>
                      <li>International Research Centres: USD$ 25,000/- </li>
                      <li>Others (Non‐G20 member States and non‐International Agricultural Research 
                    Centres): USD$ 5,000/- </li>
                    </ul>
                    <h4>For Private Members:</h4>
                    <ul>
                      <li>Multinational companies 500 million: USD$ 50,000/-</li>
                      <li>National companies in the member countries: USD$ 25,000/-</li>
                      <li>Small and start-up companies in the member states: USD$ 10,000/-</li>
                    </ul>
                    <p>Countries and institutions are welcomed to join as members by invitation. Upon confirmation 
                    of membership, a fee, determined by the relevant criteria, shall be applicable </p>
                      </div>
        </section>

          <section id="steering-committee">
                        <h2> STEERING COMMITEE</h2>
                        <p>The Steering Committee of the host country is the forum in which committee members will 
              follow the operations and discuss and decide about the recommendations and proposals 
              made by the MAHARISHI Governing Board, Research Advisory Group, and the Expert 
              Working Groups, which advise it.</p>
              <h3>Its role is:</h3>
                        <div className="point">
                          <ul>
            <              li>To provide strategic leadership for the Initiative, including the formulation of its long
              term vision, strategic direction, and the establishment of thematic and operational 
              priorities. </li>
                          <li>To grant final approval for official documents prior to their circulation or public 
              dissemination.</li>
                          <li>To review and formally endorse the recommendations submitted by the Research 
              Advisory Group and the Expert Working Groups, and to facilitate their 
              implementation at the national, regional, and international levels, as appropriate. </li>
                          <li>Subject to the decision of the MAHARISHI Governing Board or the Research 
              Advisory Group and based on the identification of subject-specific or complementary 
              thematic needs, to invite domain experts to develop formal proposals for the 
              constitution of new Expert Working Groups.</li>
              <li>To consider and approve applications for new Membership and to determine the 
              cessation or exclusion of existing Members, based on the recommendations of the 
              Steering Committee. </li>
              <li>To ensure the convening of an annual International Conference on Millet and 
              Ancient Grain Research, with the objective of promoting global collaboration, knowledge exchange, and policy dialogue.</li>
                          </ul>

                        <h3> CHAIRPERSON AND CO-CHAIRPERSON  </h3>
                        <p>The responsibilities of the Chair of the Steering Committee are:</p>
                        <ul>
                          <li> To collaborate with the Chairs of the MAHARISHI Governing Board and the 
              Research Advisory Group for ensuring the effective execution of the objectives and 
              strategic direction of the Initiative. </li>
              <li>To review and approve official documents and policy papers intended for 
              consideration by the Steering Committee. </li>
              <li>To provide strategic and functional direction to the MAHARISHI Manager in 
              alignment with the approved mandate and framework. </li>
              <li>To represent the MAHARISHI Initiative in international conferences, forums, and 
              bilateral or multilateral engagements as deemed appropriate. </li>
              <li>To initiate, supervise, and guide the preparation of policy papers and strategic 
              documents for submission to MAHARISHI Governing Body and the Steering 
              Committee. </li>
                        </ul>
                        <h3>FREQUENCY OF MEETINGS </h3>
                        <p>The Steering Committee will aim to meet at least twice a year, in principle at the request of 
              the Chairperson, or at any other time, when necessary, at the request of the majority of its 
              members. Meetings will be convened by the Chairperson with a prior notice of at least one 
              month and with an agenda and any documentation required for dealing with items on the 
              agenda. Steering Committee meetings will take place physically, or via teleconference </p>
                        </div>
        </section>

                       <section id="maharishi-governing-board">
            <h2> MAHARISHI GOVERNING BOARD </h2>
            <div className="point">
            <h3>ROLE AND RESPONSIBILITIES  </h3>
            <p>The MAHARISHI Governing Board is the forum in which MAHARISHI Members follow the 
               operations and discuss and decide about the recommendations and proposals made by the 
               Research Advisory Group, and the Expert Working Groups, which advise it. </p>
             <p>Its role is to:  </p>
             <ul>
               <li>To review and grant approval for the annual and multi-annual work plans of the 
             Secretariat and the Expert Working Groups, including defined objectives, activities, 
             and expected outcomes. </li>
             <li>To consider and endorse the recommendations of the Research Advisory Group and 
             the Expert Working Groups, and to support their implementation at national, 
             regional, or international levels, as deemed appropriate. </li>
             <li>To facilitate the exchange of information regarding national and transnational funding 
             programmes relevant to millet and ancient grain research and innovation. </li>
             <li>To coordinate and align public research funding mechanisms among Member 
             countries, thereby enhancing the value and impact of national and regional 
             investments</li>
             <li>To approve the annual financial plan and budget of the MAHARISHI Initiative and to 
             oversee its effective execution in accordance with established financial regulations 
             and guidelines. </li>
             <li>To propose to the Research Advisory Group the establishment and timely dissolution 
             of Expert Working Groups in accordance with the evolving priorities and thematic 
             competencies of the Initiative.</li>
             <li>To approve applications for new Membership and to decide on the exclusion or 
             cessation of Membership, based on formal proposals submitted by the Steering 
             Committee. </li>
             </ul>
             <p>Regional representation of member countries will be ensured. The Institutions of the 
             MAHARISHI Governing Board may invite an internal or external expert as a guest to assist 
             them in their representation to MAHARISHI, such as a representative of their national funding 
             agency/ public research organisation (like BMGF, ASEAD, Rockfeller Foundation, GIZ,). </p>
             <h3> CHAIRPERSON AND CO-CHAIRPERSON  </h3>
             <p>The members of the MAHARISHI Governing Board will elect (Select/Nominate) a 
             Chairperson and a Co-Chairperson from amongst their members. They will serve for three 
             years, renewable once unless the MAHARISHI Governing Board decides otherwise. <br/> 
             The Chairperson will chair the meetings and will also represent the MAHARISHI Governing 
             Board in the other Committees of the MAHARISHI.  
             The Co-Chairperson will stand in when the Chairperson is unavailable </p>
             <h3>FREQUENCY OF MEETINGS  </h3>
             <p>The MAHARISHI Governing Board will aim to meet at least once a year, in principle, at the 
             request of the Chairperson, or at any other time, when necessary, at the request of at least 
             one third of its members or at the request of the Steering Committee, at times and places to 
             be determined by the MAHARISHI Governing Board. Meetings will be convened with a prior 
             notice of at least one month and with an agenda and any documentation required for dealing 
             with items on the agenda.  </p>
             <p>The annual meeting will take place physically, but extraordinary meetings may take place via 
             teleconference.  <br/><br/>
             The MAHARISHI Governing Board may also issue decisions and/or advice on matters after 
             written consultations of its members, including electronic means of communication. The 
             responses to the written consultations will be submitted within one month and the rules of 6.5 
             will also apply mutatis mutandis (i.e. the total number of responses within this delay will form 
             the quorum). For very urgent matters, the delay for response may be reduced to two weeks. 
             These decisions or advice will be annexed in the minutes of the next meeting.  </p>
             <h3>QUORUM AND DECISION MAKING </h3>
             <p>The MAHARISHI Governing Board takes its decisions consensually. However, for specific 
             topics and in the case where the fate of a proposal is discussed and the decision is not 
             unanimous, the Chairperson may ask for a vote, where the decision will be adopted by a 
             simple majority, except in the cases below: </p>
             <p>Two-thirds majority will be required for decisions on:</p>
             <ul>
               <li>Exclusion of Members (either public or private) from MAHARISHI upon proposal of 
             the Steering Committee. </li>
             <li>Modification or termination of the Charter provisions. </li>
             <li>Changes to membership fees </li>
             </ul>
             <p>The MAHARISHI Governing Board shall be deemed to be rightly met if two thirds of its 
             members are present or represented. A member of the MAHARISHI Governing Board may 
             give a proxy to another member; however, one cannot accept more than three proxies at a 
             time.</p>
             </div>
        </section>

        <section id="research-advisory-group">
          <h2> RESEARCH ADVISORY GROUP </h2>
          <div className="point">
            <h3>ROLE AND RESPONSIBILITIES  </h3>
            <p>The Research Advisory Group is responsible for the development of the vision and strategy 
               of MAHARISHI and for the monitoring of implementation.  
               The Research Advisory Group role is: </p>
                           <ul>
                             <li>To contribute to and approve strategic documents, including vision papers, thematic 
               research agendas, and their periodic revisions, in alignment with the overarching 
               objectives of the Initiative. </li>
                         <li>To recommend areas for coordination and collaboration in scientific and technical 
               research to the Steering Committee, in accordance with identified priorities. </li>
                          <li>To propose to the Steering Committee the establishment and timely dissolution of 
               Expert Working Groups within the domain of the Research Advisory Group’s 
               competence, based on emerging needs and thematic relevance. </li>
               <li>To review and assess the outputs and deliverables submitted by the Expert Working 
               Groups for alignment with the Initiative’s goals and standards. </li>
               <li> To provide regular updates on ongoing and planned national research activities that 
               are pertinent to the MAHARISHI Initiative. </li>
               <li>To deliberate upon the annual budget of the Initiative and offer recommendations on 
               thematic and operational priorities to the MAHARISHI Governing Board. </li>
               <li>To identify and suggest prospective areas of activity and expansion for the 
               MAHARISHI Initiative, in response to evolving global research trends and stakeholder 
               needs.</li>
            </ul>
            <h3>CHAIRPERSON AND CO-CHAIRPERSON  </h3>
            <p>The members of the Research Advisory Group will elect a Chairperson and a Co
                  Chairperson from their membership no later than the day of their second meeting. They will 
                   be nominated for three years, renewable once unless the Research Advisory Group decides 
                  otherwise.  <br/>
                  The Chairperson will chair the meetings and represent the Research Advisory Group in the 
                  other Committees of MAHARISHI.  <br/>
                  The Co-Chairperson will stand in when the Chairperson is unavailable.   </p>
                  <h3> FREQUENCY OF MEETINGS  </h3>
                  <p>The Research Advisory Group will aim to meet twice a year, one of the meetings taking 
                  place face-to-face with the option of video or telephone attendance, in principle at the 
                  request of its chairperson, or at any other time, when necessary, at the request of the majority of its members or at the request of the Steering Committee. Meetings will be 
                  convened by the Chairperson with a prior notice of at least one month and with an agenda 
                  and any documentation required for dealing with items on the agenda sent two weeks 
                  before the meeting date. Representatives of associated programs can be invited if required.  
                  The face-to-face and virtual meetings will take place, at times and places to be determined 
                  by the Research Advisory Group, but extraordinary meetings may take place via 
                  teleconference.  </p>
                  <p>The Research Advisory Group may also issue decisions and/or advice on matters after 
                  written consultation of its members, including electronic means of communication (such as 
                  exchange of emails or use of a web collaborative platform). Responses to written 
                  consultations will be done within one month and the rules of 7.5 will also apply mutatis 
                  mutandis (i.e. the total number of responses within this delay will form the quorum). For very 
                  urgent matters, the delay for response may be reduced to two weeks. These decisions or 
                  advice will be annexed in the minutes of the next meeting. </p>
                  <h3> QUORUM AND DECISION MAKING </h3>
                  <p>The Research Advisory Group takes its decisions by consensus. However, for specific 
                  topics and in the case where the fate of a proposal is discussed and does not make 
                  unanimity, the Chairperson may ask for a vote, where the decision will be adopted by a 
                  simple majority.  <br/>
                  The Research Advisory Group quorum will be met if two thirds of its vote-holders are 
                  present or represented. A member of the Research Advisory Group may give a proxy to 
                  another member; however, one individual cannot accept more than three proxies at a time.  </p>
          </div>
        </section>

        <section id="expert-working-groups">
             <h2>EXPERT WORKING GROUP</h2>
             <div className="point">
             <h3>ROLE</h3>
             <p>Expert Working Groups shall be constituted under the direction of the Research Advisory 
             Group or the Steering Committee for matters related to technical or scientific research. 
             Expert Working Groups shall be established based on two primary thematic areas: Millets 
             and Ancient Grains. <br/>
             Expert Working Groups shall be entrusted with the responsibility of producing state-of-the
a             rt analyses, identifying research and organisational gaps, and formulating 
             recommendations specific to the thematic or functional areas for which they have been 
             established. <br/>
             The tenure of each Expert Working Group shall be limited to the duration necessary for the 
             completion of its assigned mandate, and such Groups shall be dissolved upon the decision 
             of the body that authorised their creation </p>
             <h3>MEETINGS </h3>
             <p>Each Expert Working Group will meet as required, in principle at the request of its 
             Chairperson, or at any other time when necessary, at the request of the majority of its  
             members or at the request of the Committee by which it was created. Meetings will be 
             convened by the Chairperson with a prior notice of at least one month and with an agenda 
             and any documentation required for dealing with items on the agenda.  
             Meetings may take place physically, at times and places to be determined by the Chairperson, 
             or via teleconference. </p>
             <h3>ACTIVITIES REPORT AND WORK MANAGEMENT</h3>
             <p>Each Expert Working Group will report its activities to the Steering Committee in a standard 
             format at least once a year for dissemination to the Research Advisory Group and the 
             MAHARISHI Governing Board.  <br/>
             There is neither quorum nor voting rules for Expert Working Groups. Dissenting opinions 
             must be properly addressed and reported.  <br/>
             The daily work of the Expert Working Groups could be managed through a collaborative 
             internet platform provided by the Secretariat to facilitate the exchange of ideas and the 
             drafting and revision of position papers.</p>
          </div>
        </section>

        <section id="maharishi-initiative-manager">
          <h2>MAHARISHI INITIATIVE MANAGER</h2>
          <div className="point">
            <h3>ROLE AND RESPONSIBILITIES</h3>
            <ul>
                            <li>The development of policy papers in support of strategic planning and governance 
              processes. </li>
              <li>To facilitate, in consultation with the relevant authorities, the invitation and 
              onboarding of new Members to the Initiative. </li>
              <li>To provide, through the Secretariat, necessary administrative and logistical support 
              to the Chairs of the Steering Committee, the MAHARISHI Governing Board, and the 
              Research Advisory Group, as required for the effective execution of their functions. </li>
              <li>To provide, through the Secretariat, organisational and technical support to the 
              Expert Working Groups, including but not limited to the organisation of meetings and 
              workshops, identification and booking of venues and facilities, management of 
              registrations, and assistance with travel arrangements. </li>
              <li>To manage the approved budget of the Initiative and to oversee the monitoring and 
              reporting of all activities, ensuring compliance with established financial and 
              administrative regulations. </li>
              <li>To represent the MAHARISHI Initiative in external engagements, including national, 
              regional, and international forums, meetings, and platforms, as authorised.</li>
              <li>To coordinate the implementation of actions and decisions adopted by the 
              MAHARISHI Governing Bodies, ensuring timely execution and reporting. </li>
              <li>To develop and maintain institutional linkages and collaborative networks with millet 
              and ancient grain research organisations, government bodies, and industry 
              stakeholders at national and international levels.</li>
              <li> To approve expenditures within the financial delegations sanctioned by the 
              MAHARISHI Governing Board and ensure that all disbursements are made in 
              accordance with established procedures. </li>
                          </ul>
                        </div>
                        <div className="point">
                          <h3>APPOINTMENT OF THE MAHARISHI MANAGER</h3>
                          <p>The MAHARISHI Manager will be appointed by the Managing Institution. <br/> 
              The MAHARISHI budget will be managed by the Managing Institution. Therefore, the 
              Managing Institution will be receiving and managing the MAHARISHI budget on behalf of all 
              the Members and under the direction of MAHARISHI Governing Board.  </p>
                        </div>
        </section>

        <section id="secretariat">
          <h2>SECRETARIAT</h2>
          <div className="point">
            <p>The Secretariat is a team composed of the required personnel to assist the Committees, 
             Expert Working Groups, chairs and co-chairs to properly perform their tasks. The Secretariat 
             will also provide liaison with Associated Programmes. The Secretariat is managed by the 
             MAHARISHI Manager who is therefore responsible for the good performance of its tasks.  
             The Secretariat is composed of personnel appointed or outsourced by the Managing 
             Institution and of permanent or non‐permanent personnel of the Members provided as in‐kind 
             contribution. The costs of the Secretariat will be paid on the MAHARISHI budget only for 
             those incurred by the Managing Institution (including the costs of Subcontractor(s) involved 
             in the Secretariat activities). </p>
                       </div>
                       <div className="point">
                         <p>The focus of the Secretariat is administrative. Its role is:  </p>
                         <ul>
                           <li>To organise and facilitate the conduct of meetings and provide necessary secretariat 
             services and logistical support to all Committees constituted under the MAHARISHI 
             Initiative.</li>
             <li>To prepare and implement the budget of the Initiative, subject to prior approval by the 
             MAHARISHI Governing Board, in accordance with applicable financial regulations. </li>
             <li>To execute the communications strategy of the Initiative, including but not limited to</li>
             <ul>
               <li>The development, population, and ongoing management of the official 
             MAHARISHI website </li>
             <li>The production and dissemination of newsletters to regularly inform and update 
             Members and the broader research </li>
             </ul>
             <li>To ensure administrative continuity and operational coherence in the functioning of 
             the MAHARISHI Initiative. </li>
             <li>To provide administrative and logistical assistance to the Expert Working Groups 
             (EWGs) to enable the timely and efficient fulfilment of their mandates.  </li>
                           </ul>
                       </div>
        </section>

        <section id="organisation-of-committees-meetings-and-minutes">
          <h2>ORGANISATION OF COMMITTEES MEETINGS AND MINUTES</h2>
          <div className="point">
            <h3> ORGANIZATION OF MEETINGS AND RELATED EXPENSES </h3>
            <p>The meetings of the Committees may be materially organised, following a Committee’s 
                 Chairperson request, by the Secretariat, after prior arrangement with MAHARISHI Manager.  
                 The MAHARISHI Manager will, in the framework of the budget preparation and execution, 
                 annually fix the rules regarding MAHARISHI meetings costs in order to ensure a wise and 
                 efficient use of the budget.  </p>
          </div>
          <div className="point">
            <h3> MINUTES OF MEETINGS </h3>
            <p>Chairperson will draft a meeting report and send it to its respective members. The members 
                 of the Committee will then have one month to give their comments. Thereafter the 
                Chairperson will send the final version of the report to the members of the Committee and to 
                the MAHARISHI Manager.  <br/>
                The Chairperson may ask the MAHARISHI Manager to provide Secretariat support for the 
                drafting and circulation of the minutes. </p>
          </div>
        </section>

        <section id="confidentiality">
          <h2>CONFIDENTIALITY</h2>  
          <div className="point">
            <p>Members and the whole scientific community are wishing to speak freely and exchange 
            information without suffering any constrains, all the information exchanged between the 
            Members in the framework of the activities of the MAHARISHI, and notably during the 
            Committees’ meetings will be deemed not to be confidential.  <br/>
            Nevertheless, if some Members are wishing to exchange confidential information in the 
            framework of the activities of the Initiative they will have to sign, at their initiative, specific 
            confidentiality agreements. </p>
                      </div>
        </section>
        <section id="publication"> 
           <h2>PUBLICATION</h2>
           <div className="point">
             <p>The knowledge generated in the performance of MAHARISHI, including notably all the reports 
              and papers drafted by or for the Committees are aimed to be publicly available.  
              However, MAHARISHI will not publish a report, or a paper produced by a Committee as long 
              as it is not in its final and approved form.  <br/>
              External communication made on behalf of MAHARISHI will be approved by the Steering 
              Committee  </p>
                </div>
        </section>

        <section id="intellectual-property"> 
               <h2>INTELLECTUAL PROPERTY</h2>
                <div className="point">
                <p>of coordination activities – is deemed to be published or be freely available.  
                 For the avoidance of doubt, all matters related to intellectual property arising from research 
                 and development collaborative activities between some or all of the Members involved are 
                 outside of the scope of this Charter and will be addressed in the agreements or other 
                 instruments covering these activities and signed by the concerned Members.</p>
                </div>
        </section>

        <section id="commencement">
             <h2>COMMENCEMENT, MODIFICATION, CESSATION AND WITHDRAWAL</h2>
             <div className="point">
             <p>The provisions of this Charter will commence on the first signature of a Member appearing 
             on the signature pages of this Charter  
             Additional entities wishing to become Members will duly complete the New Members Form 
             as set out in Annex 1   <br/>
             The provisions of this Charter may be modified or ceased in their entirety by a decision of two 
             thirds majority of the Institutions Coordinating Committee. <br/> 
             Any Member may withdraw from this Charter by giving written notice to the MAHARISHI 
             Manager 90 days prior to its anticipated withdrawal.  <br/>
             Notification of a Member’s withdrawal from the Charter will be communicated to the other 
             Members by the MAHARISHI Manager and updated on MAHARISHI website on receipt 
             of formal notification of a Member’s withdrawal. </p>
            </div>
       </section>
       <section id="legal-disclaimer">
         <h2>LEGAL DISCLAIMER</h2>
         <div className="point"> 
           <p>Participation in MAHARISHI is on a voluntary basis. This charter is not legally binding and 
       places no legal obligation on the Members. </p>
         </div>
       </section>
       <section id="interpretation-and-application">
         <h2>INTERPRETATION AND APPLICATION</h2>
         <div className="point">
           <p>The members will settle any differences in the interpretation or application of the Charter 
       amicably through consultation or negotiation.  </p>
         </div>
       
       </section>
        
      </div>
    </div>
  );
};

export default Maharishi;
