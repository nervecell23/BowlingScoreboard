BowlingScoreboard is a scoreboard program for bowling game.
It is a single page application written in Javascript.

## Approach & code structure

![schematic](/bowlingScoreboardSchematic.png)

The core of the application is the bowlingBoard model which is implemented in __bowlingBoard__ class. Within bowlingBoard class, a second class __frame__ is used to encapsulate each frame in the game. Instances of frame class are stored in a container within bowlingBoard class. Each instance processes and stores information regarding one particular frame. Methods defined in bowlingBoard class then iterates through each frame and produces global stats.

jquery library is used to process user input and update the content on the webpage.


## User stories implemented

1. User - can start/restart a new game
2. User - can record score for each roll in each frame
3. User - can know current frame number and roll number
4. ScoreBoard - can calculate & update bonus for each frame
5. ScoreBoard - can calculate & update total score for each frame
6. ScoreBoard - can calculate total score

## Installation and usage

Download repo and open __index.html__ in browser.

## Test

The application is tested using Jasmine framework. To run the test, open __SpecRunner.html__ in browser.

## Dependencies & tools used

- jquery
- Jasmine
