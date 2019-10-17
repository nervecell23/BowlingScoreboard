BowlingScoreboard is a scoreboard application for bowling game.
It is a single page application written in Javascript.

## Approach & code structure

![schematic](/bowlingScoreboardSchematic.png)

The core of the application is the bowlingBoard model which is implemented in __bowlingBoard__ class. Within bowlingBoard class, a second class __frame__ is used to encapsulate each frame in the game. Instances of frame class are stored in a container within bowlingBoard class. Each instance processes and stores information regarding one particular frame. Methods defined in bowlingBoard class then iterates through each frame and produces global stats.


##User stories implemented

1. User - can start/restart a new game
2. User - can record score for each roll in each frame
3. User - can know current frame and roll
4. ScoreBoard - can calculate & update bonus for each frame
5. ScoreBoard - can calculate & update total score for each frame
6. ScoreBoard - can calculate total score
