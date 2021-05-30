# Guestbook API

Guestbook is an Front-end app for guestbooks that let users create account to add/edit/delete message as well as replying to messages

## Installation

Use the commands below to download and install the project

```bash
$ git clone https://github.com/amsstudio/guestbook_vue.git

$ cd ../path/to/the/file

npm install
```


## Start

Use the command below to start the project after installing it.

```bash
npm run serve
```


## Build

Use the command below to start the project after installing it.

```bash
npm run build
```


## Project Structure

```bash

Project directory
-public
-src

--api
---auth.js
---messages.js

--assets
---css
----classes.css

--components
----auth
-----AuthForms.vue
----Home
-----Message.vue

--pages
---Auth
---Create-Message
---Home
---Message

App.vue
main.js
router.js
```


## FAQs
***
A list of frequently asked questions

1. **What is the api folder?**
api folder contains auth and message files with classes for dealing with API

2. **What is the AuthForms Component file?**
The file contains both login and signup forms with their methods and they are ready to seperate into two files.





## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License
no license
