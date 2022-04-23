---
layout: default
title: '[U] Tech Bowl Study Guide'
parent: Guides
---

# [U] Tech Bowl Study Guide
{: .no_toc }

*Currently under construction*

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

This is a study guide for the technology bowl competition. This can be used to study for both MS and HS level competition. If you don't know the answer to a question, look it up.

---

## Practice Game

<p id="p-answer">The correct answer was: <span id="answer"></span></p>
<p id="p-question">Question: <span id="question">Loading...</span></p>
<p id="p-category">Category: <span id="category">Loading...</span></p>
<p>Points: <span id="points">0</span></p>

<input type="text" placeholder="Answer" id="user-input" onkeydown="showAnswer(this)"/>
<button id="next-btn" onclick="newQuestion()">Next</button>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src='{{ "/assets/js/jquery.csv.min.js" | relative_url }}'></script>
<script>
    var DATA;
    var ANSWER;
    var POINTS = 0;
    function newQuestion() {
        $( "#p-question" ).show();
        $( "#p-category" ).show();
        $( "#user-input ").show();
        $( "#p-answer" ).hide();
        $( "#next-btn" ).hide();
        var selectedQuestion = DATA[Math.floor(Math.random() * DATA.length)];
        $( "span#question" ).text(selectedQuestion["Question"]);
        $( "span#category" ).text(selectedQuestion["Category"]);
        ANSWER = selectedQuestion["Answer"];
    }
    function showAnswer(ele) {
        if (event.key === 'Enter') {
            if (ele.value == ANSWER) {
                POINTS++;
            }
            $( "#p-question" ).hide();
            $( "#p-category" ).hide();
            $( "#user-input" ).hide();
            $( "#p-answer" ).show();
            $( "#next-btn" ).show();
            $( "#answer" ).text(ANSWER);
            $( "#points" ).text(POINTS);

            ele.value = "";
        }
    }
    $.get('{{ site.url }}/{{ site.baseurl }}/assets/misc/sample-tech-bowl.csv', function (raw_data, textStatus, jqXHR) {
        DATA = $.csv.toObjects(raw_data);
        newQuestion();
    });
</script>

---

## Science

### General

- What is a hypothesis?
- What is a theory?
- What is a scientific law?
- What is an experiment?
- What is data?
- What is quantitative data?
- What is qualitative data?
- What is the scientific method?
- What is the International System of Units (SI)?
- What is the metric system?
- What is the imperial unit system?
- What is a mole?
- What is gram?
- What is a liter
- What is a meter?
- What is a second?
- What is a joule?
- What is a watt?
- What is a calorie?
- What is a newton?
- What is a volt?
- What is an ampere?
- What is an ohm?
- What is a pascal?
- What is a torr?
- What is an atmosphere?
- What is a degree kelvin?
- What is a degree celsius?
- What do the prefixes, nano, micro, mili, centi, deci, deca, hecto, kilo, mega, and giga mean?
- What are the fundamental units in the metric system?
- What is a foot?
- What is a yard?
- What is a mile?
- How many feet are in a mile?
- What is a nautical mile?
- What is a pound?
- What is a gallon?

### Astronomy / Physics

- What are the four fundamental forces?
- What is gravity?

### Earth Science

- What is the Richter scale?
- What is an earthquake?
- What is a bomb cyclone?
- What is a cumulus cloud?
- What is lightning?
- What is erosion?
- What are igneous rocks?
- What are sedimentary rocks?
- What are metamorphic rocks?
- What are crystalls?
- What are minirals?
- What are canyons?
- What are oceans?
- What are geysers?
- What are volcanos
- What are mountains?
- What is the Pacific Ring of Fire?
- What are fault lines?
- What are tectonic plates?

### Chemistry

- What is an atom?
- What is an element?
- What is a molecule?
- What is a species?
- What is an ion?
- What is a cation?
- What is an anion?
- What is a noble gas?
- What is a metal?
- What is a salt?
- What are ionic bonds?
- What are covalent bonds?
- What are metallic bonds?
- What are dipole-dipole bonds?
- What are intermolecular forces?
- What are intramolecular forces?
- What are London dispersion forces?
- What is a dipole?
- What is an induced dipole?
- What is a polar molecule?
- What is a non-polar molecule?
- What is combustion?
- What is a redox reaction?
- What is a precipitation reaction?
- What is an acid-base reaction?
- What is an acid?
- What is a base?

### Biology

- What is deoxyribonucleic acid (DNA)?
- What is ribonucleic acid (RNA)?
- What is the nucleus of a cell?
- What is a cell?
- What is cytoplasm?
- What are organelles?
- What are bacteria?
- What are mitochondria?
- What are chloroplasts?
- What is the golgi apparatus?
- What is are ribosomes?
- What are vacuoles?
- What is the cell membrane?
- What is a prokaryote?
- What is a eukaryote?
- What is a protein?
- What is an enzyme?
- What are genes?
- What are chromosomes?
- What is a genome?
- What are chromatids?
- What are Y-linked genes?
- What are genotypes?
- What are phenotypes?
- What are recessive traits?
- What are dominant traits?
- What is mitosis?
- What is meiosis?
- What are red blood cells?
- What are white blood cells?
- What are neurons?
- What are antibodies?
- What are T-cells?
- What are B-cells?

### Biotechnology / Medicine

- What is CRISPR-Cas9?
- What is cancer?
- What is chemotherapy?
- What is insulin?
- What is diabeties?

---

## Engineering

### Structural

- What is compression?
- What is tension?
- What is shear?
- What is torsion?
- What is bending?
- What is friction?
- What is drag?
- What is lift?
- What is spring force?
- What is applied force?
- What is normal force?
- What is air resistance?
- What is spring force?

### Mechanical

- What are simple machines?
- What are compound machines?
- What is effort?
- What is load?
- What is a fulcrum?
- What is a lever?
- What is a pully?
- What is an inclined plane / ramp?
- What is a screw?

### Robotics

- What is a gripper?
- What is a sensor?
- What is an end effector?

---

## Computing / Electronics

### Computer Hardware

- What is hardware?
- What is a Central Processing Unit (CPU)?
- What is Random Access Memory (RAM)?
- What is a motherboard?
- What is cache?
- What is WiFi?
- What is Bluetooth?
- What is the Universal Serial Bus (USB) protocol?
- What is a register?
- What is a hard disk drive (HDD)?
- What is a solid state drive (SSD)?
- What is a flash drive?
- What is a Standard Digital (SD) card?

### Software

- What is software?
- What is firmware?
- What is an operating system?
- What is Linux?
- What is Windows?
- What is macOS?
- What is Android?
- What is iOS?
- What is UEFI / BIOS?
- What is open source code?
- What is closed source code?
- What is a terminal / console?

### The Internet

- What is a web browser?
- What is a search engine?
- What is a client?
- What is a server?
- What is a local area network (LAN)?
- What is a wide are network (WAN)?
- What is a switch?
- What is a hub?
- What is a router?
- What is a modem?
- What is an Internet Protocol (IP) address?
- What is a domain name system (DNS) server?
- What is a domain?
- What is a port?
- What is a top level domain (TLD)?
- What is a subdomain?
- What is the Hypertext Transer Protocol (HTTP)?
- What is the file transfer protocol (FTP)?
- What is the secure shell protocol (SSH)?
- What is hyperlink?
- What is the world wide web?
- What are fiber optic cables?
- What is the Transmission Control Protocol TCP/IP?
- What is the User Datagram Protocol (UDP)?

### Programming

- What is an Integrated Development Environment (IDE)?
- What is assembly?
- What is a low-level language?
- What is a high-level language?
- What is a compiler?
- What is object-oriented programming?
- What is JavaScript?
- What is Python?
- What is C?
- What is C++?
- What is Java?
- What is HTML?
- What is SQL?
- What are functions?
- What is an algorithm?
- What is an integer?
- What is a string?
- What is a floating point number?
- What is a variable?
- What is a boolean?
- What is a conditional?
- What is an if statement?
- What a for loop?
- What is a while loop?
- What an OR gate?
- What is an AND gate?
- What is a NOT gate?
- What is an XOR gate?
- What is an operator?

### Data

- What is a bit?
- What is a byte?
- What is binary?
- What is hexadecimal?
- What is base64?
- What is plaintext?
- What is the American Standard Code for Information Interchange (ASCII)?
- What is Unicode / UTF-8?
- What is Morse code?
- What is a Portable Document Format (PDF) file?
- What is a Joint Photographic Experts Group (JPEG) file?
- What is a Portable Network Graphics (PNG) file?
- What is an executable (EXE) file?
- What is a ZIP file?
- What is data compression?
- What is lossy compression?
- What is lossless compression?
- What are file archives?
- What are magic bytes?
- What is cryptography?
- What is steganography?
- What is symmetric encryption?
- What is asymmetric encryption?

### Circuitry

- What is a switch?
- What is a resistor?
- What is a capacitor?
- What is a diode?
- What is a light emitting diode (LED)?
- What is a parallel circult?
- What is a series circuit?
- What is a battery?

---

## Math

### Algebra

- What is i?
- What is pi?
- What is e?
- What is a logarithm?
- What is a natural logarithm?

### Geometry

- What is a graph?
- What is slope of a line?
- What is the y-intercept of a line?
- What is a ray?
- What is a tangent?

### Calculus

---

## TSA History

- What does the president do?
- What does the vice president do?
- What does the secretary do?
- What does the treasurer do?
- What does the reporter do?
- What does the sergeant-at-arms do?
- Who is the current national president of TSA?
- How many TSA members are there nationally?
- When was TSA founded?
- When was the American Industrial Arts Student Association (AIASA) founded?
- What is the TSA motto?
- What is a Career and Technical Student Organization (CTSO)?
