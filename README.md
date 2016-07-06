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

###License
This software is licensed under the BSD 2-clause license.

```
Copyright (c) 2016, Jonathan Caicedo
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```
