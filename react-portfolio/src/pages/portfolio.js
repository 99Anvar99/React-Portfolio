import React from 'react'
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import ProjectItem from '../components/ProjectItem';
import '../styles/projects.css';
import { projectList } from "../helpers/projectList";

function portfolio() {
  return (
    <div className='portfolio'> 
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element--school'
          date="2017 - 2021" iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<SchoolIcon/>}>
          <h3 className="vertical-timeline-element-title">St. Patrick's High School</h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
          date="2023 - Present" iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<SchoolIcon/>}>
          <h3 className="vertical-timeline-element-title">Carleton University bootCamp</h3>
          <p>Full Stack Web Development</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className='projects'>
        <h1>Portfolio</h1>
        <div className="projectList">
        {projectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
          </div>
      </div>
    </div>
  );
}

export default portfolio