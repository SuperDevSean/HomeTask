// screens/ProfileLookupScreen.tsx
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import axios from "axios";
import debounce from "lodash.debounce";
import { Leader } from "../types/UserTypes";

const ProfileLookupScreen = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState<Leader | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProfile = debounce(() => {
    if (!username.trim()) {
      setError("Please enter a valid username.");
      return;
    }
    setLoading(true);
    setError("");
    axios
      .get(`https://api.bags.fm/api/v1/user/${username}`)
      .then((response) => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch user data.");
        setLoading(false);
      });
  }, 300); // 300ms debounce period

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <Button title="Search" onPress={fetchProfile} />
      {loading && <ActivityIndicator size="large" />}
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {profile && (
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: profile.profile_picture }}
            style={styles.profileImage}
          />
          <Text>
            {profile.username} (Rank: {profile.rank})
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  error: {
    color: "red",
  },
});

export default ProfileLookupScreen;
