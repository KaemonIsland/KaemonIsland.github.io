import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

  /* Typography 8-point grid
  https://www.freecodecamp.org/news/8-point-grid-typography-on-the-web-be5dc97db6bc/ */
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 3.75rem;
  }
  h3 {
    font-size: 3rem;
  }
  h4 {
    font-size: 2.125rem;
  }
  h5 {
    font-size: 1.5rem;
  }
  h6 {
    font-size: 1.25rem;
  }
  p {
    font-size: 1rem;
  }
`