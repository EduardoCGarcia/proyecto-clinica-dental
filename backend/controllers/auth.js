const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");

const { handleHttpError } = require("../utils/handleError")
const { tokenSign, verifyToken } = require("../utils/handleJwt")
const { usersModel } = require("../models")

const signUp = async (req, res) => {
    try {
        req = matchedData(req);

        const password = await encrypt(req.password);
        const body = { ...req, password: password };
        
        const dataUser = await usersModel.create(body);
        
        dataUser.set('password', undefined, { strict: false })

          const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        } 


        res.send({ data: data });

    } catch (error) {
        console.error('Error during signUp: ', error); // Cambia a console.error para diferenciar errores en tus logs
        res.status(500).send({ message: "Ha ocurrido un error interno. Por favor, intenta nuevamente más tarde." });
    }
}

const logIn = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await usersModel.findOne({ where: { email: req.email } });
        
        if (!user) {
            handleHttpError(res, "USER_NOT_EXIST", 404);
            return;
        }

        const hashPassword = user.get('password');

        const check = await compare(req.password, hashPassword);

        if (!check) {
            handleHttpError(res, "PASSWORD_INVALID", 401);
            return;
        }

        user.set('password', undefined,{strict:false});

        const data = {
            token: await tokenSign(user),
            user
        }

        res.send(data);

    } catch (error) {
        console.log(error);
        handleHttpError(res, "ERROR_LOGIN_USER");
    }
}



module.exports = { signUp, logIn };