import { Logger } from './logger';

export const LoggerLegacy: Logger = {
  prefix: 'legacy',
  log(message: string): void {
    console.log(`[${this.prefix}]: ${message}`);
  },
};
