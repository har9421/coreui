const formatMessage = (level: string, message: string, meta?: any) => {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] ${level}: ${message}${meta ? ` ${JSON.stringify(meta)}` : ''}`;
};

export const logError = (error: Error, context?: string) => {
  console.error(formatMessage('ERROR', error.message, {
    stack: error.stack,
    context,
  }));
};

export const logInfo = (message: string, meta?: any) => {
  console.info(formatMessage('INFO', message, meta));
};

export const logWarning = (message: string, meta?: any) => {
  console.warn(formatMessage('WARN', message, meta));
};

const logger = {
  error: logError,
  info: logInfo,
  warn: logWarning,
};

export default logger; 