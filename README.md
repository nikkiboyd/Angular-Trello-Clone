# Trello Clone
### Rebuilding the fun & flexible application for getting more done
#### _Nikki Boyd | August 17, 2018_
#### _Javascript Independent Project | Week 3_


# _About the App_
This application showcases my AngularJS experience by rebuilding the popular project management application, Trello!

The first phase will focus on creating the view of a new board, including lists with cards.

# _Specifications_

### Necessary Features & Functionality
| Feature | Description | Notes |
|--|--|--|
| New board | Main view: Display as if a user had created a new, empty board | Default colors. Could possibly include a pre-built board for demo purposes |
| New list | Create new list when user clicks button | Ask for the list name before creating |
| Add list | Save list to board and database | New list appears on board |
| Add card | Asks user to enter a title for the card | 'Add card' button pushes card to list |
| Card details | When user click on card, opens details page | Includes details for list name, description, comments, activity, additions, and actions |
| Description | Starts empty. Additions/edits get pushed to database | |
| Comments | Displays user name, profile pic, and comment. Have option to edit or delete comment. | Also shows time posted/edited, probably optional feature for now |
| Activity | Shows history of card, including card creation time, comments, additions, etc. | May become an optional feature depending on time |
| Additions | Allows user to attach members, labels, checklists, due date, attachments (files) to each card | Everything besides attachments should hopefully be achievable |
| Archive | Essentially 'deletes' card or list from board | Do not have to actually archive them for first phase, removal sufficient |

### Secondary Features & Functionality
| Feature | Description | Notes |
|--|--|--|
| Dragging items | Trello allows users to drag lists and cards | Not sure how difficult this would be to implement, but it is one main feature of the app |
| Personalization | Allow user to change background color/image of their board | |
| Labels | Allow user to assign a label to each card | Can choose color, name, etc. of label and reuse existing labels |
| Actions | Move, copy, watch | Not critical for first implementation, but would be nice |
| Multiple boards | User can have multiple boards | Would need to implement homepage, so on backlog for now |

### Component Tree
```
trello-clone  
└───src
│   └───app [will contain main board]
│       │   app.component.css
│       │   app.component.html
│       │   app.component.spec.ts
│       │   app.module.ts
│       └───cards
|              │   card.component.css
│              │   card.component.html
│              │   card.component.spec.ts
│              │   card.component.ts
│       └───description
|              │   description.component.css
│              │   description.component.html
│              │   description.component.spec.ts
│              │   description.component.ts
│       └───lists
|              │   lists.component.css
│              │   lists.component.html
│              │   lists.component.spec.ts
│              │   lists.component.ts
```

# _Installation for OSX_
- Download the repository from GitHub (https://github.com/nikkiboyd/Trello-Clone)
- Install Node.js on your machine
- `npm install` to install all necessary packages
- `ng serve --open` to run the application in your browser

# _Technologies_
- Javascript ES6
- jQuery
- Karma
- Jasmine
- Webpack
- ESlint
- Babel
- Bootstrap
- HTML
- CSS

# _Contact_
Please email Nikki Boyd at boyd.nikki@icloud.com with any questions.

# _License_
This software is licensed under the MIT license.

Copyright (c) 2018 Nikki Boyd
