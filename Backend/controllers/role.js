import role from "../models/role.js";

const registerRole = async (req, res)=>{
  console.log(req.body.name);
    if(!req.body.name || !req.body.description){
      return  res.status(400).send("Imcomplete data");
    }

    const existingRole=await role.findOne({name:req.body.name });


    if(existingRole) return res.status(400).send("The role already exist");

    const roleSchema = new role({
        name: req.body.name,
        descriptiion:  req.body.description,
        dbStatus: true,

    });

    const result= await roleSchema.save();
    if(!result) return res.status(400).send("failed register");
    return res.status(200).send({result});
};

export default{registerRole};