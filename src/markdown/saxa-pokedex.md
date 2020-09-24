---
path: "/projects/saxa-pokedex"
date: "2019-05-04"
title: "Saxa Pokedex"
subtitle: "Android Application"
image: "/saxa_pokedex.png"
color: "#2F90E9"

meta-title: "Saxa Pokedex"
meta-description: "Saxa Pokedex"

website: "https://recipax.herokuapp.com/"
technologies: ["Android", "Kotlin", "Retrofit", "Room", "MVVM", "Coroutines", "Javascript"]

short-description: "Recipax is a pinterest-inspired application that will let fitness folk find healthy meal-prep recipes. It will also allow them to eventually create meal plans and export shopping lists for the week."
---

Recipax is a nutrition / meal prep app that I am currently developing /architecting. I'm writing the front end with React with Typescript, using the Controller higher-order-component design pattern for scalabilty / code cleanliness. For state management, I decided to roll with Redux & Redux-Thunk for handling asynchronous tasks.

The backend is running on Node with the NestJS framework (also written in Typescript). The database of choice is MySQL, with TypeORM as my ORM.