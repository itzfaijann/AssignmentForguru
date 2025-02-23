# Assignment

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Step 1: Clone the Repository

Clone the project from GitHub:

```sh
git clone https://github.com/itzfaijann/AssignmentForguru.git
cd AssignmentForguru
```

### Step 2: Install Dependencies

Run the following command to install all required dependencies:

```sh
# Using npm
npm install

# OR using Yarn
yarn install
```

### Step 3: Start Metro

Metro is the JavaScript bundler that runs in the background for React Native. Start it by running:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

### Step 4: Run the App

With Metro running, open a new terminal and use one of the following commands to build and run your app:

#### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

#### iOS (Mac Only)

For iOS, make sure you have Xcode installed. First, install CocoaPods dependencies:

```sh
cd ios
pod install
cd ..
```

Then run:

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

---

## Dependencies

This project uses the following dependencies:

- [**React Native**](https://reactnative.dev) - `0.78.0`
- [**React**](https://react.dev) - `19.0.0`
- [**React Navigation**](https://reactnavigation.org) - `7.0.14`
- [**React Navigation Bottom Tabs**](https://reactnavigation.org/docs/bottom-tab-navigator/) - `7.2.0`
- [**React Native Safe Area Context**](https://github.com/th3rdwave/react-native-safe-area-context) - `5.2.0`
- [**React Native Screens**](https://github.com/software-mansion/react-native-screens) - `4.9.0`
- [**React Native Vector Icons**](https://github.com/oblador/react-native-vector-icons) - `10.2.0`

---

## How to Build APK

To build a release APK for Android, follow these steps:

1. **Generate a Keystore** (Only needed once):

```sh
keytool -genkeypair -v -keystore android/app/assignment-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias assignment-key
```

2. **Setup `gradle.properties`**:  
Add the following lines in `android/gradle.properties`:

```properties
MYAPP_RELEASE_STORE_FILE=assignment-key.jks
MYAPP_RELEASE_KEY_ALIAS=assignment-key
MYAPP_RELEASE_STORE_PASSWORD=your_password
MYAPP_RELEASE_KEY_PASSWORD=your_password
```

3. **Build the APK**:

```sh
cd android
./gradlew assembleRelease
```

The APK file will be generated in:

```
android/app/build/outputs/apk/release/app-release.apk
```

---

## Additional Notes

- **Hot Reloading**:  
  - **Android**: Press `R` twice  
  - **iOS**: Press `Cmd ⌘ + R`  

- **Dev Menu**:  
  - **Android**: Press `Ctrl + M`  
  - **iOS**: Press `Cmd ⌘ + D`  

- **Debugging**:  
  - Use **React DevTools** or **Flipper** to inspect UI and network calls.

---

## Learn More

For more details, check the following:

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/)
- [Metro Bundler](https://facebook.github.io/metro/)
- [Building for Production](https://reactnative.dev/docs/signed-apk-android)

---

## License

This project is licensed under the MIT License.
