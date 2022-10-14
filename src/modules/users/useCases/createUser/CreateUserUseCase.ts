import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const emailAreadyExists = this.usersRepository.findByEmail(email);

    if (emailAreadyExists) {
      throw new Error("E-mail aready exists");
    }

    const userCreated = this.usersRepository.create({ name, email });

    return userCreated;
  }
}

export { CreateUserUseCase };
