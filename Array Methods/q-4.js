// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

// function getVoteCount(votes) {
//     // Calculate overall vote count by subtracting downvotes from upvotes
//     const overallCount = votes.upvotes - votes.downvotes;

//     // Return the calculated overall vote count
//     return overallCount;
// }

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));  // Output: 13
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));  // Output: -31
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));  // Output: 0

const getVoteCount = (votes) => votes.upvotes - votes.downvotes;
console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));