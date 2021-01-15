import React, {Component} from 'react';
import Courses from './components/Courses'

export default class App extends Component {
    
  state = {
      courses: [],
  }

  componentDidMount() {
      fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => {
          this.setState({ courses: data })
      })
      .catch(err => {
          console.log('Error fetching and parsing data', err);
      })
  }

  render() {
    return (
      <Courses courses={this.state.courses} />
    )
  }
}














