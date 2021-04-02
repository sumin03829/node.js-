var noconf=require('nconf');

nconf.env();

console.log('OS환경변수의 값: %s', nconf.get('OS'));

console.log('OS환경변수의 값: '+ ProcessingInstruction.env['OS']);