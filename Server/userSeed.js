import User from './models/User.js'
import bcrypt from 'bcrypt'
import connectToDatabase from './DB/db.js'

const userRegister = async ()=> {
    connectToDatabase()
    try{
        const hashPassword = await bcrypt.hash('admin',10)
        const newUser = new User ({
            name:"DATLA RAVINDRA BHUPATHI VARMA",
            contact:9133672933,
            address:'44, HACP Colony, Opposite Vikrampuri, Secunderabad - 500009',
            email:'ravivarmadatla64@gmail.com',
            password: hashPassword,
            employeeID: '1222222222222222222222222',
            designation: 'Full Stack Software Developer',
            role:"Admin",
            workPlace:'Office',
            client:'None',
            dateofJoining: 4-30-2025,
        })
        await newUser.save()
    } catch(error) {
        console.log(error)
    }
}

userRegister();