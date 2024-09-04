function matchPattern(inputLine, pattern) {
  let regex;

  // Handle single character match or specific regex patterns
  if (pattern.length === 1) {
    return inputLine.includes(pattern);
  } else if (pattern === "\\d") {
    regex = /\d/; // Matches any digit
  } else if (pattern === "\\w") {
    regex = /\w/; // Matches any word character (alphanumeric + underscore)
  } else if (pattern.startsWith("[") && pattern.endsWith("]")) {
    regex = new RegExp(pattern); // Handles character sets like [a-z]
  } else {
    regex = new RegExp(pattern); // Assume it's a valid regex pattern
  }

  return regex.test(inputLine);
}

function main() {
  const pattern = process.argv[3];
  const inputLine = require("fs").readFileSync(0, "utf-8").trim();

  if (process.argv[2] !== "-E") {
    console.log("Expected first argument to be '-E'");
    process.exit(1);
  }

  console.log("Logs from your program will appear here");

  if (matchPattern(inputLine, pattern)) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

main();
