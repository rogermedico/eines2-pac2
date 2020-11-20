/**
 * Import dependencies from node_modules
 * see commented examples below
 */
 
import 'bootstrap';
import $ from 'jquery';

/**
 * Write any other JavaScript below
 */

 /* check if actual page is home page */
function iAmInHome(){
  const path = window.location.pathname.split('/');
  const actualPage = path[path.length-1];
  if(['index.html',''].includes(actualPage)) return true;
  else return false;
}

/* add or remove link class to tickets link depending on resolution */
function addLinkClassToEntrades(){
  const mainTickets = document.querySelector('#home__tickets__link');
  if(mainTickets) {
    if(window.innerWidth<576) mainTickets.classList.add('link');
    else mainTickets.classList.remove('link');
  }
}

/* ticket link tweak wrapper */
function ticketLinkTweak(){
  addLinkClassToEntrades();
  window.addEventListener('resize', addLinkClassToEntrades);
}

/* check if actual page is contact.html */
function iAmInContact(){
  const path = window.location.pathname.split('/');
  const actualPage = path[path.length-1];
  if('contact.html' == actualPage) return true;
  else return false;
}

/* check if form is submited via search url params */
function formSubmited(){
  const search = location.search.substring(1);
  let params = {};
  if(search) params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
  if(params.s == 1) return true;
  else return false;
}

/* make and display bootstrap alert and also dismiss after 5s */
function displayAlert(){

  /* take alert empty container and make the alert */
  const alertContainer = document.querySelector('#alert_container');
  alertContainer.classList.add('container', 'alert', 'alert-dismissible', 'fade-in', 'fade','show', 'col-10', 'offset-1', 'col-sm-8', 'offset-sm-2', 'col-lg-6', 'offset-lg-3', 'alert-success');
  alertContainer.setAttribute('role', 'alert');
  alertContainer.innerHTML = 'Message <strong>successfully</strong> sent';

  /* button to close */
  const button = document.createElement('button');
  button.type = 'button';
  button.setAttribute('aria-label','Close');
  button.setAttribute('data-dismiss','alert');
  alertContainer.appendChild(button);


  /* cross to close alert */
  const span = document.createElement('span');
  span.setAttribute('aria-hidden','true');
  span.innerHTML = '&times';
  button.appendChild(span);
  button.classList.add('close');

  /* dismiss logic */
  $('.alert').alert();
  window.setTimeout(()=>{
    $('.alert').alert('close');
  },5000);
}

(() => {
  /* if home page */
  if(iAmInHome()) ticketLinkTweak();

  /* if contact page and form submited */
  if(iAmInContact() && formSubmited()) displayAlert();
})();
