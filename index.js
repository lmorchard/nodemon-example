#!/usr/bin/env node

async function main() {
  while (true) {
    console.log("Time: " + new Date());
    await delay(1000);  
  }
}

function delay(t, val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(val);
    }, t);
  });
}

main().catch(console.error);
