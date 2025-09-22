// types vs interfaces
//Type aliases and interfaces are very similar, and in many cases you can choose between them freely. 
// Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties 
// vs an interface which is always extendable
// -------------------------------------------------------

// Call Signatures
// In JavaScript, functions can have properties in addition to being callable. However, the function type expression syntax doesn’t allow for declaring properties. 
// If we want to describe something callable with properties, we can write a call signature in an object type:

