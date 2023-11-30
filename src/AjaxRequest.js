

export  const AjaxRequest = (name,email,phone,message) => {
    const formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/data', true)

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };

    xhr.onerror = function() {
        console.error('Ошибка при выполнении запроса.');
    };

    const jsonData = JSON.stringify(formData);

    xhr.send(jsonData);
}