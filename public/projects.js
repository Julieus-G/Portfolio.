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
            window.open("https://github.com/Sirkastik", '_blank');
            break;
        case 'linkedin':
            window.open("https://www.linkedin.com/in/rioba-victor/", '_blank');
            break;
        case 'twitter':
            window.open("https://twitter.com/rioba_vic", '_blank');
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
