var fs = require("fs");
fs.readFile("./a.txt","UTF-8",function (err,data) {
    if(err) throw err;//读取文件错误，抛出异常



});

fs.writeFile("./b.txt",data,function (err) {//写文件，直接覆盖，不存在文件自动在目录下创建文件
    if(err) throw err;
});

fs.appendFile("./b.txt",data,function (err) {//向文件中追加文件内容
    if(err) throw  err;
});
fs.unlink("./b.txt",function (err) {//删除文件
    if(err) throw  err;
});

fs.exists("./c",function(exists){//判断文件是否存在
    if(exists){
        console.log("this directory already exists !"+exists);

    }else{
        fs.mkdir("./c",function (err) {//创建文件夹
            if(err) throw  err;
        });
    }
});

fs.rename("./c","./d", (err) =>{//文件或者文件夹重命名
    if(err) throw err;
});
