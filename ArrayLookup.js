const data = require('./data.json');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const keys = Object.keys(data);
const values = Object.values(data);

// add tests
suite
    .add('Loop Method', function() {
        function teamLookup(person) {
            for (let i = 0; i < keys.length; i++) {
                let name = keys[i];
                if (name == person) {
                    return values[i];
                }
            }
        }
        teamLookup(keys[Math.floor(Math.random()*keys.length)])
    })
    .add('Branchless Array lookup method', function() {
        function arrayLookup(person) {
            return data[person];
        }
        arrayLookup(keys[Math.floor(Math.random()*keys.length)])
    })

    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 
        'async': true
    });
