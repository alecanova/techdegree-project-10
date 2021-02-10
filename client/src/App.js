import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Import all components
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';

// Use withContext with all its components.
import withContext from './Context';

const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);



export default () => (
    
  <BrowserRouter>
    <main>
      <Switch>
        <Route exact path= "/" component={CoursesWithContext} />
        <Route path= "/courses/:id" component={CourseDetailWithContext} />
      </Switch>
    </main>
  </BrowserRouter>

)














