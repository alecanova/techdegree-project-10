import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Import all components
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';

// Use withContext with all its components.
import withContext from './Context';

const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignInWithContext = withContext(UserSignIn);


export default () => (
    
  <BrowserRouter>
    <main>
      <Switch>
        <Route exact path= "/" component={CoursesWithContext} />
        <Route path= "/courses/:id" component={CourseDetailWithContext} />
        <Route path= "/signin" component={UserSignInWithContext} />
      </Switch>
    </main>
  </BrowserRouter>

)














