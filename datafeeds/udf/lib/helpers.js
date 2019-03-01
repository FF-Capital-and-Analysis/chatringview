/**
 * If you want to enable logs from datafeed set it to `true`
 * 如果要启用datafeed日志，请将其设置为“true”
 */
var isLoggingEnabled = false; // 日志启用

export function logMessage(message) {
  if (isLoggingEnabled) {
    var now = new Date();
    console.log(now.toLocaleTimeString() + "." + now.getMilliseconds() + "> " + message);
  }
}

export function getErrorMessage(error) {
  if (error === undefined) {
    return '';
  }
  else if (typeof error === 'string') {
    return error;
  }
  return error.message;
}
