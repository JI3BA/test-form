//const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(express.json());
//
// // Маршрут для сохранения данных
// app.post('/api/save-data', (req, res) => {
//     const jsonData = JSON.stringify(req.body);
//
//     fs.writeFile('data.json', jsonData, (err) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Произошла ошибка при сохранении данных.');
//         } else {
//             res.send('Данные успешно сохранены.');
//         }
//     });
// });

// app.listen(3000, () => {
//     console.log('Сервер запущен на порту 3000');
// });

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/save-data', (req, res) => {
    const data = req.body;
    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFile(path.join(__dirname, 'data.json'), jsonData, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while saving the data.');
        } else {
            res.send('Data successfully saved.');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});