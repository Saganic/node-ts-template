// get-package-json.ts
import fs from "fs"

// read package.json and return its contents
export default () => fs.readFileSync('package.json', 'utf8')