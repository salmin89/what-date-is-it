const fs = require('fs');

function getReadme() {
  return new Promise((resolve, reject) => {
    fs.readFile('./README.md', 'utf-8', (err, data) => {
      if (err) reject(err);
      resolve(data)
    })
  })
}

test('Make sure the date is correct!', async () => {
  const readmeStr = await getReadme();
  const readmeDate = new Date(readmeStr.trim().replace(/( \(.*\))/, ''));
  const now = new Date();
  const a = readmeDate.toDateString();
  const b = now.toDateString();

  expect(a).toBe(b);
});