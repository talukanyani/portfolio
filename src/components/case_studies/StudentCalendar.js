import styles from './CaseStudy.module.css'

export default function StudentCalendarCaseStudy() {
  return (
    <div className={styles.case_study}>
      <h2>Overview</h2>
      <p>
        Student Calendar is a productivity app designed specifically for students to
        organise and manage their academic work.
        It is more than just a calendar, it is a digital companion for students.
        From high school to university, it helps learners manage their time,
        reduce missed deadlines, and build productive habits — all within a clean,
        student-centric interface.
      </p>

      <h2>The Problem</h2>
      <p>
        As a university student, I struggled with staying organized and keeping track of
        my assessments.
        Most calendar apps were too general and too complicated for student-specific needs.
        I noticed that many of my classmates faced the same problem.
        Multiple modules and assessments run simultaneously.
        Without a clear view of what's ahead, it's easy to procrastinate or feel overwhelmed,
        Student Calendar solves this problem by giving students a visual way to plan
        and prepare ahead of time.
        {/* Traditional apps fall short in this area, especially for academic structures. */}
        {/* One assignment overlaps with another, a test comes right after a big project, 
        and suddenly you're behind */}
        {/* Time management is one of the biggest challenges in academic life. */}
      </p>

      <h2>Features and Functionality</h2>
      <ul>
        <li>Adding, editing, and deleting courses, assessments, and plans.</li>
        <li>Tables</li>
        <ul>
          <li>Tables of courses with their assessments.</li>
        </ul>
        <li>Countdowns</li>
        <ul>
          <li>Time countdown to each assessment or plan.</li>
        </ul>
        <li>List</li>
        <ul>
          <li>Users can visualise their schedule in a list view.</li>
        </ul>
        <li>Calendar</li>
        <ul>
          <li>
            Users can visualise their schedule in calendar view.
            With dynamic dates, each date contains a coloured dot representing
            an assessment or a plan of that date.
            Users can press on a date to see assessments and plans of that date.
          </li>
        </ul>
        <li>Caching</li>
        <ul>
          <li>
            Data such as assessments, plans, and settings are cached and retrieved
            from app storage.
          </li>
        </ul>
        <li>Syncing</li>
        <ul>
          <li>
            User's data such as assessments and plans are stored and retrieved from
            cloud database, to back up and scync these data across devices
            where user is signed in.
          </li>
        </ul>
        <li>Authentication</li>
        <ul>
          <li>
            Secure user authentication mechanisms where users can
            sign up, in and out using Google or email and password.
          </li>
        </ul>
        <li>Account</li>
        <ul>
          <li>
            User can change account name or password, link or unlink sign in methods,
            and delete account.
          </li>
        </ul>
        <li>Subscription</li>
        <ul>
          <li>Users can subscribe to premium and also manage their subscription.</li>
        </ul>
        <li>Ads</li>
        <ul>
          <li>App calculates the usage and promt user to watch ad or subscribe.</li>
        </ul>
        <li>Notifications</li>
        <ul>
          <li>
            Local notifications that reminds users about their upcoming
            assessments and plans.
          </li>
        </ul>
        <li>Settings</li>
        <ul>
          <li>
            Users can change theme mode, choose which notifications to receive,
            send feedbacks, and also set other preferences.
          </li>
        </ul>
      </ul>

      <h2>Technical Details</h2>
      <ul>
        <li>Developed using Dart programming language and Flutter framework.</li>
        <li>Utilised the Flutter Bloc for architecture, state management, and caching.</li>
        <li>Used Firebase Cloud Firestore for real-time data synchronization and back up.</li>
        <li>Firebase Authentication for authentication and managing user account.</li>
        <li>
          Implemented local notifications with platform-specific customization
          (Android and Windows).
        </li>
        <li>Integrated Google AdMob to show ads.</li>
        <li>Used RevenueCat to build subscription paywall and manage subscriptions.</li>
      </ul>

      <h2>Development Process</h2>
      <ul>
        <li>
          Followed the Bloc architecture pattern for clean code separation.
          Organised the codebase into separate folders for UI,
          business logic, and data.
        </li>
        <li>
          Wrote clean and readable code,
          ensuring maintanability and scalability of code base,
          and also ensuring the app's performance remains smooth and responsive.
        </li>
        <li>
          Used Visual Studio Code, Visual Studio, and Android Studio
          to write code and to debug.
        </li>
        <li>Used Git version control and hosted the code on GitHub.</li>
      </ul>

      <h2>Deployment</h2>
      <p>
        Published the app on Play Store and Microsoft Store.
        Not yet published on App Store due to lack of iOS testing tools
        (MacBook) and publishing fee.
      </p>

      <h2>Conclusion</h2>
      <p>
        Student Calendar app was a challenging but rewarding project that allowed me
        to showcase my programming and software development skills.
        This project reflects my passion not just for coding,
        but for solving real-world problems that matter to students like me.
        Programming and dubugging this app on a low performing laptop was not an easy task,
        but because of passion and dedication the app actually came up.
        Student Calendar has helped hundreds of students improve their productivity
        and academic assessments and plans management.
      </p>
    </div>
  )
}
