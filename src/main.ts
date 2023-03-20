// main.ts
import fs from "fs"

// log the contents of package.json
console.log('Working', fs.readFileSync('package.json', 'utf8'))