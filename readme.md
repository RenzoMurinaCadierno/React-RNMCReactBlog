RNMC React Blog
========================================

Overview
----------------------------------------

A simple blog app made with react from scratch.

Signup/Login, create/edit/delete your posts, view other people's posts via their URL. Nothing much besides that.

A working instance of this app is deployed at [this Firebase site](https://rnmcreactblog.web.app/).

I am slowly falling in love with React as my only front-end library, and I found out it combines extremely well with Firebase as a database/authentication/hosting server, so I decided to give them a shot. The result is impressive to me, and what surprises me the most is that I only used a tiny bit of what both React and Firebase have to offer. I cannot wait to do even more with them.

Even though I know the most commonly used module -and automatic way of creating the scaffolding of a react app- is *create-react-app*, it is always better to know how to do anything from the ground up, and that is why this project is here and done the way it is.

[Parcel.js](https://parceljs.org/) was my bundler instead of Webpack, which I would normally use. I chose [Ant design](https://ant.design/) as a styling framework instead of Bootstrap, and [Reach router](https://reach.tech/router) instead of react-router-dom. Do not take me wrong, though. Each mentioned framework/module is awesome and certainly gets its job done, but since I was to build an app from the bare basics, I might as well try some building materials that are new to me too. Why not?

I am ways away from being a designer, and that is why the aesthetics might not be too pleasing, but I tried making everything functional and with a minimum of visual appeal the least. Though I forgot to add error validation in signup/login, which will not instruct to do anything if the supplied email and/or password are incorrect. Moreover, I still have to learn how to optimize Firebase deployment when using its *auth* and *database*, this is my second shot at it and I am sure I got just the dirty basics working, so some errors might pop up concerning those. But besides that, I could not spot any other bug myself. Please, feel free to notify me of any you might come across.

I have put together this example up following Daniel Arzuaga's proposed exercise on his ['React + Firebase: For Beginners'](https://www.udemy.com/course/new-react-firebase-real-time-serverless-apps/) Udemy course. Definitely check it out if you want to learn this framework, HTML, CSS, JQuery, Bootstrap and Python basics from scratch.

As for my other projects, please feel free to go to [my GitHub page](https://github.com/RenzoMurinaCadierno) to check them out. I am still on my learning tracks, so you will see new projects frequently. I specialize in Python and Javascript, and whatever I upload is normally related to web, game and app developing, or Python scripting for multiple purposes.

Instructions
------------------------------------------

Either go to [my hosted working example](https://rnmcreactblog.web.app/) or clone the repository yourself.

If you clone it, then just `npm init` to install everything in node_modules/ and `npm start` to launch *parcel.js*. Be sure to create your own firebase project to it as well as to modify firebase.js to include your firebase database configs. The app will not work otherwise.

The app will be served at *localhost:1234*.

As a **non-logged-in user** you can:

- Sign up and log in.
- View any other user posts list or individual post by their specific URL. There is no functionality to navigate on all posts since this was just a simple app that served to learn additional functionality of both React and Firebase.

As an **logged-in user** you can:

- Do everything a non-logged-in user can do.
- Log out, which will redirect you to the login page.
- Create a post using the "Create" option in the navbar.
- Edit your posts using the pencil icon.
- Delete a post using the bin icon.

What I learned from this project
------------------------------------------
- *Firebase* is an incredible server. I have used it only once before to host a React app that used a Heroku-hosted Django API server, but that time I did not know Firebase itself could handle Databases, Authentications and much more with such ease. I will take it into much consideration from now on, but this will not stop me of making and handling my own custom backend solutions with Django, since that framework is extremely powerful by itself too. I am tempted to put my hands on NodeJS in the near future. We will see how it goes.
- *Ant Design* resulted to be an efficient and handy styling framework for React. I have used vanilla CSS, MaterialUI and Bootstrap in all my previous developments, which are awesome solutions themselves, but now I have one more to add to the menu.
- The power of reusability React has for their components is something out of this world to me. I already knew that, but the more I get into it, the more I grab and hold on to that idea. I even left Login and Signup components separated instead of merging them up to visually see how they affect the performance.
- Hitting the database several times when not needed is inefficient to say the least. I could find a workaround not to call for database updating using Firebase's onSnapshot function (which was a gift of the gods) when deleting a Post. However, since Edit was a separate component, when hopping back to the posts list, the DB was called upon once again to retrieve all user's posts. I am yet to learn how to retain the DB snapshot when switching between components. My only idea is to reuse the whole Post list component even to edit the post, but that would be the easy solution. One mission for next projects is to learn what I stated.

### Thank you for reading and for taking your time to check this project out!
