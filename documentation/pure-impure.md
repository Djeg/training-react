# Pure and Impure functions

### Pure function are functions that are immutable and completly predicatable

### Impure functions are functions that produce `effects` we can't predict

Examples:

```js
// PURE
const add = (x, y) => x + y

// IMPURE (because .pop() will mute the array it self)
const pop = array => array.pop()

// PURE
const pop = ([ ...array, lastElement ]) => lastElement

// IMPURE
const fetchUser = id => fetch(`/users/${id}`)

// IMPURE
const connect = dsn => Mongo.connect(dsn)

// IMPURE (because window.location will mute)
const getQueries = key => query(window.location.search)[key]

// PURE
const getQueries = (key, location) => query(location.search)[key]

// PURE
const capitalize = str => str.toUpper()
```
