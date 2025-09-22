# TypeScript-rev


ts-oop-practice/
 ├─ src/
 │   └─ index.ts      # your entry point
 ├─ dist/             # auto-generated on build
 ├─ tsconfig.json
 ├─ package.json


 ## tsconfig.json

 {
  "compilerOptions": {
    "target": "ES2019",               // JS version output
    "module": "commonjs",             // or "ESNext" if you use ESM
    "outDir": "./dist",               // compiled JS goes here
    "rootDir": "./src",               // source code location
    "strict": true,
    "esModuleInterop": true,
    "declaration": true,              // generates .d.ts files for consumers
    "sourceMap": true                 // maps back to TS during debugging
  },
  "include": ["src"],                 // only compile src/ folder
  "exclude": ["node_modules", "dist"]
}

