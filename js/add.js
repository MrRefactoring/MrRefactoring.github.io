function email_validation(email) {
    const re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return re.test(String(email).toLowerCase());
}

function url_validation(url) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(url) || url === '';
}

function note_validation(note) {
    return note !== '';
}

function strip_tags(string) {
    return string.replace(/<\/?[^>]+>/gi, '');
}

$(document).ready(() => {

    let username = $('#username');
    let email = $('#email');
    let homepage = $('#homepage');
    let note = $('#note');
    let submit = $('#submit');

    let back = $('#back');

    function button_unlocker() {
        if (username.val() !== '' &&
            email_validation(email.val()) &&
            url_validation(homepage.val()) &&
            note_validation(note.val()))
        {
            homepage.removeClass('invalid').addClass('valid');
            submit.removeClass('disabled')
        } else {
            submit.addClass('disabled')
        }
    }

    username.on('keyup', () => {
        button_unlocker()
    });

    email.on('keyup', () => {
       button_unlocker()
    });

    homepage.on('keyup', () => {
        button_unlocker()
    });

    note.on('keyup', () => {
        note.val(strip_tags(note.val()));
        button_unlocker()
    });

    back.on('click', () => {
        window.location = 'index.html';
    });

});