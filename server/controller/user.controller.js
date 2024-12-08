import UsersModel from "../model/user.model.js";

export const verify = async (req, res) => {
    try {
      const userData = new UsersModel(req.body);
      const { email, password } = userData; 
      const userExist = await UsersModel.findOne({ email });
      console.log(userData)
      if (userExist) {
        const isMatch = password === userExist.password
        if (!isMatch) {
          return res.status(400).json({message:"A senha ou o email não correspondem!!"})
        }
      } 
     res.status(404).json({ message: "Usuário ainda não existe!!" });
    } catch (error) {
      console.error(error)
      res.status(500).json({
        message: "Erro interno do servidor!!",
      });
    }
  };