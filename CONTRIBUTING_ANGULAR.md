### Contributing

From opening a bug report to creating a pull request: every contribution is appreciated and welcomed.
If you're planning a new feature or changing the api, please create an issue first.
This way we can ensure that your precious work is not in vain.

### Issues

In most cases if a bug is discovered, an issue may be raised, also based on the development lifecyle, issues can be selected from already raised ones.

### Setup

This setup guide is intented to the Angular6 part of this projects all files located in the `admin-template` folder

Assumptions made here are 
1. Node.js is installed   
   - version 8.x or greater 
   - `v8.11.1 LTS (Current)` prefferable 
   - Installation steps can be found here `https://nodejs.org/en/download/`

2. NPM is  installed 
   - npm version 5.x or greater
   - 'v6.0.0' (Current) prefferable 
   - Luckly for you npm intalls authomatically when intalling Node.js

3. Angular CLI is installed 
   - version 1.x or greater
   - `verision 6.0.0` (Current)
   - If not intalled run `npm install -g @angular/cli`
   - NB Angular CLI recomends for Node.js and npm to be intalled before this intallation


Setup Steps
1. git clone ubcsc-website repo
2. cd into `admin-template`
3. run `npm install` 
4. run `ng serve --open` to build and open on the browser on `http://localhost:4200`
5. alternatively run `ng serve` to build and move to browser of your choice and enter `http://localhost:4200`

After all components are created and enter the comand below to build ans direct the final build to the laravel public/admin directory

`ng build --base-href http://localhost:8000/admin/`

See the final build in the laravel server  
`http://localhost:8000/admin/`

Setup for laravel and running the laravel server is found in the `CONTRIBUTING_LARAVEL.md`.
