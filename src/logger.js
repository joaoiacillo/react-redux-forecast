/**
 * Creates a Logger that logs on the console with additional information for the sake of debugging.
 * 
 * @param {string} title A unique identifier for the Logger
 * @returns {{getTitle(): string; getTimestamp(): string; format(msg: string): string; log(msg: string, data?: object): void; error(msg: string, data?: object): void}}
 */
const createLogger = (title) => {
    return {
        getTitle: () => title,
        getTimestamp: () => new Date().toLocaleString(),
        format(msg) {
            return `${this.getTimestamp()} - [${this.getTitle()}] ${msg}`;
        },
        log(msg, data) {
            console.log(this.format(msg), data ? data : "(No data)");
        },
        error(msg, data) {
            console.error(this.format(msg), data ? data : "");
        }
    }
};

export default createLogger;
