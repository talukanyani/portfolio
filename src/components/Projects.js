import styles from './Projects.module.css';

import Project from './Project';

import StudentCalendarCaseStudy from './case_studies/StudentCalendar';
import StudentCalendarWebsiteCaseStudy from './case_studies/StudentCalendarWebsite';

import student_calendar_screenshot from '../assets/images/student_calendar_screenshot.png';
import student_calendar_website_screenshot from '../assets/images/student_calendar_website_screenshot.png';

export default function Projects() {
  return (
    <div id='projects' className={styles.projects}>
      <h2>Personal Projects</h2>
      <Project
        title='Student Calendar'
        description='A cross-platform app equipped with tools
            that help students manage their academic work.'
        tags={
          ['Dart', 'Flutter', 'Bloc Architecture', 'Firebase']
        }
        productLink='https://studentcalendar.app'
        image={
          <img
            src={student_calendar_screenshot}
            alt='Screenshot of Student Calendar app home screen.'
          />
        }
        caseStudy={<StudentCalendarCaseStudy />}
      />
      <Project
        title='Student Calendar Website'
        description='A website that showcases Student Calendar app.'
        tags={
          ['HTML', 'CSS', 'JavaScript', 'React', 'React Router']
        }
        productLink='https://studentcalendar.app'
        image={
          <img
            src={student_calendar_website_screenshot}
            alt="Student Calendar website page screenshot."
          />
        }
        caseStudy={<StudentCalendarWebsiteCaseStudy />}
      />
    </div>
  );
}