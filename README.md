# oc-cm-navigation-header

### Description
Provides a navigation header with back arrow, paging (@opuscapita/react-list-items),
and a dropdown menu (@opuscapita/react-dropdown).

### Installation
```
npm install @opuscapita/oc-cm-navigation-header
```

### Demo
View the [DEMO](https://opuscapita.github.io/oc-cm-navigation-header)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API

| Prop name           | Type          | Default  | Description                                |
| ------------------- | ------------- | -------- | ------------------------------------------ |
| title               | string        | null     | Title shown in the left side of the header |
| onBackClick         | function      | null     | Back button click callback. Button is hidden, if function is not provided. |
| dropdown            | dropdownType  |          | Defines options for the dropdown menu (see dropdownType for more information). |
| paging              | pagingType    |          | Defines options for the paging (see pagingType for more information). |
| className           | string        |          | Custom class name |
| id                  | string        | required | The ID |
| rightContent  | node          | null     | an option to add custom right aligned content before dropdown menu |
| sideSectionBasis         | string, number   | 200px      | Side column's (left, right) flex-basis value. The center column will take all the remaining space |

###### Types

- __dropdownType:__ 

For up-to-date information, please see: https://github.com/OpusCapita/react-dropdown/blob/master/README.md

| Prop name                | Type              | Default  | Description                                |
| ------------------------ | ----------------- | -------- | ------------------------------------------ |
| menuItems                | array of menu items | required                               | List of the dropdown menu items          |
| caret                    | boolean           | false                                    | If true, caret is show                   |
| disabled                 | boolean           | false                                    | Is dropdown disabled or not              |
| dropup                   | boolean           | false                                    | Is dropup or dropdown                    |
| pullLeft                 | boolean           | false                                    | If false, dropdown is aligned on right, otherwise on left |
| title                    | number, string or element | <Icon type="indicator" name="more" width={32} height={32} /> | Title of the dropdown |

- __dropdownType - menu items:__ 

| Prop name                | Type              | Default                                  | Description                              |
| ------------------------ | ----------------- | ---------------------------------------- | ---------------------------------------- |
| disabled                 | boolean           |                                          | Is dropdown menu item disabled           |
| disableClosing           | boolean           |                                          | Is dropdown menu item's closing disabled |
| href                     | string            |                                          | Hyperlink of the dropdown menu item      |
| icon                     | element           |                                          | Icon of the dropdown menu item           |
| id                       | number or string  |                                          | Unique HTML id attribute                 |
| onClick                  | function          |                                          | Callback function of click               |
| title                    | number, string or element |                                  | Title of the dropdown menu item          |
| type                     | string            |                                          | Enumeration either 'item' or 'divider'   |

- __pagingType:__

For up-to-date information, please see: https://github.com/OpusCapita/react-list-items/blob/master/src/list-items/README.md

| Prop name                | Type       | Default   | Description                              |
| ------------------------ | ---------- | --------- | ---------------------------------------- |
| disabled                 | bool       | false     | A sign of a disabled status of navigation icons
| goToItem                 | function   | required  | Callback that is called when navigation to another item should happen
| itemElement              | element    | null      | Custom component to render between navigation icons. By default it renders a string [m/n].
| itemId                   | [num, str] | required  | Initially selected item id
| itemIds                  | list       | required  | List of item ids

### Code example
```jsx
import React from 'react';
import NavigationHeader from '@opuscapita/oc-cm-navigation-header';

export default class ReactView extends React.Component {
  render() {
    return (
      <NavigationHeader
        propName="propValue"
      />
    );
  }
}
```