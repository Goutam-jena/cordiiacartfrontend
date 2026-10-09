
// import { View, Text, TextInput, Pressable } from "react-native";
// import { router } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";

// export default function Header() {
//   return (
//     <View className="border-b border-gray-200 bg-white px-4 pb-4 pt-3">

//       {/* Top row: Logo, Account and Cart */}
//       <View className="flex-row items-center justify-between">

//         {/* Logo and app name */}
//         <View className="flex-row items-center">
//           <View className="mr-2 h-10 w-10 items-center justify-center rounded-xl bg-teal-600">
//             <Ionicons name="bag-handle" size={24} color="#FFFFFF" />
//           </View>

//           <Text className="text-xl font-bold text-teal-700">
//             CordiiaCart
//           </Text>
//         </View>

//         {/* Account and Cart */}
//         <View className="flex-row items-center">
//           <Pressable
//             onPress={() => router.push("/login")}
//             accessibilityRole="button"
//             accessibilityLabel="Login or account"
//             className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-gray-100"
//           >
//             <Ionicons name="person-outline" size={23} color="#374151" />
//           </Pressable>

//           {/* Cart placeholder */}
//           <View className="h-10 w-10 items-center justify-center rounded-full bg-gray-100">
//             <Ionicons name="cart-outline" size={24} color="#374151" />
//           </View>
//         </View>
//       </View>

//       {/* Search bar placeholder */}
//       <View className="mt-4 flex-row items-center rounded-xl border border-gray-200 bg-gray-50 px-3">
//         <Ionicons name="search-outline" size={21} color="#9CA3AF" />

//         <TextInput
//           placeholder="Search products..."
//           placeholderTextColor="#9CA3AF"
//           editable={false}
//           className="ml-2 flex-1 py-3 text-base text-gray-800"
//         />
//       </View>

//     </View>
//   );
// }






















// import { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Pressable,
// } from "react-native";
// import { router } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { useDispatch, useSelector } from "react-redux";

// import { logout } from "../store/slices/authSlice";

// export default function Header() {
//   const dispatch = useDispatch();

//   const { user, isAuthenticated } = useSelector(
//     (state) => state.auth
//   );

//   const [showAccountMenu, setShowAccountMenu] = useState(false);

//   const handleAccountPress = () => {
//     if (isAuthenticated) {
//       setShowAccountMenu((previous) => !previous);
//     } else {
//       router.push("/login");
//     }
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     setShowAccountMenu(false);
//     router.replace("/");
//   };

//   return (
//     <View className="border-b border-gray-200 bg-white px-4 pb-4 pt-3">

//       {/* Top row: Logo, Account and Cart */}
//       <View className="flex-row items-center justify-between">
//         {/* Logo and app name */}
//         <View className="flex-row items-center">
//           <View className="mr-2 h-10 w-10 items-center justify-center rounded-xl bg-teal-600">
//             <Ionicons
//               name="bag-handle"
//               size={24}
//               color="#FFFFFF"
//             />
//           </View>

//           <Text className="text-xl font-bold text-teal-700">
//             CordiiaCart
//           </Text>
//         </View>

//         {/* Account and Cart */}
//         <View className="flex-row items-center">
//           <Pressable
//             onPress={handleAccountPress}
//             accessibilityRole="button"
//             accessibilityLabel="Account"
//             className="mr-3 h-11 w-11 items-center justify-center rounded-full bg-gray-100"
//           >
//             <Ionicons
//               name="person-outline"
//               size={23}
//               color="#374151"
//             />
//           </Pressable>

//           {/* Cart placeholder */}
//           <Pressable
//             onPress={() => console.log("Cart pressed")}
//             accessibilityRole="button"
//             accessibilityLabel="Shopping cart"
//             className="h-11 w-11 items-center justify-center rounded-full bg-gray-100"
//           >
//             <Ionicons
//               name="cart-outline"
//               size={24}
//               color="#374151"
//             />
//           </Pressable>
//         </View>
//       </View>

//       {/* Account dropdown */}
//       {isAuthenticated && showAccountMenu && (
//         <View className="mt-3 rounded-xl border border-gray-200 bg-white p-4">
//           <Text className="text-base font-bold text-gray-900">
//             Hi, {user?.name || "User"}!
//           </Text>

//           {user?.email ? (
//             <Text className="mt-1 text-sm text-gray-500">
//               {user.email}
//             </Text>
//           ) : null}

//           <Pressable
//             onPress={handleLogout}
//             accessibilityRole="button"
//             className="mt-4 flex-row items-center justify-center rounded-lg bg-red-50 py-3"
//           >
//             <Ionicons
//               name="log-out-outline"
//               size={20}
//               color="#DC2626"
//             />

//             <Text className="ml-2 font-semibold text-red-600">
//               Logout
//             </Text>
//           </Pressable>
//         </View>
//       )}

//       {/* Search bar placeholder */}
//       <View className="mt-4 flex-row items-center rounded-xl border border-gray-200 bg-gray-50 px-3">
//         <Ionicons
//           name="search-outline"
//           size={21}
//           color="#9CA3AF"
//         />

//         <TextInput
//           placeholder="Search products..."
//           placeholderTextColor="#9CA3AF"
//           editable={false}
//           className="ml-2 flex-1 py-3 text-base text-gray-800"
//         />
//       </View>
//     </View>
//   );
// }


























import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../store/slices/authSlice";

export default function Header() {
  const dispatch = useDispatch();

  const { user, isAuthenticated, loading } = useSelector(
    (state) => state.auth
  );

  const [showAccountMenu, setShowAccountMenu] = useState(false);

  // Handle account icon press
  const handleAccountPress = () => {
    if (isAuthenticated) {
      setShowAccountMenu((previous) => !previous);
    } else {
      router.push("/login");
    }
  };

  // Log out and remove the saved session
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();

      setShowAccountMenu(false);
      router.replace("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <View className="border-b border-gray-200 bg-white px-4 pb-4 pt-3">

      {/* Top row: Logo, Account and Cart */}
      <View className="flex-row items-center justify-between">

        {/* Logo and app name */}
        <View className="flex-row items-center">
          <View className="mr-2 h-10 w-10 items-center justify-center rounded-xl bg-teal-600">
            <Ionicons
              name="bag-handle"
              size={24}
              color="#FFFFFF"
            />
          </View>

          <Text className="text-xl font-bold text-teal-700">
            CordiiaCart
          </Text>
        </View>

        {/* Account and Cart */}
        <View className="flex-row items-center">

          {/* Account icon */}
          <Pressable
            onPress={handleAccountPress}
            accessibilityRole="button"
            accessibilityLabel="Account"
            className="mr-3 h-11 w-11 items-center justify-center rounded-full bg-gray-100"
          >
            <Ionicons
              name="person-outline"
              size={23}
              color="#374151"
            />
          </Pressable>

          {/* Cart placeholder */}
          <Pressable
            onPress={() => console.log("Cart pressed")}
            accessibilityRole="button"
            accessibilityLabel="Shopping cart"
            className="h-11 w-11 items-center justify-center rounded-full bg-gray-100"
          >
            <Ionicons
              name="cart-outline"
              size={24}
              color="#374151"
            />
          </Pressable>
        </View>
      </View>

      {/* Account dropdown */}
      {isAuthenticated && showAccountMenu && (
        <View className="mt-3 rounded-xl border border-gray-200 bg-white p-4">

          <Text className="text-base font-bold text-gray-900">
            Hi, {user?.name || "User"}!
          </Text>

          {user?.email ? (
            <Text className="mt-1 text-sm text-gray-500">
              {user.email}
            </Text>
          ) : null}

          {/* Logout button */}
          <Pressable
            onPress={handleLogout}
            disabled={loading}
            accessibilityRole="button"
            accessibilityLabel="Logout"
            className={`mt-4 flex-row items-center justify-center rounded-lg py-3 ${
              loading ? "bg-red-100" : "bg-red-50"
            }`}
          >
            <Ionicons
              name="log-out-outline"
              size={20}
              color="#DC2626"
            />

            <Text className="ml-2 font-semibold text-red-600">
              {loading ? "Logging out..." : "Logout"}
            </Text>
          </Pressable>
        </View>
      )}

      {/* Search bar placeholder */}
      <View className="mt-4 flex-row items-center rounded-xl border border-gray-200 bg-gray-50 px-3">
        <Ionicons
          name="search-outline"
          size={21}
          color="#9CA3AF"
        />

        <TextInput
          placeholder="Search products..."
          placeholderTextColor="#9CA3AF"
          editable={false}
          className="ml-2 flex-1 py-3 text-base text-gray-800"
        />
      </View>
    </View>
  );
}
