# BookWorms
BookWorms is a web application designed to facilitate discussion and exploration of written works for collaborative study. Under development.

## Introduction
The idea was formed in attempting to facilitate a virtual book club among friends during the COVID-19 lockdown in 2020. We tried using Google docs for tracking current readings, prompts, discussions, and individual reflections on the week's readings. However, we found this to be lacking in providing a cohesive, pain-free experience. There were a handful of use cases that were particularly difficult to address with existing teechnologies:
- easily share or refer to quotes/passages
- hiding individual reflections before the weekly meet time (wihtout keeping them in a separate app/location)
  - if you do the reading early in the week, you may do a post-reading write up in a notes app, and later move it to the doc for others to read

## Features
A broad overview of features I'd like to provide through this web app are:
- Personal accounts
- Ability to create, invite, and join clubs
- Library of readings (personal or by club)
- Each member able to create annotations/highlights of a shared text. At the end of each week, everyone would be able to see each others' comments and highlights. Later implementations may provide some kind of breakdown/analysis of popular highlights, interesting stats/trends, etc.
- Create reflection prompts for readings, with all members able to submit responses at any point in the assignment period.
  - We frequently would search for common prompts for particular books online, then add them to the shared document. One QoL feature would be a web scraper function which would automatically perform this action, and return a list of possible reflection prompts.

## Tech Stack (Proposed)
### Frontend
- React
- Redux
### Backend
- Node.js
- Express.js
- MongoDB
### Development Tools
- Webpack.js
- Docker
- Travis CL/CI tool (research best approaches)
### Unit Testing
- Selenium
- _Research others_
### Functional Testing
- Mocha/Chai
- Jest
- _Research frameworks_

## Functional Requirements
1. Account creation & authentication
  1. Sign-up functionality
  1. Sign-in functionality
1. Upload file
  1. Start with plain text file (TXT)
  1. In the future, want to support different file types (PDF, EPUB, etc)
1. Delete file
1. File annotations
  1. Viewer/reader
  1. UI for marking up the text
  1. Annotations saved and immediately visible
  1. Shortcut for viewing all annotations

## Non-Functional Requirements
1. Scalable
1. Quick read access of files
1. Durability of files & annotations

## Considerations
There is the possbility of complications with intellectual property, copyrights, etc in giving users the ability to upload and share files. What if a user uploads a file that was obtained outside of legal channels? Is the distribution of alegally obtained files illegal (i.e. user pays for it and shares it for free)? Is it legal to distribute

I'm more of a software engineering expert than legal one, but this may require some specific legalese Terms of Service for users in order for them to create an account. In addition, there would need to be some kind of checks in place to uphold said Terms of Service. One example would be scanning/processing any uploaded files for signs of copyright, IP, or otherwise unpermitted content.

Of course this web app can simply exist as a proof of concept and fun project (as it will likely remain), but there would likely need to be lots of hoops to jump through for someting like this to exist at any capacity as a real-life, customer-facing application. The easiest path forward to that might be something along the lines of a deal or partnership with an eBook provider (e.g. Amazon) by integrating with their selection in order to ensure legal distribution of intellectual property.

<!-- ## Definition of Done -->

<!-- ## User Stories -->
<!-- - As a user, I want to be able to create an account so that my information may be saved.
  - Acceptance Criteria
    - User is able to create an account that persist in the backend
    - User is able to log in with their existing account's credentials.
- As an individual user, I want to be able to upload book files to view so that I can read them.
  - Acceptance Criteria
    - Allows upload of different file types
    - Allows accessible viewing of file types
    - Maintains persistence of uploaded files
- As a user, I want to be able to maintain a collection of books so that I can read any one at a given time.
  - Acceptance Criteria
    - Fetch book data from DB and display it on user's dashboard.
    - When a book is selected, show details and allow file to be opened and viewed.
- As a developer, I want the development lifecycle to be consistent, intuitive, and structured to minimize confusion and maximize efficiency as the project grows.
  - Acceptance Criteria
    - Dockerize the project for ease of setup and development
    -  -->
<!-- 
## Note on BLM
I intend to add a dedicated and globally accessible section for people to access and explore a collection of works by Black authors and activists. I believe a core proliferator of racism in the United States is miseducation, and I want to do something to help people educate themselves through the voices of POC (people of color). There are embedded levels of racism in all of us, much of which goes unnoticed by most people; this includes: the way we speak about under-privileged communities, coded language, our perception of police, our impression of the prison industrial complex, and how our collective idea of "justice" has been shaped by political leaders and the media. It is important for all of us to recognize how we think about these things and adapt our world view through exposure to new sources of information. If we as a society learn to look at this through a different lens, we can move forward to a society based on anti-racism.

It is important to note that educating ourselves is not be a solution, but a stepping stone. It does not stop after reading a book or an article. Nonetheless, it is an integral stepping stone toward change that incorporates the world views of _everyone_ so that _everyone_ may be equally represented. -->
