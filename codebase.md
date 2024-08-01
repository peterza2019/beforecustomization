# project_summary.md

```md

```

# package.json

```json
{ "name": "backend", "version": "1.0.0", "description": "", "main": "server.js", "scripts": { "dev": "NODE_ENV=development nodemon backend/server.js", "start": "NODE_ENV=production node backend/server.js", "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend" }, "type": "module", "keywords": [], "author": "", "license": "ISC", "dependencies": { "bcryptjs": "^2.4.3", "cloudinary": "^1.40.0", "cookie-parser": "^1.4.6", "cron": "^3.1.6", "dotenv": "^16.3.1", "express": "^4.18.2", "jsonwebtoken": "^9.0.1", "mongoose": "^7.4.0", "socket.io": "^4.7.2" }, "devDependencies": { "nodemon": "^3.0.1" } }
```

# README.md

```md
# 12+ Hour MERN Masterclass: Build and Deploy a Threads App with Real-Time Chat Functionality ![Demo App](https://i.ibb.co/BnGdh10/Group-62.png) [Video Tutorial on Youtube](https://youtu.be/G4V4xO9wyD8) Feature List: - 🌟 Tech stack: MERN + Socket.io + Chakra UI - 🎃 Authentication & Authorization with JWT - 📝 Create Post - 🗑️ Delete Post - ❤️ Like/Unlike Post - 💬 Comment to a Post - 👥 Follow/Unfollow Users - ❄️ Freeze Your Account - 🌓 Dark/Light Mode - 📱 Completely Responsive - 💬 Chat App With Image Support - 👀 Seen/Unseen Status for Messages - 🔊 Notification sounds - ⭐ Deployment for FREE ### Setup .env file \`\`\`js PORT=... MONGO_URI=... JWT_SECRET=... CLOUDINARY_CLOUD_NAME=... CLOUDINARY_API_KEY=... CLOUDINARY_API_SECRET=... \`\`\` ### Build the app \`\`\`shell npm run build \`\`\` ### Start the app \`\`\`shell npm start \`\`\` # beforecombine # attemp2launch # publiclaunchattemt # beforecustomization
```

# LICENSE

```
MIT License Copyright (c) 2024 Burak Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

# .gitignore

```
node_modules .env
```

# frontend/vite.config.js

```js
import { defineConfig } from "vite"; import react from "@vitejs/plugin-react"; // https://vitejs.dev/config/ export default defineConfig({ plugins: [react()], server: { port: 3000, // Get rid of the CORS error proxy: { "/api": { target: "http://localhost:5000", changeOrigin: true, secure: false, }, }, }, });
```

# frontend/vercel.json

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

# frontend/package.json

```json
{ "name": "threads-yt", "private": true, "version": "0.0.0", "type": "module", "scripts": { "dev": "vite", "build": "vite build", "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0", "preview": "vite preview" }, "dependencies": { "@chakra-ui/icons": "^2.1.0", "@chakra-ui/react": "^2.7.1", "@emotion/react": "^11.11.1", "@emotion/styled": "^11.11.0", "backend": "file:..", "date-fns": "^2.30.0", "framer-motion": "^10.12.21", "react": "^18.2.0", "react-dom": "^18.2.0", "react-icons": "^4.10.1", "react-router-dom": "^6.14.1", "recoil": "^0.7.7", "socket.io-client": "^4.7.2" }, "devDependencies": { "@types/react": "^18.2.14", "@types/react-dom": "^18.2.6", "@vitejs/plugin-react": "^4.0.1", "eslint": "^8.44.0", "eslint-plugin-react": "^7.32.2", "eslint-plugin-react-hooks": "^4.6.0", "eslint-plugin-react-refresh": "^0.4.1", "vite": "^4.4.0" } }
```

# frontend/index.html

```html
<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <link rel="icon" type="image/svg+xml" href="/favicon.png" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Threads Clone</title> </head> <body> <div id="root"></div> <script type="module" src="/src/main.jsx"></script> </body> </html>
```

# frontend/README.md

```md
# Threads UI Clone Youtube Tutorial ### Built With React and Chakra UI # [Tutorial](https://youtu.be/TW7wltm4gD8) # [App Demo](https://threads-clone-yt.vercel.app/) ![Screenshot of App](https://i.ibb.co/bsJ6jf6/Screenshot-5.png)
```

# frontend/.gitignore

```
# Logs logs *.log npm-debug.log* yarn-debug.log* yarn-error.log* pnpm-debug.log* lerna-debug.log* node_modules dist dist-ssr *.local # Editor directories and files .vscode/* !.vscode/extensions.json .idea .DS_Store *.suo *.ntvs* *.njsproj *.sln *.sw?
```

# frontend/.eslintrc.cjs

```cjs
/* eslint-env node */ module.exports = { env: { browser: true, es2020: true }, extends: [ "eslint:recommended", "plugin:react/recommended", "plugin:react/jsx-runtime", "plugin:react-hooks/recommended", ], parserOptions: { ecmaVersion: "latest", sourceType: "module" }, settings: { react: { version: "18.2" } }, plugins: ["react-refresh"], rules: { "react-refresh/only-export-components": ["warn", { allowConstantExport: true }], "react/prop-types": "off", }, };
```

# backend/server.js

```js
import path from "path"; import express from "express"; import dotenv from "dotenv"; import connectDB from "./db/connectDB.js"; import cookieParser from "cookie-parser"; import userRoutes from "./routes/userRoutes.js"; import postRoutes from "./routes/postRoutes.js"; import messageRoutes from "./routes/messageRoutes.js"; import { v2 as cloudinary } from "cloudinary"; import { app, server } from "./socket/socket.js"; import job from "./cron/cron.js"; dotenv.config(); connectDB(); job.start(); const PORT = process.env.PORT || 5000; const __dirname = path.resolve(); cloudinary.config({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME, api_key: process.env.CLOUDINARY_API_KEY, api_secret: process.env.CLOUDINARY_API_SECRET, }); // Middlewares app.use(express.json({ limit: "50mb" })); // To parse JSON data in the req.body app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body app.use(cookieParser()); // Routes app.use("/api/users", userRoutes); app.use("/api/posts", postRoutes); app.use("/api/messages", messageRoutes); // http://localhost:5000 => backend,frontend if (process.env.NODE_ENV === "production") { app.use(express.static(path.join(__dirname, "/frontend/dist"))); // react app app.get("*", (req, res) => { res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")); }); } server.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
```

# backend/.gitignore

```
# Logs logs *.log npm-debug.log* yarn-debug.log* yarn-error.log* pnpm-debug.log* lerna-debug.log* node_modules dist dist-ssr *.local # Editor directories and files .vscode/* !.vscode/extensions.json .idea .DS_Store *.suo *.ntvs* *.njsproj *.sln *.sw? .env
```

# .trunk/trunk.yaml

```yaml
# This file controls the behavior of Trunk: https://docs.trunk.io/cli
# To learn more about the format of this file, see https://docs.trunk.io/reference/trunk-yaml
version: 0.1
cli:
  version: 1.22.2
# Trunk provides extensibility via plugins. (https://docs.trunk.io/plugins)
plugins:
  sources:
    - id: trunk
      ref: v1.6.1
      uri: https://github.com/trunk-io/plugins
# Many linters and tools depend on runtimes - configure them here. (https://docs.trunk.io/runtimes)
runtimes:
  enabled:
    - node@18.12.1
    - python@3.10.8
# This is the section where you manage your linters. (https://docs.trunk.io/check/configuration)
lint:
  enabled:
    - checkov@3.2.217
    - git-diff-check
    - markdownlint@0.41.0
    - osv-scanner@1.8.2
    - oxipng@9.1.2
    - prettier@3.3.3
    - svgo@3.3.2
    - trufflehog@3.80.5
actions:
  disabled:
    - trunk-announce
    - trunk-check-pre-push
    - trunk-fmt-pre-commit
  enabled:
    - trunk-upgrade-available

```

# .trunk/tools

This is a binary file of the type: Binary

# .trunk/out

This is a binary file of the type: Binary

# .trunk/notifications

This is a binary file of the type: Binary

# .trunk/logs

This is a binary file of the type: Binary

# .trunk/actions

This is a binary file of the type: Binary

# .trunk/.gitignore

```
*out *logs *actions *notifications *tools plugins user_trunk.yaml user.yaml tmp
```

# frontend/src/main.jsx

```jsx
import React from "react"; import ReactDOM from "react-dom/client"; import App from "./App.jsx"; import "./index.css"; import { ChakraProvider } from "@chakra-ui/react"; import { mode } from "@chakra-ui/theme-tools"; import { extendTheme } from "@chakra-ui/theme-utils"; import { ColorModeScript } from "@chakra-ui/color-mode"; import { BrowserRouter } from "react-router-dom"; import { RecoilRoot } from "recoil"; import { SocketContextProvider } from "./context/SocketContext.jsx"; const styles = { global: (props) => ({ body: { color: mode("gray.800", "whiteAlpha.900")(props), bg: mode("gray.100", "#101010")(props), }, }), }; const config = { initialColorMode: "dark", useSystemColorMode: true, }; const colors = { gray: { light: "#616161", dark: "#1e1e1e", }, }; const theme = extendTheme({ config, styles, colors }); ReactDOM.createRoot(document.getElementById("root")).render( // React.StrictMode renders every component twice (in the initial render), only in development. <React.StrictMode> <RecoilRoot> <BrowserRouter> <ChakraProvider theme={theme}> <ColorModeScript initialColorMode={theme.config.initialColorMode} /> <SocketContextProvider> <App /> </SocketContextProvider> </ChakraProvider> </BrowserRouter> </RecoilRoot> </React.StrictMode> );
```

# frontend/src/index.css

```css
.icon-container { border-radius: 50%; padding: 8px; width: 40px; height: 40px; transition: background-color 0.3s ease-in-out; } .icon-container:hover { background-color: #1e1e1e; } ::-webkit-scrollbar { width: 7px; } ::-webkit-scrollbar-track { background-color: #1e1e1e; } ::-webkit-scrollbar-thumb { background-color: #888; } ::-webkit-scrollbar-thumb { background-color: #555; }
```

# frontend/src/App.jsx

```jsx
import { Box, Container } from "@chakra-ui/react"; import { Navigate, Route, Routes, useLocation } from "react-router-dom"; import UserPage from "./pages/UserPage"; import PostPage from "./pages/PostPage"; import Header from "./components/Header"; import HomePage from "./pages/HomePage"; import AuthPage from "./pages/AuthPage"; import { useRecoilValue } from "recoil"; import userAtom from "./atoms/userAtom"; import UpdateProfilePage from "./pages/UpdateProfilePage"; import CreatePost from "./components/CreatePost"; import ChatPage from "./pages/ChatPage"; import { SettingsPage } from "./pages/SettingsPage"; function App() { const user = useRecoilValue(userAtom); const { pathname } = useLocation(); return ( <Box position={"relative"} w='full'> <Container maxW={pathname === "/" ? { base: "620px", md: "900px" } : "620px"}> <Header /> <Routes> <Route path='/' element={user ? <HomePage /> : <Navigate to='/auth' />} /> <Route path='/auth' element={!user ? <AuthPage /> : <Navigate to='/' />} /> <Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to='/auth' />} /> <Route path='/:username' element={ user ? ( <> <UserPage /> <CreatePost /> </> ) : ( <UserPage /> ) } /> <Route path='/:username/post/:pid' element={<PostPage />} /> <Route path='/chat' element={user ? <ChatPage /> : <Navigate to={"/auth"} />} /> <Route path='/settings' element={user ? <SettingsPage /> : <Navigate to={"/auth"} />} /> </Routes> </Container> </Box> ); } export default App;
```

# frontend/public/zuck-avatar.png

This is a binary file of the type: Image

# frontend/public/verified.png

This is a binary file of the type: Image

# frontend/public/post3.png

This is a binary file of the type: Image

# frontend/public/post2.png

This is a binary file of the type: Image

# frontend/public/post1.png

This is a binary file of the type: Image

# frontend/public/light-logo.svg

This is a file of the type: SVG Image

# frontend/public/favicon.png

This is a binary file of the type: Image

# frontend/public/dark-logo.svg

This is a file of the type: SVG Image

# backend/socket/socket.js

```js
import { Server } from "socket.io"; import http from "http"; import express from "express"; import Message from "../models/messageModel.js"; import Conversation from "../models/conversationModel.js"; const app = express(); const server = http.createServer(app); const io = new Server(server, { cors: { origin: "http://localhost:3000", methods: ["GET", "POST"], }, }); export const getRecipientSocketId = (recipientId) => { return userSocketMap[recipientId]; }; const userSocketMap = {}; // userId: socketId io.on("connection", (socket) => { console.log("user connected", socket.id); const userId = socket.handshake.query.userId; if (userId != "undefined") userSocketMap[userId] = socket.id; io.emit("getOnlineUsers", Object.keys(userSocketMap)); socket.on("markMessagesAsSeen", async ({ conversationId, userId }) => { try { await Message.updateMany({ conversationId: conversationId, seen: false }, { $set: { seen: true } }); await Conversation.updateOne({ _id: conversationId }, { $set: { "lastMessage.seen": true } }); io.to(userSocketMap[userId]).emit("messagesSeen", { conversationId }); } catch (error) { console.log(error); } }); socket.on("disconnect", () => { console.log("user disconnected"); delete userSocketMap[userId]; io.emit("getOnlineUsers", Object.keys(userSocketMap)); }); }); export { io, server, app };
```

# backend/routes/userRoutes.js

```js
import express from "express"; import { followUnFollowUser, getUserProfile, loginUser, logoutUser, signupUser, updateUser, getSuggestedUsers, freezeAccount, } from "../controllers/userController.js"; import protectRoute from "../middlewares/protectRoute.js"; const router = express.Router(); router.get("/profile/:query", getUserProfile); router.get("/suggested", protectRoute, getSuggestedUsers); router.post("/signup", signupUser); router.post("/login", loginUser); router.post("/logout", logoutUser); router.post("/follow/:id", protectRoute, followUnFollowUser); // Toggle state(follow/unfollow) router.put("/update/:id", protectRoute, updateUser); router.put("/freeze", protectRoute, freezeAccount); export default router;
```

# backend/routes/postRoutes.js

```js
import express from "express"; import { createPost, deletePost, getPost, likeUnlikePost, replyToPost, getFeedPosts, getUserPosts, } from "../controllers/postController.js"; import protectRoute from "../middlewares/protectRoute.js"; const router = express.Router(); router.get("/feed", protectRoute, getFeedPosts); router.get("/:id", getPost); router.get("/user/:username", getUserPosts); router.post("/create", protectRoute, createPost); router.delete("/:id", protectRoute, deletePost); router.put("/like/:id", protectRoute, likeUnlikePost); router.put("/reply/:id", protectRoute, replyToPost); export default router;
```

# backend/routes/messageRoutes.js

```js
import express from "express"; import protectRoute from "../middlewares/protectRoute.js"; import { getMessages, sendMessage, getConversations } from "../controllers/messageController.js"; const router = express.Router(); router.get("/conversations", protectRoute, getConversations); router.get("/:otherUserId", protectRoute, getMessages); router.post("/", protectRoute, sendMessage); export default router;
```

# backend/models/userModel.js

```js
import mongoose from "mongoose"; const userSchema = mongoose.Schema( { name: { type: String, required: true, }, username: { type: String, required: true, unique: true, }, email: { type: String, required: true, unique: true, }, password: { type: String, minLength: 6, required: true, }, profilePic: { type: String, default: "", }, followers: { type: [String], default: [], }, following: { type: [String], default: [], }, bio: { type: String, default: "", }, isFrozen: { type: Boolean, default: false, }, }, { timestamps: true, } ); const User = mongoose.model("User", userSchema); export default User;
```

# backend/models/postModel.js

```js
import mongoose from "mongoose"; const postSchema = mongoose.Schema( { postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, }, text: { type: String, maxLength: 500, }, img: { type: String, }, likes: { // array of user ids type: [mongoose.Schema.Types.ObjectId], ref: "User", default: [], }, replies: [ { userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, }, text: { type: String, required: true, }, userProfilePic: { type: String, }, username: { type: String, }, }, ], }, { timestamps: true, } ); const Post = mongoose.model("Post", postSchema); export default Post;
```

# backend/models/messageModel.js

```js
import mongoose from "mongoose"; const messageSchema = new mongoose.Schema( { conversationId: { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" }, sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, text: String, seen: { type: Boolean, default: false, }, img: { type: String, default: "", }, }, { timestamps: true } ); const Message = mongoose.model("Message", messageSchema); export default Message;
```

# backend/models/conversationModel.js

```js
import mongoose from "mongoose"; const conversationSchema = new mongoose.Schema( { participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], lastMessage: { text: String, sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, seen: { type: Boolean, default: false, }, }, }, { timestamps: true } ); const Conversation = mongoose.model("Conversation", conversationSchema); export default Conversation;
```

# backend/middlewares/protectRoute.js

```js
import User from "../models/userModel.js"; import jwt from "jsonwebtoken"; const protectRoute = async (req, res, next) => { try { const token = req.cookies.jwt; if (!token) return res.status(401).json({ message: "Unauthorized" }); const decoded = jwt.verify(token, process.env.JWT_SECRET); const user = await User.findById(decoded.userId).select("-password"); req.user = user; next(); } catch (err) { res.status(500).json({ message: err.message }); console.log("Error in signupUser: ", err.message); } }; export default protectRoute;
```

# backend/db/connectDB.js

```js
import mongoose from "mongoose"; const connectDB = async () => { try { const conn = await mongoose.connect(process.env.MONGO_URI, { // To avoid warnings in the console useNewUrlParser: true, useUnifiedTopology: true, }); console.log(`MongoDB Connected: ${conn.connection.host}`); } catch (error) { console.error(`Error: ${error.message}`); process.exit(1); } }; export default connectDB;
```

# backend/cron/cron.js

```js
import cron from "cron"; import https from "https"; const URL = "https://threads-clone-9if3.onrender.com"; const job = new cron.CronJob("*/14 * * * *", function () { https .get(URL, (res) => { if (res.statusCode === 200) { console.log("GET request sent successfully"); } else { console.log("GET request failed", res.statusCode); } }) .on("error", (e) => { console.error("Error while sending request", e); }); }); export default job; // CRON JOB EXPLANATION: // Cron jobs are scheduled tasks that run periodically at fixed intervals or specific times // send 1 GET request for every 14 minutes // Schedule: // You define a schedule using a cron expression, which consists of five fields representing: //! MINUTE, HOUR, DAY OF THE MONTH, MONTH, DAY OF THE WEEK //? EXAMPLES && EXPLANATION: //* 14 * * * * - Every 14 minutes //* 0 0 * * 0 - At midnight on every Sunday //* 30 3 15 * * - At 3:30 AM, on the 15th of every month //* 0 0 1 1 * - At midnight, on January 1st //* 0 * * * * - Every hour
```

# backend/controllers/userController.js

```js
import User from "../models/userModel.js"; import Post from "../models/postModel.js"; import bcrypt from "bcryptjs"; import generateTokenAndSetCookie from "../utils/helpers/generateTokenAndSetCookie.js"; import { v2 as cloudinary } from "cloudinary"; import mongoose from "mongoose"; const getUserProfile = async (req, res) => { // We will fetch user profile either with username or userId // query is either username or userId const { query } = req.params; try { let user; // query is userId if (mongoose.Types.ObjectId.isValid(query)) { user = await User.findOne({ _id: query }).select("-password").select("-updatedAt"); } else { // query is username user = await User.findOne({ username: query }).select("-password").select("-updatedAt"); } if (!user) return res.status(404).json({ error: "User not found" }); res.status(200).json(user); } catch (err) { res.status(500).json({ error: err.message }); console.log("Error in getUserProfile: ", err.message); } }; const signupUser = async (req, res) => { try { const { name, email, username, password } = req.body; const user = await User.findOne({ $or: [{ email }, { username }] }); if (user) { return res.status(400).json({ error: "User already exists" }); } const salt = await bcrypt.genSalt(10); const hashedPassword = await bcrypt.hash(password, salt); const newUser = new User({ name, email, username, password: hashedPassword, }); await newUser.save(); if (newUser) { generateTokenAndSetCookie(newUser._id, res); res.status(201).json({ _id: newUser._id, name: newUser.name, email: newUser.email, username: newUser.username, bio: newUser.bio, profilePic: newUser.profilePic, }); } else { res.status(400).json({ error: "Invalid user data" }); } } catch (err) { res.status(500).json({ error: err.message }); console.log("Error in signupUser: ", err.message); } }; const loginUser = async (req, res) => { try { const { username, password } = req.body; const user = await User.findOne({ username }); const isPasswordCorrect = await bcrypt.compare(password, user?.password || ""); if (!user || !isPasswordCorrect) return res.status(400).json({ error: "Invalid username or password" }); if (user.isFrozen) { user.isFrozen = false; await user.save(); } generateTokenAndSetCookie(user._id, res); res.status(200).json({ _id: user._id, name: user.name, email: user.email, username: user.username, bio: user.bio, profilePic: user.profilePic, }); } catch (error) { res.status(500).json({ error: error.message }); console.log("Error in loginUser: ", error.message); } }; const logoutUser = (req, res) => { try { res.cookie("jwt", "", { maxAge: 1 }); res.status(200).json({ message: "User logged out successfully" }); } catch (err) { res.status(500).json({ error: err.message }); console.log("Error in signupUser: ", err.message); } }; const followUnFollowUser = async (req, res) => { try { const { id } = req.params; const userToModify = await User.findById(id); const currentUser = await User.findById(req.user._id); if (id === req.user._id.toString()) return res.status(400).json({ error: "You cannot follow/unfollow yourself" }); if (!userToModify || !currentUser) return res.status(400).json({ error: "User not found" }); const isFollowing = currentUser.following.includes(id); if (isFollowing) { // Unfollow user await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } }); await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } }); res.status(200).json({ message: "User unfollowed successfully" }); } else { // Follow user await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } }); await User.findByIdAndUpdate(req.user._id, { $push: { following: id } }); res.status(200).json({ message: "User followed successfully" }); } } catch (err) { res.status(500).json({ error: err.message }); console.log("Error in followUnFollowUser: ", err.message); } }; const updateUser = async (req, res) => { const { name, email, username, password, bio } = req.body; let { profilePic } = req.body; const userId = req.user._id; try { let user = await User.findById(userId); if (!user) return res.status(400).json({ error: "User not found" }); if (req.params.id !== userId.toString()) return res.status(400).json({ error: "You cannot update other user's profile" }); if (password) { const salt = await bcrypt.genSalt(10); const hashedPassword = await bcrypt.hash(password, salt); user.password = hashedPassword; } if (profilePic) { if (user.profilePic) { await cloudinary.uploader.destroy(user.profilePic.split("/").pop().split(".")[0]); } const uploadedResponse = await cloudinary.uploader.upload(profilePic); profilePic = uploadedResponse.secure_url; } user.name = name || user.name; user.email = email || user.email; user.username = username || user.username; user.profilePic = profilePic || user.profilePic; user.bio = bio || user.bio; user = await user.save(); // Find all posts that this user replied and update username and userProfilePic fields await Post.updateMany( { "replies.userId": userId }, { $set: { "replies.$[reply].username": user.username, "replies.$[reply].userProfilePic": user.profilePic, }, }, { arrayFilters: [{ "reply.userId": userId }] } ); // password should be null in response user.password = null; res.status(200).json(user); } catch (err) { res.status(500).json({ error: err.message }); console.log("Error in updateUser: ", err.message); } }; const getSuggestedUsers = async (req, res) => { try { // exclude the current user from suggested users array and exclude users that current user is already following const userId = req.user._id; const usersFollowedByYou = await User.findById(userId).select("following"); const users = await User.aggregate([ { $match: { _id: { $ne: userId }, }, }, { $sample: { size: 10 }, }, ]); const filteredUsers = users.filter((user) => !usersFollowedByYou.following.includes(user._id)); const suggestedUsers = filteredUsers.slice(0, 4); suggestedUsers.forEach((user) => (user.password = null)); res.status(200).json(suggestedUsers); } catch (error) { res.status(500).json({ error: error.message }); } }; const freezeAccount = async (req, res) => { try { const user = await User.findById(req.user._id); if (!user) { return res.status(400).json({ error: "User not found" }); } user.isFrozen = true; await user.save(); res.status(200).json({ success: true }); } catch (error) { res.status(500).json({ error: error.message }); } }; export { signupUser, loginUser, logoutUser, followUnFollowUser, updateUser, getUserProfile, getSuggestedUsers, freezeAccount, };
```

# backend/controllers/postController.js

```js
import Post from "../models/postModel.js"; import User from "../models/userModel.js"; import { v2 as cloudinary } from "cloudinary"; const createPost = async (req, res) => { try { const { postedBy, text } = req.body; let { img } = req.body; if (!postedBy || !text) { return res.status(400).json({ error: "Postedby and text fields are required" }); } const user = await User.findById(postedBy); if (!user) { return res.status(404).json({ error: "User not found" }); } if (user._id.toString() !== req.user._id.toString()) { return res.status(401).json({ error: "Unauthorized to create post" }); } const maxLength = 500; if (text.length > maxLength) { return res.status(400).json({ error: `Text must be less than ${maxLength} characters` }); } if (img) { const uploadedResponse = await cloudinary.uploader.upload(img); img = uploadedResponse.secure_url; } const newPost = new Post({ postedBy, text, img }); await newPost.save(); res.status(201).json(newPost); } catch (err) { res.status(500).json({ error: err.message }); console.log(err); } }; const getPost = async (req, res) => { try { const post = await Post.findById(req.params.id); if (!post) { return res.status(404).json({ error: "Post not found" }); } res.status(200).json(post); } catch (err) { res.status(500).json({ error: err.message }); } }; const deletePost = async (req, res) => { try { const post = await Post.findById(req.params.id); if (!post) { return res.status(404).json({ error: "Post not found" }); } if (post.postedBy.toString() !== req.user._id.toString()) { return res.status(401).json({ error: "Unauthorized to delete post" }); } if (post.img) { const imgId = post.img.split("/").pop().split(".")[0]; await cloudinary.uploader.destroy(imgId); } await Post.findByIdAndDelete(req.params.id); res.status(200).json({ message: "Post deleted successfully" }); } catch (err) { res.status(500).json({ error: err.message }); } }; const likeUnlikePost = async (req, res) => { try { const { id: postId } = req.params; const userId = req.user._id; const post = await Post.findById(postId); if (!post) { return res.status(404).json({ error: "Post not found" }); } const userLikedPost = post.likes.includes(userId); if (userLikedPost) { // Unlike post await Post.updateOne({ _id: postId }, { $pull: { likes: userId } }); res.status(200).json({ message: "Post unliked successfully" }); } else { // Like post post.likes.push(userId); await post.save(); res.status(200).json({ message: "Post liked successfully" }); } } catch (err) { res.status(500).json({ error: err.message }); } }; const replyToPost = async (req, res) => { try { const { text } = req.body; const postId = req.params.id; const userId = req.user._id; const userProfilePic = req.user.profilePic; const username = req.user.username; if (!text) { return res.status(400).json({ error: "Text field is required" }); } const post = await Post.findById(postId); if (!post) { return res.status(404).json({ error: "Post not found" }); } const reply = { userId, text, userProfilePic, username }; post.replies.push(reply); await post.save(); res.status(200).json(reply); } catch (err) { res.status(500).json({ error: err.message }); } }; const getFeedPosts = async (req, res) => { try { const userId = req.user._id; const user = await User.findById(userId); if (!user) { return res.status(404).json({ error: "User not found" }); } const following = user.following; const feedPosts = await Post.find({ postedBy: { $in: following } }).sort({ createdAt: -1 }); res.status(200).json(feedPosts); } catch (err) { res.status(500).json({ error: err.message }); } }; const getUserPosts = async (req, res) => { const { username } = req.params; try { const user = await User.findOne({ username }); if (!user) { return res.status(404).json({ error: "User not found" }); } const posts = await Post.find({ postedBy: user._id }).sort({ createdAt: -1 }); res.status(200).json(posts); } catch (error) { res.status(500).json({ error: error.message }); } }; export { createPost, getPost, deletePost, likeUnlikePost, replyToPost, getFeedPosts, getUserPosts };
```

# backend/controllers/messageController.js

```js
import Conversation from "../models/conversationModel.js"; import Message from "../models/messageModel.js"; import { getRecipientSocketId, io } from "../socket/socket.js"; import { v2 as cloudinary } from "cloudinary"; async function sendMessage(req, res) { try { const { recipientId, message } = req.body; let { img } = req.body; const senderId = req.user._id; let conversation = await Conversation.findOne({ participants: { $all: [senderId, recipientId] }, }); if (!conversation) { conversation = new Conversation({ participants: [senderId, recipientId], lastMessage: { text: message, sender: senderId, }, }); await conversation.save(); } if (img) { const uploadedResponse = await cloudinary.uploader.upload(img); img = uploadedResponse.secure_url; } const newMessage = new Message({ conversationId: conversation._id, sender: senderId, text: message, img: img || "", }); await Promise.all([ newMessage.save(), conversation.updateOne({ lastMessage: { text: message, sender: senderId, }, }), ]); const recipientSocketId = getRecipientSocketId(recipientId); if (recipientSocketId) { io.to(recipientSocketId).emit("newMessage", newMessage); } res.status(201).json(newMessage); } catch (error) { res.status(500).json({ error: error.message }); } } async function getMessages(req, res) { const { otherUserId } = req.params; const userId = req.user._id; try { const conversation = await Conversation.findOne({ participants: { $all: [userId, otherUserId] }, }); if (!conversation) { return res.status(404).json({ error: "Conversation not found" }); } const messages = await Message.find({ conversationId: conversation._id, }).sort({ createdAt: 1 }); res.status(200).json(messages); } catch (error) { res.status(500).json({ error: error.message }); } } async function getConversations(req, res) { const userId = req.user._id; try { const conversations = await Conversation.find({ participants: userId }).populate({ path: "participants", select: "username profilePic", }); // remove the current user from the participants array conversations.forEach((conversation) => { conversation.participants = conversation.participants.filter( (participant) => participant._id.toString() !== userId.toString() ); }); res.status(200).json(conversations); } catch (error) { res.status(500).json({ error: error.message }); } } export { sendMessage, getMessages, getConversations };
```

# .trunk/plugins/trunk

This is a binary file of the type: Binary

# .trunk/configs/svgo.config.js

```js
module.exports = { plugins: [ { name: "preset-default", params: { overrides: { removeViewBox: false, // https://github.com/svg/svgo/issues/1128 sortAttrs: true, removeOffCanvasPaths: true, }, }, }, ], };
```

# .trunk/configs/.markdownlint.yaml

```yaml
# Prettier friendly markdownlint config (all formatting rules disabled)
extends: markdownlint/style/prettier

```

# frontend/src/pages/UserPage.jsx

```jsx
import { useEffect, useState } from "react"; import UserHeader from "../components/UserHeader"; import { useParams } from "react-router-dom"; import useShowToast from "../hooks/useShowToast"; import { Flex, Spinner } from "@chakra-ui/react"; import Post from "../components/Post"; import useGetUserProfile from "../hooks/useGetUserProfile"; import { useRecoilState } from "recoil"; import postsAtom from "../atoms/postsAtom"; const UserPage = () => { const { user, loading } = useGetUserProfile(); const { username } = useParams(); const showToast = useShowToast(); const [posts, setPosts] = useRecoilState(postsAtom); const [fetchingPosts, setFetchingPosts] = useState(true); useEffect(() => { const getPosts = async () => { if (!user) return; setFetchingPosts(true); try { const res = await fetch(`/api/posts/user/${username}`); const data = await res.json(); console.log(data); setPosts(data); } catch (error) { showToast("Error", error.message, "error"); setPosts([]); } finally { setFetchingPosts(false); } }; getPosts(); }, [username, showToast, setPosts, user]); if (!user && loading) { return ( <Flex justifyContent={"center"}> <Spinner size={"xl"} /> </Flex> ); } if (!user && !loading) return <h1>User not found</h1>; return ( <> <UserHeader user={user} /> {!fetchingPosts && posts.length === 0 && <h1>User has not posts.</h1>} {fetchingPosts && ( <Flex justifyContent={"center"} my={12}> <Spinner size={"xl"} /> </Flex> )} {posts.map((post) => ( <Post key={post._id} post={post} postedBy={post.postedBy} /> ))} </> ); }; export default UserPage;
```

# frontend/src/pages/UpdateProfilePage.jsx

```jsx
import { Button, Flex, FormControl, FormLabel, Heading, Input, Stack, useColorModeValue, Avatar, Center, } from "@chakra-ui/react"; import { useRef, useState } from "react"; import { useRecoilState } from "recoil"; import userAtom from "../atoms/userAtom"; import usePreviewImg from "../hooks/usePreviewImg"; import useShowToast from "../hooks/useShowToast"; export default function UpdateProfilePage() { const [user, setUser] = useRecoilState(userAtom); const [inputs, setInputs] = useState({ name: user.name, username: user.username, email: user.email, bio: user.bio, password: "", }); const fileRef = useRef(null); const [updating, setUpdating] = useState(false); const showToast = useShowToast(); const { handleImageChange, imgUrl } = usePreviewImg(); const handleSubmit = async (e) => { e.preventDefault(); if (updating) return; setUpdating(true); try { const res = await fetch(`/api/users/update/${user._id}`, { method: "PUT", headers: { "Content-Type": "application/json", }, body: JSON.stringify({ ...inputs, profilePic: imgUrl }), }); const data = await res.json(); // updated user object if (data.error) { showToast("Error", data.error, "error"); return; } showToast("Success", "Profile updated successfully", "success"); setUser(data); localStorage.setItem("user-threads", JSON.stringify(data)); } catch (error) { showToast("Error", error, "error"); } finally { setUpdating(false); } }; return ( <form onSubmit={handleSubmit}> <Flex align={"center"} justify={"center"} my={6}> <Stack spacing={4} w={"full"} maxW={"md"} bg={useColorModeValue("white", "gray.dark")} rounded={"xl"} boxShadow={"lg"} p={6} > <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}> User Profile Edit </Heading> <FormControl id='userName'> <Stack direction={["column", "row"]} spacing={6}> <Center> <Avatar size='xl' boxShadow={"md"} src={imgUrl || user.profilePic} /> </Center> <Center w='full'> <Button w='full' onClick={() => fileRef.current.click()}> Change Avatar </Button> <Input type='file' hidden ref={fileRef} onChange={handleImageChange} /> </Center> </Stack> </FormControl> <FormControl> <FormLabel>Full name</FormLabel> <Input placeholder='John Doe' value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} _placeholder={{ color: "gray.500" }} type='text' /> </FormControl> <FormControl> <FormLabel>User name</FormLabel> <Input placeholder='johndoe' value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} _placeholder={{ color: "gray.500" }} type='text' /> </FormControl> <FormControl> <FormLabel>Email address</FormLabel> <Input placeholder='your-email@example.com' value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} _placeholder={{ color: "gray.500" }} type='email' /> </FormControl> <FormControl> <FormLabel>Bio</FormLabel> <Input placeholder='Your bio.' value={inputs.bio} onChange={(e) => setInputs({ ...inputs, bio: e.target.value })} _placeholder={{ color: "gray.500" }} type='text' /> </FormControl> <FormControl> <FormLabel>Password</FormLabel> <Input placeholder='password' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} _placeholder={{ color: "gray.500" }} type='password' /> </FormControl> <Stack spacing={6} direction={["column", "row"]}> <Button bg={"red.400"} color={"white"} w='full' _hover={{ bg: "red.500", }} > Cancel </Button> <Button bg={"green.400"} color={"white"} w='full' _hover={{ bg: "green.500", }} type='submit' isLoading={updating} > Submit </Button> </Stack> </Stack> </Flex> </form> ); }
```

# frontend/src/pages/SettingsPage.jsx

```jsx
import { Button, Text } from "@chakra-ui/react"; import useShowToast from "../hooks/useShowToast"; import useLogout from "../hooks/useLogout"; export const SettingsPage = () => { const showToast = useShowToast(); const logout = useLogout(); const freezeAccount = async () => { if (!window.confirm("Are you sure you want to freeze your account?")) return; try { const res = await fetch("/api/users/freeze", { method: "PUT", headers: { "Content-Type": "application/json" }, }); const data = await res.json(); if (data.error) { return showToast("Error", data.error, "error"); } if (data.success) { await logout(); showToast("Success", "Your account has been frozen", "success"); } } catch (error) { showToast("Error", error.message, "error"); } }; return ( <> <Text my={1} fontWeight={"bold"}> Freeze Your Account </Text> <Text my={1}>You can unfreeze your account anytime by logging in.</Text> <Button size={"sm"} colorScheme='red' onClick={freezeAccount}> Freeze </Button> </> ); };
```

# frontend/src/pages/PostPage.jsx

```jsx
import { Avatar, Box, Button, Divider, Flex, Image, Spinner, Text } from "@chakra-ui/react"; import Actions from "../components/Actions"; import { useEffect } from "react"; import Comment from "../components/Comment"; import useGetUserProfile from "../hooks/useGetUserProfile"; import useShowToast from "../hooks/useShowToast"; import { useNavigate, useParams } from "react-router-dom"; import { formatDistanceToNow } from "date-fns"; import { useRecoilState, useRecoilValue } from "recoil"; import userAtom from "../atoms/userAtom"; import { DeleteIcon } from "@chakra-ui/icons"; import postsAtom from "../atoms/postsAtom"; const PostPage = () => { const { user, loading } = useGetUserProfile(); const [posts, setPosts] = useRecoilState(postsAtom); const showToast = useShowToast(); const { pid } = useParams(); const currentUser = useRecoilValue(userAtom); const navigate = useNavigate(); const currentPost = posts[0]; useEffect(() => { const getPost = async () => { setPosts([]); try { const res = await fetch(`/api/posts/${pid}`); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } setPosts([data]); } catch (error) { showToast("Error", error.message, "error"); } }; getPost(); }, [showToast, pid, setPosts]); const handleDeletePost = async () => { try { if (!window.confirm("Are you sure you want to delete this post?")) return; const res = await fetch(`/api/posts/${currentPost._id}`, { method: "DELETE", }); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } showToast("Success", "Post deleted", "success"); navigate(`/${user.username}`); } catch (error) { showToast("Error", error.message, "error"); } }; if (!user && loading) { return ( <Flex justifyContent={"center"}> <Spinner size={"xl"} /> </Flex> ); } if (!currentPost) return null; console.log("currentPost", currentPost); return ( <> <Flex> <Flex w={"full"} alignItems={"center"} gap={3}> <Avatar src={user.profilePic} size={"md"} name='Mark Zuckerberg' /> <Flex> <Text fontSize={"sm"} fontWeight={"bold"}> {user.username} </Text> <Image src='/verified.png' w='4' h={4} ml={4} /> </Flex> </Flex> <Flex gap={4} alignItems={"center"}> <Text fontSize={"xs"} width={36} textAlign={"right"} color={"gray.light"}> {formatDistanceToNow(new Date(currentPost.createdAt))} ago </Text> {currentUser?._id === user._id && ( <DeleteIcon size={20} cursor={"pointer"} onClick={handleDeletePost} /> )} </Flex> </Flex> <Text my={3}>{currentPost.text}</Text> {currentPost.img && ( <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}> <Image src={currentPost.img} w={"full"} /> </Box> )} <Flex gap={3} my={3}> <Actions post={currentPost} /> </Flex> <Divider my={4} /> <Flex justifyContent={"space-between"}> <Flex gap={2} alignItems={"center"}> <Text fontSize={"2xl"}>👋</Text> <Text color={"gray.light"}>Get the app to like, reply and post.</Text> </Flex> <Button>Get</Button> </Flex> <Divider my={4} /> {currentPost.replies.map((reply) => ( <Comment key={reply._id} reply={reply} lastReply={reply._id === currentPost.replies[currentPost.replies.length - 1]._id} /> ))} </> ); }; export default PostPage;
```

# frontend/src/pages/HomePage.jsx

```jsx
import { Box, Flex, Spinner } from "@chakra-ui/react"; import { useEffect, useState } from "react"; import useShowToast from "../hooks/useShowToast"; import Post from "../components/Post"; import { useRecoilState } from "recoil"; import postsAtom from "../atoms/postsAtom"; import SuggestedUsers from "../components/SuggestedUsers"; const HomePage = () => { const [posts, setPosts] = useRecoilState(postsAtom); const [loading, setLoading] = useState(true); const showToast = useShowToast(); useEffect(() => { const getFeedPosts = async () => { setLoading(true); setPosts([]); try { const res = await fetch("/api/posts/feed"); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } console.log(data); setPosts(data); } catch (error) { showToast("Error", error.message, "error"); } finally { setLoading(false); } }; getFeedPosts(); }, [showToast, setPosts]); return ( <Flex gap='10' alignItems={"flex-start"}> <Box flex={70}> {!loading && posts.length === 0 && <h1>Follow some users to see the feed</h1>} {loading && ( <Flex justify='center'> <Spinner size='xl' /> </Flex> )} {posts.map((post) => ( <Post key={post._id} post={post} postedBy={post.postedBy} /> ))} </Box> <Box flex={30} display={{ base: "none", md: "block", }} > <SuggestedUsers /> </Box> </Flex> ); }; export default HomePage;
```

# frontend/src/pages/ChatPage.jsx

```jsx
import { SearchIcon } from "@chakra-ui/icons"; import { Box, Button, Flex, Input, Skeleton, SkeletonCircle, Text, useColorModeValue } from "@chakra-ui/react"; import Conversation from "../components/Conversation"; import { GiConversation } from "react-icons/gi"; import MessageContainer from "../components/MessageContainer"; import { useEffect, useState } from "react"; import useShowToast from "../hooks/useShowToast"; import { useRecoilState, useRecoilValue } from "recoil"; import { conversationsAtom, selectedConversationAtom } from "../atoms/messagesAtom"; import userAtom from "../atoms/userAtom"; import { useSocket } from "../context/SocketContext"; const ChatPage = () => { const [searchingUser, setSearchingUser] = useState(false); const [loadingConversations, setLoadingConversations] = useState(true); const [searchText, setSearchText] = useState(""); const [selectedConversation, setSelectedConversation] = useRecoilState(selectedConversationAtom); const [conversations, setConversations] = useRecoilState(conversationsAtom); const currentUser = useRecoilValue(userAtom); const showToast = useShowToast(); const { socket, onlineUsers } = useSocket(); useEffect(() => { socket?.on("messagesSeen", ({ conversationId }) => { setConversations((prev) => { const updatedConversations = prev.map((conversation) => { if (conversation._id === conversationId) { return { ...conversation, lastMessage: { ...conversation.lastMessage, seen: true, }, }; } return conversation; }); return updatedConversations; }); }); }, [socket, setConversations]); useEffect(() => { const getConversations = async () => { try { const res = await fetch("/api/messages/conversations"); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } console.log(data); setConversations(data); } catch (error) { showToast("Error", error.message, "error"); } finally { setLoadingConversations(false); } }; getConversations(); }, [showToast, setConversations]); const handleConversationSearch = async (e) => { e.preventDefault(); setSearchingUser(true); try { const res = await fetch(`/api/users/profile/${searchText}`); const searchedUser = await res.json(); if (searchedUser.error) { showToast("Error", searchedUser.error, "error"); return; } const messagingYourself = searchedUser._id === currentUser._id; if (messagingYourself) { showToast("Error", "You cannot message yourself", "error"); return; } const conversationAlreadyExists = conversations.find( (conversation) => conversation.participants[0]._id === searchedUser._id ); if (conversationAlreadyExists) { setSelectedConversation({ _id: conversationAlreadyExists._id, userId: searchedUser._id, username: searchedUser.username, userProfilePic: searchedUser.profilePic, }); return; } const mockConversation = { mock: true, lastMessage: { text: "", sender: "", }, _id: Date.now(), participants: [ { _id: searchedUser._id, username: searchedUser.username, profilePic: searchedUser.profilePic, }, ], }; setConversations((prevConvs) => [...prevConvs, mockConversation]); } catch (error) { showToast("Error", error.message, "error"); } finally { setSearchingUser(false); } }; return ( <Box position={"absolute"} left={"50%"} w={{ base: "100%", md: "80%", lg: "750px" }} p={4} transform={"translateX(-50%)"} > <Flex gap={4} flexDirection={{ base: "column", md: "row" }} maxW={{ sm: "400px", md: "full", }} mx={"auto"} > <Flex flex={30} gap={2} flexDirection={"column"} maxW={{ sm: "250px", md: "full" }} mx={"auto"}> <Text fontWeight={700} color={useColorModeValue("gray.600", "gray.400")}> Your Conversations </Text> <form onSubmit={handleConversationSearch}> <Flex alignItems={"center"} gap={2}> <Input placeholder='Search for a user' onChange={(e) => setSearchText(e.target.value)} /> <Button size={"sm"} onClick={handleConversationSearch} isLoading={searchingUser}> <SearchIcon /> </Button> </Flex> </form> {loadingConversations && [0, 1, 2, 3, 4].map((_, i) => ( <Flex key={i} gap={4} alignItems={"center"} p={"1"} borderRadius={"md"}> <Box> <SkeletonCircle size={"10"} /> </Box> <Flex w={"full"} flexDirection={"column"} gap={3}> <Skeleton h={"10px"} w={"80px"} /> <Skeleton h={"8px"} w={"90%"} /> </Flex> </Flex> ))} {!loadingConversations && conversations.map((conversation) => ( <Conversation key={conversation._id} isOnline={onlineUsers.includes(conversation.participants[0]._id)} conversation={conversation} /> ))} </Flex> {!selectedConversation._id && ( <Flex flex={70} borderRadius={"md"} p={2} flexDir={"column"} alignItems={"center"} justifyContent={"center"} height={"400px"} > <GiConversation size={100} /> <Text fontSize={20}>Select a conversation to start messaging</Text> </Flex> )} {selectedConversation._id && <MessageContainer />} </Flex> </Box> ); }; export default ChatPage;
```

# frontend/src/pages/AuthPage.jsx

```jsx
import { useRecoilValue } from "recoil"; import LoginCard from "../components/LoginCard"; import SignupCard from "../components/SignupCard"; import authScreenAtom from "../atoms/authAtom"; const AuthPage = () => { const authScreenState = useRecoilValue(authScreenAtom); return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>; }; export default AuthPage;
```

# frontend/src/hooks/useShowToast.js

```js
import { useToast } from "@chakra-ui/toast"; import { useCallback } from "react"; const useShowToast = () => { const toast = useToast(); const showToast = useCallback( (title, description, status) => { toast({ title, description, status, duration: 3000, isClosable: true, }); }, [toast] ); return showToast; }; export default useShowToast;
```

# frontend/src/hooks/usePreviewImg.js

```js
import { useState } from "react"; import useShowToast from "./useShowToast"; const usePreviewImg = () => { const [imgUrl, setImgUrl] = useState(null); const showToast = useShowToast(); const handleImageChange = (e) => { const file = e.target.files[0]; if (file && file.type.startsWith("image/")) { const reader = new FileReader(); reader.onloadend = () => { setImgUrl(reader.result); }; reader.readAsDataURL(file); } else { showToast("Invalid file type", " Please select an image file", "error"); setImgUrl(null); } }; return { handleImageChange, imgUrl, setImgUrl }; }; export default usePreviewImg;
```

# frontend/src/hooks/useLogout.js

```js
import userAtom from "../atoms/userAtom"; import { useSetRecoilState } from "recoil"; import useShowToast from "./useShowToast"; const useLogout = () => { const setUser = useSetRecoilState(userAtom); const showToast = useShowToast(); const logout = async () => { try { const res = await fetch("/api/users/logout", { method: "POST", headers: { "Content-Type": "application/json", }, }); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } localStorage.removeItem("user-threads"); setUser(null); } catch (error) { showToast("Error", error, "error"); } }; return logout; }; export default useLogout;
```

# frontend/src/hooks/useGetUserProfile.js

```js
import { useEffect, useState } from "react"; import { useParams } from "react-router-dom"; import useShowToast from "./useShowToast"; const useGetUserProfile = () => { const [user, setUser] = useState(null); const [loading, setLoading] = useState(true); const { username } = useParams(); const showToast = useShowToast(); useEffect(() => { const getUser = async () => { try { const res = await fetch(`/api/users/profile/${username}`); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } if (data.isFrozen) { setUser(null); return; } setUser(data); } catch (error) { showToast("Error", error.message, "error"); } finally { setLoading(false); } }; getUser(); }, [username, showToast]); return { loading, user }; }; export default useGetUserProfile;
```

# frontend/src/hooks/useFollowUnfollow.js

```js
import { useState } from "react"; import useShowToast from "./useShowToast"; import userAtom from "../atoms/userAtom"; import { useRecoilValue } from "recoil"; const useFollowUnfollow = (user) => { const currentUser = useRecoilValue(userAtom); const [following, setFollowing] = useState(user.followers.includes(currentUser?._id)); const [updating, setUpdating] = useState(false); const showToast = useShowToast(); const handleFollowUnfollow = async () => { if (!currentUser) { showToast("Error", "Please login to follow", "error"); return; } if (updating) return; setUpdating(true); try { const res = await fetch(`/api/users/follow/${user._id}`, { method: "POST", headers: { "Content-Type": "application/json", }, }); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } if (following) { showToast("Success", `Unfollowed ${user.name}`, "success"); user.followers.pop(); // simulate removing from followers } else { showToast("Success", `Followed ${user.name}`, "success"); user.followers.push(currentUser?._id); // simulate adding to followers } setFollowing(!following); console.log(data); } catch (error) { showToast("Error", error, "error"); } finally { setUpdating(false); } }; return { handleFollowUnfollow, updating, following }; }; export default useFollowUnfollow;
```

# frontend/src/context/SocketContext.jsx

```jsx
import { createContext, useContext, useEffect, useState } from "react"; import { useRecoilValue } from "recoil"; import io from "socket.io-client"; import userAtom from "../atoms/userAtom"; const SocketContext = createContext(); export const useSocket = () => { return useContext(SocketContext); }; export const SocketContextProvider = ({ children }) => { const [socket, setSocket] = useState(null); const [onlineUsers, setOnlineUsers] = useState([]); const user = useRecoilValue(userAtom); useEffect(() => { const socket = io("/", { query: { userId: user?._id, }, }); setSocket(socket); socket.on("getOnlineUsers", (users) => { setOnlineUsers(users); }); return () => socket && socket.close(); }, [user?._id]); return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>; };
```

# frontend/src/components/UserPost.jsx

```jsx
import { Avatar } from "@chakra-ui/avatar"; import { Image } from "@chakra-ui/image"; import { Box, Flex, Text } from "@chakra-ui/layout"; import { BsThreeDots } from "react-icons/bs"; import { Link } from "react-router-dom"; import Actions from "./Actions"; import { useState } from "react"; const UserPost = ({ postImg, postTitle, likes, replies }) => { const [liked, setLiked] = useState(false); return ( <Link to={"/markzuckerberg/post/1"}> <Flex gap={3} mb={4} py={5}> <Flex flexDirection={"column"} alignItems={"center"}> <Avatar size='md' name='Mark Zuckerberg' src='/zuck-avatar.png' /> <Box w='1px' h={"full"} bg='gray.light' my={2}></Box> <Box position={"relative"} w={"full"}> <Avatar size='xs' name='John doe' src='https://bit.ly/dan-abramov' position={"absolute"} top={"0px"} left='15px' padding={"2px"} /> <Avatar size='xs' name='John doe' src='https://bit.ly/sage-adebayo' position={"absolute"} bottom={"0px"} right='-5px' padding={"2px"} /> <Avatar size='xs' name='John doe' src='https://bit.ly/prosper-baba' position={"absolute"} bottom={"0px"} left='4px' padding={"2px"} /> </Box> </Flex> <Flex flex={1} flexDirection={"column"} gap={2}> <Flex justifyContent={"space-between"} w={"full"}> <Flex w={"full"} alignItems={"center"}> <Text fontSize={"sm"} fontWeight={"bold"}> markzuckerberg </Text> <Image src='/verified.png' w={4} h={4} ml={1} /> </Flex> <Flex gap={4} alignItems={"center"}> <Text fontStyle={"sm"} color={"gray.light"}> 1d </Text> <BsThreeDots /> </Flex> </Flex> <Text fontSize={"sm"}>{postTitle}</Text> {postImg && ( <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}> <Image src={postImg} w={"full"} /> </Box> )} <Flex gap={3} my={1}> <Actions liked={liked} setLiked={setLiked} /> </Flex> <Flex gap={2} alignItems={"center"}> <Text color={"gray.light"} fontSize='sm'> {replies} replies </Text> <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box> <Text color={"gray.light"} fontSize='sm'> {likes} likes </Text> </Flex> </Flex> </Flex> </Link> ); }; export default UserPost;
```

# frontend/src/components/UserHeader.jsx

```jsx
import { Avatar } from "@chakra-ui/avatar"; import { Box, Flex, Link, Text, VStack } from "@chakra-ui/layout"; import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"; import { Portal } from "@chakra-ui/portal"; import { Button, useToast } from "@chakra-ui/react"; import { BsInstagram } from "react-icons/bs"; import { CgMoreO } from "react-icons/cg"; import { useRecoilValue } from "recoil"; import userAtom from "../atoms/userAtom"; import { Link as RouterLink } from "react-router-dom"; import useFollowUnfollow from "../hooks/useFollowUnfollow"; const UserHeader = ({ user }) => { const toast = useToast(); const currentUser = useRecoilValue(userAtom); // logged in user const { handleFollowUnfollow, following, updating } = useFollowUnfollow(user); const copyURL = () => { const currentURL = window.location.href; navigator.clipboard.writeText(currentURL).then(() => { toast({ title: "Success.", status: "success", description: "Profile link copied.", duration: 3000, isClosable: true, }); }); }; return ( <VStack gap={4} alignItems={"start"}> <Flex justifyContent={"space-between"} w={"full"}> <Box> <Text fontSize={"2xl"} fontWeight={"bold"}> {user.name} </Text> <Flex gap={2} alignItems={"center"}> <Text fontSize={"sm"}>{user.username}</Text> <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}> threads.net </Text> </Flex> </Box> <Box> {user.profilePic && ( <Avatar name={user.name} src={user.profilePic} size={{ base: "md", md: "xl", }} /> )} {!user.profilePic && ( <Avatar name={user.name} src='https://bit.ly/broken-link' size={{ base: "md", md: "xl", }} /> )} </Box> </Flex> <Text>{user.bio}</Text> {currentUser?._id === user._id && ( <Link as={RouterLink} to='/update'> <Button size={"sm"}>Update Profile</Button> </Link> )} {currentUser?._id !== user._id && ( <Button size={"sm"} onClick={handleFollowUnfollow} isLoading={updating}> {following ? "Unfollow" : "Follow"} </Button> )} <Flex w={"full"} justifyContent={"space-between"}> <Flex gap={2} alignItems={"center"}> <Text color={"gray.light"}>{user.followers.length} followers</Text> <Box w='1' h='1' bg={"gray.light"} borderRadius={"full"}></Box> <Link color={"gray.light"}>instagram.com</Link> </Flex> <Flex> <Box className='icon-container'> <BsInstagram size={24} cursor={"pointer"} /> </Box> <Box className='icon-container'> <Menu> <MenuButton> <CgMoreO size={24} cursor={"pointer"} /> </MenuButton> <Portal> <MenuList bg={"gray.dark"}> <MenuItem bg={"gray.dark"} onClick={copyURL}> Copy link </MenuItem> </MenuList> </Portal> </Menu> </Box> </Flex> </Flex> <Flex w={"full"}> <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb='3' cursor={"pointer"}> <Text fontWeight={"bold"}> Threads</Text> </Flex> <Flex flex={1} borderBottom={"1px solid gray"} justifyContent={"center"} color={"gray.light"} pb='3' cursor={"pointer"} > <Text fontWeight={"bold"}> Replies</Text> </Flex> </Flex> </VStack> ); }; export default UserHeader;
```

# frontend/src/components/SuggestedUsers.jsx

```jsx
import { Box, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react"; import { useEffect, useState } from "react"; import SuggestedUser from "./SuggestedUser"; import useShowToast from "../hooks/useShowToast"; const SuggestedUsers = () => { const [loading, setLoading] = useState(true); const [suggestedUsers, setSuggestedUsers] = useState([]); const showToast = useShowToast(); useEffect(() => { const getSuggestedUsers = async () => { setLoading(true); try { const res = await fetch("/api/users/suggested"); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } setSuggestedUsers(data); } catch (error) { showToast("Error", error.message, "error"); } finally { setLoading(false); } }; getSuggestedUsers(); }, [showToast]); return ( <> <Text mb={4} fontWeight={"bold"}> Suggested Users </Text> <Flex direction={"column"} gap={4}> {!loading && suggestedUsers.map((user) => <SuggestedUser key={user._id} user={user} />)} {loading && [0, 1, 2, 3, 4].map((_, idx) => ( <Flex key={idx} gap={2} alignItems={"center"} p={"1"} borderRadius={"md"}> {/* avatar skeleton */} <Box> <SkeletonCircle size={"10"} /> </Box> {/* username and fullname skeleton */} <Flex w={"full"} flexDirection={"column"} gap={2}> <Skeleton h={"8px"} w={"80px"} /> <Skeleton h={"8px"} w={"90px"} /> </Flex> {/* follow button skeleton */} <Flex> <Skeleton h={"20px"} w={"60px"} /> </Flex> </Flex> ))} </Flex> </> ); }; export default SuggestedUsers; // Loading skeletons for suggested users, if u want to copy and paste as shown in the tutorial // <Flex key={idx} gap={2} alignItems={"center"} p={"1"} borderRadius={"md"}> // {/* avatar skeleton */} // <Box> // <SkeletonCircle size={"10"} /> // </Box> // {/* username and fullname skeleton */} // <Flex w={"full"} flexDirection={"column"} gap={2}> // <Skeleton h={"8px"} w={"80px"} /> // <Skeleton h={"8px"} w={"90px"} /> // </Flex> // {/* follow button skeleton */} // <Flex> // <Skeleton h={"20px"} w={"60px"} /> // </Flex> // </Flex>
```

# frontend/src/components/SuggestedUser.jsx

```jsx
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react"; import { Link } from "react-router-dom"; import useFollowUnfollow from "../hooks/useFollowUnfollow"; const SuggestedUser = ({ user }) => { const { handleFollowUnfollow, following, updating } = useFollowUnfollow(user); return ( <Flex gap={2} justifyContent={"space-between"} alignItems={"center"}> {/* left side */} <Flex gap={2} as={Link} to={`${user.username}`}> <Avatar src={user.profilePic} /> <Box> <Text fontSize={"sm"} fontWeight={"bold"}> {user.username} </Text> <Text color={"gray.light"} fontSize={"sm"}> {user.name} </Text> </Box> </Flex> {/* right side */} <Button size={"sm"} color={following ? "black" : "white"} bg={following ? "white" : "blue.400"} onClick={handleFollowUnfollow} isLoading={updating} _hover={{ color: following ? "black" : "white", opacity: ".8", }} > {following ? "Unfollow" : "Follow"} </Button> </Flex> ); }; export default SuggestedUser; // SuggestedUser component, if u want to copy and paste as shown in the tutorial { /* <Flex gap={2} justifyContent={"space-between"} alignItems={"center"}> <Flex gap={2} as={Link} to={`${user.username}`}> <Avatar src={user.profilePic} /> <Box> <Text fontSize={"sm"} fontWeight={"bold"}> {user.username} </Text> <Text color={"gray.light"} fontSize={"sm"}> {user.name} </Text> </Box> </Flex> <Button size={"sm"} color={following ? "black" : "white"} bg={following ? "white" : "blue.400"} onClick={handleFollow} isLoading={updating} _hover={{ color: following ? "black" : "white", opacity: ".8", }} > {following ? "Unfollow" : "Follow"} </Button> </Flex> */ }
```

# frontend/src/components/SignupCard.jsx

```jsx
import { Flex, Box, FormControl, FormLabel, Input, InputGroup, HStack, InputRightElement, Stack, Button, Heading, Text, useColorModeValue, Link, } from "@chakra-ui/react"; import { useState } from "react"; import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"; import { useSetRecoilState } from "recoil"; import authScreenAtom from "../atoms/authAtom"; import useShowToast from "../hooks/useShowToast"; import userAtom from "../atoms/userAtom"; export default function SignupCard() { const [showPassword, setShowPassword] = useState(false); const setAuthScreen = useSetRecoilState(authScreenAtom); const [inputs, setInputs] = useState({ name: "", username: "", email: "", password: "", }); const showToast = useShowToast(); const setUser = useSetRecoilState(userAtom); const handleSignup = async () => { try { const res = await fetch("/api/users/signup", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(inputs), }); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } localStorage.setItem("user-threads", JSON.stringify(data)); setUser(data); } catch (error) { showToast("Error", error, "error"); } }; return ( <Flex align={"center"} justify={"center"}> <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}> <Stack align={"center"}> <Heading fontSize={"4xl"} textAlign={"center"}> Sign up </Heading> </Stack> <Box rounded={"lg"} bg={useColorModeValue("white", "gray.dark")} boxShadow={"lg"} p={8}> <Stack spacing={4}> <HStack> <Box> <FormControl isRequired> <FormLabel>Full name</FormLabel> <Input type='text' onChange={(e) => setInputs({ ...inputs, name: e.target.value })} value={inputs.name} /> </FormControl> </Box> <Box> <FormControl isRequired> <FormLabel>Username</FormLabel> <Input type='text' onChange={(e) => setInputs({ ...inputs, username: e.target.value })} value={inputs.username} /> </FormControl> </Box> </HStack> <FormControl isRequired> <FormLabel>Email address</FormLabel> <Input type='email' onChange={(e) => setInputs({ ...inputs, email: e.target.value })} value={inputs.email} /> </FormControl> <FormControl isRequired> <FormLabel>Password</FormLabel> <InputGroup> <Input type={showPassword ? "text" : "password"} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} value={inputs.password} /> <InputRightElement h={"full"}> <Button variant={"ghost"} onClick={() => setShowPassword((showPassword) => !showPassword)} > {showPassword ? <ViewIcon /> : <ViewOffIcon />} </Button> </InputRightElement> </InputGroup> </FormControl> <Stack spacing={10} pt={2}> <Button loadingText='Submitting' size='lg' bg={useColorModeValue("gray.600", "gray.700")} color={"white"} _hover={{ bg: useColorModeValue("gray.700", "gray.800"), }} onClick={handleSignup} > Sign up </Button> </Stack> <Stack pt={6}> <Text align={"center"}> Already a user?{" "} <Link color={"blue.400"} onClick={() => setAuthScreen("login")}> Login </Link> </Text> </Stack> </Stack> </Box> </Stack> </Flex> ); }
```

# frontend/src/components/Post.jsx

```jsx
import { Avatar } from "@chakra-ui/avatar"; import { Image } from "@chakra-ui/image"; import { Box, Flex, Text } from "@chakra-ui/layout"; import { Link, useNavigate } from "react-router-dom"; import Actions from "./Actions"; import { useEffect, useState } from "react"; import useShowToast from "../hooks/useShowToast"; import { formatDistanceToNow } from "date-fns"; import { DeleteIcon } from "@chakra-ui/icons"; import { useRecoilState, useRecoilValue } from "recoil"; import userAtom from "../atoms/userAtom"; import postsAtom from "../atoms/postsAtom"; const Post = ({ post, postedBy }) => { const [user, setUser] = useState(null); const showToast = useShowToast(); const currentUser = useRecoilValue(userAtom); const [posts, setPosts] = useRecoilState(postsAtom); const navigate = useNavigate(); useEffect(() => { const getUser = async () => { try { const res = await fetch("/api/users/profile/" + postedBy); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } setUser(data); } catch (error) { showToast("Error", error.message, "error"); setUser(null); } }; getUser(); }, [postedBy, showToast]); const handleDeletePost = async (e) => { try { e.preventDefault(); if (!window.confirm("Are you sure you want to delete this post?")) return; const res = await fetch(`/api/posts/${post._id}`, { method: "DELETE", }); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } showToast("Success", "Post deleted", "success"); setPosts(posts.filter((p) => p._id !== post._id)); } catch (error) { showToast("Error", error.message, "error"); } }; if (!user) return null; return ( <Link to={`/${user.username}/post/${post._id}`}> <Flex gap={3} mb={4} py={5}> <Flex flexDirection={"column"} alignItems={"center"}> <Avatar size='md' name={user.name} src={user?.profilePic} onClick={(e) => { e.preventDefault(); navigate(`/${user.username}`); }} /> <Box w='1px' h={"full"} bg='gray.light' my={2}></Box> <Box position={"relative"} w={"full"}> {post.replies.length === 0 && <Text textAlign={"center"}>🥱</Text>} {post.replies[0] && ( <Avatar size='xs' name='John doe' src={post.replies[0].userProfilePic} position={"absolute"} top={"0px"} left='15px' padding={"2px"} /> )} {post.replies[1] && ( <Avatar size='xs' name='John doe' src={post.replies[1].userProfilePic} position={"absolute"} bottom={"0px"} right='-5px' padding={"2px"} /> )} {post.replies[2] && ( <Avatar size='xs' name='John doe' src={post.replies[2].userProfilePic} position={"absolute"} bottom={"0px"} left='4px' padding={"2px"} /> )} </Box> </Flex> <Flex flex={1} flexDirection={"column"} gap={2}> <Flex justifyContent={"space-between"} w={"full"}> <Flex w={"full"} alignItems={"center"}> <Text fontSize={"sm"} fontWeight={"bold"} onClick={(e) => { e.preventDefault(); navigate(`/${user.username}`); }} > {user?.username} </Text> <Image src='/verified.png' w={4} h={4} ml={1} /> </Flex> <Flex gap={4} alignItems={"center"}> <Text fontSize={"xs"} width={36} textAlign={"right"} color={"gray.light"}> {formatDistanceToNow(new Date(post.createdAt))} ago </Text> {currentUser?._id === user._id && <DeleteIcon size={20} onClick={handleDeletePost} />} </Flex> </Flex> <Text fontSize={"sm"}>{post.text}</Text> {post.img && ( <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}> <Image src={post.img} w={"full"} /> </Box> )} <Flex gap={3} my={1}> <Actions post={post} /> </Flex> </Flex> </Flex> </Link> ); }; export default Post;
```

# frontend/src/components/MessageInput.jsx

```jsx
import { Flex, Image, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, useDisclosure, } from "@chakra-ui/react"; import { useRef, useState } from "react"; import { IoSendSharp } from "react-icons/io5"; import useShowToast from "../hooks/useShowToast"; import { conversationsAtom, selectedConversationAtom } from "../atoms/messagesAtom"; import { useRecoilValue, useSetRecoilState } from "recoil"; import { BsFillImageFill } from "react-icons/bs"; import usePreviewImg from "../hooks/usePreviewImg"; const MessageInput = ({ setMessages }) => { const [messageText, setMessageText] = useState(""); const showToast = useShowToast(); const selectedConversation = useRecoilValue(selectedConversationAtom); const setConversations = useSetRecoilState(conversationsAtom); const imageRef = useRef(null); const { onClose } = useDisclosure(); const { handleImageChange, imgUrl, setImgUrl } = usePreviewImg(); const [isSending, setIsSending] = useState(false); const handleSendMessage = async (e) => { e.preventDefault(); if (!messageText && !imgUrl) return; if (isSending) return; setIsSending(true); try { const res = await fetch("/api/messages", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify({ message: messageText, recipientId: selectedConversation.userId, img: imgUrl, }), }); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } console.log(data); setMessages((messages) => [...messages, data]); setConversations((prevConvs) => { const updatedConversations = prevConvs.map((conversation) => { if (conversation._id === selectedConversation._id) { return { ...conversation, lastMessage: { text: messageText, sender: data.sender, }, }; } return conversation; }); return updatedConversations; }); setMessageText(""); setImgUrl(""); } catch (error) { showToast("Error", error.message, "error"); } finally { setIsSending(false); } }; return ( <Flex gap={2} alignItems={"center"}> <form onSubmit={handleSendMessage} style={{ flex: 95 }}> <InputGroup> <Input w={"full"} placeholder='Type a message' onChange={(e) => setMessageText(e.target.value)} value={messageText} /> <InputRightElement onClick={handleSendMessage} cursor={"pointer"}> <IoSendSharp /> </InputRightElement> </InputGroup> </form> <Flex flex={5} cursor={"pointer"}> <BsFillImageFill size={20} onClick={() => imageRef.current.click()} /> <Input type={"file"} hidden ref={imageRef} onChange={handleImageChange} /> </Flex> <Modal isOpen={imgUrl} onClose={() => { onClose(); setImgUrl(""); }} > <ModalOverlay /> <ModalContent> <ModalHeader></ModalHeader> <ModalCloseButton /> <ModalBody> <Flex mt={5} w={"full"}> <Image src={imgUrl} /> </Flex> <Flex justifyContent={"flex-end"} my={2}> {!isSending ? ( <IoSendSharp size={24} cursor={"pointer"} onClick={handleSendMessage} /> ) : ( <Spinner size={"md"} /> )} </Flex> </ModalBody> </ModalContent> </Modal> </Flex> ); }; export default MessageInput;
```

# frontend/src/components/MessageContainer.jsx

```jsx
import { Avatar, Divider, Flex, Image, Skeleton, SkeletonCircle, Text, useColorModeValue } from "@chakra-ui/react"; import Message from "./Message"; import MessageInput from "./MessageInput"; import { useEffect, useRef, useState } from "react"; import useShowToast from "../hooks/useShowToast"; import { conversationsAtom, selectedConversationAtom } from "../atoms/messagesAtom"; import { useRecoilValue, useSetRecoilState } from "recoil"; import userAtom from "../atoms/userAtom"; import { useSocket } from "../context/SocketContext.jsx"; import messageSound from "../assets/sounds/message.mp3"; const MessageContainer = () => { const showToast = useShowToast(); const selectedConversation = useRecoilValue(selectedConversationAtom); const [loadingMessages, setLoadingMessages] = useState(true); const [messages, setMessages] = useState([]); const currentUser = useRecoilValue(userAtom); const { socket } = useSocket(); const setConversations = useSetRecoilState(conversationsAtom); const messageEndRef = useRef(null); useEffect(() => { socket.on("newMessage", (message) => { if (selectedConversation._id === message.conversationId) { setMessages((prev) => [...prev, message]); } // make a sound if the window is not focused if (!document.hasFocus()) { const sound = new Audio(messageSound); sound.play(); } setConversations((prev) => { const updatedConversations = prev.map((conversation) => { if (conversation._id === message.conversationId) { return { ...conversation, lastMessage: { text: message.text, sender: message.sender, }, }; } return conversation; }); return updatedConversations; }); }); return () => socket.off("newMessage"); }, [socket, selectedConversation, setConversations]); useEffect(() => { const lastMessageIsFromOtherUser = messages.length && messages[messages.length - 1].sender !== currentUser._id; if (lastMessageIsFromOtherUser) { socket.emit("markMessagesAsSeen", { conversationId: selectedConversation._id, userId: selectedConversation.userId, }); } socket.on("messagesSeen", ({ conversationId }) => { if (selectedConversation._id === conversationId) { setMessages((prev) => { const updatedMessages = prev.map((message) => { if (!message.seen) { return { ...message, seen: true, }; } return message; }); return updatedMessages; }); } }); }, [socket, currentUser._id, messages, selectedConversation]); useEffect(() => { messageEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]); useEffect(() => { const getMessages = async () => { setLoadingMessages(true); setMessages([]); try { if (selectedConversation.mock) return; const res = await fetch(`/api/messages/${selectedConversation.userId}`); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } setMessages(data); } catch (error) { showToast("Error", error.message, "error"); } finally { setLoadingMessages(false); } }; getMessages(); }, [showToast, selectedConversation.userId, selectedConversation.mock]); return ( <Flex flex='70' bg={useColorModeValue("gray.200", "gray.dark")} borderRadius={"md"} p={2} flexDirection={"column"} > {/* Message header */} <Flex w={"full"} h={12} alignItems={"center"} gap={2}> <Avatar src={selectedConversation.userProfilePic} size={"sm"} /> <Text display={"flex"} alignItems={"center"}> {selectedConversation.username} <Image src='/verified.png' w={4} h={4} ml={1} /> </Text> </Flex> <Divider /> <Flex flexDir={"column"} gap={4} my={4} p={2} height={"400px"} overflowY={"auto"}> {loadingMessages && [...Array(5)].map((_, i) => ( <Flex key={i} gap={2} alignItems={"center"} p={1} borderRadius={"md"} alignSelf={i % 2 === 0 ? "flex-start" : "flex-end"} > {i % 2 === 0 && <SkeletonCircle size={7} />} <Flex flexDir={"column"} gap={2}> <Skeleton h='8px' w='250px' /> <Skeleton h='8px' w='250px' /> <Skeleton h='8px' w='250px' /> </Flex> {i % 2 !== 0 && <SkeletonCircle size={7} />} </Flex> ))} {!loadingMessages && messages.map((message) => ( <Flex key={message._id} direction={"column"} ref={messages.length - 1 === messages.indexOf(message) ? messageEndRef : null} > <Message message={message} ownMessage={currentUser._id === message.sender} /> </Flex> ))} </Flex> <MessageInput setMessages={setMessages} /> </Flex> ); }; export default MessageContainer;
```

# frontend/src/components/Message.jsx

```jsx
import { Avatar, Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react"; import { selectedConversationAtom } from "../atoms/messagesAtom"; import { useRecoilValue } from "recoil"; import userAtom from "../atoms/userAtom"; import { BsCheck2All } from "react-icons/bs"; import { useState } from "react"; const Message = ({ ownMessage, message }) => { const selectedConversation = useRecoilValue(selectedConversationAtom); const user = useRecoilValue(userAtom); const [imgLoaded, setImgLoaded] = useState(false); return ( <> {ownMessage ? ( <Flex gap={2} alignSelf={"flex-end"}> {message.text && ( <Flex bg={"green.800"} maxW={"350px"} p={1} borderRadius={"md"}> <Text color={"white"}>{message.text}</Text> <Box alignSelf={"flex-end"} ml={1} color={message.seen ? "blue.400" : ""} fontWeight={"bold"} > <BsCheck2All size={16} /> </Box> </Flex> )} {message.img && !imgLoaded && ( <Flex mt={5} w={"200px"}> <Image src={message.img} hidden onLoad={() => setImgLoaded(true)} alt='Message image' borderRadius={4} /> <Skeleton w={"200px"} h={"200px"} /> </Flex> )} {message.img && imgLoaded && ( <Flex mt={5} w={"200px"}> <Image src={message.img} alt='Message image' borderRadius={4} /> <Box alignSelf={"flex-end"} ml={1} color={message.seen ? "blue.400" : ""} fontWeight={"bold"} > <BsCheck2All size={16} /> </Box> </Flex> )} <Avatar src={user.profilePic} w='7' h={7} /> </Flex> ) : ( <Flex gap={2}> <Avatar src={selectedConversation.userProfilePic} w='7' h={7} /> {message.text && ( <Text maxW={"350px"} bg={"gray.400"} p={1} borderRadius={"md"} color={"black"}> {message.text} </Text> )} {message.img && !imgLoaded && ( <Flex mt={5} w={"200px"}> <Image src={message.img} hidden onLoad={() => setImgLoaded(true)} alt='Message image' borderRadius={4} /> <Skeleton w={"200px"} h={"200px"} /> </Flex> )} {message.img && imgLoaded && ( <Flex mt={5} w={"200px"}> <Image src={message.img} alt='Message image' borderRadius={4} /> </Flex> )} </Flex> )} </> ); }; export default Message;
```

# frontend/src/components/LogoutButton.jsx

```jsx
import { Button } from "@chakra-ui/button"; import { useSetRecoilState } from "recoil"; import userAtom from "../atoms/userAtom"; import useShowToast from "../hooks/useShowToast"; import { FiLogOut } from "react-icons/fi"; const LogoutButton = () => { const setUser = useSetRecoilState(userAtom); const showToast = useShowToast(); const handleLogout = async () => { try { const res = await fetch("/api/users/logout", { method: "POST", headers: { "Content-Type": "application/json", }, }); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } localStorage.removeItem("user-threads"); setUser(null); } catch (error) { showToast("Error", error, "error"); } }; return ( <Button position={"fixed"} top={"30px"} right={"30px"} size={"sm"} onClick={handleLogout}> <FiLogOut size={20} /> </Button> ); }; export default LogoutButton;
```

# frontend/src/components/LoginCard.jsx

```jsx
import { Flex, Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack, Button, Heading, Text, useColorModeValue, Link, } from "@chakra-ui/react"; import { useState } from "react"; import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"; import { useSetRecoilState } from "recoil"; import authScreenAtom from "../atoms/authAtom"; import useShowToast from "../hooks/useShowToast"; import userAtom from "../atoms/userAtom"; export default function LoginCard() { const [showPassword, setShowPassword] = useState(false); const setAuthScreen = useSetRecoilState(authScreenAtom); const setUser = useSetRecoilState(userAtom); const [loading, setLoading] = useState(false); const [inputs, setInputs] = useState({ username: "", password: "", }); const showToast = useShowToast(); const handleLogin = async () => { setLoading(true); try { const res = await fetch("/api/users/login", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(inputs), }); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } localStorage.setItem("user-threads", JSON.stringify(data)); setUser(data); } catch (error) { showToast("Error", error, "error"); } finally { setLoading(false); } }; return ( <Flex align={"center"} justify={"center"}> <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}> <Stack align={"center"}> <Heading fontSize={"4xl"} textAlign={"center"}> Login </Heading> </Stack> <Box rounded={"lg"} bg={useColorModeValue("white", "gray.dark")} boxShadow={"lg"} p={8} w={{ base: "full", sm: "400px", }} > <Stack spacing={4}> <FormControl isRequired> <FormLabel>Username</FormLabel> <Input type='text' value={inputs.username} onChange={(e) => setInputs((inputs) => ({ ...inputs, username: e.target.value }))} /> </FormControl> <FormControl isRequired> <FormLabel>Password</FormLabel> <InputGroup> <Input type={showPassword ? "text" : "password"} value={inputs.password} onChange={(e) => setInputs((inputs) => ({ ...inputs, password: e.target.value }))} /> <InputRightElement h={"full"}> <Button variant={"ghost"} onClick={() => setShowPassword((showPassword) => !showPassword)} > {showPassword ? <ViewIcon /> : <ViewOffIcon />} </Button> </InputRightElement> </InputGroup> </FormControl> <Stack spacing={10} pt={2}> <Button loadingText='Logging in' size='lg' bg={useColorModeValue("gray.600", "gray.700")} color={"white"} _hover={{ bg: useColorModeValue("gray.700", "gray.800"), }} onClick={handleLogin} isLoading={loading} > Login </Button> </Stack> <Stack pt={6}> <Text align={"center"}> Don&apos;t have an account?{" "} <Link color={"blue.400"} onClick={() => setAuthScreen("signup")}> Sign up </Link> </Text> </Stack> </Stack> </Box> </Stack> </Flex> ); }
```

# frontend/src/components/Header.jsx

```jsx
import { Button, Flex, Image, Link, useColorMode } from "@chakra-ui/react"; import { useRecoilValue, useSetRecoilState } from "recoil"; import userAtom from "../atoms/userAtom"; import { AiFillHome } from "react-icons/ai"; import { RxAvatar } from "react-icons/rx"; import { Link as RouterLink } from "react-router-dom"; import { FiLogOut } from "react-icons/fi"; import useLogout from "../hooks/useLogout"; import authScreenAtom from "../atoms/authAtom"; import { BsFillChatQuoteFill } from "react-icons/bs"; import { MdOutlineSettings } from "react-icons/md"; const Header = () => { const { colorMode, toggleColorMode } = useColorMode(); const user = useRecoilValue(userAtom); const logout = useLogout(); const setAuthScreen = useSetRecoilState(authScreenAtom); return ( <Flex justifyContent={"space-between"} mt={6} mb='12'> {user && ( <Link as={RouterLink} to='/'> <AiFillHome size={24} /> </Link> )} {!user && ( <Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("login")}> Login </Link> )} <Image cursor={"pointer"} alt='logo' w={6} src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"} onClick={toggleColorMode} /> {user && ( <Flex alignItems={"center"} gap={4}> <Link as={RouterLink} to={`/${user.username}`}> <RxAvatar size={24} /> </Link> <Link as={RouterLink} to={`/chat`}> <BsFillChatQuoteFill size={20} /> </Link> <Link as={RouterLink} to={`/settings`}> <MdOutlineSettings size={20} /> </Link> <Button size={"xs"} onClick={logout}> <FiLogOut size={20} /> </Button> </Flex> )} {!user && ( <Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("signup")}> Sign up </Link> )} </Flex> ); }; export default Header;
```

# frontend/src/components/CreatePost.jsx

```jsx
import { AddIcon } from "@chakra-ui/icons"; import { Button, CloseButton, Flex, FormControl, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useColorModeValue, useDisclosure, } from "@chakra-ui/react"; import { useRef, useState } from "react"; import usePreviewImg from "../hooks/usePreviewImg"; import { BsFillImageFill } from "react-icons/bs"; import { useRecoilState, useRecoilValue } from "recoil"; import userAtom from "../atoms/userAtom"; import useShowToast from "../hooks/useShowToast"; import postsAtom from "../atoms/postsAtom"; import { useParams } from "react-router-dom"; const MAX_CHAR = 500; const CreatePost = () => { const { isOpen, onOpen, onClose } = useDisclosure(); const [postText, setPostText] = useState(""); const { handleImageChange, imgUrl, setImgUrl } = usePreviewImg(); const imageRef = useRef(null); const [remainingChar, setRemainingChar] = useState(MAX_CHAR); const user = useRecoilValue(userAtom); const showToast = useShowToast(); const [loading, setLoading] = useState(false); const [posts, setPosts] = useRecoilState(postsAtom); const { username } = useParams(); const handleTextChange = (e) => { const inputText = e.target.value; if (inputText.length > MAX_CHAR) { const truncatedText = inputText.slice(0, MAX_CHAR); setPostText(truncatedText); setRemainingChar(0); } else { setPostText(inputText); setRemainingChar(MAX_CHAR - inputText.length); } }; const handleCreatePost = async () => { setLoading(true); try { const res = await fetch("/api/posts/create", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify({ postedBy: user._id, text: postText, img: imgUrl }), }); const data = await res.json(); if (data.error) { showToast("Error", data.error, "error"); return; } showToast("Success", "Post created successfully", "success"); if (username === user.username) { setPosts([data, ...posts]); } onClose(); setPostText(""); setImgUrl(""); } catch (error) { showToast("Error", error, "error"); } finally { setLoading(false); } }; return ( <> <Button position={"fixed"} bottom={10} right={5} bg={useColorModeValue("gray.300", "gray.dark")} onClick={onOpen} size={{ base: "sm", sm: "md" }} > <AddIcon /> </Button> <Modal isOpen={isOpen} onClose={onClose}> <ModalOverlay /> <ModalContent> <ModalHeader>Create Post</ModalHeader> <ModalCloseButton /> <ModalBody pb={6}> <FormControl> <Textarea placeholder='Post content goes here..' onChange={handleTextChange} value={postText} /> <Text fontSize='xs' fontWeight='bold' textAlign={"right"} m={"1"} color={"gray.800"}> {remainingChar}/{MAX_CHAR} </Text> <Input type='file' hidden ref={imageRef} onChange={handleImageChange} /> <BsFillImageFill style={{ marginLeft: "5px", cursor: "pointer" }} size={16} onClick={() => imageRef.current.click()} /> </FormControl> {imgUrl && ( <Flex mt={5} w={"full"} position={"relative"}> <Image src={imgUrl} alt='Selected img' /> <CloseButton onClick={() => { setImgUrl(""); }} bg={"gray.800"} position={"absolute"} top={2} right={2} /> </Flex> )} </ModalBody> <ModalFooter> <Button colorScheme='blue' mr={3} onClick={handleCreatePost} isLoading={loading}> Post </Button> </ModalFooter> </ModalContent> </Modal> </> ); }; export default CreatePost;
```

# frontend/src/components/Conversation.jsx

```jsx
import { Avatar, AvatarBadge, Box, Flex, Image, Stack, Text, WrapItem, useColorMode, useColorModeValue, } from "@chakra-ui/react"; import { useRecoilState, useRecoilValue } from "recoil"; import userAtom from "../atoms/userAtom"; import { BsCheck2All, BsFillImageFill } from "react-icons/bs"; import { selectedConversationAtom } from "../atoms/messagesAtom"; const Conversation = ({ conversation, isOnline }) => { const user = conversation.participants[0]; const currentUser = useRecoilValue(userAtom); const lastMessage = conversation.lastMessage; const [selectedConversation, setSelectedConversation] = useRecoilState(selectedConversationAtom); const colorMode = useColorMode(); console.log("selectedConverstion", selectedConversation); return ( <Flex gap={4} alignItems={"center"} p={"1"} _hover={{ cursor: "pointer", bg: useColorModeValue("gray.600", "gray.dark"), color: "white", }} onClick={() => setSelectedConversation({ _id: conversation._id, userId: user._id, userProfilePic: user.profilePic, username: user.username, mock: conversation.mock, }) } bg={ selectedConversation?._id === conversation._id ? (colorMode === "light" ? "gray.400" : "gray.dark") : "" } borderRadius={"md"} > <WrapItem> <Avatar size={{ base: "xs", sm: "sm", md: "md", }} src={user.profilePic} > {isOnline ? <AvatarBadge boxSize='1em' bg='green.500' /> : ""} </Avatar> </WrapItem> <Stack direction={"column"} fontSize={"sm"}> <Text fontWeight='700' display={"flex"} alignItems={"center"}> {user.username} <Image src='/verified.png' w={4} h={4} ml={1} /> </Text> <Text fontSize={"xs"} display={"flex"} alignItems={"center"} gap={1}> {currentUser._id === lastMessage.sender ? ( <Box color={lastMessage.seen ? "blue.400" : ""}> <BsCheck2All size={16} /> </Box> ) : ( "" )} {lastMessage.text.length > 18 ? lastMessage.text.substring(0, 18) + "..." : lastMessage.text || <BsFillImageFill size={16} />} </Text> </Stack> </Flex> ); }; export default Conversation;
```

# frontend/src/components/Comment.jsx

```jsx
import { Avatar, Divider, Flex, Text } from "@chakra-ui/react"; const Comment = ({ reply, lastReply }) => { return ( <> <Flex gap={4} py={2} my={2} w={"full"}> <Avatar src={reply.userProfilePic} size={"sm"} /> <Flex gap={1} w={"full"} flexDirection={"column"}> <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}> <Text fontSize='sm' fontWeight='bold'> {reply.username} </Text> </Flex> <Text>{reply.text}</Text> </Flex> </Flex> {!lastReply ? <Divider /> : null} </> ); }; export default Comment;
```

# frontend/src/components/Actions.jsx

```jsx
import { Box, Button, Flex, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, } from "@chakra-ui/react"; import { useState } from "react"; import { useRecoilState, useRecoilValue } from "recoil"; import userAtom from "../atoms/userAtom"; import useShowToast from "../hooks/useShowToast"; import postsAtom from "../atoms/postsAtom"; const Actions = ({ post }) => { const user = useRecoilValue(userAtom); const [liked, setLiked] = useState(post.likes.includes(user?._id)); const [posts, setPosts] = useRecoilState(postsAtom); const [isLiking, setIsLiking] = useState(false); const [isReplying, setIsReplying] = useState(false); const [reply, setReply] = useState(""); const showToast = useShowToast(); const { isOpen, onOpen, onClose } = useDisclosure(); const handleLikeAndUnlike = async () => { if (!user) return showToast("Error", "You must be logged in to like a post", "error"); if (isLiking) return; setIsLiking(true); try { const res = await fetch("/api/posts/like/" + post._id, { method: "PUT", headers: { "Content-Type": "application/json", }, }); const data = await res.json(); if (data.error) return showToast("Error", data.error, "error"); if (!liked) { // add the id of the current user to post.likes array const updatedPosts = posts.map((p) => { if (p._id === post._id) { return { ...p, likes: [...p.likes, user._id] }; } return p; }); setPosts(updatedPosts); } else { // remove the id of the current user from post.likes array const updatedPosts = posts.map((p) => { if (p._id === post._id) { return { ...p, likes: p.likes.filter((id) => id !== user._id) }; } return p; }); setPosts(updatedPosts); } setLiked(!liked); } catch (error) { showToast("Error", error.message, "error"); } finally { setIsLiking(false); } }; const handleReply = async () => { if (!user) return showToast("Error", "You must be logged in to reply to a post", "error"); if (isReplying) return; setIsReplying(true); try { const res = await fetch("/api/posts/reply/" + post._id, { method: "PUT", headers: { "Content-Type": "application/json", }, body: JSON.stringify({ text: reply }), }); const data = await res.json(); if (data.error) return showToast("Error", data.error, "error"); const updatedPosts = posts.map((p) => { if (p._id === post._id) { return { ...p, replies: [...p.replies, data] }; } return p; }); setPosts(updatedPosts); showToast("Success", "Reply posted successfully", "success"); onClose(); setReply(""); } catch (error) { showToast("Error", error.message, "error"); } finally { setIsReplying(false); } }; return ( <Flex flexDirection='column'> <Flex gap={3} my={2} onClick={(e) => e.preventDefault()}> <svg aria-label='Like' color={liked ? "rgb(237, 73, 86)" : ""} fill={liked ? "rgb(237, 73, 86)" : "transparent"} height='19' role='img' viewBox='0 0 24 22' width='20' onClick={handleLikeAndUnlike} > <path d='M1 7.66c0 4.575 3.899 9.086 9.987 12.934.338.203.74.406 1.013.406.283 0 .686-.203 1.013-.406C19.1 16.746 23 12.234 23 7.66 23 3.736 20.245 1 16.672 1 14.603 1 12.98 1.94 12 3.352 11.042 1.952 9.408 1 7.328 1 3.766 1 1 3.736 1 7.66Z' stroke='currentColor' strokeWidth='2' ></path> </svg> <svg aria-label='Comment' color='' fill='' height='20' role='img' viewBox='0 0 24 24' width='20' onClick={onOpen} > <title>Comment</title> <path d='M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z' fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='2' ></path> </svg> <RepostSVG /> <ShareSVG /> </Flex> <Flex gap={2} alignItems={"center"}> <Text color={"gray.light"} fontSize='sm'> {post.replies.length} replies </Text> <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box> <Text color={"gray.light"} fontSize='sm'> {post.likes.length} likes </Text> </Flex> <Modal isOpen={isOpen} onClose={onClose}> <ModalOverlay /> <ModalContent> <ModalHeader></ModalHeader> <ModalCloseButton /> <ModalBody pb={6}> <FormControl> <Input placeholder='Reply goes here..' value={reply} onChange={(e) => setReply(e.target.value)} /> </FormControl> </ModalBody> <ModalFooter> <Button colorScheme='blue' size={"sm"} mr={3} isLoading={isReplying} onClick={handleReply}> Reply </Button> </ModalFooter> </ModalContent> </Modal> </Flex> ); }; export default Actions; const RepostSVG = () => { return ( <svg aria-label='Repost' color='currentColor' fill='currentColor' height='20' role='img' viewBox='0 0 24 24' width='20' > <title>Repost</title> <path fill='' d='M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z' ></path> </svg> ); }; const ShareSVG = () => { return ( <svg aria-label='Share' color='' fill='rgb(243, 245, 247)' height='20' role='img' viewBox='0 0 24 24' width='20' > <title>Share</title> <line fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='2' x1='22' x2='9.218' y1='3' y2='10.083' ></line> <polygon fill='none' points='11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334' stroke='currentColor' strokeLinejoin='round' strokeWidth='2' ></polygon> </svg> ); };
```

# frontend/src/atoms/userAtom.js

```js
import { atom } from "recoil"; const userAtom = atom({ key: "userAtom", default: JSON.parse(localStorage.getItem("user-threads")), }); export default userAtom;
```

# frontend/src/atoms/postsAtom.js

```js
import { atom } from "recoil"; const postsAtom = atom({ key: "postsAtom", default: [], }); export default postsAtom;
```

# frontend/src/atoms/messagesAtom.js

```js
import { atom } from "recoil"; export const conversationsAtom = atom({ key: "conversationsAtom", default: [], }); export const selectedConversationAtom = atom({ key: "selectedConversationAtom", default: { _id: "", userId: "", username: "", userProfilePic: "", }, });
```

# frontend/src/atoms/authAtom.js

```js
import { atom } from "recoil"; const authScreenAtom = atom({ key: "authScreenAtom", default: "login", }); export default authScreenAtom;
```

# backend/utils/helpers/generateTokenAndSetCookie.js

```js
import jwt from "jsonwebtoken"; const generateTokenAndSetCookie = (userId, res) => { const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d", }); res.cookie("jwt", token, { httpOnly: true, // more secure maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days sameSite: "strict", // CSRF }); return token; }; export default generateTokenAndSetCookie;
```

# frontend/src/assets/sounds/message.mp3

This is a binary file of the type: Binary

