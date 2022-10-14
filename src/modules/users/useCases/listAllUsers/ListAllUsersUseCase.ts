import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const users = this.usersRepository.list();

    const verifyUserExists = users.find((user) => user.id === user_id);

    if (!verifyUserExists) {
      throw new Error("User not found");
    }

    const verifyIfIsAdmin = verifyUserExists.admin;

    if (!verifyIfIsAdmin) {
      throw new Error("You are not admin");
    }

    return users;
  }
}

export { ListAllUsersUseCase };
