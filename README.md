# Charmfind
A crowdsourced website that can tell you which dining halls at RPI have Lucky Charms.

### Installation
The backend for this project requires Node.js... So make sure you have that. More information <a href = https://nodejs.org/en/download/package-manager/>here</a>.

We're also going to need some install some Node modules, so fire up npm and install these modules: 
* express
* moment
* easyjson
* body-parser

Or if you're lazy, just run this...

      npm install express moment easyjson body-parser
      
### API (if you want to call it that?)
Updates to availability information is made by making POST requests to ```/data/update```.
There are two parameters to set, an id, and an available flag (a boolean).
The id flag (starting at 0) is simply the dining halls in alphabetical order.

There is also the ability to grab information on specific dining halls, this can be done by making GET requests to ```/data/info``` using the same id as you would when updating information. The entire dataset can be grabbed by **not** specifying an id.
