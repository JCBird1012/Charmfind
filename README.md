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
Updates to availability information is made by making POST requests to ```/data/<first word of dining hall here>```.
The only parameter sent is the actual availability (a boolean value). Time and date information is updated server-side.

Eventually, I'll add routers for grabbing individual dining hall information, but for now, the entire JSON can be easily grabbed.
