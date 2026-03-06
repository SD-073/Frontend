---
  icon: 📖
  title: Getting started with TailwindCSS
  unit: 
    name: 003 - Intro to JS
    color: brown
  chapter: 
    name: Module Project— Figma and TailwindCSS
    color: purple
  type: 
    name: Article
    color: purple
  ft-id: 003.01.005
  pt-id: 003.01.005
  objectives: First practice with Tailwind and exploring basic usage
  slides: null
  instructorNotes:
    plainText: This step is meant to be self-paced but it’s a good idea to come together in class and go over the basic setup 
    links: null
---

# 📖 Getting started with Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework packed with pre-defined classes to enable you to style your pages in a more scalable and predictable way. And the reason we picked it up as our go-to it’s clearly stated in [State of CSS](https://stateofcss.com/en-US)

For the most part, each Tailwind class applies a single CSS rule to an element.

```html
<ul class="flex w-40 bg-indigo-500">
  <li class="hover:cursor-pointer text-white font-bold">Home</li>
  <li class="hover:cursor-pointer text-white font-bold">Cart</li>
</ul>
```

Classes can be added as much as needed to achieve the desired result.

Tailwind’s main traits are:

- Coverage for the vast majority of CSS properties like box model properties, colours, fonts and more with pre-defined classes like `h-24`, `text-green-500` or `grid` .
- Class prefixes to enable effects like hover or focus, media queries and dark mode, for example: `hover:cursor-pointer`, `focus:bg-grey-200`, `flex-col md:flex-row` or `text-grey-800 dark:text-white`
- Support for arbitrary values to a class in case the pre-defined classes don’t offer the exact value needed, for example: `w-[1024px]`, `text-[#deca92]` or `bg-[url('/img/hero-pattern.svg')]`
- Ability to extend the pre-defined classes with your own custom classes.
- When installed locally, Tailwind ensures optimal browser support with [Autoprefixer](https://autoprefixer.github.io/) for [vendor prefixes](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix#css_prefixes), and [PostCSS](https://postcss.org/) for older browser compatibility.

Tailwind has some advantages when compared to other CSS frameworks:

- Descriptive class names that make for a smoother learning curve compared to other frameworks.
- Thoroughly documented.
- Bundle size is optimal as Tailwind constructs a CSS file only containing the classes actively used in the markup.
- It allows for much more control over your styling than other frameworks while still offering a predictable, customisable and scalable system.
- No semantic classes, meaning the framework is non-opinionated about your layout or design needs.

But it also has downsides:

- No semantic classes also mean that the amount of classes added to each element often leads to bloated markup and more time-consuming styling than other frameworks. To tackle that, Tailwind provides ways to create custom classes or extend the default Tailwind classes.
- Dynamic classes can be troublesome and some edge cases might require inline styling or an additional stylesheet.

It has increased in popularity since its inception and continues to be on the rise, and now it’s time to dive into it!

## Setting up Tailwind CSS via the CDN

There are a few options when it comes to setting up Tailwind. Once you eventually get into the React section of the course, it will make much more sense to install Tailwind locally for optimisation.

Until then, you can use the CDN to import the JavaScript file that will generate all your Tailwind classes.

It is important to note that <u>**the Tailwind CDN is not optimal for a production environment**</u>, as the framework cannot generate an optimal CSS in this way. However, until you have advanced further in the course, the CDN provides you all you need to get comfortable with using Tailwind!

To use the Tailwind CDN, import Tailwind in a script tag at the head of your document:

```html
<head>
  <!-- Other head tags here -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
```

That was it! 🪄 You can start using Tailwind classes in your markup! 🪄

```html
<h1 class="text-3xl font-bold underline">Hello world!</h1>
```

## Tailwind Basics

Tailwind provides a wide variety of classes that cover the most common rulesets in CSS. These classes use relative measurements for better proportions and responsiveness.

For visibility, here’s a few pre-defined class examples for setting the [width](https://tailwindcss.com/docs/width) of an element:

```css
.w-0 {
  width: 0px;
}

.w-1 {
  width: 0.25rem; /* 4px */
}

.w-2 {
  width: 0.5rem; /* 8px */
}

/* ... */

.w-40 {
  width: 10rem; /* 160px */
}

.w-1/4 {
  width: 25%;
}

.w-full {
  width: 100%;
}

/* And so much more */
```

Looking up documentation to see what is the class that applies a desired effect will be necessary when starting with this framework. However, class names are reliable, predictable and quickly becomes second nature.

As many classes as needed can be added to an element until you reach the desired styling:

```html
<p class="font-light text-3xl text-white bg-red-800 py-2 px-4 m-10">
  The best content around
</p>
```

Every class can also be prefixed to be only applied under specific circumstances, like effects, dark mode, and many others:

```html
<p
  class="hover:scale-105 text-slate-800 dark:text-white bg-red-300 dark:bg-red-800"
>
  Classes for all your needs
</p>
```

If you find yourself needing a value that falls outside of the predefined classes, Tailwind also allows for one-off, arbitrary values with the value encased in square brackets `[]`. When using such an approach, the value passed into the square brackets has the same syntax as a regular CSS rule, with value and measurement (in example `px`, `%`, `em`).

```html
<p class="max-w-[1024px] bg-[rgba(44, 38, 135, 0.4)]">
  Some specific values are needed here
</p>
```

## Responsive Design with Tailwind

Tailwind has special prefixes to apply classes at specific breakpoints, like `sm:`, `md:`, `lg:` and `xl:`. The classes prefixed by breakpoints are only applied when that breakpoint is reached, or wider. Hence, your baseline classes should be your mobile classes, with additional prefixed classes that will only come into effect in bigger screen sizes:

```html
<p
  class="font-sm sm:font-base lg:font-xl xl:font-3xl p-2 sm:p-4 md:p-6 xl:p-10 bg-amber-400"
>
  The larger the screen, the larger I get!
</p>
```

More on Tailwind’s responsive design system is described in the [documentation](https://tailwindcss.com/docs/responsive-design).

## Going further: Creating custom classes

When styling, each element will need a considerable amount of CSS rules to make it look the way you want. Consider the following markup:

```html
<button
  class="bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
>
  Tailwind can get rather verbose
</button>
```

While each of these effects are needed, the amount of classes required to make this button look the way it should makes for very bloated HTML. And when talking about multiple, nested elements, and all the elements that compose a page, this Tailwind trait makes the markup very hard to read.

In addition, the code above might be the look you need for _every_ button in your page. If you’re still experimenting with the styling, it will mean that you’ll need to change the class list of every button, which is very repetitive and error-prone.

For that, we can create custom classes that bundle up multiple Tailwind classes. Tailwind recognizes and sets the environment for `<style>` tags that have the `type="text/tailwindcss"` attribute.

```html
<style type="text/tailwindcss"></style>
```

Tailwind defines a set of custom [CSS at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) to allow expanding the CSS output. With the `@layer` directive, you can alter the default styling for elements or add a custom class to Tailwind’s components:

```html
<style type="text/tailwindcss">
  @layer base {
    /* Alter the Tailwind look for native elements like p, input, and css variables in `@layer base`*/
  }

  @layer components {
    /* Create new Tailwind classes aka. components in `@layer components`  */
  }
</style>
```

After creating a new custom class, the `@apply` directive can be followed by a series of Tailwind classes to be applied when using this custom class. It can then be used on your markup.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First HTML Page</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
      @layer components {
        .btn {
          @apply bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95;
        }
      }
    </style>
  </head>
  <body>
    <button class="btn">Tailwind can get rather sssverbose</button>
  </body>
</html>
```

You can read more about Tailwind Directives in the [documentation](https://tailwindcss.com/docs/functions-and-directives).

## Going further: Extending Tailwind

It might be that you need to extend Tailwind with your own custom configuration: one or more palettes, font families, additional media query thresholds. You can modify the global theme:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First HTML Page</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
      @theme {
        --color-mint-500: oklch(0.72 0.11 178);
      }
      @layer components {
        .btn {
          @apply bg-mint-500 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95;
        }
      }
    </style>
  </head>
  <body>
    <button class="btn">Tailwind can get rather sssverbose</button>
  </body>
</html>
```

More information on extending Tailwind can be found in the [documentation](https://tailwindcss.com/docs/configuration).

**Tailwind Core Concepts**

- [**Utility-First Fundamentals**](https://tailwindcss.com/docs/utility-first)
- [**Hover, Focus and Other States**](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [**Responsive Design**](https://tailwindcss.com/docs/responsive-design)
- [**Dark Mode**](https://tailwindcss.com/docs/dark-mode)
- [**Reusing Styles**](https://tailwindcss.com/docs/reusing-styles)
- [**Adding Custom Styles**](https://tailwindcss.com/docs/adding-custom-styles)
- [**Functions and Directives**](https://tailwindcss.com/docs/functions-and-directives)

## Conclusion

Tailwind is a powerful, flexible and robust CSS framework that has risen in popularity due to its non-opinionated and developer-friendly nature. It provides support to the styling needs of modern apps and is a great tool to have in your toolkit.
