# MiHabit
The MiHabit website is a place to create and track custom or default habits.  Added gamification elements include streaks and a leaderboard, implemented to encourage user engagement. Authentication and authorization using JsonWebTokens and BCrypt password hashing plus salting is used to ensure account security. 

This website is deployed via Netlify and Heroku. 


(insert pics here)


## Installation

- Use `git clone` to clone or downlaod the repo
- Open terminal and navigate to root of directory

## Usage

### Server

- Execute the command `bash _scripts/startDev.sh` to:
    - Run and seed the postgresql database
    - Start the api and db services
    - Serve client on port 3000
    - Locally serve the api on port 8080
    - Install the npm dependencies and run server using nodemon
    - Use ctrl+c to stop the server

- Run `bash _scripts/stop.sh` to stop server

- Run `bash _scripts/teardown.sh` to stop the server and teardown by:
    - Stopping all running services
    - Remove containers
    - Remove volumes

### Client

- Once server is running, open index.html file on browser by:
    - Navigating to localhost:8080 in browser search bar
    - Using link in terminal
    - Using live server with VSCode

## Technologies

- Express
- HTML, CSS, JavaScript
- GitHub
- Postgres
- Docker
- JsonWebTokens
- Zoom and Slack for communication


## Bugs


## Wins and Challenges 

### Wins

### Challenges


## Future Features


## Authors and Acknowledgements 

- Alina Laura Vizitiu
- Immanuel Egboche
- Marco Porcaro
- Heather McGlynn
