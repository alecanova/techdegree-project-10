import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


// Import all components
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';

// Use withContext with all its components.
import withContext from './Context';
import PrivateRoute from './PrivateRoute';

const HeaderWithContext = withContext(Header);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);


export default () => (
    
  <BrowserRouter>
    <main>
      <HeaderWithContext />

      <Switch>
        <Route exact path= "/" component={CoursesWithContext} />
        <Route path= "/courses/:id" component={CourseDetailWithContext} />
        <Route path= "/signin" component={UserSignInWithContext} />
        <Route path= "/signup" component={UserSignUpWithContext} />
        <Route path= "/signout" component={UserSignOutWithContext} />
        <PrivateRoute path= "/create" component={CreateCourseWithContext} />
        <PrivateRoute path= "/courses/:id/update" component={UpdateCourseWithContext} />
      </Switch>
    </main>
  </BrowserRouter>

)














