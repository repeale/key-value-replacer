# key-value-replacer

- This is useful when you have values you have to repeat in an Object and you want to keep a single reference in it

## Getting started

```sh
npm install --save-dev @repeale/key-value-replacer
```

or

```sh
yarn add --dev @repeale/key-value-replacer
```

## Features

- Replaces the key reference with the value
- Familiar template literals variables syntax
- Reference any key with dot notation, like accessing any JS Object prop
- Multiple keys reference replacement in the same string
- Support referencing keys along with text

## Usage

```javascript
import {replacer} from '@repeale/key-value-replacer'

const replaced = replacer({
  me: {
    name: 'John',
    lastName: 'Doe',
  },
  greetings: "Hello i'm ${me.name} ${me.lastName}!",
})
```

## Examples

- i18n:

```javascript
{
  me: {
    name: "John",
    lastName: "Doe"
  },
  greetings: "Hello i'm ${me.name} ${me.lastName}!", // -> "Hello i'm John Doe!"
  ...
}
```

- CSS design tokens and themes:

```javascript
{
  tokens: {
    accent: {
      primary: {
        regular: '#ff6600',
        light: '#ffaa00',
        ...
      },
      ...
    },
    ...
  }
  buttons: {
    primary: {
      background: {
        default: '${tokens.accent.primary.regular}' // -> "#ff6600"
        hover: '${tokens.accent.primary.light}', // -> "#ffaa00"
        ...
      },
      ...
    },
    ...
  },
  menu: {
    link: {
      color: {
        default: '${tokens.accent.primary.regular}' // -> "#ff6600"
        hover: '${tokens.accent.primary.light}', // -> "#ffaa00"
        ...
      },
      ...
    },
    ...
  },
  ...
}
```
