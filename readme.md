<h1 align="center"> Personal Portfolio </h1>

<img width="945" alt="image" src="https://aman-portfolio-iaman011s-projects.vercel.app/banner.png">

### Deployed link: https://aman-portfolio-iaman011s-projects.vercel.app/

## Table of Contents 📁

1. [Tech Stack](#tech-stack-)
2. [Implemented Sections](#implemented-sections-%EF%B8%8F)
3. [Use as a theme](#using-as-a-theme-)
4. [Installation Guide](#installation-guide-)
5. [Sample Git Workflow](#sample-git-workflow)

   <br>

## Tech Stack 🧰

<li>Frameworks/Libraries</li>

- [ReactJS](https://reactjs.org/)
- [ViteJS](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons")
- [Framer](https://www.framer.com/)

<br/>

## Implemented Sections ☑️

- Hero Section
- Skills
- Education
- Projects
- Extra Curricular
- Contact Me


## Using as a Theme ✨

### 🔧 Code Changes

To customize this portfolio, you’ll mainly need to edit:

1. **Personal Information**

   - Edit `/src/constants/index.js` where all sections (About, Projects, Contact) are structured as JavaScript objects.
   - **Icons**  
     - Use icons from [React Icons](https://react-icons.github.io/react-icons/search)
     - Import them into `/src/constants/index.js` as needed.

     Example:
     ```javascript
     import { SiReact } from "react-icons/si";
     ```

2. **Website Title and Icon**

   - Update the `<title>` and favicon path in `index.html`.

3. **Assets**

   - Place your images inside `/src/assets`
   - Import and export them from `/src/assets/index.js`
### Deployment

You can use [Netlify](https://docs.netlify.com/) to deploy your site. Follow the instructions in their docs to do so.

Since we have env variables, make sure to add them from the Netlify UI as well. [Link to Guide](https://docs.netlify.com/environment-variables/get-started/#site-environment-variables)

## Contributing 🏆
We welcome contributions in the form of pull requests, issues, and documentation improvements. Feel free to help enhance this project in any way you can! ❤️

Please read and abide by our Code of Conduct —
our community aims to foster a respectful, collaborative, and inclusive environment both online and offline.

To get started contributing:

Follow the Installation Guide to set up the project locally.

Check out the Sample Git Workflow for contributing guidelines and branch strategy.

We appreciate your time, effort, and ideas — let’s build something awesome together! 🚀✨

## Installation Guide 💻

### Clone and Install

```bash
# Clone your forked repo
git clone https://github.com/iaman011/aman-portfolio.git

# Move into the project directory
cd aman-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

<br/>

## Sample Git Workflow 🔀

# Create a new feature branch
git checkout -b your-feature-branch

# After changes, switch to main branch and update
git checkout main
git pull https://github.com/iaman011/aman-portfolio.git main

# Switch back to your feature branch
git checkout your-feature-branch

# Rebase latest changes from main
git rebase main

# Resolve any merge conflicts if needed

# Push your branch
git push origin your-feature-branch

# Open a Pull Request on GitHub



#### If you found this repo helpful in anyway, considering giving it a star - it would mean the world to me! 🌟


