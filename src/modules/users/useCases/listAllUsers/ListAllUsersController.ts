import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.header("user_id");
      const allUsers = this.listAllUsersUseCase.execute({ user_id });
      return response.status(201).json(allUsers);
    } catch {
      return response.status(400).json({ error: "You are not admin" });
    }
  }
}

export { ListAllUsersController };
