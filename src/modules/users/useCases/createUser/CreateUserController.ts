import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try {
      const userCreated = this.createUserUseCase.execute({ name, email });
      return response.status(201).json(userCreated);
    } catch {
      return response.status(400).json({ error: "User already exists" });
    }
  }
}

export { CreateUserController };
