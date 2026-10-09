
// import { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Pressable,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
// } from "react-native";
// import { router } from "expo-router";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <KeyboardAvoidingView
//       className="flex-1 bg-gray-50"
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//     >
//       <ScrollView
//         contentContainerStyle={{ flexGrow: 1 }}
//         keyboardShouldPersistTaps="handled"
//       >
//         <View className="flex-1 justify-center px-6 py-10">
//           {/* App branding */}
//           <View className="mb-10 items-center">
//             <View className="mb-4 h-20 w-20 items-center justify-center rounded-3xl bg-teal-600">
//               <Text className="text-4xl font-bold text-white">
//                 C
//               </Text>
//             </View>

//             <Text className="text-3xl font-bold text-gray-900">
//               CordiiaCart
//             </Text>

//             <Text className="mt-2 text-base text-gray-500">
//               Welcome back!
//             </Text>

//             <Text className="mt-1 text-sm text-gray-400">
//               Sign in to continue shopping
//             </Text>
//           </View>

//           {/* Login form */}
//           <View className="rounded-2xl border border-gray-100 bg-white p-5">
//             <Text className="mb-6 text-2xl font-bold text-gray-900">
//               Login
//             </Text>

//             {/* Email */}
//             <Text className="mb-2 text-sm font-semibold text-gray-700">
//               Email address
//             </Text>

//             <TextInput
//               value={email}
//               onChangeText={setEmail}
//               placeholder="Enter your email"
//               keyboardType="email-address"
//               autoCapitalize="none"
//               autoCorrect={false}
//               autoComplete="email"
//               className="mb-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-base text-gray-900"
//               placeholderTextColor="#9CA3AF"
//             />

//             {/* Password */}
//             <Text className="mb-2 text-sm font-semibold text-gray-700">
//               Password
//             </Text>

//             <View className="mb-3 flex-row items-center rounded-xl border border-gray-200 bg-gray-50">
//               <TextInput
//                 value={password}
//                 onChangeText={setPassword}
//                 placeholder="Enter your password"
//                 secureTextEntry={!showPassword}
//                 autoCapitalize="none"
//                 autoComplete="current-password"
//                 className="flex-1 px-4 py-4 text-base text-gray-900"
//                 placeholderTextColor="#9CA3AF"
//               />

//               <Pressable
//                 onPress={() => setShowPassword(!showPassword)}
//                 className="px-4 py-4"
//                 accessibilityRole="button"
//                 accessibilityLabel={
//                   showPassword ? "Hide password" : "Show password"
//                 }
//               >
//                 <Text className="font-semibold text-teal-700">
//                   {showPassword ? "Hide" : "Show"}
//                 </Text>
//               </Pressable>
//             </View>

//             {/* Login button - API connection comes later */}
//             <Pressable
//               onPress={() => {
//                 // We will connect the login API later.
//               }}
//               className="mt-5 items-center rounded-xl bg-teal-600 py-4 active:bg-teal-700"
//             >
//               <Text className="text-base font-bold text-white">
//                 Login
//               </Text>
//             </Pressable>

//             {/* Navigate to Register */}
//             <View className="mt-6 flex-row flex-wrap justify-center">
//               <Text className="text-sm text-gray-600">
//                 New to CordiiaCart?{" "}
//               </Text>

//               <Pressable
//                 onPress={() => router.push("/register")}
//                 accessibilityRole="button"
//               >
//                 <Text className="text-sm font-bold text-teal-700">
//                   Create an account
//                 </Text>
//               </Pressable>
//             </View>
//           </View>

//           {/* Footer */}
//           <Text className="mt-8 text-center text-xs text-gray-400">
//             Your shopping journey starts here.
//           </Text>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }









































import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";

import {
  loginUser,
  clearAuthStatus,
} from "../store/slices/authSlice";

export default function LoginPage() {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleLogin = async () => {
    // Validate the input fields
    if (!email.trim() || !password) {
      setValidationError("Please enter your email and password.");
      return;
    }

    setValidationError("");

    try {
      // Send login details through Redux to the backend
      const response = await dispatch(
        loginUser({
          email: email.trim().toLowerCase(),
          password,
        })
      ).unwrap();

      // Login succeeded
      console.log("Login successful!");
      console.log("Logged-in user:", response.user);

      // Navigate to the home screen after successful login
      router.replace("/");
    } catch (errorMessage) {
      // Login failed
      console.log("Login failed:", errorMessage);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-50"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 justify-center px-6 py-10">
          {/* App branding */}
          <View className="mb-10 items-center">
            <View className="mb-4 h-20 w-20 items-center justify-center rounded-3xl bg-teal-600">
              <Text className="text-4xl font-bold text-white">
                C
              </Text>
            </View>

            <Text className="text-3xl font-bold text-gray-900">
              CordiiaCart
            </Text>

            <Text className="mt-2 text-base text-gray-500">
              Welcome back!
            </Text>

            <Text className="mt-1 text-sm text-gray-400">
              Sign in to continue shopping
            </Text>
          </View>

          {/* Login form */}
          <View className="rounded-2xl border border-gray-100 bg-white p-5">
            <Text className="mb-6 text-2xl font-bold text-gray-900">
              Login
            </Text>

            {/* Email */}
            <Text className="mb-2 text-sm font-semibold text-gray-700">
              Email address
            </Text>

            <TextInput
              value={email}
              onChangeText={(value) => {
                setEmail(value);
                setValidationError("");
                dispatch(clearAuthStatus());
              }}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
              className="mb-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-base text-gray-900"
              placeholderTextColor="#9CA3AF"
            />

            {/* Password */}
            <Text className="mb-2 text-sm font-semibold text-gray-700">
              Password
            </Text>

            <View className="mb-3 flex-row items-center rounded-xl border border-gray-200 bg-gray-50">
              <TextInput
                value={password}
                onChangeText={(value) => {
                  setPassword(value);
                  setValidationError("");
                  dispatch(clearAuthStatus());
                }}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoComplete="current-password"
                className="flex-1 px-4 py-4 text-base text-gray-900"
                placeholderTextColor="#9CA3AF"
              />

              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                className="px-4 py-4"
                accessibilityRole="button"
                accessibilityLabel={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                <Text className="font-semibold text-teal-700">
                  {showPassword ? "Hide" : "Show"}
                </Text>
              </Pressable>
            </View>

            {/* Error message */}
            {(validationError || error) && (
              <Text className="mb-3 text-sm font-medium text-red-600">
                {validationError || error}
              </Text>
            )}

            {/* Login button */}
            <Pressable
              onPress={handleLogin}
              disabled={loading}
              className={`mt-5 items-center rounded-xl py-4 ${
                loading ? "bg-teal-400" : "bg-teal-600"
              }`}
            >
              <Text className="text-base font-bold text-white">
                {loading ? "Logging in..." : "Login"}
              </Text>
            </Pressable>

            {/* Navigate to Register */}
            <View className="mt-6 flex-row flex-wrap justify-center">
              <Text className="text-sm text-gray-600">
                New to CordiiaCart?{" "}
              </Text>

              <Pressable
                onPress={() => router.push("/register")}
                accessibilityRole="button"
              >
                <Text className="text-sm font-bold text-teal-700">
                  Create an account
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Footer */}
          <Text className="mt-8 text-center text-xs text-gray-400">
            Your shopping journey starts here.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
