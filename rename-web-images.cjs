const fs = require("fs");
const path = require("path");

// Folder to rename inside (adjust if needed)
const baseDir = path.join(__dirname, "src/web_images");

function sanitizeName(name) {
  // Replace spaces, #, parentheses, commas with underscore or remove
  // You can customize this regex as needed
  return name
    .replace(/[\s#(),]+/g, "_")
    .replace(/_+/g, "_") // multiple underscores to single
    .replace(/^_+|_+$/g, "") // trim underscores at start/end
    .toLowerCase(); // optional: lowercase names
}

function renameRecursive(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const oldPath = path.join(dir, entry.name);
    const sanitized = sanitizeName(entry.name);

    const newPath = path.join(dir, sanitized);

    if (entry.isDirectory()) {
      // Rename folder if needed
      if (entry.name !== sanitized) {
        if (fs.existsSync(newPath)) {
          console.log(`Skipping rename, target exists: ${newPath}`);
        } else {
          fs.renameSync(oldPath, newPath);
          console.log(`Renamed folder: "${entry.name}" → "${sanitized}"`);
        }
      }

      // Recurse inside (use newPath if renamed)
      renameRecursive(entry.name === sanitized ? oldPath : newPath);
    } else if (entry.isFile()) {
      // Rename file if needed
      if (entry.name !== sanitized) {
        if (fs.existsSync(newPath)) {
          console.log(`Skipping rename, target exists: ${newPath}`);
        } else {
          fs.renameSync(oldPath, newPath);
          console.log(`Renamed file: "${entry.name}" → "${sanitized}"`);
        }
      }
    }
  }
}

renameRecursive(baseDir);
console.log("Renaming complete.");
