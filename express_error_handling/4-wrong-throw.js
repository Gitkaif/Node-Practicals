// THROWING STRING INSEAD OF ERROR OBJECT

try {
  throw "this is error";
} catch (error) {
  console.log(error);
  console.log(error.message); //becomes undefined....no error object
}
