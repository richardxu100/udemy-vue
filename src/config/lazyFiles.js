const User = (resolve) => { // how to lazy load, asynchronous
  require.ensure(['../components/user/User.vue'], () => {
    resolve(require('../components/user/User.vue'));
  });
}

const UserEdit = (resolve) => {
  require.ensure(['../components/user/UserEdit.vue'], () => {
    resolve(require('../components/user/UserEdit.vue'));
  });
}

const UserDetail = (resolve) => {
  require.ensure(['../components/user/UserDetail.vue'], () => {
    resolve(require('../components/user/UserDetail.vue'));
  });
}

const UserStart = (resolve) => {
  require.ensure(['../components/user/UserStart.vue'], () => {
    resolve(require('../components/user/UserStart.vue'));
  });
}
