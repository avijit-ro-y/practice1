var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let longest = friends[0];
for (let name of friends) {
  if (name.length > longest.length) {
    longest = name;
  }
}
console.log("Biggest name:", longest);
