# Blog Application

A simple application that allows users to read and write articles. An assignment for my Object Oriented Design Class
## Technology Used:
- .Net Core 3.0
- Angular
- SQL Server
- Okta

Client URL:  https://comp586-blogapp.netlify.com/

## Requirements
- Single Page Application
  - Angular 
- Deployment
  - Angular application is hosted on netlify
  - .Net Core and SQL Server database is hosted on Azure App Services
- ORM(Object Relational Mapping)
  - Microsoft Entity Framework
- Authentication
  - Okta
- Dependency Injection
  - .Net Core and Angular comes with this.
- Relationships
  - There is a one to many relationship between users and articles. It is shown in the Article model with the annotation that says ```[ForeignKey("UserId")]```
  - 

## Extra Requirements
- Continuous Deployment
  - Netlify is continuously deploying the Angular App
  - Azure App services deploys the app every time there is code pushed to github
- Continuous Integration 
  - A few tests were made for the controllers in the application
  - Continuous integration  are handled by  github actions . Scripting for this is in the  [dotnetcore.yml ](.github/workflows/dotnetcore.yml) file
- Authorization
  - On the frontend any router that has ``` [OktaAuthGuard]``` can only be accessed if the user is logged in. This is provided by Okta'
  - On the Backend any controller or method  that has ```[Authorize]``` above requires authorization and needs a header passed into it. Okta handles authorizing the tokens 

## Login Info:

- Username: curtis.bishop@example.com
- Password: Password1
---
- Username: beverley.castro@example.com
- Password: Password1