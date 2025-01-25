import $ from 'jquery';

const Error = {
  init() {
    const randomNumber = Math.round(Math.random() * 12 ) + 1;
    const url = '/assets/images/error/' + randomNumber + '.gif';
    $('.section-error').css('background-image', `url("${url}")`);
  }
};
export default Error;
