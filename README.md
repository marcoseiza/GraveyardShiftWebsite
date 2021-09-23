<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e3e7b921-07fb-44cf-9bcd-c1383a513ab8/deka4ax-f4b76959-e73c-4847-8855-b6ed0ceaa069.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UzZTdiOTIxLTA3ZmItNDRjZi05YmNkLWMxMzgzYTUxM2FiOFwvZGVrYTRheC1mNGI3Njk1OS1lNzNjLTQ4NDctODg1NS1iNmVkMGNlYWEwNjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OfhtZYNoImZp7QdO6nGWq21164_CeY6UnbqDRhYv7gY">

### Oops! All Programers (Team 7)

[![Netlify Status](https://api.netlify.com/api/v1/badges/97c475bc-6873-40d8-9be6-623e8f67daab/deploy-status)](https://app.netlify.com/sites/upbeat-euler-88f37d/deploys)

Marcos Eizayaga (me437) | Project Lead<br>
Jonathan Gomez (jdg274) | Software Lead<br>
Amy Wang | Design Lead<br>
Isaac Newcomb | Sound Lead<br>
Mitchell Lin (ml887) | Programmer & Designer<br>
Judy Ng (jsn59) | Programmer & Designer<br>
Will Spencer (wes229) | Programmer<br>
Elaine Zheng (ez229) | Programmer<br>
Eli Zhang (ekz5) | Programmer<br>

<h2 id="download-link">Meet our team</h2>

We're a team of Cornell students who are taking CIS 3152 - Intro to Game Design.
We're very proud of our game _Graveyard Shift_.

## Download

As most modern browsers block downloads from non-notarized sites you must download the game through github. Click on the links below and you will see a download button, please click that to download. Thank you!

[Mac Download](apps/GraveyardShiftMac.zip)

[Windows64 Download](apps/GraveyardShiftWindows.zip)

# Description

Steve the Janitor stirs from a long nap in his closet to an eerie silence. He finds the entire underground lab abandoned except for the failed lab experiments. Guide Steve to the surface, evading the mutants that can hear—but not see—everything Steve does.

## Objective

Get to the stairs before the mutants get you!

## Controls

This game is meant to be played with a keyboard and a mouse.

### Movemenent

|  KEY   | OUTPUT |
| :----: | :----: |
|   W    |   UP   |
|   A    |  LEFT  |
|   S    |  DOWN  |
|   D    | RIGHT  |
| LEFT ⇧ | SPRINT |

#### Walking | WASD

The player controlls steve by pressing WASD

![Steve Walking](README_Assets/walking.gif)

#### Running | LEFT ⇧ + (WASD)

The player controlls steve by pressing Left Shift and WASD

_Note: Sound radius is larger when running_

_Note: Sprinting only lasts for a short while_

_Note: Panting makes you make more noise_

![Steve Running](README_Assets/running.gif)

### Item Interaction

|          KEY          |                  OUTPUT                  |
| :-------------------: | :--------------------------------------: |
|           E           |                DROP ITEM                 |
|         SPACE         |     PICK UP ITEM & OPEN/CLOSE DOORS      |
|    MOUS LEFT CLICK    |       USE ITEM & OPEN/CLOSE DOORS        |
| HOLD MOUSE LEFT CLICK | PREVIEW THROW DIRECTION & BOMB PLACEMENT |
|           Q           |             CANCEL ITEM USE              |

#### Picking up and Using Item | E, SPACE, MOUSE

The player can pick up items by pressing SPACE and use them by pressing MOUSE LEFT CLICK.

- KEY MOUSE CLICK throws **brick**, activates **bomb** and unlocks door with **key**.

- MOUSE POS is used for **brick** direction and **bomb** placement direction

  - The bomb is placed in a 1 tile radius around you closest to your mouse position

- HOLDING DOWN MOUSE CLICK shows the direction of **brick** throwing

##### Picking up Items

![Steve pickick up and using item](README_Assets/picking-up.gif)

##### Using bomb

![Steve using bomb](README_Assets/bomb.gif)

##### Using brick

![Steve using brick](README_Assets/brick.gif)

##### Using key

![Steve using key](README_Assets/key.gif)
![Steve using door](README_Assets/key_door.gif)

### Level and Screen Interactions

|     KEY      |      OUTPUT       |
| :----------: | :---------------: |
|     ESC      | GOES BACK TO MENU |
| MOUSE CLICK  |   PRESS BUTTON    |
| CMD / CTRL M |    DEBUG MODE     |
| CMD / CTRL P |   PREVIOUS LVL    |
| CMD / CTRL N |     NEXT LVL      |
|      R       |    RESTART LVL    |
