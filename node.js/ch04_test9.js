var fs=require('fs');

fs.open('./output.txt','r',function(err,fd){
    if(err) throw err;

    var buf=new Buffer(10);
    console.log('버퍼 타입: ',Buffer.isBuffer(buf));

    fs.read(fd,buf,0,buf.length,null,function(err,bytesRead,buffer){
        if(err) throw err;
        var isStr=vuffer.toString('utf8',0,bytesRead);
        console.log('파일에서 읽은 데이터 : %s',inStr);
        console.log(err,bytesRead,buffer);
        fs.close(fd,function(){
            console.log('output.txt파일을 열고 읽기 완료');
        });
    });
});