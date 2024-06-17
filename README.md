[![My Skills](https://skillicons.dev/icons?i=redux,react)](https://skillicons.dev)
# Calendar. io

![redux-basics](https://github.com/xcinek1337/task-react-redux/assets/125750465/db9dfdd4-7d05-4f11-9d30-cf4303ec9961)

Calendar.io is a web application that allows users to create and manage a list of meetings with clients. The application features adding meetings in a popup, with inputs validated using JavaScript. The application is built using React and React-Redux for state management. Additionally, the project includes a small local API using the JSON Server package, which provides a mocked database. This ensures that data does not disappear after refreshing the application.


## Features 

- Add and delete meetings
- Validate form inputs
- Searching meetings by name
- Manage state using Redux
- Mocking data with JSON Server

## Technologies Used

- React
- React-Redux
- JSON Server
- UUID for unique id meeting
- SCSS for styling


## What I Learned

- First steps with operating the state with redux, I learned how to write actions performed on the state of redux, and how to write a reducer that performs changes to the state
- Further exercise of API integration into my projects, here was used JSON server package, which allowed to create a small database, so we can work as with a normal api, and at the same time watch what happens to the data that we upload/edit there

## Acknowledgements

This project was developed as part of the mentoring program at [DevMentor.pl](https://devmentor.pl). I would like to thank my mentor for their invaluable guidance and feedback during the development of this project. Their insights helped me improve my code quality and deepen my understanding of React.

## Getting Started

To view the project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/xcinek1337/task-react-redux.git
    ```
2. Navigate to the project directory:
    ```sh
    cd task-react-redux
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the JSON server:
    ```sh
    json-server --watch ./db/data.json --port 3005
    ```
4. Start the development server:
    ```sh
    npm run start
    ```

The project should now be running on `http://localhost:8080`.
