---
layout: default
title: Video Game Design HS
parent: High School Competitions
---

# Video Game Design HS
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview
Competitors create a game based on an annual theme. The top 12 semi-finalists are interviewed.

---

## Rules

### General

- Team size up to six

### Game

- Must submit as a URL. Games that require a download or permission will not be judged
- No weapons or other depictions that could be seen as inappropriate are banned (though enforcement is often lax)

### Documentation

- Requires the following pieces of documentation:
  - Cover page
  - Copyright checklist
  - Purpose and description
  - Storyboards
  - Plan of work log

The guide [Filling out Documentation]({{ "/guides/filling-out-documentation" | relative_url }}) covers in detail how exactly to do the documentation.

---

## Competing

### Form a team

While teams may have up to six members, it is not necessarily advantageous to have a large team as it takes exponentially more organization as scale increases. Also take into consideration how members will contribute to a team. Typically, this means dividing people between artists and programmers to then delegate tasks.

### Read the rules

Every year, event rules are updated. Your advisor should have access to the new rules via the the [TSA membership site](https://tsamembership.registermychapter.com). Rules surrounding the game itself are fairly straightforward: no inappropriate content and upload the game as a web URL playable in browser. The portfolio is where you need to pay absolute attention. Judges want detailed documentation in the Plan of Work Log, a dense Purpose and Description, and lots of storyboards.

### Organize documentation and assets

You will have to manage many file from planning documents to meeting minutes and backups of game assets. [Google Drive](https://drive.google.com) is an excellent choice for sharing files.

The team leader should create a Google Drive folder then add the other team members as editors. The shared folder should be organized as such:

- Event Name YYYY-YYYY
  - Assets - Store all files used for your project. Ex. for video game design, you'd store all sprites and music there
  - Documentation - Store all your documentation for your portfolio
  - Meetings - Keep notes for all your meetings. Applies to teams only for obvious reasons
  - Planning - All files where you brainstorm ideas for your project.
  - Submissions - Backups of submissions to track how your project has progressed from regionals to states and on

At this stage, create a document or spreadsheet for members to log their work. This is very important for the Plan of Work Log you need for your portfolio. Fill it out for any contribution to the game - code, art, music, documentation work, meetings, etc. Make sure to add comments for every entry.

### Communicate

As covered in the [Organization guide]({{ "/guides/organization" | relative_url }}), communication and meetings are important. Make sure you have lines of communication like a Discord server or group chat. Hold meetings and keep minutes (notes of what you discussed).

### Brainstorm and storyboard

First consider the annual theme which your game must conform to. Next, pick a unique mechanic build your game off of. What do you want the player to do? Run, dash, spin...? And how might they interact with obstacles?

Don't get too deep into designing your game at this point. Just think about the most basic mechanic that will make your game fun to play. Everything else you add is in service to mechanic from the artwork to effects and additional mechanics to add spice.

Because TSA requires it, you need to make storyboards at this stage. Storyboards are often used as a rough vision for the player experience. Possibly a more important use of it however is to communicate how certain mechanics would work in the game visually. TSA does not provide a template for storyboards, so here is an [unofficial template]({{ "/assets/documents/storyboard-template.pdf" | absolute_url }}) created by this project.

### Tools

Before we can start building the game, we need to discuss what tools you'll use to make it.

Common game engines are Unity, Unreal Engine, and Godot. Unity is the most popular and has the best support so it is recommended for your first time. Parts of this guide is from the perspective of a team using Unity.

For editing code for Unity, you will need a code editor or IDE. Visual Studio is preselected to be installed with Unity though it's a bit slow. Visual Studio Code is faster and completely open source. You will however need to install the [.NET 4.7.1 Developer Pack](https://dotnet.microsoft.com/en-us/download/dotnet-framework/net471) if you're on Windows in order to have working code autocompletion, as [this guide](https://code.visualstudio.com/docs/other/unity) explains.

You'll also need a source code management tool (basically something to allow you to collaborate and manage code changes); Git with Github is a common solution for larger teams (or really any team with multiple programmers).

[Git](https://www.git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F) is the underlying software that allows developers to add changes (called "commits") and for developers to be working on separate parts of the code without interfering with another (called "branches"). Projects in Git are called "repositories." [Github](https://github.com/) is a popular platform for hosting repositories and adding collaborators. [Github Desktop](https://desktop.github.com/) is a highly recommended client for Github repositories. Brackeys has a pretty good video on [setting up Github for Unity](https://youtu.be/qpXxcvS-g3g). Private repositories on Github are now both free and unlimited. A guide on using Git and Github for TSA will be posted in the future.

For art, if you're making a 3D game, Blender is the most common program for creating models. For 2D, basically everything works from Adobe Photoshop to an online pixel art editor like [Piskel](https://www.piskelapp.com/). If it's your first game, make it in 2D. It will save you heaps of time and headache.

### Create the MVP

MVP stands for "minimum viable product." As the name implies, the MVP is bones of the game - the base mechanics. [This video](https://youtu.be/UvCri1tqIxQ) by Extra Credits succinctly explains MVPs in detail and why they're critical, but in short, they're important for testing whether your game idea has value before you invest too much in it.

### Playtest and revise

Get people to try it out and see if your game is any good. If it isn't, go back to the drawing board. If it is, note what needs to be fixed or improved. Then, adjust according to the feedback. Add features and flesh out your game. When done, send it back to playtesting to repeat the process.

### Submitting

To share your game, most will build it in HTML5 and upload to itch.io to allow the judges to play the game via URL. **Executables (.exe files) and other submissions that force judges to download a file to play are not allowed.**

Though it may vary, the team captain will typically have to submit via the TSA membership site. Once they submit, the other team members should be able to log in and verify the project was properly submitted.

### Interviews

Your team will have two representatives for interviews. Pick them out beforehand and probably a backup person as well. It's a good idea to split up what each person talks about: one person might cover the technical aspects while another will cover the artistic choices. Make sure to practice interviewing prior with someone else.

For more information on interviewing, see the guide [Interviewing 101](({{ "/guides/interviewing-101" | relative_url }})).

---

## Additional Tips

- It is far easier to make a decent game in 2D
- If you're using Git, merge conflicts are a nightmare. Ensure developers aren't changing the same code files and keep scene changes to a minimum

---

## Examples

- Delta Trooper: 2021 by Axiom Studios - 2nd place at Washington State conference and 7th place at 2022 National Conference

---

## Additional Resources

- [Extra Credits YouTube channel](https://www.youtube.com/extracredits/videos) - their older video especially cover game design
- [Brackeys YouTube channel](https://www.youtube.com/channel/UCYbK_tjZ2OrIZFBvU6CCMiA) - learn programming in Unity plus some game design tips