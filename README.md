# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

#### Reserved keywords

The data.json file with all the jobs data has a key of `"new"` to highlight newly posted jobs. I originally chose to use object destructuring to feed the job data into each Job component:

```jsx
  const jobs = data.map(({
    id,
    logo,
    company,
    position,
    postedAt,
    contract,
    location,
    role,
    level,
    languages,
    tools,
    new,
    featured
  }) => {
    return (
      <Job
        key={`job-${id}`}
        id={id}
        logo={logo}
        company={company}
        position={position}
        postedAt={postedAt}
        contract={contract}
        location={location}
        role={role}
        level={level}
        languages={languages}
        tools={tools}
        isNew={new}
        isFeatured={featured}
      />
    )
  })
```

This caused a bit of a headache because `new` is a reserved keyword in JavaScript so I couldn't just use it as is. I even looked up how to rename keys as you destructure an object but that still didn't work because I still had to refer to `new` first before I could assign and use a different name.

I didn't want to have to change my whole implementation to not use destructuring but admittedly, it looked much tidier without the massive list of parameters...

```jsx
  const jobs = data.map(job => {
    return (
      <Job
        key={`job-${job.id}`}
        id={job.id}
        logo={job.logo}
        company={job.company}
        position={job.position}
        postedAt={job.postedAt}
        contract={job.contract}
        location={job.location}
        role={job.role}
        level={job.level}
        languages={job.languages}
        tools={job.tools}
        isNew={job.new}
        isFeatured={job.featured}
      />
    )
  })
```

I also didn't want to have a really untidy `App.jsx` file. As this is a small project, I didn't want to split it into too many smaller components.

I briefly went for what felt like a dirty fix and changed the keys in the JSON file to `"isNew"`. This obviously wouldn't be an option if I was getting the data from an API.

To be fair though, regardless of how I would've used my variables, if I'd built the API, I wouldn't have used `new` as a key. But if I had, I would have run into this issue and realised what a mistake it was. Now that I think about it, I feel like most APIs out there DON'T use words that could be reserved keywords in most programming languages.

I'm also aware that Frontend Mentor probably aren't going to build proper APIs for everyone to use to do their code challenges so this approach is perfectly reasonable! 🙂

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Renaming destructured parameters](https://stackoverflow.com/questions/65625625/how-to-rename-a-destructured-parameter-concisely-in-react) - This StackOverflow post came in handy when I was trying to find a way around the `new` keyword problem in my destructuring.
- [Heading levels should only increase by one](https://dequeuniversity.com/rules/axe/4.7/heading-order) - I got useful advice from this article when I wasn't quite sure about how accessible my heading element ordering was.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Nate](https://nate-dev.com)
- Frontend Mentor - [@ntjnh](https://www.frontendmentor.io/profile/ntjnh)
- Twitter - [@natemanydev](https://www.twitter.com/natemanydev)
