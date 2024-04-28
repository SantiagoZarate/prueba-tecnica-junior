import { Request, Response } from "express";
import { catchedAsync } from "src/utils/catchedAsync";
import { successResponse } from "src/utils/successResponse";

const users = [
  {
    id: 1,
    name: "Martin",
  },
  {
    id: 2,
    name: "Gina",
  },
];

async function getAllUsers(req: Request, res: Response) {
  const allUsers = users;
  successResponse(res, "Returning all users", allUsers);
}

async function getUserById(req: Request, res: Response) {
  const ID = Number(req.params.id);
  const user = users.find((us) => us.id === ID);
  if (!user) {
    return res.status(404).json({
      message: `oops! there is no user with ID = ${ID}`,
    });
  }
  successResponse(res, `Returning user with id = ${ID}`, [user]);
}

export default {
  getAllUsers: catchedAsync(getAllUsers),
  getUserById,
};
