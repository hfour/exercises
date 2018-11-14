# Take-home exercise
This is a take-home exercise test. This README gives a ready dev environment and instructions on what to do.

## Setup
Install the following global packages

`npm install yarn -g`
`yarn global add parcel-bundler`

Then install the rest of the dependencies

`yarn`

Then start the development server using parcel

`yarn start`

and visit "http://localhost:1234"

This setup uses babeljs to compile React JSX files. If you want to use Typescript, then remove the `.babelrc` file and add a `tsconfig.json` file (consult this example: https://github.com/azu/parcel-typescript-example)

## Spec - Visual Expression Builder
The purpose of this app is to make an UI for building simple logical expressions of the following type:

`((A | B) & (C | D)) & (A & B)`

An expression has 3 elements:

1. The left operand
2. The operator
3. The right operand

The left and right operand can be:
1. A string (input by the user)
2. An expression

The operator can be:
1. AND (&)
2. OR (|)

### How it works

The app needs a simple UI that will behave like this:

1. It starts with a single expression component where the user can select the following:
- The left operand type
- The operator type
- The right operand type
2. If the user selects a "string" for any operand, an input is shown where the user can enter any string
3. If the user selects an "expression" for any operand another expression component is shown instead of a string input field
4. The operator type is just a simple choice between AND and OR with no further effects
5. The expression is translated into a string, which is printed at the bottom of the app. The expression string is of the following form: `(("string" OR "string") AND ("string" OR "string")) AND ("string" OR "string")`, where expressions are wrapped into parens `()` and strings are wrapped into quotes `""`.

### How it looks
This is up to you, really. If you want to dabble with css, you can make little boxes for each epression that look like this:

```
+-------------------------+
| [STR v] [AND v] [EXP v] |
| _bla a_                 |
+-------------------------+
                    +-------------------------+
                    | [STR v] [ OR v] [STR v] |
                    | _bla b_         _bla c_ |
                    +-------------------------+
```

Or you can also make it as a table, with indented rows for nested expressions

```
[STR v] _bla a_
[AND v]
[EXP v]
    [STR v] _bla b_
    [ OR v]
    [STR v] _bla c_
```

The printed result expression of the above example UIs should be:

```
("bla a" AND ("bla b" OR "bla c"))
```

## Bonus points
You get bonus points for the following:

1. If you use typescript
2. If you surprise us with some extra features