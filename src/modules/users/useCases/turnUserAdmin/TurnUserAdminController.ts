import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  // eslint-disable-next-line prettier/prettier
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.params;

      const user = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(200).json(user);
    } catch {
      return response.status(404).json({ error: "Id ivalid" });
    }
  }
}

export { TurnUserAdminController };
