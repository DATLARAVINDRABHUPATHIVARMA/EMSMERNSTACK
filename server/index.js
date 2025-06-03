import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import employeeRouter from './routes/employee.js'
import departmentRouter from './routes/department.js'
import clientRouter from './routes/client.js'
import siteRouter from './routes/site.js'
import connectToDatabase from "./db/db.js"


connectToDatabase()
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/employee", employeeRouter)
app.use("/api/department", departmentRouter)
app.use("/api/client", clientRouter)
app.use("/api/site", siteRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on port ${process.env.PORT}`)
})