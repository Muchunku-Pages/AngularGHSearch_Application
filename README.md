**Muchunku-Pages**
# NgHubSearch Application
Clone Git-Hub Website with API search functionality
## Description

The NgHubSearch Application is an Angular based website application enabling the vistors to the website application to search for existing GitHub UserNames and if found return the UserName's resulting GitHub User-Profile and GitHub Repository-Details information as provided by the related API.

This NgHubSearch Application project was initially generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.


## Versioning

NgHubSearch Application -V1.0 

## Author
Brian Mwenda Muchunku

## Application Features

As a deployer of the NgHubSearch_Application web application you should be able to:

  1. Build and deploy the live application on a web server to be avail it to interested users on the internet rendered via a compatible web browser such as Google Chrome.

  2. Enable visitors to search for GitHub Users by entering a GitHub UserName into a search form input field box provided on the web applications home/ landing page and an activated search button to be able to post a request to the relevant API to consume and return the corresponding User Profile and Repository details in the event the GitHub UserName being searched exists on GitHub.
  
  3. Prompt the user to re-enter a correct GitHub UserName value in the event of an error and provide a link and notification to enable a user navigate back to the Search Homepage in the event of a 'no response' 404 error. 
  
  3. Enable the NgHubSearch Application user to be routed automatically to the next template view i.e. the User-Profile HTML View where the results of the consumed API are successfully returned and render the relevant data in the template using Angular data-binding interpolation syntax placed inside HTML Page Elements.

  4. Enable the user navigate from the User-Profile View to the corresponding Repository-Details HTML Page View of the resulting Git-Hub User Profile's respective repository details facilitated by the Routing Module using the corresponding 'Repository-Details' link provided in the nav bar in the header section of the page and view the GitHub Users Repository Details rendered in HTML Elements in the template page using Angular data-binding interpolation syntax. 
  
  5.Provide navigation functionality to enable a user to navigate back to the User Profile Page View from the Repository-Details HTML Page View or back from the User Profile Page View to the main Search Home Page View, facilitated by the  Application's Routing Module, using the corresponding page links provided in the nav bar in the header section of the page.

### Project Set-Up and Access Instructions

To access this web application and/or the application code used in its development, go to: https://github.com/Muchunku-Pages/NgHubSearch_Application.git and select the relevant option from the menu options provided.

A live link to the website is unfortunately  unavailable in the Github repository via gh-page at this time but may be provided in future.    

## Built With

* Typescript - This is a subset of JavaScript that enables strict static typing of variables
 It is used to develop the Angular DOM(Document Object Manipulation) code logic and to facilitate  the creation of Angular Objects and Components from modules and manipulation of those Objects using various methods and custom functions to implement data-binding and event-binding, Routing, Promise / Observable API Consumption in the NgHubSearch web application.

* HTML - For specifying the the structural and content layout of the web application template and how it is to be rendered by a browser.

* CSS - Styles the template by applying formatting to the template elements and their layout. 

* Bootstrap- Special CSS libraries used to generate standardized pre-styled HTML Elements and add predictable formatting when styling webpages template elements.

##Known Bugs

There's a major bug as a result of additional RXJS extension modules installed into the core Angular framework files which was in conflict with the installed Angular CLI version in the course of the NgHubSearch Application's development, preventing any further manipulation of the Application by Angular including preventing the building and deployment of the application.

Additionally there were challenges in configuring the Promise / Observable which was to consume the GitHub API and convey the data retrieved to the components for rendering. It shall require further configuration to enable the NgHubSearch Application to be fully functional.  


## FURTHER DEVELOPMENT

Inorder to support interaction with and further development of this  Angular 'NgHubSearch' Application source code, download or clone the code from github and follow the instructions provided under the relevant headings provided below.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### SOFTWARE LICENSING
### License Information
MIT License

Copyright (c) 2022 
**Brian Muchunku, AreaCode51-Core Technical Mentors, Moringa School**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Acknowledgments
Brian Mwenda, AreaCode51-Core Technical Mentors, Moringa Instructure LMS, Moringa School
