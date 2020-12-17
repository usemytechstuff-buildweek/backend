Summary Table of API Endpoints
| Type      | Endpoints                 | Description                                   |
| -----     | -------------------       | --------------------------------------------- |
| POST      | /api/auth/register        | Register user                                 |
| POST      | /api/auth/login           | Login user                                    |
| GET       | /api/users                | Get a list of all users if authorized         |
| GET       | /api/users/:id            | Get a user by id if authorized                |
| GET       | /api/users/:id/rentals    | Get a users rentals by user id if authorized  |
| POST      | /api/users/:id/rentals    | Create a new rental for a user                |
| PUT       | /api/users                | Update a users information if authorized      |
| DELETE    | /api/users/:id            | Delete a user if authorized                   |
| GET       | /api/rentals              | Get a list of all rentals if authorized       |
| GET       | /api/rentals/:id          | Get a rental by id if authorized              |
| PUT       | /api/rentals/:id          | Update a rental's information if authorized   |
| DELETE    | /api/rentals/:id          | Delete a rental if authorized                 |

