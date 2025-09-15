const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputFolderModules = "../frontend/src/assets/modules";
const inputFolderPersons = "../frontend/src/assets/persons";

const outputFolderModules = "outputModules";
const outputFolderloadAndFilledPerons = "outputloadAndFilledPersons";

if (!fs.existsSync(outputFolderModules)) fs.mkdirSync(outputFolderModules);
if (!fs.existsSync(outputFolderloadAndFilledPerons)) fs.mkdirSync(outputFolderloadAndFilledPerons);

// Запуск
main();

async function main() {
  await createModules();
  await createPersons();
  await buildPersonWithModules();
}

async function createModules() {
  const modulesPath = [];

  // загрузка изображений
  const modules = loadImages(inputFolderModules);

  if (modules.length < 1) {
    return console.log("Нету изображений");
  }

  // создание изображения для каждого модуля
  for (let i = 0; i < modules.length; ++i) {
    modulesPath.push(await createModule(modules[i]));
  }

  return modulesPath;
}

function loadImages(inputFolder) {
  const files = fs
    .readdirSync(inputFolder)
    .filter((file) => /\.(png|jpg|jpeg)$/i.test(file));

  return files;
}

async function createModule(file) {
  // Создаём белый фон 800x800 через Sharp
  const baseImage = sharp({
    create: {
      width: 800,
      height: 800,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }, // Белый фон
    },
  }).png();

  const imgPath = path.join(inputFolderModules, file);
  const imgBuffer = await sharp(imgPath).resize(610, 610).toBuffer();

  const imgConfig = {
    input: imgBuffer,
    top: 105,
    left: 105,
  };

  // Объединяем изображения
  const filePath = path.join(outputFolderModules, file);
  await baseImage.composite([imgConfig]).toFile(filePath);

  console.log(`Изображение сохранено в ${filePath}`);
  return filePath;
}

async function createPersons() {
  const persons = loadImages(inputFolderPersons);
  const outputPersonsPath = [];

  for (let i = 0; i < persons.length; ++i) {
    const file = persons[i];
    const baseImage = sharp({
      create: {
        width: 800,
        height: 800,
        channels: 4,
        background: { r: 31, g: 31, b: 31, alpha: 1 },
      },
    }).png();

    const imgPath = path.join(inputFolderPersons, file);
    const imgBuffer = await sharp(imgPath).resize(610, 610).toBuffer();

    const imgConfig = {
      input: imgBuffer,
      top: 105,
      left: 105,
    };

    // Объединяем изображения
    const filePath = path.join(outputFolderloadAndFilledPerons, file);
    await baseImage.composite([imgConfig]).toFile(filePath);

    console.log(`Изображение сохранено в ${filePath}`);
    outputPersonsPath.push(filePath);
  }

  return outputPersonsPath;
}

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