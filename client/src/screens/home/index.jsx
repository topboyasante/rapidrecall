import React from "react";
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import PinnedNotes from "../../components/notes/PinnedNotes";
import RecentNotes from "../../components/notes/RecentNotes";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView className="p-5">
        <View>
          <Text className="text-3xl font-bold">RapidRecall</Text>
        </View>
        <View className="my-5">
          <Text className="text-lg mb-5">Pinned Notes</Text>
          <PinnedNotes />
        </View>
        <View>
          <Text className="text-lg mb-5">Recent Notes</Text>
          <RecentNotes />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
