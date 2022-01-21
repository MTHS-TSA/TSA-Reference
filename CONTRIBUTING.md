---
layout: default
title: Contributing
nav_order: 6
---

# Contributing
{: .no_toc }

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Making Edits

This website is powered by Jekyll using the [Just the Docs theme](https://github.com/pmarsceill/just-the-docs). Check out [their website](https://pmarsceill.github.io/just-the-docs/) for formatting information.

At the bottom of every page is a link that says "Edit this page on Github" which will take you directly to the page on Github for editing. You can also just open the file you want to edit in Github.

Here are the steps to make an edit:

1. Make a fork of the project.
2. Make a branch to make your changes.
3. Commit your changes.
4. Submit a pull request to have your changes added to the website.
5. Make any additional edits if requested by the reviewer.
6. All done.

The process is also described in this [Microsoft tutorial](https://docs.microsoft.com/en-us/learn/modules/contribute-open-source/).

---

## Style Guidelines

Use the AP style when possible unless stated otherwise below:

- Use the Oxford comma.
- Always use figures even if below 10 for clarity.

Additionally:

- It is ok to use opinionated language as long as it's accurate and good advice for most.

---

## Adding new Pages

Pages are categorized as the following:

- **General Information**. Describes specific TSA procedures or events.
- **High School Competitions**. Information on high school competitions; 1 page per event.
- **Middle School Competitions**. Information on high school competitions; 1 page per event.
- **Guides**. Tutorials and information for learning.

Every page must start with YAML information so the website adds it to the navigation.
Here is an example:

```
---
layout: default
title: Coding HS
parent: High School Competitions
---
```

Then add the title with and h1 header `#`.

To add an auto-generating table of contents, use the code below:

```
## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}
```

Subsequent headers should use h2 `##` and children of those headers should use h3 `###` and so on.

Every h2 header should be separated with a horizontal line divider `---`.

Most competition guides will have the following sections though they are removed if there is currently no information under them and subsections may be added:

1. Overview
2. Rules
3. Competing
4. Additional Tips
5. Examples
6. Additional Resources
