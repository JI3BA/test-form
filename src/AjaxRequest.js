export function postData(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Ошибка при выполнении запроса.');
            }
        })
        .then(data => {
            console.log('Успешный ответ сервера:', data);
            return data;
        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
            throw error;
        });
}