
<div align="center"><strong>A Simple GitHub Issue Search App</strong></div>
<div align="center">This application has been built using React, Redux, Styled Components and lots of ❤️ </div>

![](https://i.imgur.com/aowrS8w.png)

<br />

## Features

<dl>
  <dt>Predictable state management using Redux</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Responsive Design</dt>
  <dd>Mobile first layout, without using any UI Framework</dd>

  <dt>Next generation JavaScript (ES6, 7)</dt>
  <dd>Template strings, object destructuring, arrow functions, JSX syntax and more.</dd>

  <dt>Next generation CSS</dt>
  <dd>Styled Components, Modular CSS</dd>

  <dt>Industry-standard routing</dt>
  <dd>Routing using React Router</dd>


  <dt>Offline-first</dt>
  <dd>Production builds are offline first, and therefore optimized for low or no network conditions</dd>

  <dt>SEO</dt>
  <dd>SEO (document head tags management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl>

### A quick note on reusable components

There are three major components reused throughout this application:

1. The IssueListItem component, which forms the Issue List
2. The SelectFilterComponent which is used in all filters that have dropdowns
3. The TextFilterComponent which is used in all filters that have string searches

Other components like the A, Button, H2 etc. are also highly reusable, as they are all pure functional components that are styled using Styled Components and are therefore self encapsulating.


## Quick start

1. Clone this repo
2. `cd` into the directory and run `yarn` or `npm install`
3. Run `yarn start` or `npm start`
4. To see test coverage, run `npm test`

## State Structure

![](https://i.imgur.com/ND9Lt1J.png)


## Wishlist

- Implement Complete URI - App state lock
- Add Animations
- Improve Test Coverage
- Improve file organization