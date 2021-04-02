var path=require('path');

var directories=["users","sunny","docs"];
var docsDirectory=directories.join(path.sep);
console.log('문서 디렉토리 찾기: %s',docsDirectory);

var curPath=path.basename.join('/Users/sunny','notepad.exe');

var filename="C:\\Users\\sunny\\notepad.exe";
var dirname=path.dirname(filename);
var basename=path.basename(filename);
var extname=path.extname(filename);
console.log('디렉토리 : %s, 파일 이름: %s, 확장자:%s',dirname,basename,extname)