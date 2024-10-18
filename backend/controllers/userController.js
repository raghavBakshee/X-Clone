import { User } from "../models/userSchema.js";
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken"
export const Register = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        // basic validation
        if (!name || !username || !email || !password) {
            return res.status(401).json({
                message: "All fieds are required",
                success: false
            })
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({
                message: "User already exists",
                success: false
            })
        }
        const hashedPassword = await bcryptjs.hash(password, 16);
        await User.create({
            name,
            username,
            email,
            password: hashedPassword
        })
        return res.status(201).json({
            message: "Account Created successully",
            success: true
        })
    } catch (error) {
        console.log(error);

    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "All fieds are required",
                success: false
            });
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                message: "User doesn't exist with this email",
                success: false
            });
        }
        const isMatch = bcryptjs.compare(user.password, password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect email or Password",
                success: false
            });
        }
        const token = await jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, { expiresIn: "1d" });
        return res.status(201).cookie("token", token, { expiresIn: "1d", httpOnly: true }).json({
            message: `Login successful - Welcome ${user.name}`,
            user,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}

export const Logout = (req, res) => {
    return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
        message: `Logged out successfully `,
        success: true
    });
}

export const bookmarks = async (req, res) => {
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;
        const user = await User.findById(loggedInUserId);
        if (user.bookmarks.includes(tweetId)) {
            //remove from bookmark
            await User.findByIdAndUpdate(loggedInUserId, { $pull: { bookmarks: tweetId } });
            return res.status(200).json({
                message: "Tweet removed from bookmark ",
                success: true
            });
        }
        else {
            //add in bookmark
            await User.findByIdAndUpdate(loggedInUserId, { $push: { bookmarks: tweetId } })
            return res.status(200).json({
                message: "Tweet added to bookmark ",
                success: true
            });
        }

    } catch (error) {
        console.log(error);

    }
}

export const getMyProfile = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id).select("-password");
        if (user) {
            return res.status(200).json({
                user
            });
        }
    } catch (error) {
        console.log(error);

    }
}

export const getOtherUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const otherUsers = await User.find({ _id: { $ne: id } }).select("-password");
        if (!otherUsers) {
            return res.status(401).json({
                message: "Currently dont have any other users   "
            });
        }
        return res.status(200).json({
            otherUsers
        });
    } catch (error) {
        console.log(error);

    }
}


export const follow = async (req, res) => {
    try {
        const loggedInUserId = req.body.id; // patel
        const userId = req.params.id; //keshav
        const loggedInUser = await User.findById(loggedInUserId) // patel
        const user = await User.findById(userId) //keshav
        if(!user.followers.includes(loggedInUserId)){
            await user.updateOne({$push: {followers: loggedInUserId}});
            await loggedInUser.updateOne({$push: {following : userId}})
        }
        else{
            res.status(400).json({
                message: `User already followed to ${user.name}`
            })
        }
        res.status(200).json({
            message: `${loggedInUser.name} just followed to ${user.name}`,
            success: true
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const unfollow = async (req, res) => {
    try {
        const loggedInUserId = req.body.id; // patel
        const userId = req.params.id; //keshav
        const loggedInUser = await User.findById(loggedInUserId) // patel
        const user = await User.findById(userId) //keshav
        if(user.followers.includes(loggedInUserId)){
            await user.updateOne({$pull: {followers: loggedInUserId}});
            await loggedInUser.updateOne({$pull: {following : userId}})
        }
        else{
            res.status(400).json({
                message: `User hasn't followed yet to ${user.name}`
            })
        }
        res.status(200).json({
            message: `${loggedInUser.name} just unfollowed to ${user.name}`,
            success: true
        })
    } catch (error) {
        console.log(error);
        
    }
}

