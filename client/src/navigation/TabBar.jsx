import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import * as Icons from "react-native-heroicons/outline";

export function TabBar({ state, descriptors, navigation }) {
  return (
    <SafeAreaView edges={["bottom"]} className="bg-white">
      <View className="flex flex-row justify-center items-center px-4 py-3 border-t-[0.5px] border-t-[#777777]/50">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          function renderIcons(label) {
            switch (label) {
              case "Home":
                return <Icons.HomeIcon size={25}/>;
              case "Add Note":
                return <Icons.PlusIcon size={25}/>;
            }
          }

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              className={
                isFocused
                  ? "flex gap-2 items-center flex-1"
                  : "flex gap-2 items-center flex-1"
              }
              key={label}
            >
              {renderIcons(label)}
              <Text className={isFocused?"font-semibold":""}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
