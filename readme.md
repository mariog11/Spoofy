# Spoofy
[Link to Spoofy](https://spoofy-client.firebaseapp.com)

## Introduction
This is a responsive user-friendly web app which utilizes Spotify's Web API for Users to view their account information and browse their own songs, artists, playlists and albums, as well as Spotify's extensive libraries. Spoofy began as a project for a course at my university in fall 2018, and has evolved into much more since then.

# Technology
The frontend for this application utilizes [Angular](https://angular.io/), [Bootstrap 4](https://getbootstrap.com/), and was publicly deployed with [Firebase](https://firebase.google.com/) hosting. The backend was built with [ExpressJS](https://expressjs.com/) and was publicly deployed with [Heroku](https://dashboard.heroku.com/).  

# The Road


## Early July 2019
At this point, I have basically decided on the branding/styling of my portfolio site, created templates for a handful of pages on the site, and ported it all to Angular. The month before, I was working on giving an Ionic App I developed months ago a face-lift and I decided I wanted to make Spoofy publicly available.

The foundations for the frontend/backend of this project were provided to us in the course. Minimal in styling, functionality, and really just overall appeal, the finished product at submission left something to be desired. At the time of submission, I was relatively new to web development with only hints of experience in HTML/CSS and JavaScript so I was impressed with it and really eager to learn about the world of web development and its possibilities. Nevertheless, I decided that I would breathe new life into the project upon revisiting the project.

I completely restructured the frontend of the app. It now employs child routing, a new styling, layout, basically everything I could possibly change. Spotify's branding is very prominently worn throughout the app. Every Angular Component I kept from the original project is completely different and accompanied by double the amount in new Angular Components. At this point, its an absolutely different project.

## Late July 2019 - Early August 2019
I was able to successfully deploy Spoofy to firebase, but of course, as with all software endeavors, there was a caveat. Although Spoofy was publicly available, it was essentially useless. The backend was configured for local use and thus could not communicate with the client, let alone make calls to the Spotify API, if anyone else tried to use it on their own computer. Preparing the backend for deployment and actually deploying it was my remaining task. Enter 'Firebase Functions'.

The impression Firebase had on me was that it was the answer to all my problems nad prayers. Basically, I thought that I could use Cloud Functions, in conjunction with Firebase Hosting to prop up my existing backend. 

**_THAT'S A BIG NO, CHIEF_**

I spent three tumultuous weeks trying to make it work and I just couldn't figure it out. To this day, I'm still not quite sure what the exact problem was. Eventually, I gave up on that and just went with Heroku for the backend instead. 

# The Future
I really want to implement AuthGuards to prevent stupid and unnecessary console logs and communications to the backend. I want to also fix the navbar so that it doesn't just always have a Log In button, even if you're already log in. Also ... session middleware. It also kind of looks like the client displays double of the same content, which is technically true, but it isn't. What is seen is just the explicit and non-explicit version of the same content shown side-by-side. Pagination and transitions for large swaths of content to be more easily browsed. The ability to add, remove, and alter items in user's personal library would be nice as well. Also, a web player would be cool to implement. Since I'm spoofying Spotify with Spoofy, I might as well make the Spotify Web Player useless. The last thing that currently comes to mind which I would like to implement for the project is Lazy Loading.

# Conclusion
This was a pretty fun project. I'm still not sure if the experience was worth the final product and work, but it was fun, nevertheless. Thank you to my professor for introducing me to web development. Thank you Angular, Heroku, and Firebase. Lastly, thank you, Internet. 