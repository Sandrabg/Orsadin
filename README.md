# Sandra-CRA-Boilerplate

1. Crear un repositorio Git
2. clonar repositorio:
    2.1 git clone https://github.com/Skylab/Boilerplate/Sandra-CRA-Boilerplate.git
    git remote -v: comproba que se ha vinculado con el repositorio remote
    git remote
3. instalar react-app:
    3.1 opciones:
        3.1.1 npm install -g create-react-app (se instala a nivel global en mi ordenador)
        3.1.2 npx create-react-app react-beers (instalarlo no global, lo crea y luego lo borra)
        * para actualizar: npm install -g npm to update!
    3.2 create-react-app sandra-cra-boilerplate
4. instalar eslint (analizar el codigo): (sudo npm install -> para permisos)
    4.1 npm install -g eslint 
        npx install-peerdeps --dev eslint-config-airbnb
    4.2 eslint --init
        4.2.1 Options:
            To check syntax, find problems, and enforce code style
            JavaScript modules (import/export)
            React
            TypeScript: N
            Browser
            Use a popular style guide
            Airbnb: https://github.com/airbnb/javascript
            JSON
            Would you like to install them now with npm? (Y/n) Yes
    4.3 modificar el archivo: .eslintrc.json:
    --------------------------------------------------------------------------
    --------------------------------------------------------------------------
        {
            "env": {
                "browser": true,
                "es6": true
            },
            "extends": [
                "plugin:react/recommended",
                "airbnb"
            ],
            "globals": {
                "Atomics": "readonly",
                "SharedArrayBuffer": "readonly"
            },
            "parserOptions": {
                "ecmaFeatures": {
                    "jsx": true
                },
                "ecmaVersion": 2018,
                "sourceType": "module"
            },
            "plugins": [
                "react"//, "fp", "react-hooks"
            ],
            "rules": {
                "react/jsx-filename-extension": [1, {"extensions": [".js"]}],
                "react/no-danger": 0,
                "react/jsx-one-expression-per-line": 0,
                // "react-hooks/exhaustive-deps": 0,
                // "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
                "object-curly-newline": ["error", {
                    "ObjectPattern": { "multiline": true, "minProperties": 8, "consistent": true },
                    "ImportDeclaration": { "multiline": true, "minProperties": 6, "consistent": true },
                    "ExportDeclaration": { "multiline": true, "minProperties": 3 }
                }],
                "comma-dangle": ["error", { "functions": "ignore" }],
                "no-underscore-dangle": ["error", { "allow": ["_id"] }],
                "react/react-in-jsx-scope": 0,
                // "jsx-a11y/no-noninteractive-element-interactions": 0,
                // "jsx-a11y/click-events-have-key-events": 0,
                // "jsx-a11y/no-static-element-interactions": 0,
                // "linebreak-style": 0,
                // "arrow-body-style": 0,
                // "import/prefer-default-export": 0,
                // "react/require-default-props": 0,
                // "react/forbid-prop-types": "warn",
                // "react/prop-types": "warn",
                // "max-lines": ["warn", 200],
                // "complexity": ["warn", 10],
                // "max-params": ["warn", 3],
                // "max-nested-callbacks": ["warn", 2],
                // "max-depth": ["warn", 3],
                // "no-param-reassign": "warn",
                // "fp/no-mutating-methods": "warn",
                // "fp/no-let": "warn",
                // "fp/no-loops": "warn",
                // "fp/no-mutating-assign": "warn",
                // "fp/no-delete": "warn",
                // "fp/no-this": "warn",
                // "max-len": ["warn", { "code": 110 }]
            }
        }
    --------------------------------------------------------------------------
    --------------------------------------------------------------------------
    4.4 Crear archivo eslintignore:
        node_modules/
        .npm/
        build/
        .next
        .vscode
        packages/
        .git/
        README.md
5. -develop- Delete unused images and files (App.css, logo.svg)
6. subir los cambios a la rama develop
     git add . / git commit -m "" / git push
7. branche sass:
    git checkout -b sass
    npm install --save-dev node-sass
    git add .
    git commit -m "install sass"
    git push -u origin sass
    git checkout develop / git merge sass / git push
8. branche test:
    git checkout -b test
    npm install --save-dev cypress
    npm install --save-dev enzyme
    git add . / git commit -m "install test" 
    git push -u origin test
    git checkout develop / git merge test / git push
9. branche router:
    9.1 git checkout -b router
    9.2 npm install --save react-router-dom
    9.3 crear la estructura src/pages
        src/pages/Home -> index.js  y Home.js
        src/pages/About -> index.js  y About.js
    9.4 añadir App.js el Header
    9.5 subir los cambios:
        git add . / git commit -m "install router" 
        git push -u origin router
        git checkout develop / git merge router / git push
10. Crear rama redux (git checkout -b redux)
    10.1 instalar redux: npm install --save redux react-redux
    10.2 subir los cambios:
        git add . / git commit -m "install redux" 
        git push -u origin redux
        git checkout develop / git merge redux / git push
11. Crear rama firebase (git checkout -b firebase)
    11.1 instalar firebase: npm install firebase@6.6.2 --save
    11.2 subir los cambios:
        git add . / git commit -m "install firebase" 
        git push -u origin firebase
        git checkout develop / git merge firebase / git push
----------------------------------------------------------------------------------------------------
                                Fork
----------------------------------------------------------------------------------------------------
   - new repository 
   - git clone NuevoRepositorio
   - git remote add upstream https://github.com/Skylab/Boilerplate/Sandra-CRA-Boilerplate.git
   - git remote -v --> origin y el upstream
   - git pull upstream develop
   - git push origin master
------------------------------------------------------------------------------------------------------

