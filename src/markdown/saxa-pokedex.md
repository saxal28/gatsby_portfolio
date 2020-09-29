---
path: "/projects/saxa-pokedex"
date: "2019-05-04"
title: "Saxa Pokedex"
subtitle: "Android Application"
image: "/saxa_pokedex.png"
color: "#2F90E9"

meta-title: "Saxa Pokedex"
meta-description: "Saxa Pokedex"

# website: "https://recipax.herokuapp.com/"
technologies:
  [
    "Android",
    "Kotlin",
    "Retrofit",
    "Room",
    "Moshi",
    "MVVM",
    "PokeApi",
    "Coroutines",
    "Javascript",
  ]

short-description: "A fun modern pokedex with offline support!"
---

Why build this app? There are hundreds of Pokedex apps out there on the play store. I decided to use this app as my playground, using the latest and greatest tools and libraries from Google. I chose the popular MVVM architecture, centering around data-binding and asynchronous actions with coroutines.

Futhermore, I made the decision to give the app offline support! To do this, I wrote a Node script to pull in Pokemon data from PokeAPI, generate JSON files and inject them into the resource directory, and then mocked Retrofit to return my generated JSON. This overall lead to a much better user-experience, since it's independent of the user's internet connection.
