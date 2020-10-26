# The Wellness Scheduler Application
During the pandemic many large and small businesses are faced with the challenge of keeping their employees both safe and accomodating their possibly rapidingly changing schedules in the event that they are sick or get covid-19 in order to continue serving their customers. Thus, our team, The Truman Cyberdogs decided to create an application that allows for businesses to much more easily protect and accomodate their rapidly changing work force. This application features things like a contact tracer, so that managers are able to easily see what other employees an employee came into contact with in the last two weeks, as well as a scheduler that reccomends which employees to replace an employees shifts with in the event that they get sick, and many more. 

## Installation Process
To install this code, use the "clone" function on the "code" tab, and in a terminal do
```bash
git clone https://github.com/TylerKaelin/thewellnessscheduler.git
```
to get the full code. 

This app uses different packages. Using a package manager like npm
```bash
npm i
```
```
Then once the packages are installed, just run
```bash
npm start
```
and the application will start up on a local server.

## Usage
Since this is a full stack application, it is deployed on Heroku. Things you can do on this app include creating a login (as either an employer or employee), setting up a schedule, setting up availability, as well as more depending on your role choice. These separate pages include a dashboard which allow users to navigate their different pages to perform different functionalities.

## Tutorial
### Sign In
The first page you will see is the Sign In page. This page is where you will enter your email and password to login. The login will then take you to either the Employer or Employee homepage depending on what you signed up as.

### Sign Up
If you don't have an account stored, here is where you will make your profile. You can enter your first and last name, as well as a username, and password. Then after the information is entered, you will choose whether you are an employer or employee and be directored to the appropriate dashboard to manage your work schedule, fill out your daily health form, and etc.

### Employer
#### Schedule
The first page you will see if you login as an employer is the schedule page. This shows the schedule of all employees. As an employer, you can add times when your employees  work based on their availability, which is stored in the employees page. To navigate to the other pages, click the hamburger icon in the top left to open up the dashboard, and each field links you to a different page. The schedule also provides reccomendations for which employee could possibly replace another in the event that an employee gets sick.

#### Employees
This page will list the current employees within the company, specifically their first name, last name, username, their work availability (both normal availability and sick availability). This specific information was choosen so that the employer could use it to create the work schedule. 

#### Contact Tracer
Here is a page that will show the employees that worked in the last two weeks and came into in contact with other employees. You can search for an employee name, and it will bring up the list of other employees that were in contact with that employee based on their schedules. This feature is especially important because of covid-19 and other sicknesses employees may come into contact with.

### Employee
#### Schedule
This will be the first page when you login as an employee. It is essentially the same schedule page as the employer schedule page.

#### Availability
This page is where an employee can input their normal availability and their "sick" availability, which is essentially that employee's back-up availability which an employer can use to fill shifts in the event that an employee gets sick.

#### Health Checker
This page is a small questionarre for an employee to fill out that gives indication of the COVID-19 virus or other sicknesses. Submitting this daily will inform the employer of the health status of that employee.

### Logout
If you click the logout link on the dashboard (in both the employer and employee pages), then it will log you out of the application.

## Contributions
This app was developed specifically for the KC Federal Reserve Code-a-thon, so contributions are not accepted as of now. 

## Authors (Contributors)
Authors of this app include Tyler Kaelin, Deepson Shrestha, Logan Morris

## License
MIT License

Copyright (c) 2020 The Wellness Scheduler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Support
Email contact for help with the app is tylerkaelin18@icloud.com
