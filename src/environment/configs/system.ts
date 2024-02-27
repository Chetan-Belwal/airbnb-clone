import { SystemConfig } from '../environment.interface';

export const systemConfig = () => {
  const port = process.env.APP_PORT ? parseFloat(process.env.APP_PORT) : 3000;
  return {
    system: {
      port
    } as SystemConfig,
  };
};
