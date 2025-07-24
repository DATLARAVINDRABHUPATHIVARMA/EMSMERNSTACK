import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import employeeRouter from './routes/employee.js'
import departmentRouter from './routes/department.js'
import clientRouter from './routes/client.js'
import contractRouter from './routes/contract.js'
import licenseRouter from './routes/license.js'
import siteRouter from './routes/site.js'
import salaryRouter from './routes/salary.js'
import leaveRouter from './routes/leave.js'
import connectToDatabase from "./db/db.js"


connectToDatabase()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public/uploads'))
app.use("/api/auth", authRouter)
app.use("/api/employee", employeeRouter)
app.use("/api/department", departmentRouter)
app.use("/api/client", clientRouter)
app.use("/api/contract", contractRouter)
app.use("/api/license", licenseRouter)
app.use("/api/site", siteRouter)
app.use("/api/salary", salaryRouter)
app.use("/api/leave", leaveRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on port ${process.env.PORT}`)
})