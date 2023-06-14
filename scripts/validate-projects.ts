import fs from 'fs';
import path from 'path';
import { PROJECTS, projectSchema } from '../src';
import { deepEqual } from '../src/validations/deep-equal';

const INPUT_DIR = './projects';

const fileNames = fs.readdirSync(INPUT_DIR);
const jsonFiles = fileNames.filter((fileName) => fileName.endsWith('.json'));

const jsonChains: any[] = jsonFiles.map((filePath: string) => {
  const fullPath = path.join(INPUT_DIR, filePath);
  const fileContentRaw = fs.readFileSync(fullPath, 'utf-8');
  return JSON.parse(fileContentRaw);
});

// Validation: Ensure that each JSON file is represented in the PROJECTS array
if (PROJECTS.length !== jsonChains.length) {
  console.log('Generated projects differs in length to the number of JSON files');
  console.log(`Generated PROJECTS length = ${PROJECTS.length}. Expected ${jsonChains.length} chains`);
  console.log('Try regenerating chains');
  process.exit(1);
}

jsonChains.forEach((project: any, index: number) => {
  const res = projectSchema.safeParse(project);
  // Validation: Ensure each JSON file content conforms to the required schema
  if (!res.success) {
    const errors = res.error.issues.map((issue) => {
      return `  path: '${issue.path.join('.')}' => '${issue.message}' `;
    });
    console.log(`Project '${project.name}' contains the following errors:\n${errors.join('\n')}\n`);
    process.exit(1);
  }

  // Validation: Ensure that the latest JSON content is represented in each Chain object
  const existingProject = PROJECTS[index];
  if (!deepEqual(project, existingProject)) {
    console.log(`Project '${project.name}' differs to the currently generated Project object in PROJECTS`);
    console.log('Try regenerating projects');
    process.exit(1);
  }
});

console.log('Successfully validated projects!');
process.exit(0);
