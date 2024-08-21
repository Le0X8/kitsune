import * as fs from 'fs';

fetch('https://raw.githubusercontent.com/Le0X8/kitsune-cheat-menu/main/dist/cheat.js').then(
	async (result) => fs.writeFileSync('static/cheat.js', Buffer.from(await result.arrayBuffer()))
);
