import 'reflect-metadata';
import { User } from './entities/User.entity';
import { createConnection } from 'typeorm';

createConnection().then(async (connection) => {
    const userRepo = connection.getRepository(User);

    const user = new User();
    user.firstName = 'Jan';
    user.lastName = 'Kowalski';
    user.age = '20';

    await userRepo.save(user);
});
