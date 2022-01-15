---
layout: default
title: Cybersecurity HS
parent: High School Competitions
---

# Cybersecurity HS
{: .no_toc }

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

Teams compete in a 48 hour CTF challenge putting their cybersecurity skills to the test.

## Rules

- Max team size of 6 but no minimum.
- CTF platform is open for 48 hours.
- Opposing teams may not collaborate or communicate during the competition.
- Teams may not communicate with people outside the competition for help.
- Searching on the world wide web for answers or more information during the competition is very much encouraged.
- Attacking the CTF hosting infrastructure is not allowed.
- You may not brute force flags.

## Competing

### What are CTFs?

CTF stands for capture the flag. However, instead of physical flags, competitors are looking for a string of characters recovered from completing some challenge related to cybersecurity. Entering correct flags gets you points the team with the most points at the end of the competition wins.

There are two main styles of CTF competition including: jeopardy and attack/defense. In attack/defense, teams defend their own servers while trying to attack the opposing teams' servers. In jeopardy style, there are categories like web, forensics, binary, etc. Under the categories are challenges. Each challenge will have a description of what you are trying to solve and possibly a link or file attached. The Technology Student Association hosts jeopardy-style CTFs.

### Setting up a Cyber lab

All you really need to do is install [VirtualBox](https://www.virtualbox.org/) and [create an Ubuntu virtual machine](https://brb.nci.nih.gov/seqtools/installUbuntu.html) - stop before going into the "More About VirtualBox" section, as you don't need to worry about it for now. Everything below in this section is just additional information on why you need to do this, and what other options you have.

Linux is a family of operating systems based on the open-source Linux kernel. It is important that you are familiar with Linux because it is used extensively. The vast majority of servers run a Linux distribution from web hosting to online games. Of the top 500 supercomputers, every single one runs a Linux operating system.

There are many ways you can run Linux. While you could install Linux directly on your computer by wiping it or dual booting, it's not recommended especially if it's your first time.

Most run Linux in a virtual machine. A virtual machine basically emulates a computer on your existing computer. You can make a virtual machine with a program like [VirtualBox](https://www.virtualbox.org/) or [VMware](https://www.vmware.com/).

Be aware that virtual machines will have lower performance and require more RAM. You need at least 4 gigabytes of RAM on the host with 1 gigabyte allocated to the virtual machine, but that's stretching it. 8 gigabytes of RAM on the host machine with 2 gigabytes allocated to the virtual machine would be good - more RAM would be even better.

If you have a Windows computer, you also have the option of running the [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/about). It allows you to install a Linux terminal to run Linux programs on your Windows computer without all the overhead of a virtual machine.

It's important to know there isn't a single Linux OS. There are a multitude of Linux distributions or "distros" with their own pros and cons. This is because people took the source code of the Linux kernel to make their own Linux distro. Others split off existing distros modifying it to their liking (also called ["forking"](https://en.wikipedia.org/wiki/Fork_(software_development))).

As [this](https://upload.wikimedia.org/wikipedia/commons/8/83/Linux_Distribution_Timeline_27_02_21.svg) distribution timeline shows, there are a lot of options which can be overwhelming. If you're new to Linux, just try out Ubuntu. As you get more comfortable with Ubuntu, you can try other distros.

[Kali Linux](https://www.kali.org/) is a distro specifically for cybersecurity commonly used in the industry which comes with important programs like installed nmap out of the box. Other popular distros include Pop!_OS, Linux Mint, Debian, Parrot OS, Fedora, Manjaro, and Arch Linux. Research all about it if you're so inclined as with everything else discussed in this guide.

There's much more software which will be discussed in a later section. Also know you can go beyond and add other devices to your hacking lab to experiment when you get to more advanced levels. Some have [Raspberry Pi](https://www.raspberrypi.org/) servers. Others will pay for [AWS](https://aws.amazon.com/) or [Azure](https://azure.microsoft.com/en-us/) services. For the national TSA cybersecurity competition, this is somewhat overkill.

You do not need to pay to learn the basics of cybersecurity. There are plenty of free, quality resources online. As long as you have a personal computer, you should be fine. Windows, MacOS, and Linux users are all set. However, chromebook users may have some issues.

If you can [enable developer mode](https://www.howtogeek.com/210817/how-to-enable-developer-mode-on-your-chromebook/) on your chromebook, it would be wise to do so as it would give you access to a Linux shell and run Linux programs. If you absolutely can't and have no other options, you still may have a chance of running a Linux shell online, but it would be extremely limiting and painful.

### Learning

A good way to get into CTFs is trying [warmupCTF](https://warmup.ctfd.io/). There's no login, just try out a couple challenges. It's easy for beginners and many have links for more information. As with almost any other CTF you will encounter, you are encouraged to Google things to obtain more information to help you. Googling is seen as an important skill to have in CTFs, it is not cheating at all. WarmupCTF also uses CTFd for hosting - the same platform TSA uses to host their CTF competition.

Also try [picoCTF](https://www.picoctf.org/) which is an annual CTF competition aimed at highschool students hosted by Carnegie Mellon University. With [picoGym](https://play.picoctf.org/practice), you can practice CTF challenges year round. There is also [picoPrimer](https://primer.picoctf.com/) which has tons of information for beginners. You should check out the [resources page](https://picoctf.org/resources) as well which contains more useful info.

[CTFtime](https://ctftime.org/) allows you to find upcoming CTF challenges you can try with your team. The weight indicates how difficult the CTF is. If it's your first competition, try a competition below 30. Bear in mind that some competitions with a weight of 0 may be new or too long to receive a proper weighting such as the picoCTF competition. CTF competitions hosted on CTFtime are also more likely to have writeups. Writeups are explanations of how a team solved a particular challenge. Some competitions require the winners to submit writeups. Read some writeups after a competition to learn what you can improve on next time.

There are far more sources to check out in the [additional resources](#additional-resources) section.

### Recommended Software

Here are some useful programs and a website to get started.

- [CyberChef](https://gchq.github.io/CyberChef/). A website to quickly decode or decrypt strings, analyze files, and more. A fair amount of challenges in the TSA CTF can be solved in seconds with CyberChef mainly in the miscellaneous category.
- [Wireshark](https://www.wireshark.org/). A packet analysis program. A must have for network and forensics challenges where packet captures are provided.
- [BurpSuite](https://portswigger.net/). A proxy that allows you to intercept, view, and modify requests. Helpful for some web challenges.
- [Ghidra](https://ghidra-sre.org/). A disassembler useful for some reversing challenges.

The list goes on far longer so here are some links to pages with more links to resources.

- [MajorLeagueCyber Recommended Software](https://wiki.majorleaguecyber.org/topics/faq/tools/).
- [Helpful steganography tools](https://0xrick.github.io/lists/stego/). List compiled by 0xRick.

Since at the very least you'll need to read and modify code, a text editor like [VS Code](https://code.visualstudio.com/), [Atom](https://atom.io/), or [Notepad++](https://notepad-plus-plus.org/) would be helpful. If you really want to get comfortable with using the Linux shell, Vim is an option but it's more for on-the-fly edits at least when compared to VS Code.

Many competitors may also run [Python](https://www.python.org/) scripts to perform certain attacks which requires downloading the [Python interpreter](https://www.python.org/downloads/) to run the code. Although, Ubuntu should have Python already installed which you must run from the command line.

## Additional Tips

- CTF creators often put hints within the prompt. This can be anything from highlighting specific words that are also the name of a program which can be used to help, using French or German sounding titles to indicate the use of Vigenère encryption or text encrypted with Enigma, sneaking words into titles hinting what kind of attack you'll have to perform, etc. If anything sounds odd, Google it.
- Use a program like [Discord](https://discord.com/) or [Slack](https://slack.com/) to communicate with your team.
- Record notes on challenges. A shared [Google Drive](https://www.google.com/drive/) folder would work.
- Some teams will have each team member dedicated to specific categories. For example, one person would be in charge of reversing challenges while another would do web. See what works for your team.

## Additional Resources

- [WarmupCTF](https://warmup.ctfd.io/).
- [PicoCTF](https://picoctf.org/).
- [CTFtime](https://ctftime.org/).
- [Steganography tools list](https://0xrick.github.io/lists/stego/).
- [LiveOverflow](https://liveoverflow.com/). A Youtuber with good info on CTFs and cybersecurity.
- [HackerSploit](https://www.youtube.com/channel/UC0ZTPkdxlAKf-V33tqXwi3Q). Another Youtube channel with good info on CTFs and cybersecurity.
- [MajorLeagueCyber Resource Library](https://wiki.majorleaguecyber.org/).
- [CTF Field Guide](https://ctf101.org/).
- [Roppers Academy](https://www.hoppersroppers.org/). Courses to learn cybersecurity structured in a clear pathway for beginners.
- [TryHackMe](https://tryhackme.com/). A complete, interactive learning platform for cybersecurity.
- [OverTheWire](https://overthewire.org/wargames/). Wargames to learn cybersecurity. The bandit wargame in particular is a good intro to Linux.
- [CTFlearn](https://ctflearn.com/).
- [CryptoHack](https://cryptohack.org/). Challenges to learn cryptography.
- [Reverse Engineering for Beginners](https://www.begin.re/).
- [Nightmare](https://guyinatuxedo.github.io/00-intro/index.html). Intro to binary exploitation and reverse engineering.
- [x86 Assembly Crash Course (video)](https://youtu.be/75gBFiFtAb8).
- [crackmes.one](https://crackmes.one/). Practice reverse engineering doing crackme challenges.
- [SmashTheStack](http://smashthestack.org/wargames.html). Binary exploit war games.
