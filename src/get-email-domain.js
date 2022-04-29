const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domein;
for (let i=0; i<email.length; i++){
  if (email[i] === '@'){
    domein = email.slice(i+1,email.length);
  }
}
return domein;
}

module.exports = {
  getEmailDomain
};
