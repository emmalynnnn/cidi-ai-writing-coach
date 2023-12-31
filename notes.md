# Writing Coach
Development Notes

Emma Lynn

## 7.12.23
* Run PHP server:  `php -S localhost:port -t your_folder/`

## 7.17.23
* Installed Xampp
    * https://community.apachefriends.org/f/viewtopic.php?f=29&t=82832&sid=7467a77f2c01b1ebf770987761265d6c
* https://www.youtube.com/watch?v=_Re5BKHSnkw
    * Same thing: https://www.freecodecamp.org/news/how-to-get-started-with-php/
* Creating database: https://www.instructables.com/Creating-a-Database-With-XAMPP/
* Test password for local database: `password`
  * Fix password config: https://stackoverflow.com/questions/51009445/can-not-modify-config-inc-php
  * https://stackoverflow.com/questions/19482371/fix-access-denied-for-user-rootlocalhost-for-phpmyadmin
* Connect to database: https://www.cloudways.com/blog/connect-mysql-with-php/
* Interact with database within phpMyAdmin: https://www.cs.virginia.edu/~up3f/cs4750/supplement/DB-setup-xampp.html
  * Interacting programmatically: https://www.geeksforgeeks.org/how-to-insert-form-data-into-database-using-php/
* Read database: https://www.w3schools.com/php/php_mysql_select.asp

## 7.19.23
* Wrote up docs for Xampp set up
* Started looking at enabling curl
  * `xamppfiles/etc/php.ini`
  * https://stackoverflow.com/questions/1347146/how-to-enable-curl-in-php-xampp
  * https://rapidapi.com/blog/how-to-use-an-api-with-php/

## 7.20.23
* Moved LTI template into Xampp
* Added database info to `config.php`
* Started work-shopping prompts
* Created git repo for actual project (not just in learning)

## Meeting w/ Neal and Ludo 7.25.23
* Working on integrating more student effort
* Nothing much changes on my end

## 7.26.23
* Installed https://github.com/openai-php/client with https://getcomposer.org/download/
  * We're actually not gonna use that at allll
* Figured out how to use the LTI Template
* Started writing backend code
* Tried to connect client and server but got hit with CORS stuff I don't want to deal with rn so I'll do that later I guess

## 7.27.23
* Fixed the frontend
* Connected the front and backends

## 7.28.23
* Fixed some JSON parsing bugs
* To ask about:
  * Improve prompts
  * How to include USU standards in prompt
  * How to structure database, what data needs to be persistent

## 8.2.23
* Got hit by a 414 http error (uri too long) before hitting an open ai limit
  * 414 - 8900 chars
  * 414 - 7500 chars
  * 200 - 5500 chars
  * 414 - 7000 chars
  * 414 - 6500 chars
  * 200 - 6000 chars
  * 414 - 6250 chars
* Sooo it looks like the limit (at least http wise) needs to be less than 6000 chars
  * Also works for Open AI
* Set character limit for input TextAreas
* Fixed default message issue
* Asked Neal if he'd give me feedback on my prompts and asked about how to apply the feedback type

## 8.9.23
* Got possible assignments from server
* Added an option to pick the assignment to get feedback on
* Sent assignment option selected to server
* Added code to apply the selected feedback type to the prompt
* Started on local storage saving thing

## 8.10.23
* Split App.js file into multiple files
* Added option to save feedback (local storage)
* Option to delete from local storage

## 8.11.23
* Worked on local storage issues
* Meeting: 
  * Let's use 3.5
  * Rachel has 2 sections, Russ has 4 (23 * 6 = 138 students)
  * Could also have some control sections
    * That do the assignments with Chat GPT or something
    * See how effective the Canvas integration is
  * Assignment with due date in maybe October - Russ's class at least
  * We need some guinea pigs!
    * Maybe trying out with Russ's honors section in September?
    * Find some way to get some data in September
  * Change USU Standards to Assignment Specific
* Changed USU Standards to Assignment Specific
* Finally got the saved data to update
* Sorted saved data chronologically

## 8.14.23
* Fixed loading labels
* Made intro feedback uniform with body and conclusion feedback
* Moved the loading message into a constant
* Disabled save button while content is loading
* Added an error message if the user clicks restore while the current feedback is loading
* Aligned Restore/Remove buttons
* Added reset button

## 8.22.23
* Deploying to AWS for a demo Neal's doing today

## 8.28.23
* Code review
  * Remove specific assignment option
  * Pull title for saved feedback (instead of timestamp)
  * Options: general best practices and grammar

## 8.30.23
* Added a short README
* Removed assignment selection option
* Changed options to general best practices and grammatical
  * And edited prompts accordingly
* Starting working on better title for saved feedback

## 8.31.23
* Finished adding better title options for saved feedback
* Edited prompts a little to discourage overly technical language or jargon.
* Cleaned up a little

## 9.7.23
* Added line break before save feedback option
* Added more descriptive title for save feedback option
* Fixed heading levels
* Removed sleep in `action.php`

## 9.12.23
* Met with Neal, Ludo, & Russ to plan presentation and get feedback on tool
* Changes to make now:
  * Change “Title” to “Save As”
  * Make the title input fill the whole width of the feedback section
  * Check to make sure you really want to remove the feedback
  * Add to the prompt to include specific examples
  * Fix issue in the feedback formatting that comes from double quotes in the feedback (that’s the issue that Neal was having where it wouldn’t format the feedback)
  * Before displaying saved feedback, check to see if what’s saved in the local storage is actually saved feedback (that’s the item of saved feedback that was displaying as Invalid Date on Neal’s computer)
* Here are features that were requested that seem like they’re out of scope for this first version, and we can save for a later version:
  * Structure the process to go through the feedback a specific amount of times
  * Evaluate if the student is applying their feedback or not
  * Possibly automatically correct punctuation and grammar

## 9.13.23
* Fixed no saved feedback message to match other fonts
* Changed "Save feedback with title" to "Save as"
* Made the title input fill the whole width of the feedback section
* Added check to make sure you really want to remove the feedback
* Added error message for if the server call doesn't work
* Added some checking for formatting
* Added to the prompt to include specific examples
* Removed unfinished edit title stuff
* Added a check to see if it's relevant before displaying saved feedback from local storage
* Added writing coach header bar

## 9.14.23
* Fixed double quote issue
* Fixed new line double quote issue
* Added a lot more response validation

## 10.2.23
* Launch meeting
  * Work on write-up for how to use the tool - before Thursday morning for Russ
    * In canvas page
  * Work on grammar prompt a bit
  * Ask about running out of the quota - error handling??
  * Future ideas
    * Student inputs research, creates synthesis matrix
    * PDF reader
