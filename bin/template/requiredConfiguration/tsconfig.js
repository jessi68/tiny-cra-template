const tsconfig = `{
  "compilerOptions": {
  
    "jsx": "react",
    "module": "commonjs",      
    "baseUrl": "src",                          /* Specify what module code is generated. */
    "noImplicitAny": true,
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */,
    "typeRoots": [
      "node_modules/@types"
    ],
    "allowSyntheticDefaultImports": true,
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
     // Ensure that .d.ts files are created by tsc, but not .js files
    "declaration": true,
    "emitDeclarationOnly": true,
    "isolatedModules": true,
    "allowJs": true,
    "esModuleInterop": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "sourceMap": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "importHelpers": true
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules"
  ]
}
  `;

module.exports = tsconfig;