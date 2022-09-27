const os = require('os');

// user
console.log(os.userInfo());

const uptime = os.uptime();

console.log('uptime', uptime, 'seconds');

const osInfo = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(osInfo);
