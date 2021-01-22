import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Import all components
import Courses from './components/Courses';

// Use withContext with all its components.
import withContext from './Context';
const CoursesWithContext = withContext(Courses);



export default () => (
    
  <BrowserRouter>
    <main>
      <Switch>
        <Route exact path= "/" component={CoursesWithContext} />
      </Switch>
    </main>
  </BrowserRouter>

)














