/*GALLERY ANIMATION*/
/*all panels become a node list by using queryselectorall*/ 
const panels = document.querySelectorAll('.panel');

/*add an active class to a panel to expand it */
panels.forEach((panel) =>{
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    })
})

/*function to remove all active classes*/

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}

/*DARK/LIGHT MODE */

document.getElementById('button').onclick = () => {
    document.body.classList.toggle('light-mode');
    document.getElementById('header').classList.toggle('header-ligth-mode');
    toggleInstagram();
}

function toggleInstagram () {
    if (document.body.classList.contains('light-mode') == true) {
        document.getElementById('instagram').src = "img/insta.png";
        document.getElementById('ball').classList = "ball-ligth";
    } else {
        document.getElementById('instagram').src = "img/instagram.png";
        document.getElementById('ball').classList = "ball-dark";
    }
}

