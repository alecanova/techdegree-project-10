import config from './config';

export default class Data {

    api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {

        const url = config.apiBaseUrl + path;

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        };

        if (body !== null) {
            options.body = JSON.stringify(body);
        }

        if (requiresAuth) {
          const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);
          options.headers['Authorization'] = `Basic ${encodedCredentials}`;
        }
      
        return fetch(url, options);
    }

            
    responseHandler (response, errorMessage) {
          // 200 OK
        if(response.status === 200) {
            return response.json().then( data => data);
          // 201 Created
        } else if(response.status === 201) {
            return { location: response.headers.get('location') }
          // 204 No Content
        } else if(response.status === 204) {
            return `The server successfully processed the request.`;
          // 400 Bad Request
        } else if(response.status === 400) {
            return response.json().then( data => data);
          // 401 Unauthorize
        } else if(response.status === 401) {
            return null;
          // 403 Forbidden
        } else if(response.status === 403) {
            throw new Error('403');
          // 404 Not Found
        } else if(response.status === 404) {
            throw new Error('404');
          // 500 Internal Server Error
        } else if(response.status === 500) {
            throw new Error('500');
        } else {
            throw new Error(errorMessage);
        }
    }

    /*** COURSE DATA ***/

    // list of courses - /api/courses
    async getCourses() {
        const response = await this.api('/courses');
        return this.responseHandler(response, 'Error getting the courses.');
    }

    // course detail - /api/courses/:id
    async getCourse(id) {
        const response = await this.api('/courses/' + id);
        return this.responseHandler(response, `Error getting the course with id ${id}`);
    }

    // create course 
    async createCourse(course) {
      const response = await this.api('/courses/', 'POST', course);
      return this.responseHandler(response, `Error creating ${course}`);
    }

    // update course 
    async updateCourse(course) {
      const response = await this.api(`/courses/${course.id}`, 'PUT', course);
      return this.responseHandler(response, `Error updating course ${course.id}`);
    }

    // delete course 
    async deleteCourse(id) {
      const response = await this.api(`/courses/${id}`, 'DELETE');
      return this.responseHandler(response, `Error deleting course ${id}`);
    }

    /*** USER DATA ***/

    async getUser(username, password) {
      const response = await this.api(`/users`, 'GET', null, true, {username, password});
      return this.responseHandler(response, `error getUser: ${username}`);
    }

    async createUser(user) {
      const response = await this.api('/users', 'POST', user);
      return this.responseHandler(response, `error createUser: ${user}`);
    }

}