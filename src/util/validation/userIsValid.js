const EMAIL_REGEX = new RegExp(
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
);

/**
 * Function to validate if a user has the required fields in the correct format
 *
 * @param {User} user - A user object
 *
 * @return {boolean} valid - Boolean value describing if the user is valid
 */
const userIsValid = user => {
  if (!user) return false;

  // Validate UID
  if (!user.uid) return false;
  if (typeof user.uid !== 'string') return false;

  // Validate name
  if (!user.name) return false;
  if (typeof user.name !== 'string') return false;
  if (user.name.length < 1) return false;

  // Validate email
  if (!user.name) return false;
  if (typeof user.name !== 'string') return false;
  if (!EMAIL_REGEX.test(user.email)) return false;

  return true;
};

module.exports = userIsValid;
