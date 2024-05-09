import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import axios from "axios";

export interface Leader {
  profile_picture: string;
  username: string;
  rank: number;
}

const LeaderboardScreen = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);

  useEffect(() => {
    axios
      .get("https://api.bags.fm/api/v1/user/get_user_leaderboard")
      .then((response) => setLeaders(response.data))
      .catch((error) => console.error(error));
  }, []);

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
