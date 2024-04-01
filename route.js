import { userModel, dataModel } from "./mongoose.js";

let home, signUp, signIn, create, read, update, dlt;


// ------ Home -----

home = async (req, res) => {
  res.send('Welcome');
};


// ------ Sign Up In -----

signUp = async (req, res) => {
  try {    
    const { name, email, password } = req.body;
  
    const findUser = await userModel.findOne({ email: email });
  
    if(findUser === null) {
      userModel.insertMany({
        name: name,
        email: email,
        password: password
      });
    
      res.send("User Successfully Signed Up");
    } else {
      res.send("User Already Exist");
    };
  } catch (err) {
    console.log('err : ', err);
    res.send(err);
  };
};

signIn = async (req, res) => {
  try {    
    const { email, password } = req.body;
  
    const findUser = await userModel.findOne({ email: email }, { __v: 0 });
  
    if(findUser === null){
      res.send("User not signed up");
    } else {
      if(password === findUser.password) {
        res.send(findUser);
      } else {
        res.send("Invalid Password");
      };
    };
  } catch (err) {
    console.log('err : ', err);
    res.send(err);
  };
};


// ------ CRUD -----

create = async (req, res) => {
  try {
    const { userId, title, description } = req.body;

    await dataModel.insertMany({ userId, title, description });
    
    res.send('Data Successfully Added');
  } catch (err) {
    console.log('err : ', err);
    res.send(err);
  };
};

read = async (req, res) => {
  try {
    const { userId } = req.body;

    const data = await dataModel.find({ userId });

    res.send(data);
  } catch (err) {
    console.log('err : ', err);
    res.send(err);
  };
};

update = async (req, res) => {
  try {
    const { dataId, title, description } = req.body;

    await dataModel.updateOne({ _id: dataId }, { title, description });

    res.send('Data Successfully Updated');
  } catch (err) {
    console.log('err : ', err);
    res.send(err);
  };
};

dlt = async(req, res) => {
  try {
    const { dataId } = req.body;

    await dataModel.deleteOne({ _id: dataId });

    res.send('Data Successfully Deleted');
  } catch (err) {
    console.log('err : ', err);
    res.send(err);
  }
};

export { home, signUp, signIn, create, read, update, dlt };