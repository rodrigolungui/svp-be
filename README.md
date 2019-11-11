# svp-be

## Stack
- Node v10.7
- NodeJS
- MongoDB


## Running
- Dev: `npm run dev`
- Prd: `npm run build && npm start`

## Tests
- TODO

## Models

### Giver
- `name`: String
- `document`: String
- `birthday`: String

## Routes

### GET/giver

- Params: `none`
- Body: `none`

Returns an array of givers (TODO implement filters and criteria)

### GET/giver/:id

- Params: `id`
- Body: `none`

Returns data of a specific giver by ID (ObjectID created by MongoDB)

### POST/giver

- Params: `none`
- Body `json` of giver (View Giver model)

Create a record of giver on database.

### PUT/giver/:id, PATCH/giver/:id

- Params: `id`
- Body: `json` of giver (View Giver model)

Update a specific record of giver on database.

### DELETE/giver/:id

- Params: `id`
- Body: `none`

Remove a specific giver by ID (ObjectID created by MongoDB)