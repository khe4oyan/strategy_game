const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

buildPersonWithModules();

async function buildPersonWithModules() {
  if (!fs.existsSync("inputModulesForBuild")) fs.mkdirSync("inputModulesForBuild");
  if (!fs.existsSync("inputPersonsForBuild")) fs.mkdirSync("inputPersonsForBuild");
  if (!fs.existsSync("outputBuild")) fs.mkdirSync("outputBuild");

  const person = loadImages("inputPersonsForBuild")[0];
  if (!person) return console.log("Нету персонажа для билда");

  const modules = loadImages("inputModulesForBuild");
  if (!modules || modules.length === 0) return console.log("Нету модулей для билда");

  const imgPath = path.join(__dirname, "inputPersonsForBuild", person);
  let buildResult = await sharp(imgPath).resize(610, 610).toBuffer();

  for (let i = 0; i < modules.length; ++i) {
    buildResult = await combineModulesToPerson(buildResult, modules[i], i);
  }

  const outputPath = path.join(__dirname, "outputBuild", "finalBuild.png");
  await sharp(buildResult).toFile(outputPath);
  console.log("Финальное изображение сохранено в:", outputPath);
}

async function combineModulesToPerson(buildResult, modulePath, ind) {
  modulePath = path.join(__dirname, "inputModulesForBuild", modulePath);
  const moduleBuffer = await sharp(modulePath).resize(100, 100).toBuffer();
  const combinedBuffer = await sharp(buildResult)
  .composite([
    {
      input: moduleBuffer,
      top: 10 + ind * 110,
      left: 10,
    },
  ])
  .toBuffer();

  return combinedBuffer;
}

function loadImages(inputFolder) {
  const files = fs
    .readdirSync(inputFolder)
    .filter((file) => /\.(png|jpg|jpeg)$/i.test(file));

  return files;
}
