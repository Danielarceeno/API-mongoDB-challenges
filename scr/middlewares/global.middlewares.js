import moogose from "mongoose";
import userService from "../services/user.service.js";

export const validId = (req, res, next) => {
   try{ const id = req.params.id;
    if (!moogose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid id" });
    }

    next();} catch (error) {
    res.status(500).send({ message: "Error" });
    }
};


export const validUser = async (req, res, next) => {
   try{ const id = req.params.id;

    const user = await userService.findByIdUserService(id);

    if (!user) {
        return res.status(404).send({ message: "User not found" });
    }

    req.id = id;
    req.user = user;

    next();} catch (error) {
    res.status(500).send({ message: "Error" });
    }
};
