import { createConnection } from 'typeorm';

import { Subpage } from './entities';

import './config';

createConnection().then(async (connection) => {
    const subpagesRepo = connection.getRepository(Subpage);
    const subpage = new Subpage();
    subpage.html =
        '<html><head><title>Subpage</title></head><body><p>Hello, world!</p></body></html>';
    subpage.path = 'http://localhost:3000/hello';
    await subpagesRepo.save(subpage);
});
