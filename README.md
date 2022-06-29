# Mixing JSX with TSX in the same project?

> Develop a Proof of Concept (POC) that a react app can developed in both JSX and TSX at the same time, compiling to a working app

- Checkout branch `poc/tsx-baseline`

- Install deps and run app

You'll see the tsx-baseline app app created with CRA
Which creates a bootstrapped app which we break apart using react's eject script

```bash
npx create-react-app tsx-baseline --template redux-typescript
cd ./tsx-baseline
npm eject
```

## POC 1

Try this. 
Grab that baseline app, branch off it as `POC/1`
Add the JSX and TSX files from `dt9-banner-admin`