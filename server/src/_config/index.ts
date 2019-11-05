import { IConfig }      from './IConfig';
import { localConfig }  from './local.config';
import { masterConfig } from './master.config';
import { stageConfig }  from './stage.config';

export let config: IConfig;

switch (process.env.NODE_ENV) {

    case 'stage':
        config = stageConfig;
        break;

    case 'prod':
        config = masterConfig;
        break;

    case 'local':
        config = localConfig;
        break;

    default:
        config = localConfig;
        break;

}
