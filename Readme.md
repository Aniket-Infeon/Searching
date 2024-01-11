# Prerequisites

- Node.js >= 18 and npm (Recommended: Use nvm)
- Android Studio and Android SDK
- JDK >= 17
- Watchman
- Xcode
- react-native-cli >= 2.0.1
- react-native >= 0.72.3

# Base dependencies

- `axios` for networking.
- `react-native-config` to manage envionments.
- `react-native-webview` to render images

# Folder Structure

This project follows very simple folder structure

- src: This folder is the main container of all the code inside your application.
- assets: Asset folder to store all images, vectors, etc.
- icons: Icons folder is used to store all the icon.
- images: In Images folder we store all the images.
- components: Folder to store any common component that you use through your app, which contain three sub folders
- utils - In this folder we store utility function/services.
- App.tsx: Main component that starts your whole app.
- index.js: Entry point of your application as per React-Native standards.

# Libraries

- `react-native-svg` : Prefer using SVG over images all the time
- `axios` : This library is used for api calls.
- `react-native-webview` : Used to render images

# How to run a application

- Take a clone of project by using
  ```sh
   $ git clone https://github.com/Aniket-Infeon/Searching.git
  ```
- To go inside a folder
  ```sh
  $ cd project_name
  ```
- To install all the libraries
  ```sh
  $ npm install
  ```
- To run a project on android device
  ```sh
  $ npm run android
  ```
- To run a project on ios device
  ```sh
  pod install
  npm run ios
  ```

# Screens

- In `App.tsx` file we created a single screen which contains `seachBar`, `sortButton`, and `card` to show the details of the search result.
