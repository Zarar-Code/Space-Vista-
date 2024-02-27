import  express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit : "16kb"}));
app.use(express.urlencoded({extended:true, limit:"16kb"}));
app.use(express.static("public"))
app.use(cookieParser())


//Import routers
import userRouter from './routes/user.routes.js'

//declartion of routes

app.use("/api/v1/users", userRouter)

// app.get("/request", (req, res) => {
//     const jokes = [
//       {
//         id: 1,
//         title: "Fir",
//         content: "This is the first jokes",
//       },
//       {
//         id: 2,
//         title: "Second Jokes!!!",
//         content: "This is the second jokes",
//       },
//       {
//         id: 3,
//         title: "Third Jokes",
//         content: "This is the Third jokes",
//       },
//       {
//         id: 4,
//         title: "Fourth Jokes",
//         content: "This is the Fourth jokes",
//       },
//       {
//         id: 5,
//         title: "Fifth Jokes",
//         content: "This is the Fifth jokes",
//       },
//     ];
//     res.send(jokes);
//   });

export {app}