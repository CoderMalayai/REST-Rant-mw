# Project REST-Rant
REST-Rant is an app where users can review restaurants.

## Tech Usage
**CSS Framework:** Bootshrap
**Stack:** MongoDB, Express, NodeJS
**Server-Side Rendering:** JSX
**Node Modules:** Method-override, dotenv, express-react-views

## Routes

| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | `/` | Home Page |
| GET | `/places` | Places index page |
| POST | `/places` | Create new place |
| GET | `/places/new` | Form page for creating a new place |
| GET | `/places/:id` | Details about a particular place |
| PUT | `/places/:id` | Update a particular place |
| GET | `/places/:id/edit` | Form page for editing an existing place |
| DELETE | `/places/:id` | Delete a particular place |
| POST | `/places/:id/rant` | Create a rant (comment) about a particular place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant (comment) about a particular place |
| GET | `*` | 404 page (matches any route not defined above) |

## Database

**Places**

| Field | Type |
| ----- | ---- |
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |

**Rants**

| Field | Type |
| ----- | ---- |
| _id | Object ID |
| place_id | ref(places) Object_Id |
| rant | Boolean |
| rating | Number |
| comment | String |
| reviewer | String |

## Planning

### User Stories

As a restaurant reviewer, I need a app where you can add, update, and delete restaurants I like. A way to add/update/delete comments. With this app I can go try new foods around the area I didn't know about and add my own review/comment to let everyone else know.

### Wireframes

![A simple draw up of how I want a app to be.](/assests/REST-Rant%20Wireframe.jpg)

## Notes

## Sources/Links

*https://www.supercutekawaii.com/category/travel-japan/character-cafes/
*
