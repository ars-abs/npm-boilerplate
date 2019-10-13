/* The main entry. */

import { config } from './base/config';
import { logger } from './base/logger';

/* Tasks */
const main = () => {
	logger.info(`Starting in ${ config.environment } environment.`);
};

export {
	main,
};
