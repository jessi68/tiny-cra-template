#! /usr/bin/env node

const fs = require("fs");

const babelConfigJs = require("./template/requiredConfiguration/babelConfigJs");
const eslintrc = require("./template/requiredConfiguration/eslintrc");
const prettierrc = require("./template/requiredConfiguration/prettierrc");
const gitignore = require("./template/requiredConfiguration/gitignore");
const tsconfig = require("./template/requiredConfiguration/tsconfig");
const webpackConfig = require("./template/requiredConfiguration/webpackconfig");


const   execCommandSynchronized  = require("./util/commandExec");
const packageJson = require("./template/requiredConfiguration/packageJson");

const appTemplate = require("./template/reactCode/app");
const indexTemplate = require("./template/reactCode/index");
const htmlTemplate = require("./template/reactCode/html");

const run = () => {
    const projectName = process.argv[2] || "default-app";

    execCommandSynchronized(`mkdir ${projectName}`);

    fs.writeFileSync(
        `${projectName}/package.json`,
        packageJson({name: projectName})
    );

    fs.writeFileSync(`${projectName}/babel.config.js`, babelConfigJs);
    fs.writeFileSync(`${projectName}/.eslintrc.js`, eslintrc);
    // camelCase 를 . 붙인 형식으로 바꾼 알고리즘 사용해서 자동화하는 것도 재밌겠다. 
    fs.writeFileSync(`${projectName}/.prettierrc.js`, prettierrc);
    fs.writeFileSync(`${projectName}/.gitignore`, gitignore);
    
    fs.writeFileSync(`${projectName}/webpack.config.js`, webpackConfig);

    fs.writeFileSync(`${projectName}/tsconfig.json`, tsconfig);

    execCommandSynchronized(`cd ${projectName} && mkdir src`);
    fs.writeFileSync(`${projectName}/src/App.tsx`, appTemplate);
    fs.writeFileSync(`${projectName}/index.tsx`, indexTemplate);
    
    // 이것도 따로 명령어를 만들든지 해야지...
    execCommandSynchronized(`cd ${projectName} && mkdir public`);
    fs.writeFileSync(`${projectName}/public/index.html`, htmlTemplate);

    // execCommandSynchronized(`cd ${projectName} && npm install --legacy-peer-deps`);
    execCommandSynchronized(`cd ${projectName} && npm install`);

     

}

run();