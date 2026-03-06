---
  icon: 📖
  title: CSS— Going bigger
  unit: 
    name: 003 - Intro to JS
    color: brown
  chapter: 
    name: Module Project— Figma and TailwindCSS
    color: purple
  type: 
    name: Article
    color: purple
  ft-id: 003.01.003
  pt-id: 003.01.003
  objectives: This is meant to be read as a preamble to the Figma/Tailwind project. 
  slides: null
  instructorNotes:
    plainText: This is meant to be read as a preamble to the Figma/Tailwind project. 
    links: null
---

# 📖 CSS: Going bigger

So far, you have focused and practiced on the CSS fundamentals: how to alter the default appearance of HTML elements by positioning them, changing colour and fonts, altering their dimensions or disposition to fit the device your page is displayed in, and many different, exciting or more efficient ways to achieve these results.

However, as time progresses, you’ll face some inevitable, inherent problems with writing pure CSS.

### Plain CSS is very high maintenance

- Just one simple HTML page might land you thousands of lines of CSS. Each selector can contain a limitless amount of effects packed inside its curly braces, making conflicting rules and awareness of class selector usage harder to pinpoint and keep track. It’s hard to deduce by name that the `.article-wrapper` selector on line 232 is adding rules for flexbox, border, font-size and another 10 other effects, and that a deeply nested element with a `.confirm-button` class suddenly has a weird font weight only when inside of that article tag, requiring you to go over several selector blocks until you find the reason why.
- You have to create styling conventions and agreements upfront when working in a team, so that two team members don’t accidentally style an `<input>` element and only realise the styling conflict during a merge attempt. While there are recognised systems for project-wide CSS organisation like the [BEM methodology](https://css-tricks.com/bem-101/) or preprocessors like [SASS](https://sass-lang.com/) or [LESS](https://lesscss.org/), pre-agreed class names and selector conventions are likely change between teams and projects, so eventually you’ll have no more recollection of what that `.view-grouping-header` selector was doing again when you come back to that code.
- Media queries are fantastic and enable us to restructure our layout depending on device size, but it also requires us to override or add a considerable chunk of styling to suit the new layout. That is followed up by scrolling through a frustrating amount of lines to look up what each selector is doing in addition to the media query changes.

### CSS is hard to reuse between projects

- That other project is looking great, and you want to re-use some of that CSS on a different project. It entails figuring out what selectors are doing what to decide which need to be copy-pasted, go over one by one to fine-tune them, and possibly realise you missed a parent class that was doing setting some spacing. When you’re talking about potential thousands of lines of CSS that gets very time consuming.
- Pure CSS allows you the most control over your page. It can be what you need, but oftentimes it will be a little too much. Mostly, you’ll find yourself re-writing similar-looking CSS over and over again.

Naturally, developers already created a multitude of solutions to go around the problems listed above. These are collectively known as ✨**CSS Frameworks**✨.
