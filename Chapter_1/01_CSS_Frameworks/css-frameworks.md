---
  icon: 📖
  title: What’s a CSS framework?
  unit: 
    name: 003 - Intro to JS
    color: brown
  chapter: 
    name: Module Project— Figma and TailwindCSS
    color: purple
  type: 
    name: Article
    color: purple
  ft-id: 003.01.004
  pt-id: 003.01.004
  objectives: This is meant to be read as a preamble to the Figma/Tailwind project. 
  slides: null
  instructorNotes:
    plainText: This is meant to be read as a preamble to the Figma/Tailwind project. 
    links: null
---

# 📖 What’s a CSS framework?

Frameworks are a set of utilities that aim to provide you an easier way of utilising a specific system through a layer of abstraction, requiring you to utilise the framework tools instead, while the framework concerns itself with converting that into the lower-level system it builds on top of. Think of it as shortcut codes: the framework puts a simpler command at your disposal to execute a more complex task or set of commands!

When it comes to CSS Frameworks, each framework provides a set of tools that enable you to generate CSS and style your page in a cleaner, easier to maintain, and more scalable manner. Each CSS Framework is organised differently and has a different logic when it comes as to how it converts its usage into the CSS you already know.

One of the main initial downsides all frameworks have is a learning curve: you need to learn how the system is structured, and how that translates into the end CSS you expect to see.

At this stage of your journey, you’ll be mostly relying on CDNs (Content Delivery Network) for any CSS frameworks until more advanced concepts are introduced and you can start to add the files locally to your projects.

Let’s have an overview of a few frameworks:

### Bootstrap

Bootstrap was created at Twitter in mid-2010 by **Mark Otto** and **Jacob Thornton** and made open-source in 2011. Currently in version 5, Bootstrap has declined in popularity in recent years but is still a very well-known and widely used CSS framework.

Bootstrap provides CSS and JavaScript files that contain pre-defined class names. You can install the files locally, or use the CDN (Content Delivery Network) to link the files into your local HTML file:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

The CSS file comes with a massive amount of pre-defined CSS classes, for example:

```css
.m-0 {
  margin: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}
```

You can then use these classes on your markup, thus inverting the workflow of styling: You add the provided classes to your markup as you create it, instead of creating the markup first and switching to a CSS file to define the styles for it.

```html
<header class="container-lg bg-primary text-end m-2">
  <img
    src="https://myCoolImgUrl.com/myLogoImg.png"
    alt="The coolest logo around"
  />
  <nav>
    <ul class="row list-unstyled px-3 mt-2">
      <li class="col-6 col-md-8 col-lg-10">NavItem</li>
      <li class="col-3 col-md-2 col-lg-1">NavItem</li>
      <li class="col-3 col-md-2 col-lg-1">NavItem</li>
    </ul>
  </nav>
</header>
```

Pros:

- Pre-defined classes with predictable effects to them, where as many classes can be added to an element for as many effects are needed for that element.
- No more bouncing between files: With a massive collection of classes at your disposal, you can focus on the markup, with any styles being added through the class attribute.
- Semantic classes like `card` or `navbar` enable you to have a pre-ready, consistent layout out of the box, which enables you to style your page much quicker.
- Page layout system with the `row` and `col` classes that build on top of Flexbox to enable full control of element positioning via classes.
- Responsive design is made easy with pre-set breakpoints and class infixes that enable an effect upon an element at specific media query ranges.

Cons:

- Little flexibility: Many Bootstrap classes carry the `!important` rule, which makes effect overriding quite difficult.
- If many rules are needed for an element, the chaining of all required classes can make up for bloated-looking markup.
- The semantic classes in Bootstrap often impact child elements, or can behave differently if inside elements that contain other specific classes. Therefore, learning how these classes behave in which conditions is also needed.
- Bundle size can get pretty large. Regardless of how many Bootstrap classes you are using throughout your code, your CSS file import will nonetheless contain all Bootstrap classes, with possibly most of them left unused. This can have a negative impact if the remainder of your application is also large in itself.

Links:

- [Documentation](https://getbootstrap.com/)
- [Quick start via CDN](https://getbootstrap.com/docs/5.3/getting-started/introduction/#quick-start)

### Tailwind CSS

Tailwind CSS was developed by **Adam Wathan** and first released in 2017, and has quickly increased in popularity since its inception, quickly becoming a well loved framework amongst current developers.

Tailwind CSS is an utility-framework that has initial similarities to Bootstrap, as it provides pre-defined classes out of the box that are usable when installing Tailwind locally or using the CDN to import a JavaScript file.

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </body>
</html>
```

While it contains no semantic classes, Tailwind is highly customizable and has the means to accept arbitrary values, classes that reflect states like hover or effects on sibling elements, an inbuilt responsive system and the capacity to add custom classes on a project-basis for things like fonts, colours and animations.

```html
<h1
  class="font-bold text-[17px] md:text-lg xl:text-[34px] hover:cursor-pointer font-myCustomFontName"
>
  Hello world!
</h1>
```

Pros:

- Similar to Bootstrap, Tailwind provides pre-defined classes to enable styling only via adding classes to your elements directly in the HTML file with an out-of-the-box responsive system with a mobile-first approach.
- The production CSS file size with Tailwind is very minimal. Tailwind only composes a CSS file based on the classes actively used in your markup, so your CSS file size is as minimal as it needs to be. This process is called class `purging`.
- Tailwind has very high flexibility as classes also accept arbitrary or one-off values for values outside or in-between the range that the pre-defined classes provide.
- It has a method to expand the pre-defined system to add themes with an integrated dark mode system, application-relevant resources like fonts and palettes to enable most features a modern app needs when it comes to styling.
- Very thorough and reliable documentation.

Cons:

- No semantic classes, so the amount of classes added to an element gets really bloated really quickly, making for hard-to-parse markup. However, Tailwind does provide ways to condense repetitive series of classes under custom semantic classes.
- No inbuilt layout system. All layout and positioning is done via the use of classes, giving the developer more control over the layout at the cost of time.
- Dynamic classes can be troublesome. Since Tailwind purges unused classes out of the final CSS, if a class is not present during generation of the CSS but gets added programmatically during the flow of the application, that class will not be present in the stylesheet and hence any effect will not take place. The solution for such edge-cases is inline styles or an additional stylesheet.
- The CDN is not suitable for a production environment, as the generated CSS misses a lot of optimization that normally takes place when Tailwind is installed in your project.

Links:

- [Documentation](https://tailwindcss.com/)
- [Quick start via CDN](https://tailwindcss.com/docs/installation/play-cdn)

### Bulma

Bulma was created by **Jeremy Thomas** in 2016.

It is in many senses very similar to Bootstrap. It has a class approach with single effect and semantic classes that can be tweaked further by additional classes added to the element.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Hello Bulma!</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
    />
  </head>
  <body>
    <section class="section">
      <div class="container">
        <p class="title">Hello <span class="title is-1">World</span></p>
        <p class="subtitle">My first website with <strong>Bulma</strong>!</p>
        <button class="button is-info">Info</button>
      </div>
    </section>
  </body>
</html>
```

Pros:

- Responsive, mobile-first layout system for easy pre-defined layouts that can get your site styled quickly.
- Style modularity by having classes that enhance or alter other classes they are used in conjunction with.
- Cross-browser compatibility out of the box already included in the CSS file (Safari, I’m looking at you)
- Palettes can be customised when using Bulma together with SASS.
- No JavaScript. It is purely a collection of pre-defined CSS classes.

Cons:

- As there is no JavaScript included, effects like carousels and other JavaScript-driven features must be coded in addition by the developer.
- Limited compatibility with some older browsers and Internet Explorer.
- Little flexibility and large bundle size, like Bootstrap.
- Has less options than other more established frameworks like Bootstrap or Tailwind.
- Documentation and community support is less abundant.

Links:

- [Documentation](https://bulma.io/)
- [Quick start via CDN](https://bulma.io/documentation/)

### Materialize

Materialize was created by **Alvin Wang**, **Alan Chang**, **Alex Mark** and **Kevin Louie** in 2014, a team of students from Carnegie Mellon University. It builds on top of Google’s Material Design design language for its looks.

Built with SASS, Materialize provides pre-defined semantic classes, its own set of JavaScript effects and a dedicated set of icons to keep coherent with Material Design’s visual style.

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link
      type="text/css"
      rel="stylesheet"
      href="css/materialize.min.css"
      media="screen,projection"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <nav class="light-blue lighten-1" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">Logo</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Navbar Link</a></li>
        </ul>

        <ul id="nav-mobile" class="sidenav">
          <li><a href="#">Navbar Link</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
      </div>
    </nav>
    <script type="text/javascript" src="js/materialize.min.js"></script>
  </body>
</html>
```

Pros:

- Strong visual identity makes for a very reliable design look.
- Responsive system with a similar principle to Bootstrap with `row`s and `col`s, though not based on Flexbox.

Cons:

- As Materialize follows a strong visual identity, flexibility is only achieved by creating your own set of CSS to work in addition with Materialize’s classes. Most classes also have the `!important` attribute, making overriding very difficult.
- Class names are less forthcoming in their names and this framework requires a lot of memorization.

Links:

- [Documentation](https://materializecss.com/)
- [Quick start via CDN](https://materializecss.com/getting-started.html)

### Final word

Trends come and go, as do CSS Frameworks. Learning new ones as time progresses is imperative, but you can also keep up to date with what the current trends are with the[ State of CSS](https://stateofcss.com/en-US) annual survey.

More CSS Libraries and toolkits also become relevant once you dive into JavaScript frameworks, in an approach known as CSS-in-JS that can be used instead of or in conjunction with CSS Frameworks.

As most things in software development, CSS Frameworks aren’t a replacement to plain CSS or preprocessors, only another viable option. Ultimately, choosing an approach to styling comes to a mixture of resources, team member technical capacity, and preference. It is important to have an understanding of what solutions exist, and experiment to find your method of choice.
