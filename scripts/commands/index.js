const app = require('./create/app');
const model = require('./create/model');
const start = require('./start');
const build = require('./build');

module.exports = {
    newApp: async function(name) {
        await app.checkIfExists(name);
        await app.askPreferences();
        await app.cloneBoilerplate();
        await app.installDependencies();
    },
    
    newModel: async function(name) {
        await model.checkIfExists(name);
        model.newModel(name);
    },

    startApp: function(mode) {
        start(mode);
    },
    
    buildApp: function(mode) {
        build(mode);
    }
}
