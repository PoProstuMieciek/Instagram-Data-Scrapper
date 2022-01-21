import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entities/User.entity';

createConnection().then(async (connection) => {
    const userRepo = connection.getRepository(User);

    const user = new User();
    user.firstName = 'Jan';
    user.lastName = 'Kowalski';
    user.age = '20';

    await userRepo.save(user);
});
