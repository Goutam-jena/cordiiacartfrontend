// import { View, Text } from "react-native";

// export default function HomePage() {
//   return (
//     <View className="flex-1 items-center justify-center bg-white">
//       <Text className="text-3xl font-bold text-teal-600">
//         CordiiaCart 🛒
//       </Text>

//       <Text className="mt-2 text-base text-gray-600">
//         Your shopping app
//       </Text>
//     </View>
//   );
// }






// import { View, Text, Pressable } from "react-native";
// import { router } from "expo-router";

// export default function HomePage() {
//   return (
//     <View className="flex-1 items-center justify-center bg-white">
//       <Text className="text-3xl font-bold text-teal-600">
//         CordiiaCart 🛒
//       </Text>

//       <Text className="mt-2 text-base text-gray-600">
//         Your shopping app
//       </Text>

//       <Pressable
//         onPress={() => router.push("/second")}
//         className="mt-6 rounded-lg bg-teal-600 px-6 py-3"
//       >
//         <Text className="font-bold text-white">
//           Go to Second Page and cheak out there how and what  
//         </Text>
//       </Pressable>
//     </View>
//   );
// }






// import { SafeAreaView, View, Text } from "react-native";
// import ProductPage from "./ProductPage";
// import LoginPage from "./LoginPage";

// export default function HomePage() {
//   return (
//     <SafeAreaView className="flex-1 bg-gray-50">
//       {/* Home page header */}
//       <View className="px-4 py-3">
//         <Text className="text-3xl font-bold text-teal-600">
//           CordiiaCart 🛒
//         </Text>


      

//         <Text className="mt-1 text-base text-gray-600">
//           Your shopping app
//         </Text>
//       </View>

//       {/* Mount the product section */}
//       <View className="flex-1">
//         <ProductPage />
//       </View>
//     </SafeAreaView>
//   );
// }






// import { SafeAreaView, View, Text, Pressable } from "react-native";
// import { router } from "expo-router";

// import ProductPage from "./ProductPage";
// import Header from "../components/Header";

// export default function HomePage() {
//   return (
//     <SafeAreaView className="flex-1 bg-gray-50">
     
     
     
     
     
     
  
//       {/* <View className="px-4 py-3">
//         <Text className="text-3xl font-bold text-teal-600">
//           CordiiaCart 🛒
//         </Text>

//         <Text className="mt-1 text-base text-gray-600">
//           Your shopping app
//         </Text>


//         <Pressable
//           onPress={() => router.push("/login")}
//           className="mt-4 self-start rounded-lg bg-teal-600 px-6 py-3"
//         >
//           <Text className="text-base font-semibold text-white">
//             Login
//           </Text>
//         </Pressable>
//       </View> */}

  



//  <Header />





  
//       <View className="flex-1">
//         <ProductPage />
//       </View>
//     </SafeAreaView>
//   );
// }

















import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProductPage from "./ProductPage";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={["top"]}>
      <Header />

      <View className="flex-1">
        <ProductPage />
      </View>
    </SafeAreaView>
  );
}
