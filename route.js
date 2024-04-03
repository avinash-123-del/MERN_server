import { generateToken } from "./jwt.js";
import { userModel, dataModel } from "./mongoose.js";
import bcrypt from 'bcryptjs'
// ------ Home -----

const home = async (req, res) => {
  res.send('Welcome');
};


// ------ Sign Up In -----

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const findUser = await userModel.findOne({ email: email });

    if (findUser) {
      return res.status(401).send("User Already Exist");
    }

    const addUser = new userModel({ name, email, password: hashPassword })

    await addUser.save();

    return res.status(201).json({ message: "user created succeddfully", addUser })

  } catch (err) {
    return res.status(501).send("Internal server error")
  };
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await userModel.findOne({ email: email });

    if (!findUser) {
      return res.status(400).json({message  : "user not found" , status : 0})
    }

    const match = await bcrypt.compare(password, findUser.password);

    if (!match) {
      return res.status(400).json({message  : "password incorrect" , status : 0})

    }

    const payLoad = {
      id: findUser._id,
      name: findUser.name,
    }

    const token = await generateToken(payLoad);

    return res.status(201).json({ message: "user loggedIn successfully ", token , userInfo : payLoad })

  } catch (err) {
    return res.status(501).send("Internal server error")
  };
};


// ------ CRUD -----

const create = async (req, res) => {
  try {
    const {title, description } = req.body;

    const user = req.user;

    //---------findUser -------------

    const findUser = await userModel.findOne({ _id: user.id });

    if(!findUser){
     return  res.status(401).send("user not found") 
    }

    // ----------- save the data -----------

   const createNote =   new dataModel({ userId : user.id, title, description });

   await createNote.save();

    res.send('Data Successfully Added');

  } catch (err) {
    return res.status(501).send("Internal server error")
  };
};

const read = async (req, res) => {
  try {

    const {userId} = req.body;

    //---------findUser -------------

       const findUser = await userModel.findById({_id : userId});

    if(!findUser){
      return res.status(401).send("user not found")
    }

    const data = await dataModel.find({ userId}).sort({ createdAt: -1 }).lean();

    return res.status(201).json( data )

  } catch (err) {
    return res.status(501).send("Internal server error")
  };
};

const update = async (req, res) => {
  try {
    const { dataId, title, description } = req.body;

    const user = req.user;

    //--------- findUser -------------

    const findUser = await userModel.findOne({ _id: user.id });

    if(!findUser){
     return res.status(401).send("user not found") 
    }

    await dataModel.updateOne({ _id: dataId }, { title, description });

   return res.status(201).send('Data Successfully Updated');

  } catch (err) {
    return res.status(501).send("Internal server error")
  };
};

const dlt = async (req, res) => {
  try {
    const { dataId } = req.body;

    const user = req.user;

    //--------- findUser -------------

    const findUser = await userModel.findOne({ _id: user.id });

    if(!findUser){
     return res.status(401).send("user not found") 
    }

    await dataModel.deleteOne({ _id: dataId });

    return res.status(201).send('Data Successfully Deleted');

  } catch (err) {
    return res.status(501).send("Internal server error")
  }
};

export { home, signUp, signIn, create, read, update, dlt };