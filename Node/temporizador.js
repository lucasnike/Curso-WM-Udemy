const schedule = require('node-schedule')

// O primeiro parâmetro usa o formatp de cron onde:

/**
        *    *    *    *    *    *  
        ┬    ┬    ┬    ┬    ┬    ┬
        │    │    │    │    │    │
        │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
        │    │    │    │    └───── month (1 - 12)
        │    │    │    └────────── day of month (1 - 31)
        │    │    └─────────────── hour (0 - 23)
        │    └──────────────────── minute (0 - 59)
        └───────────────────────── second (0 - 59, OPTIONAL)
 */
const tarefa1 = schedule.scheduleJob('*/5 * 18 * * 3', function() {
    let cont = 1
    console.log(`Executando ${cont}º tarefa`, new Date().getSeconds());
})
