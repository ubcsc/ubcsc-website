### Contributing

From opening a bug report to creating a pull request: every contribution is appreciated and welcomed.
If you're planning a new feature or changing the api, please create an issue first.
This way we can ensure that your precious work is not in vain.

### Issues

In most cases if a bug is discovered, an issue may be raised, also based on the development lifecyle, issues can be selected from already raised ones. 

### Setup
For this project we make use of the laravel framework. In order to contribute code to this project,

1. **make sure your system(server) meets the following specifications;**
* PHP >= 7.1.3
* OpenSSL PHP Extension
* PDO PHP Extension
* Mbstring PHP Extension
* Tokenizer PHP Extension
* XML PHP Extension
* Ctype PHP Extension
* JSON PHP Extension

2. Laravel utilizes Composer to manage its dependencies. So, before using Laravel, make sure you have [Composer](https://getcomposer.org) installed on your machine.

3. In your prefered working directory, clone the [project](https://github.com/ubcsc/ubcsc-website) or download the zip file and extract to your working directory.

4. Open the terminal or cmd and change directory to ubcsc-website, run ```composer update``` to get dependencies set.

5. Open the ubcsc-website folder with your suitable text editor and rename .env.example file to .env.

6. On your terminal inside ubcsc-website, run ```php artisan key:generate```

7. Copy the generated key on your terminal to .env file and set APP_KEY=your generated key

8. Make sure the following is set in the .env file
 DB_CONNECTION=mysql
 DB_HOST=127.0.0.1
 DB_PORT=3306
 DB_DATABASE=your database name
 DB_USERNAME=your db user name
 DB_PASSWORD=your db password

9. On terminal inside the working directory type  ```php artisan migrate```

10. then type ```php artisan serve``` to see the output on your browser

11. Edit the code, commit and push changes.Thanks. 

For any difficulty with setting up, contact [Dirane](diranengala@gmail.com)

			*****Setup extension*****
			use this for step 4 if it fails
Assumptions made here is
   Php is installed - PHP 7.1.15
   Composer is installed - version 1.6.4
Steps 
1. git clone 
2. cd into the ubcsc-website directory

Run the following commands on the terminal 

	1.  `sudo apt-get install php7.1-mbstring`
	2.  `sudo apt-get install php-common php-mbstring php-xml`
	3.  `sudo install composer`
	4.  `composer install`
	5.  `sudo apt-get update`
	5.  `sudo apt-get upgrade`
	5.	`php artisan serve`

3. Open `http://127.0.0.1:8000>` on the browser of your choice .
   The brower should display an error page here saying something went wrong.

4. run `cp .env.example .env` to copy the sample environment setup from .env.example into .env file. 

5. run `php artisan key:generate ` to generate an encryption key.

6. Reload the browser on `http://127.0.0.1:8000>`

9. Success Laravel up and running. 



### Naming a branch

Making a branch in your fork for your contribution is helpful in the following ways:

    It allows you to submit more than one contribution in a single PR.
    It allows us to identify what your contribution is about from the branch name.

You will want to checkout the master branch locally before creating your new branch.






### Pull Requests

Push to your fork and submit a pull request. We may suggest some changes, improvements or implementation alternatives that may apply 
In case you have a small change in most of the cases your pull request would be accepted quicker.

Submitting a good Pull Request

### Write tests

.......

Follow the existing coding style
Write a good commit message

Commit message format
......

TODO

This is still in a very basic form, We'd like to take this project to a true usefull site for the department as possible. We sill stil need 
    Incorporate Alumni
    Add student individual login

Documentation

CSC Depatmental, We greatly appreciate any time spent fixing typos or clarifying sections in the documentation
