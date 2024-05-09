# HomeTask

Developed with Expo and TypeScript, showcasing a Leaderboard and a Profile Lookup feature.

## Running the App

To start the app, run:

```bash
expo start
```

This will open a Metro Bundler in your browser. You can then run the app on a physical device by scanning the QR code with your Expo Go app, or on an iOS/Android simulator.

## Features

1. Leaderboard Tab: Displays a list of users with their profile picture, username, and rank.
2. Profile Lookup Tab: Allows searching for users by username to display their profile details.

## API Endpoints

1. Leaderboard data: `GET https://api.bags.fm/api/v1/user/get_user_leaderboard`
2. Profile data: `GET https://api.bags.fm/api/v1/user/:username`
