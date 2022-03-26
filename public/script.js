const $ = (className) => {
    return document.querySelector(className)
}

const darker = $('.darker')
const lighter = $('.lighter')
const menu = $('.menu')
const links = $('.links')
const close = $('.close')
const more = $('.more')
const less = $('.less')
const details = $('.details')
const git = $('.git')
const twitter = $('.twitter')
const linkedin = $('.linkedin')

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

more.onclick = () => {
    details.style.display = "block"
    more.style.display = 'none'
    less.style.display = "block"
}

less.onclick = () => {
    details.style.display = "none"
    less.style.display = 'none'
    more.style.display = "block"
}

const navigate = (site) => {
    switch (site) {
        case 'github':
            window.open("https://github.com/Julieus-G", '_blank');
            break;
        case 'linkedin':
            window.open("https://www.linkedin.com/in/rioba-victor/", '_blank');
            break;
        case 'twitter':
            window.open("https://twitter.com/Julieus-G", '_blank');
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
