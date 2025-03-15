const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputFolderModules = "../frontend/src/assets/modules";
const outputFolderModules = "outputModules";

const inputFolderPersons = "../frontend/src/assets/persons";
const outputFolderPersons = "outputPersons";

// if (!fs.existsSync(inputFolderModules)) fs.mkdirSync(inputFolderModules);
if (!fs.existsSync(outputFolderModules)) fs.mkdirSync(outputFolderModules);
// if (!fs.existsSync(inputFolderPersons)) fs.mkdirSync(inputFolderPersons);
if (!fs.existsSync(outputFolderPersons)) fs.mkdirSync(outputFolderPersons);

// Запуск
main();

async function main() {
  const modules = await createModules();
  console.log(modules);

  const persons = loadImages(inputFolderPersons);
  console.log(persons);
  // TODO: создать карточки персонажей с модулями: как вариант можно просто закинуть в папку нужный персонаж и нужные модули чтобы программа уже знала какой, куда добавить
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
