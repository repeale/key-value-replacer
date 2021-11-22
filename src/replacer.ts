import {get} from 'lodash'

interface KeyRefObject {
  [key: string]: KeyRefObject | string
}

const templateLiteralRegex = /\${([^}]+)}/g

const _replacer = (json: KeyRefObject, jsonOriginal?: KeyRefObject) => {
  jsonOriginal = jsonOriginal ?? json

  const result: KeyRefObject = {}

  Object.keys(json).forEach((k) => {
    const curr = json[k]

    switch (typeof curr) {
      case 'string':
        {
          if (curr.match(templateLiteralRegex)) {
            result[k] = curr.replace(
              templateLiteralRegex,
              (_, keyRef: string) => get(jsonOriginal, keyRef) as string // not supporting circular references
            )
          } else {
            result[k] = curr
          }
        }
        break
      case 'object':
        {
          result[k] = _replacer(curr, jsonOriginal)
        }
        break
    }
  })

  return result
}

export const replacer = (json: KeyRefObject) => _replacer(json)
