function sendToServer(name, last_name, email, about, birthday) {
    $.ajax({
        type: "POST",
        url: "https://46.16.27.127/homework",
        data: {
            name: name,
            last_name: last_name,
            email: email,
            about: about,
            birthday: birthday
        },
        error: function () {
            console.log({success: true, type: 'JSON'})
        }
    });
}