# Real-Time-Chat-Application-task-2
Project Title: Real-Time Chat Application using Socket.IO
Objective
The objective of this task was to build a real-time chat application using WebSocket technology, enabling instant communication between multiple users with frontend and backend integration.
Technologies Used
•	Node.js
•	Express.js
•	Socket.IO
•	HTML5
•	CSS3
•	JavaScript
Working Explanation
•	A Node.js server is created using Express.
•	Socket.IO is used to establish real-time, bidirectional communication between clients and server.
•	When a user sends a message, it is emitted to the server via WebSocket.
•	The server broadcasts the message instantly to all connected clients.
•	The frontend dynamically updates the chat messages without page refresh.
•	Multiple users can chat simultaneously by opening the app in different browser tabs or devices.
Outcome
The application successfully demonstrates real-time communication, WebSocket implementation, and frontend-backend integration.
________________________________________

# Real-Time Chat Application (Task 2)

## Description
This project is a real-time chat application built using Socket.IO that allows multiple users to communicate instantly.

## Features
- Real-time messaging using WebSocket
- Multiple user support
- Instant message broadcasting
- Frontend and backend integration
- Clean and responsive UI

## Technologies Used
- Node.js
- Express.js
- Socket.IO
- HTML
- CSS
- JavaScript

## Project Structure
task2-chat-app/
│
├── server.js
├── package.json
└── public/
├── index.html
├── style.css
└── script.js

## How to Run
1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
3.	Start the server:
4.	node server.js
5.	Open in browser:
6.	http://localhost:3000
7.	Open the URL in multiple tabs to test real-time chat.
Output
Messages are delivered instantly between connected users without page refresh.
Author
Vijay Tiwari
