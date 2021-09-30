const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt"); // makes a route with the separators
console.log(filePath);

const base = path.basename(filePath); // we can see whats in it
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt"); // returns the path with the dirname
console.log(absolute);
