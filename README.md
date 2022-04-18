npm init
npm install -g typescript

tsc --init

node dist/index.js


# Running the above commands every single time to compile and run in a development environment can be annoying. To make this process easier, you need to install a package called ts-node.

npm install -D ts-node

"scripts": {
   "start": "ts-node ./src/index.ts"
}

You can now run npm start to execute the index.ts. And when you delete the dist folder with the compiled index.js then still run npm start, you will get the same results.


This example will set up Typescript With Express.js. You should install Express.js from the NPM registry.

To do so, run npm install express.

npm install -D @types/node