const express = require('express')
const app = express()
const login = require('../model/loginModel');

const getAllLogin = async (req,res) => {
    try {
        const temp = await login.find()
        res.status(200).json(temp)
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

const logIn = async(req,res) =>{
    const data = {
        name:req.body.username,
        password:req.body.password
    }
    try {
        const existingUser = await getAccountByUsername(data.name)
        if(existingUser) {
            if(data.password === existingUser.password) {
                res.status(200).json({existingUser})
            }
            else{
                res.status(235).json("The password is wrong")
            }
        }else {
            res.status(234).json("This username doesnot exist")
        }
    } catch (error) {
        
    }

}
async function getAccountByUsername(username) {
    try {
        const isUsername = await login.findOne({ username });
        console.log(isUsername); // Log the result
        return isUsername;
    } catch (error) {
        console.log(error); // Log the error
        return null; // Return null in case of error
    }
}

const signup = async (req, res) => {
    try {
        const data = {
            name: req.body.username,
            password: req.body.password
        };
        console.log(data);
        const existingUser = await getAccountByUsername(data.name);
        console.log(existingUser);

        if (existingUser) {
            res.status(234).json("This username is taken");
        } else {
            const account = await login.create(req.body);
            res.status(200).json({ account });
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({msg:error.message});
    }
};

module.exports = {
    getAllLogin,
    getLoginByUsername: getAccountByUsername,
    signup,
    logIn,

}
