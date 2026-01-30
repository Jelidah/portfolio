import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
      <div id="history">
        <div className="items-container">
          <h1 className="text-3xl font-bold mb-8">Career History</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                contentArrowStyle={{ borderRight: '7px solid white' }}
                date="Sept 2022 – Sept 2024"
                iconStyle={{ background: '#000', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Software Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">Institute for Health Measurement (IHM), Lusaka, Zambia</h4>
              <p>
                Full-stack development of SmartCare Pro reporting, NCD workflows, POC test modules, and billing API. Led clinical tool redesigns that reduced entry time by 50% and optimized SQL scripts for 1M+ patient records.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Feb 2022 – Aug 2022"
                iconStyle={{ background: '#000', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">IHM, Lusaka, Zambia</h4>
              <p>
                Created backend tools for SmartCare support and built a vendor rating system that reduced supplier evaluation time by 60%.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jan 2021 – Dec 2021"
                iconStyle={{ background: '#000', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">University of Zambia, Lusaka, Zambia</h4>
              <p>
                Implemented a Laravel-based interface for the CICT system, reducing processing time by 30% for 5,000+ students, and redesigned backend workflows for improved performance.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
  );
}

export default Timeline;
