# Table of contents
1. Setup
2. Bug tracking and issues
3. Environment

# Setup
* To install packages run `npm install` and `bower install`
* Fire up vagrant by running `vagrant up`
	* cd into the hull directory which sits at `/var/www/hull`
	* you'll want to run the gulp tasks to compile all the stylesheets
		* run `gulp`
	* start the apache server by running `service apache2 start`
		* you may need to sudo this

# Setup
* Run `npm install`
	* test
* Run `bower install`

1. Run `composer install`
2. Copy `.env.example` to `.env` and update environment variables (Remember to not include these into commits:
  * `DB_NAME` - Database name
  * `DB_USER` - Database user
  * `DB_PASSWORD` - Database password
  * `DB_HOST` - Database host
  * `WP_ENV` - Set to environment (`development`, `staging`, `production`)
  * `WP_HOME` - Full URL to WordPress home (http://example.com)
  * `WP_SITEURL` - Full URL to WordPress including subdirectory (http://example.com/wp)
  * `AUTH_KEY`, `SECURE_AUTH_KEY`, `LOGGED_IN_KEY`, `NONCE_KEY`, `AUTH_SALT`, `SECURE_AUTH_SALT`, `LOGGED_IN_SALT`, `NONCE_SALT` - Generate with [wp-cli-dotenv-command](https://github.com/aaemnnosttv/wp-cli-dotenv-command) or from the [WordPress Salt Generator](https://api.wordpress.org/secret-key/1.1/salt/)
 3. npm install gulp
 4. npm install browser-sync
 5. npm install gulp-load-plugins
 6. npm install del
 7. npm install gulp-eslint
 8. npm install --save-dev babel-preset-es2015

## SET UP IN MAMP

point file to yourfolder/web
set URL to hulltest.local

## Gulp

To Run Gulp as a build
$ gulp default

this will launch browser sync and files will auto update within the browser
