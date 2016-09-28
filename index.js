#!/usr/bin/env node

var program = require('commander')
var request = require('request')
var readline = require('readline');

program
  .version('0.0.1')
  .option('-y, --yoda', 'Reply like Yoda')
  .parse(process.argv)


  console.log('Enter your yoda speak')
  if (program.yoda) {

    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });

    rl.on('line', function(line){
      if(line === 'exit'){process.exit()}
      console.log(line);
    })

  }
