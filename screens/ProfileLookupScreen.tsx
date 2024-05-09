// screens/ProfileLookupScreen.tsx
import React, { useState } from "react";
import { View, TextInput, Button, Text, Image } from "react-native";
import axios from "axios";

import { Leader } from "./LeaderboardScreen";

const ProfileLookupScreen = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState<Leader>();

  const fetchProfile = () => {
    axios
      .get(`https://api.bags.fm/api/v1/user/${username}`)
      .then((response) => setProfile(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
        style={{ margin: 10, borderWidth: 1, padding: 10 }}
      />
      <Button title="Search" onPress={fetchProfile} />
      {profile && (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Image
            source={{ uri: profile.profile_picture }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text>
            {profile.username} (Rank: {profile.rank})
          </Text>
        </View>
      )}
    </View>
  );
};

export default ProfileLookupScreen;
