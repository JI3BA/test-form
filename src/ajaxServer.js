const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// Маршрут для сохранения данных
app.post('/api/save-data', (req, res) => {
    const jsonData = JSON.stringify(req.body);

    fs.writeFile('data.json', jsonData, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Произошла ошибка при сохранении данных.');
        } else {
            res.send('Данные успешно сохранены.');
        }
    });
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});