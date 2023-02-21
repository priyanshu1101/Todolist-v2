# To-Do List App
The To-Do List App is a web application that allows users to keep track of their tasks and organize them into custom lists. The app is deployed on Render and uses MongoDB Atlas for the database.
## Features
*	Display of current time
*	Common list for adding and removing items
*	Custom list creation by entering the name of the list in the current list box and hitting the enter key
*	Ability to add and remove tasks from custom lists
## Deployment
The app is deployed on Render, a cloud platform that makes it easy to deploy and manage web applications. The app is automatically deployed whenever changes are pushed to the main branch of the GitHub repository.
To access the deployed app, click on this https://to-do-list-5738.onrender.com/.
## Database
The app uses MongoDB Atlas for the database, a fully-managed cloud database service that provides high availability, automatic scaling, and backup and recovery capabilities. The app uses the Mongoose ODM to interact with the database.
Technologies
The app is built using the following technologies:
*	Node.js
*	Express.js
*	MongoDB
*	Mongoose
*	HTML
*	CSS
*	JavaScript
## Usage
To use the app, follow these steps:
1.	Visit the deployed application URL.
2.	The home page will display the current time and a common list where you can add and remove items.
3.	To create a custom list, enter the name of the list in the current list box and hit the enter key.
4.	To add a task to a list, enter the task in the input box and hit the add button.
5.	To remove a task from a list, click on the task to mark it as completed, and then click on the delete button.
## Contributing
Contributions to the project are welcome. To contribute, follow these steps:
1.	Fork the repository.
2.	Create a new branch for your changes.
3.	Make your changes and test them to ensure they work as expected.
4.	Commit your changes and push them to your fork.
5.	Submit a pull request to the main repository.
## Development
To set up the project for development, follow these steps:
1.	Clone the repository to your local machine.
2.	Install Node.js and npm.
3.	Install the project dependencies by running npm install.
4.	Set up a MongoDB Atlas account and create a new cluster.
5.	Create a .env file in the project root directory and add the following environment variables:
javascriptCopy code

MONGODB_URI=<your MongoDB Atlas connection string> 

6.	Start the development server by running npm start.

## License
The app is open source and is available under the MIT License. See the LICENSE file for more information.

## Credits
The app was created by Priyanshu Bansal. If you have any questions or feedback, please contact me at priyanshubansal35@gmail.com.

