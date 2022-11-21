import colors from 'colors';

const types = {
    middleware: colors.bold.magenta('  [Middleware]'),
    controller: colors.bold.green('[Controller]'),
    service: colors.bold.magenta('    [Service]'),
    db: colors.bold.blue('      [db]'),
    api: colors.bold.blue('      [API]'),
    log: colors.bold.gray.italic('[Log]'),
    route: colors.bold.green('[Route]'),
    server: colors.bold.yellow('[Server]'),
    error: colors.bold.red('[ERROR]')
};


function log (type: any, message: string) {
    console.log(`${types[type as keyof typeof types]} ${message}`);
}

function logObject (type: any, obj: object) {
    console.log(`${types[type as keyof typeof types]}`);
    console.log(obj);
}

export const chalkLogger = {
    log, logObject
}