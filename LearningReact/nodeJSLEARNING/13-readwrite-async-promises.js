const { readFile, writeFile } = require("fs");
// //const { readFile, writeFile } = require("fs").promises; this will right away use the read and write file as promises

const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./content/second.txt", "utf8", {
      flag: "a",
    });

    await writeFilePromise(
      "./content/result-mind-grenade.txt",
      "LA PUTA QUE TE PARIO PELOTUDO"
    );
    console.log(first);
  } catch (err) {
    console.log(err);
  }
};
start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/second.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// const start = async () => {
//   try {
//     const first = await getText("./content/second.txt");
//     console.log(first);
//   } catch (err) {
//     console.log(err);
//   }
// };
// start();
