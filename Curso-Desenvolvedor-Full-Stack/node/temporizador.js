const shedule = require('node-schedule')

const tarefa1 = shedule.scheduleJob('*/5 * 12 ** 2', function() {
        console.log('Excutando tarefa 1', new Date().getSeconds())
        console.log('cancelando tarefa 1')
    },
    200000)