require('./scripts')
// Helper: Finds the script for a given character code
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }
  return null;
}

// Helper: Counts occurrences by group
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name === name);
    if (name != null && known === -1) {
      counts.push({name, count: 1});
    } else if (known !== -1) {
      counts[known].count++;
    }
  }
  return counts;
}

// Main function: Determines the dominant direction
function dominantDirection(text) {
  let directions = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : null;
  });

  if (directions.length === 0) return "ltr";

  return directions.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));            // → "ltr"
console.log(dominantDirection("مرحبا بالعالم"));     // → "rtl"
console.log(dominantDirection("Hey, مساء الخير"));   // → "rtl"


