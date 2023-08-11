const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { exec } = require('child_process');

const argv = yargs(hideBin(process.argv)).argv;
const { filename } = argv;

if (!filename) {
  console.error('Por favor, forneça um nome de arquivo válido.');
  process.exit(1);
}

const command = `typeorm migration:create src/database/migrations/${filename}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao criar a migração: ${error}`);
    process.exit(1);
  }

  console.log(stdout);
});
