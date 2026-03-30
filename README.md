### Todo Grocery
- Create an account in [Neon](https://neon.com/).
  - Create an project and get the databse url like: `postgresql://neondb_owner:****`
- Create an account in [Clerk](https://clerk.com/docs).
  - Create a project and get a using expo like a framework: `pk_****`
- Clerk needs to run in Developer Build
  - Using [eas](https://docs.expo.dev/build/introduction/): `eas build —-profile development —-platform android` and `npx expo start`
  - Using native build: `npx expo run:android` or ios.