var os=requirs('os');

console.log('시스템의 hostame:%s',os.hostame());
console.log('시스템의 메모리: %d /%d',os.freemem(), os.totalmem());
console.log('시스템의SPU정보\n');
console.dir(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보\n');
console.dir(os.networkInterfaces());