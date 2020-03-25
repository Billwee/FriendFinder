# FriendFinder

## Overview

Welcome to the FriendFinder application. Just answer a few simple questions and you'll be on your way to finding the perfect match for life-long friendship!

## Before You Begin

Be sure to run `npm install` to get your node modules installed along with express.

## User Experience

- Loading the application brings you to a home page that directs the user to a ten-question survey along with text inputs for their name and a URL to a photo of themself.
- After completing the survey, a window will pop up showing the name and photo of the best match based on the answers to their questions.
- This pop-up will also have two buttons for the user to click. A 'Close' button that will dismiss the popup leaving the answers to the survey still accessible and a 'Reload Survey' button that will reload the page and clear the entire survey.

## Application Walk-Through

1. A `server.js` file requiring express and two route files (`htmlRoutes.js` and `apiRoutes.js`) creates the localhost server.

2. The `htmlRoutes.js` file includes two routes:

   - A GET Route to `/survey` which displays the survey page.
   - A default, catch-all route that leads to `home.html` which displays the home page.

3. The `apiRoutes.js` file contains two routes:

   - A GET route with the URL `/api/friends`. This will be used to display a JSON of all possible friends.
   - A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

4. The application's data is saved inside of `app/data/friends.js` as an array of objects. Each of these objects follows the format below.

```json
{
  "name": "Ahmed",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
}
```

5. The application determines the user's most compatible friend using the following:

   - Converting each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   - With that done, it compares the difference between current user's scores against those from other users, question by question. Adding up the differences to calculate the `totalDifference`.
     - Example:
       - User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       - User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       - Total Difference: **2 + 1 + 2...etc =** **_Total Difference_**
   - Using the absolute value of the differences to avoid negative numbers.
   - The closest match will be the user with the least amount of difference.

6. If any text fields or selection dropdowns are not answered, the form will not submit and instruct the user which question/s were not answered.

7. Once the current user's most compatible friend is found, the result is displayed as a modal pop-up.
   - The modal displays both the name and picture of the closest match along with the user.

## Deployment

The application is hosted on Heroku: [Click Here](https://mysterious-hollows-24186.herokuapp.com/)
