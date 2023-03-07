--Readme document for VAN PHAM, vantp2@uci.edu, #74369428--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

*/20
- 3/3 The ability to log overnight sleep
- 3/3 The ability to log sleepiness during the day
- 3/3 The ability to view these two categories of logged data
- 3/3 Either using a native device resource or backing up logged data
- 3/3 Following good principles of mobile design
- 3/3 Creating a compelling app
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
3-5 days, 3-6 hours each day


3. What online resources did you consult when completing this assignment? (list specific URLs)

Ionic docs: https://ionicframework.com/docs/

For passing data between pages: https://www.youtube.com/watch?v=gQpwQgWzV1w

Change color when clicking on button (option) : https://stackoverflow.com/questions/62860286/change-ionic-button-color-for-a-specific-button-not-for-all-of-them

Connecting Firebase : https://www.youtube.com/watch?v=8cp8GP-dXbY&t=1120s



4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
I did it myself


5. Is there anything special we need to know in order to run your code?
Requirements to run: 
- Install node
- Install ionic globally:  npm install -g @ionic/cli (recommended: npm install -g @ionic/lab)
- Install angular globally: npm install -g @angular/cli 
- cd sleeptracker: npm install
- Create firebase project and firestore db, add the configure into sleeptracker/src/environments/environment.ts
Run:
- cd sleeptracker
- ionic serve // localhost:8100
or ionic serve -l // localhost:8200

--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
I targeted more of young people (esp kids), so my UI has bright color as well as cute icons and background.


7. Did you design your app specifically for iOS or Android, or both?
I designed my app for both iOS and Android


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
When user clicks on the + button on main page, they will get to the page where they log their overnight sleep. They can start logging before they sleep 
(clicking "BEGIN TO SLEEP" button) and stop logging when they wake up (clicking the stop button). This is the way I found common in many sleeptracker apps.

9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
In the mainpage, their is a survey having options of how user feels during the day. Users can click on any option and click save to log the sleepiness.
This can be done many times during the day.


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
When they click on the "Sleeping" icon from main page, they will go to the page with a list of all overnight sleep they logged in (with the date and time). 
User then can select "View details" option to view details about that sleep period as well as all sleepiness they logged DURING THAT DAY.


11. Which feature choose--using a native device resource, backing up logged data, or both?
I chose to back up logged data


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
N/A


13. If you backed up logged data, where does it back up to?
I used Firebase to back up logged data

14. How does your app implement or follow principles of good mobile design?
- An initial screen
- Everything is straightforward and easy-to-use
- Alert for error prevention and notice when data is saved
- The ui looks pretty nice (I hope...)
