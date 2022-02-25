const allRoles = {
  user: ['getAbclists', 'manageAbclists'],
  admin: ['getUsers', 'manageUsers', 'getAbclists', 'manageAbclists'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
