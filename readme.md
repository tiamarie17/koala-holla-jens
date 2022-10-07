Project Name: Koalla Holla
------------


Description
-----------
For this project, we edited an app so that it allows us to add, update, and delete information about koalas from a database. It also renders those items on the DOM. 

To do this, we started by adding "ready for transfer" and "delete" buttons that are appended to the DOM within the render function in the client.js file. Then, we created click listeners for those buttons in the onReady function and made GET, POST, PUT, and DELETE AJAX requests in the client.js file within different functions. Finally, we connected the AJAX requests to endpoints in the koala.router.js file. In the koala.router.js file, we used SQL to send commands to the database.

The GET request gets the list of current koalas in the database and renders them to the DOM on pageload and when the list is updated. When a user adds a new koala using the input form, the POST request takes input from the user and adds it to the database. The updated list gets rendered on the DOM once it is sent back to the client. When a user clicks the 'Ready to Transfer' button, the PUT request updates the status of ready to transfer for the koala that was clicked on in the database using a boolean value. The button also has a toggle feature so that the user can change the value back once they have clicked it. Additionally, we included form validation to ensure that all fields are required  in the input form before the user can submit them. Finally, when the user clicks the delete button, the DELETE request runs, sends a command to the database from the server, and deletes the koala that was cliked on from the database before sending it back to the client and rendering the updated list to the DOM. 


Technologies
------------
* JQuery
* Node
* Express
* SQL

                 |









