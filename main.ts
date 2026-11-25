// Programmatic submission entry for One Line of Wonder
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = 'The chalk in a child\'s hand is the crushed shells of ocean creatures who spent their lives drifting toward sunlight.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`, 'utf8');
