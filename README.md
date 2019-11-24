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

### Need
- `title`: String
- `description`: String
- `status`: String ('pending' | 'cancelled' | 'supplied')

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

### GET/need

- Params: `none`
- Body: `none`

Returns an array of needs (TODO implement filters and criteria)

### GET/need/:id

- Params: `id`
- Body: `none`

Returns data of a specific need by ID (ObjectID created by MongoDB)

### POST/need

- Params: `none`
- Body `json` of need (View Need model)

Create a record of Need on database.

### PUT/need/:id, PATCH/need/:id

- Params: `id`
- Body: `json` of Need (View Need model)

Update a specific record of Need on database.

### DELETE/need/:id

- Params: `id`
- Body: `none`

Remove a specific Need by ID (ObjectID created by MongoDB)