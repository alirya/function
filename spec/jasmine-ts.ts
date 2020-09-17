import Jasmine from 'jasmine'
import JasmineTsReporter from 'jasmine-ts-console-reporter'

var jasmine = new Jasmine({})
jasmine.loadConfigFile(__dirname + '../../jasmine.json');
jasmine.env.clearReporters();
jasmine.env.addReporter(new JasmineTsReporter());
jasmine.execute()
