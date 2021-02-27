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
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';

// Use withContext with all its components.
import withContext from './Context';

const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignUpWithContext = withContext(UserSignUp);
const CreateCourseWithContext = withContext(CreateCourse);


export default () => (
    
  <BrowserRouter>
    <main>
      <Switch>
        <Route exact path= "/" component={CoursesWithContext} />
        <Route path= "/courses/:id" component={CourseDetailWithContext} />
        <Route path= "/signin" component={UserSignInWithContext} />
        <Route path= "/signup" component={UserSignUpWithContext} />
        <Route path= "/create" component={CreateCourseWithContext} />
      </Switch>
    </main>
  </BrowserRouter>

)














