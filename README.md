# Chat Frontend Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Usage

Run `ng serve` to spawn a dev server. Navigate to `http://localhost:4200/`. The app assumes
the chat api (omitted from this project) is on port 8080. If you need to use a different port, update `src/app/http/chat.api.ts` accordingly.

## Architecture
Generally, this angular app utilizes Redux-like architecture with one-way data flow, where facades dispatch actions
that get handled by reducers and effects to update the store(s). Such translates into observables emitting new values,
which are reflected downstream in the components.

Additionally, the structure of the stores are in line with the responses from http requests, as opposed to combining
all of it into one store that receives partial updates. Such allows more flexibility, for when response structure changes,
and less complexity by avoiding deep object comparisons.

Also, note the heavy use of facades. Facades help decouple components from the store, and prevent them from subscribing and dispatching to said store.
Such keeps components _dumb_, as adding pipes to observables can get fairly complex. This is a topic that is debated within the Angular community, but for more
information, see: [Thomas Burleson on NgRx + Facades](https://medium.com/@thomasburlesonIA/ngrx-facades-better-state-management-82a04b9a1e39)

## Assumptions
- Inputs with no value result in disabling of their associated submit button.
- Navigating to the home view without logging in should redirect to login screen.
- Comparisons of users are based on user's name.
- Dimensions of elements, and their margin and padding, are to be approximated.
- Limited number of rooms. (no scrolling in the left pane)
- Wording of the activity duration is in line with moment's fromNow() output.
- User name length is limited. (no ellipsis for looooong names)
- App is not intended for production.
- Message reactions are not used. (yet?)
