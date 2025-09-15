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