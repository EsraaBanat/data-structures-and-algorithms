# Hashtables
<!-- Short summary or background information -->

**Hashtables** are a data structure that utilize key value pairs. This means every `Node` or `Bucket` has both a key, and a value.

The basic idea of a **hashtable** is the ability to store the key into this data structure, and quickly retrieve the value. This is done through what we call a `hash`. A `hash` is the ability to encode the key that will eventually map to a specific location in the data structure that we can look at directly to retrieve the value.

Since we are able to `hash` our key and determine the exact location where our value is stored, we can do a lookup in an O(1) time complexity. This is ideal when quick lookups are required.

### Creating a Hash

A hashtable traditionally is created from an array. I always like the size 1024. this is important for index placement. After you have created your array of the appropriate size, do some sort of logic to turn that “key” into a numeric number value. Here is a simplistic hashing algorithm:

1. Add or multiply all the ASCII values together.
2. Multiply it by a prime number such as 599.
3. Use modulo to get the remainder of the result, when divided by the total size of the array.
4. Insert into the array at that index.

## Challenge
<!-- Description of the challenge -->

### Implement a Hashtable Class

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

- Time: O(1) => constant time

- Space: O(n) => linear space

## API
<!-- Description of each method publicly available in each of your hashtable -->

### Hash Table Methods :

- `set`
  - Arguments: key, value
  - Returns: nothing
  - This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  Should a given key already exist, replace its value from the value argument given to this method.

- `get`
  - Arguments: key
  - Returns: Value associated with that key in the table

- `contains`
  - Arguments: key
  - Returns: Boolean, indicating if the key exists in the table already.

- `keys`
  - Returns: Collection of keys

- `hash`
  - Arguments: key
  - Returns: Index in the collection for that key
