// Returns a shuffled copy of the passed in array
export function shuffle (arr) {
  return arr.sort(() => Math.random() - 0.5)
}
