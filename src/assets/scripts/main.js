/**
 * Import dependencies from node_modules
 * see commented examples below
 */
 
import 'bootstrap';

/**
 * Write any other JavaScript below
 */

function addLinkClassToEntrades(){
  const mainTickets = document.querySelector('#main__tickets__link');
  if(window.innerWidth<576) mainTickets.classList.add('link');
  else mainTickets.classList.remove('link');
}

(() => {
  addLinkClassToEntrades();
  window.addEventListener('resize',()=> addLinkClassToEntrades());
})();
