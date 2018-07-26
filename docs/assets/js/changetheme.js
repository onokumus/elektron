const body = document.body;
const themeSwitch = document.querySelector('.elk-switch-input[name=dark]');

function changeTheme() {
    if (themeSwitch.checked) {
        body.dataset.theme = 'dark';
    } else {
        body.dataset.theme = '';
    }
}
changeTheme();
themeSwitch.addEventListener('change', changeTheme);