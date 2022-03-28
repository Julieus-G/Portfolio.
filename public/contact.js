const $ = (className) => {
    return document.querySelector(className)
}

const darker = $('.darker')
const lighter = $('.lighter')
const menu = $('.menu')
const links = $('.links')
const close = $('.close')
const git = $('.git')
const twitter = $('.twitter')
const linkedin = $('.linkedin')
const qmark = $('.q')
const why = $('.why')


lighter.onclick = () => {
    document.body.id = 'light'
    lighter.id = 'hidden'
    darker.id = ''
}

darker.onclick = () => {
    document.body.id = 'dark'
    lighter.id = ''
    darker.id = 'hidden'
}

menu.onclick = () => {
    links.style.opacity = 1;
    links.style.pointerEvents = 'revert'
}

close.onclick = () => {
    links.style.opacity = 0;
    links.style.pointerEvents = 'none'
}

const navigate = (site) => {
    switch (site) {
        case 'github':
            window.open("https://github.com/Julieus-G", '_blank');
            break;
        case 'linkedin':
            window.open("https://www.linkedin.com/in/julieus-g-854008221", '_blank');
            break;
        case 'twitter':
            window.open("https://twitter.com/Julieus_G", '_blank');
            break;
        default:
            break;
    }
}


git.onclick = () => {
    navigate('github')
}

twitter.onclick = () => {
    navigate('twitter')
}
linkedin.onclick = () => {
    navigate('linkedin')
}


qmark.onclick = () => {
    console.log("qmark");
}

qmark.onmouseover = () => {
    why.id = ''
}

qmark.onmouseleave = () => {
    why.id = 'hidden'
}

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted

    function success() {
        status.classList.add("success");
        status.innerHTML = "Success 👍";
        form.reset();
    }

    function error() {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
