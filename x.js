function printItems(arr) {
  for (let i = 0; i < arr.length; i++) { // ⚠️ bug here
    console.log("Index:", i);
    console.log("Value:", arr[i]);
  }
}

const items = ["JS", "node", "react"];

printItems(items);