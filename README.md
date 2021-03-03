Name of the Project:

Tamagotchi

Overview of the project:

Multi-colored quads that contains eat, play, fight, and sleep acitivites for your virtual pet with accompanying scores. 

Link to the deployed project:

https://hr-tamagotchi.netlify.app/<img width="1440" alt="Screen Shot 2021-03-02 at 10 19 20 PM" src="https://user-images.githubusercontent.com/76716670/109752117-6dfc3e80-7ba5-11eb-83fc-39d690b4dcd0.png">

Description of the user:

Upon load, user will see 4 tamagotchis with buttons and screens against a moving background. Each Screen utilizes a different color to illustrate the different acitivities contained in each quad. The first quad allows the user to feed their pet healthy or junk food, with healthy adding a random number to the score and junk subtracting a random number from the score. The second quad is for play, which will do the same for the user's pet's play score. This is the same for Fight and Sleep, too. Scores in each quad may not exceed 100 or be a negative number, while 0 scores mean the loss of your pet. 

List of features:

Quads, buttons, HTML, CSS, vanilla Javascript

Screenshots of project:

<img width="1440" alt="Screen Shot 2021-03-02 at 10 19 20 PM" src="https://user-images.githubusercontent.com/76716670/109752135-75bbe300-7ba5-11eb-8dca-24268feec41b.png">

List of contributors and links to GH profiles:

https://github.com/thedigitalmenagerie

Link to Loom video walkthrough of application:

Stretch Goals Achieved:

### Attribute Randomizer
Right now we have hard coded all the buttons to increase or decrease but specific amounts.  This is kinda lame.  Make all the buttons increase of decrease based on random number generators.
### Pet Picture
Your pet deserves a picture.  Write a `domStringBuilder` that puts it in the div with an id of `pet`.  Make the styling look super cool.
Extra Bonus:  Let the user enter in a url for a picture on page load - make that the image that displays.
### Death
Something should happen when your energy, strength, full, fun, or overall heath goes to 0.  Decide what happens and make it work.


Future Iterations will include:


### Overall Progress Bar
The overall health of your Tamagochi should be based on the average of all four attributes (energy, strength, full, fun).  Use the div with the id of `progress` to display this overall score in some way.
### Module Interactivity
Currently each module operates independently.  This isn't really realistic.  Modify your code so the modules interact.  Here are some sample interactions:
* When Fullness goes up energy should go down (FOOD COMA)
* When Fullness goes down strength should down
* When Strength goes down energy, full, and fun go down
* When Strength goes up energy goes up.
* When energy goes down fun goes down
