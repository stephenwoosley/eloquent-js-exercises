// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// Your code here.
// for each iteration, print that number of hashes
var hashColl = "#";
for (let i = 1; i < 8; i++) {
  console.log(hashColl);
  hashColl = hashColl + "#";
}