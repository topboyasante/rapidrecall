import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PinnedNotes from "../../components/notes/PinnedNotes";
import RecentNotes from "../../components/notes/RecentNotes";

export default function HomeScreen() {
  return (
    <SafeAreaView className="p-5 flex-1">
      <ScrollView>
        <View>
          <Text className="text-2xl">Welcome to RapidRecall!</Text>
          <View className="border-b border-b-[#777777] w-full my-5"></View>
        </View>
        <View className="mb-5">
          <Text className="text-lg mb-5">Pinned Notes</Text>
          <PinnedNotes />
        </View>
        <View>
          <Text className="text-lg mb-5">Recent Notes</Text>
          <RecentNotes/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
