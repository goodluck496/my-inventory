import { Controller, Get, HttpService } from '@nestjs/common';
import { InjectRepository }             from '@nestjs/typeorm';
import * as cluster                     from 'cluster';
import { worker, Worker }               from 'cluster';
import { Repository }                   from 'typeorm';
import { Items }                        from '../../DB/entity/item.entity';

@Controller('items')
export class ItemController {

    constructor(
        private readonly HttpService: HttpService,
        // @InjectRepository(Items) private readonly items: Repository<Items>,
    ) {
    }

    @Get()
    async getAll() {
        // const items: Items[] = await this.items.find();
        // const worker: Worker = cluster.worker;
        // return {
        //     cluster: cluster.eventNames(),
        //     worker: worker.process.pid,
        //     items,
        // }

    }
}