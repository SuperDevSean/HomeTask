import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import axios from "axios";
import { Leader } from "../types/UserTypes";

const LeaderboardScreen = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://api.bags.fm/api/v1/user/get_user_leaderboard")
      .then((response) => {
        setLeaders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <FlatList
        data={leaders}
        keyExtractor={(item) => item.username}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Image
              source={{ uri: item.profile_picture }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text style={{ marginLeft: 10 }}>
              {item.username} (Rank: {item.rank})
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default LeaderboardScreen;
