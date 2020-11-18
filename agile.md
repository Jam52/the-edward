# Implementing Agile Principles

## Decisions to be made

### Kanban Board

- Decide the size and scope of one card.
- Definition of done.
- WIP limits?
- What is the minimum viable product (MVP), then build out from there.

## Roadmap

### Initiative

Build a website where users can see available properties and book dates.

### Epic

A user wants to see photos of different properties

### Epic

A user wants to check available dates

####    Story

            - A user wants a clear picture of availabilty on a months scale (a calender)

### Epic

A user wants to book a property

####    Story

            - A user wants to select available dates

#####           Requirments

                    - Visual cue when available dates are selected
                    - Total cost of dates is shown to the user

####    Story

            - A user is forwarded to the booking page

### Epic

A user wants to see reviews

### Git

- Each task = new branch
- Short lived branches, merging regularly

## CI/CD

- Continuous builds, building the project as soon as a change is made
- Each user story requires both feature code and automated testing

CI loop:
1. Build the app
2. Run automated tests