const fs = require('fs');
const path = require('path');
const faker = require('faker');
const md5 = require('md5');

function article(limit = 10) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const title = title();
    const Description = Description();
    const Description1 = Description1();
    const Date = Date();

    result.push({
      id: uuid(),
      title,
      Description,
      Description1,
      Date,
    });
  }

  return result;
}

function main() {
  const data = {
    article: article(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();