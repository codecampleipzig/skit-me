# SkitMe - Drawing Game Web-App(VUE)

SkitMe is a simple game that builds on the "broken telephone"-game gameplay mechanics.\
But instead of whispering sentences into other players ears the players write and draw.\
Playing SkitMe you either try to describe a given sentence by drawing quick sketches to that or you have to give a verbal description/title for a given drawing. The time for for the player to interact in each phase is limited by a countdown.\
The players are taking turns in these activities handing over their last activities outcome to another player.\
The game ends when each player has interacted once with each other player's title or drawing.\
In the end you can see the whole transition from a starting first sentence through the various drawing and titleing stages in one poster that shows the whole sequence.

- see: https://www.dreihasenspiele.de/spiele/mutabo/ \
   https://www.boardgamegeek.com/boardgame/30618/eat-poop-you-cat

## Project Board

https://github.com/orgs/codecampleipzig/projects/4

## Technical Backround

This is a VUE app

## Git Wokflow steps for the team members

- We use a centralized Repository
- and a GitHub Workflow
  see: https://www.youtube.com/watch?v=aJnFGMclhU8 \
  https://www.youtube.com/watch?v=gLWSJXBbJuE

- base for feature-branches is DEVELOP
- ideally every larger task should have it's own branch
- smaller tasks can be combined in one feature branch

1.  BEFORE starting a feature branch PULL latest changes from DEVELOP
2.  from DEVELOP we branch out into feature branches

    - naming convention for feature-branches: <Team member name>/<feature description>/<issue number(s)>
      e.g. TOM/awsome-feature/39-12
    - put feature branch names on the respective ticket/issue cards
    - push your WHOLE feature branch to the GIT-Hub repository

3.  we use PULL REQUESTS for merging features into develop

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
