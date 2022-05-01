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

/*SCROLL ENTIRE PAGE ON SCROLL*/
