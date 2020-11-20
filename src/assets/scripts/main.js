/**
 * Import dependencies from node_modules
 * see commented examples below
 */
 
import 'bootstrap';
import $ from 'jquery';

/**
 * Write any other JavaScript below
 */

function iAmInHome(){
  const path = window.location.pathname.split('/');
  const actualPage = path[path.length-1];
  if(['index.html',''].includes(actualPage)) return true;
  else return false;
}

function ticketLinkTweak(){
  addLinkClassToEntrades();
  window.addEventListener('resize', addLinkClassToEntrades);
}

function addLinkClassToEntrades(){
  const mainTickets = document.querySelector('#home__tickets__link');
  if(mainTickets) {
    if(window.innerWidth<576) mainTickets.classList.add('link');
    else mainTickets.classList.remove('link');
  }
}

function iAmInContact(){
  const path = window.location.pathname.split('/');
  const actualPage = path[path.length-1];
  if('contact.html' == actualPage) return true;
  else return false;
}

function formSubmited(){
    const search = location.search.substring(1);
    let params = {};
    if(search) params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    if(params.s == 1) return true;
    else return false;
}

function displayAlert(){
  const alertContainer = document.querySelector('#alert_container');
  alertContainer.classList.add('container', 'alert', 'alert-dismissible', 'fadeIn', 'fade','show', 'col-10', 'offset-1', 'col-sm-8', 'offset-sm-2', 'col-lg-6', 'offset-lg-3', 'alert-success');
  alertContainer.setAttribute('role', 'alert');
  alertContainer.innerHTML = 'Message <strong>successfully</strong> sent';
  const button = document.createElement('button');
  button.type = 'button';
  button.setAttribute('aria-label','Close');
  button.setAttribute('data-dismiss','alert');
  alertContainer.appendChild(button);
  const span = document.createElement('span');
  span.setAttribute('aria-hidden','true');
  span.innerHTML = '&times';
  button.appendChild(span);
  button.classList.add('close');
  $('.alert').alert();
  window.setTimeout(()=>{
    $('.alert').alert('close');
  },5000);
}

(() => {
  if(iAmInContact() && formSubmited()) displayAlert();
  if(iAmInHome()) ticketLinkTweak();
})();
