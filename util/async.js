module.exports = {
  getDataPromise() {
    return new Promise((resolve, reject) => {
      resolve({ msg: 'This is promise' });
    });
  },
  getDataCallback(cb) {
    setTimeout(() => {
      cb({ msg: 'Callback function' });
    }, 1000);
  },
};
