const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mysql=require("mysql");
const cors=require("cors");
const multer=require("multer");
const path=require("path");
const bcrypt=require("bcrypt");

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Sudha@2000",
    database:"emp"
});

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"public/images")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname);
    }
});

const upload=multer({
    storage: storage
});

//getting employee
app.get("/api/getEmployee", (req, res) => {
    const sqlGet = "SELECT * FROM employee";
    db.query(sqlGet, (error, result) => {
        if(error) return res.json("Error");
        return res.json(result);
    });
});

//adding employee
app.post("/api/post",upload.single('photo'),(req,res)=>{
    const {empName,sex,dob,salary,department}=req.body;
    const{filename,path}=req.file;

    const values={
        empName:empName,
        sex:sex,
        dob:dob,
        salary:salary,
        department:department,
        photo_filename:filename,
        photo_path:path,
    };
    //const sqlInsert= "INSERT INTO employee(`empName`, `sex`, `dob`, `salary`, `department`) VALUES (?)";
    db.query("INSERT INTO employee SET ?",values, (error,result) =>{
        if(error) return res.json("Error");
        return res.json(result);
              
    });
});

//deleting employee
app.delete("/api/remove/:id", (req,res)=>{
    const{id}=req.params;
    const sqlRemove="DELETE FROM employee WHERE id=?";
    db.query(sqlRemove,id,(error,result)=>{
        if(error){
            console.log(error);
        }
        res.send('Employee Deleted Successfully');
    });
});

//getting employee details based on their id
app.get("/api/getEmployee/:id", (req, res) => {
    const id=req.params.id;
    const sqlGet = "SELECT * FROM employee WHERE id= ?";
    db.query(sqlGet, [id],(error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

//updating employee 
app.put("/api/update/:id", (req, res) => {
    const id=req.params.id;
    const {empName,sex,dob,salary,department}=req.body;
    const{filename,path}=req.file;

    const values= {
    empName:empName,
    sex:sex,
    dob:dob,
    salary:salary,
    department:department,
    photo_filename:filename,
    photo_path:path,
  };
    {/*const values=[
        req.body.empName,
        req.body.sex,
        req.body.dob,
        req.body.salary,
        req.body.department,
    ]*/}
    const sqlUpdate = "UPDATE employee SET `empName`=?,`sex`=?,`dob`=?,`salary`=?,`department`=?, `photo`=? WHERE id=?";
    db.query(sqlUpdate, [...values,id],(error, result) => {
        if(error){
            console.log(error);
        }
        return res.json(result);
    });
});

{/*//registration
app.post("/api/register/save", (req,res)=>{
    const sqlSignin="INSERT INTO register(`name`,`email`,`password`) VALUES (?)";
    
        const values=[
            req.body.name,
            req.body.email,
            req.body.password
        ]
    db.query(sqlSignin,[values], (error, result) =>{
        if(error){
            return res.json(error);
        }
        return res.json(result);
    })
})
//registration
app.post("/api/register/save",async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const hashedPassword=await bcrypt.hash(password, saltRounds);
        const values={
            name,
            email,
            password:hashedPassword,
        };
        db.query("INSERT INTO register SET ?", values,(error,result) =>{
            if(error){
                return res.json(error);
            }
            return res.json(result);
    })
    }catch(error){
        console.error(error);
        res.status(500).json();
    }
})*/}
//registration
app.post("/api/register/save",async(req,res)=>{
    const {name,email,password}=req.body;

    bcrypt.hash(password, 10, (err,hash) =>{
        if(err){
            return res.status(500).json({error: 'Error hashing password'});
        }

        const newUser={
            name: name,
            email: email,
            password: hash,
        };

        db.query('INSERT INTO register SET ?', newUser, (error,result)=>{
            if(error){
                return res.json(error);
            }
            return res.json(result);
        });
    });
});
//Login
app.post("/api/register/login", (req,res)=>{
    const sqlLogin="SELECT * FROM register WHERE `email`=? AND `password`=?";
    db.query(sqlLogin, [req.body.email,req.body.password],(error, result)=>{
        if(error){
            return res.json(error);
        }
        if(result.length > 0){
            return res.json({Status:"Success"});
        }else{
            return res.json({Status:"Fail"});
        }
    })
})
app.get("/",(req,res)=>{
    /*const sqlInsert=
        "INSERT INTO employee (empName, sex, dob, salary, department) VALUES ('sudha', 'f', '26-03-2000', 450000, ' Application Developer')"; 
    db.query(sqlInsert,(error, result) =>{
        console.log("error", error);
        console.log("result", result);
        res.send("Hello");
    });*/
});
app.listen(8081,()=>{
    console.log("Server is running on port 8081")
})