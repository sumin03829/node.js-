var fs=require('js');

fs.readFile('./package.json','utf8',function(err,data){
    console.log(data);
});
console.log('프로젝트 폴더 안의 package.json ㅏ일을 읽어오도록 요청했습니다.')