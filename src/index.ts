import './config';

import { createConnection } from 'typeorm';

import { readFileSync } from 'fs';
import { homedir } from 'os';

import { ObjectStorageProvider } from './providers/ObjectStorageProvider';
import { User } from './entities/User.entity';

import logger from './utils/ConsoleLogger';

logger.log('debug', '127.0.0.1 - there is no place like home');
logger.log('info', '127.0.0.1 - there is no place like home');
logger.log('notice', '127.0.0.1 - there is no place like home');
logger.log('warn', '127.0.0.1 - there is no place like home');
logger.log('error', '127.0.0.1 - there is no place like home');
logger.log('crit', '127.0.0.1 - there is no place like home');
logger.log('alert', '127.0.0.1 - there is no place like home');
logger.log('emerg', '127.0.0.1 - there is no place like home');

createConnection().then(async (connection) => {
    const objectStorage = new ObjectStorageProvider();
    const userRepo = connection.getRepository(User);

    const user = new User();
    user.firstName = 'Jan';
    user.lastName = 'Kowalski';
    user.age = 20;

    const { id } = await userRepo.save(user);

    const profilePicture = await objectStorage.upload(
        `profile_pictures/${id}.png`,
        readFileSync(`${homedir()}/Pictures/profile_picture.png`)
    );
    user.profilePictureETag = profilePicture.ETag;

    await userRepo.save(user);
});
