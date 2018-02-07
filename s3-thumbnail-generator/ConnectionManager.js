module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["instance"] = {
        host: process.env.EndPoint_rdsInstance,
        port: process.env.Port_rdsInstance,
        user: "process.env.User_rdsInstance",
        password: "12345678",
        database: "database",
    };
    
    };