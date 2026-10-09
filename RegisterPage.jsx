
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

// export default function RegisterPage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
//           <View className="mb-8 items-center">
//             <View className="mb-4 h-20 w-20 items-center justify-center rounded-3xl bg-teal-600">
//               <Text className="text-4xl font-bold text-white">
//                 C
//               </Text>
//             </View>

//             <Text className="text-3xl font-bold text-gray-900">
//               CordiiaCart
//             </Text>

//             <Text className="mt-2 text-base text-gray-500">
//               Create your account
//             </Text>

//             <Text className="mt-1 text-sm text-gray-400">
//               Join us and start shopping
//             </Text>
//           </View>

//           {/* Registration form */}
//           <View className="rounded-2xl border border-gray-100 bg-white p-5">
//             <Text className="mb-6 text-2xl font-bold text-gray-900">
//               Register
//             </Text>

//             {/* Name */}
//             <Text className="mb-2 text-sm font-semibold text-gray-700">
//               Full name
//             </Text>

//             <TextInput
//               value={name}
//               onChangeText={setName}
//               placeholder="Enter your full name"
//               autoCapitalize="words"
//               autoComplete="name"
//               className="mb-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-base text-gray-900"
//               placeholderTextColor="#9CA3AF"
//             />

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

//             <View className="mb-5 flex-row items-center rounded-xl border border-gray-200 bg-gray-50">
//               <TextInput
//                 value={password}
//                 onChangeText={setPassword}
//                 placeholder="Create a password"
//                 secureTextEntry={!showPassword}
//                 autoCapitalize="none"
//                 autoComplete="new-password"
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

//             {/* Confirm password */}
//             <Text className="mb-2 text-sm font-semibold text-gray-700">
//               Confirm password
//             </Text>

//             <View className="flex-row items-center rounded-xl border border-gray-200 bg-gray-50">
//               <TextInput
//                 value={confirmPassword}
//                 onChangeText={setConfirmPassword}
//                 placeholder="Enter password again"
//                 secureTextEntry={!showConfirmPassword}
//                 autoCapitalize="none"
//                 autoComplete="new-password"
//                 className="flex-1 px-4 py-4 text-base text-gray-900"
//                 placeholderTextColor="#9CA3AF"
//               />

//               <Pressable
//                 onPress={() =>
//                   setShowConfirmPassword(!showConfirmPassword)
//                 }
//                 className="px-4 py-4"
//                 accessibilityRole="button"
//                 accessibilityLabel={
//                   showConfirmPassword
//                     ? "Hide confirm password"
//                     : "Show confirm password"
//                 }
//               >
//                 <Text className="font-semibold text-teal-700">
//                   {showConfirmPassword ? "Hide" : "Show"}
//                 </Text>
//               </Pressable>
//             </View>









//             {/* Register button - API connection comes later */}
//             <Pressable
//               onPress={() => {
//                 // We will connect the registration API later.
//               }}
//               className="mt-6 items-center rounded-xl bg-teal-600 py-4 active:bg-teal-700"
//             >
//               <Text className="text-base font-bold text-white">
//                 Create Account
//               </Text>
//             </Pressable>








//             {/* Navigate to Login */}
//             <View className="mt-6 flex-row flex-wrap justify-center">
//               <Text className="text-sm text-gray-600">
//                 Already have an account?{" "}
//               </Text>

//               <Pressable
//                 onPress={() => router.replace("/login")}
//                 accessibilityRole="button"
//               >
//                 <Text className="text-sm font-bold text-teal-700">
//                   Login
//                 </Text>
//               </Pressable>
//             </View>
//           </View>

//           {/* Footer */}
//           <Text className="mt-6 text-center text-xs text-gray-400">
//             Start your shopping journey with CordiiaCart.
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
  registerUser,
  clearAuthStatus,
} from "../store/slices/authSlice";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector(
    (state) => state.auth
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleRegister = async () => {
    // 1. Validate required fields
    if (
      !name.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword
    ) {
      setValidationError("Please fill in all fields.");
      return;
    }

    // 2. Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setValidationError("Please enter a valid email address.");
      return;
    }

    // 3. Check password confirmation
    if (password !== confirmPassword) {
      setValidationError("Passwords do not match.");
      return;
    }

    // 4. Require a minimum password length
    if (password.length < 8) {
      setValidationError("Password must be at least 8 characters.");
      return;
    }

    setValidationError("");
    dispatch(clearAuthStatus());

    try {
      // 5. Send registration details through Redux to the backend
      const response = await dispatch(
        registerUser({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          password,
        })
      ).unwrap();

      // 6. Registration succeeded
      console.log("Registration successful!");
      console.log("Registered user:", response.user);

      // 7. Move to Login after successful registration
      router.replace("/login");
    } catch (errorMessage) {
      // Registration failed
      console.log("Registration failed:", errorMessage);
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
          <View className="mb-8 items-center">
            <View className="mb-4 h-20 w-20 items-center justify-center rounded-3xl bg-teal-600">
              <Text className="text-4xl font-bold text-white">C</Text>
            </View>

            <Text className="text-3xl font-bold text-gray-900">
              CordiiaCart
            </Text>

            <Text className="mt-2 text-base text-gray-500">
              Create your account
            </Text>

            <Text className="mt-1 text-sm text-gray-400">
              Join us and start shopping
            </Text>
          </View>

          {/* Registration form */}
          <View className="rounded-2xl border border-gray-100 bg-white p-5">
            <Text className="mb-6 text-2xl font-bold text-gray-900">
              Register
            </Text>

            {/* Name */}
            <Text className="mb-2 text-sm font-semibold text-gray-700">
              Full name
            </Text>

            <TextInput
              value={name}
              onChangeText={(value) => {
                setName(value);
                setValidationError("");
                dispatch(clearAuthStatus());
              }}
              placeholder="Enter your full name"
              autoCapitalize="words"
              autoComplete="name"
              className="mb-5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-base text-gray-900"
              placeholderTextColor="#9CA3AF"
            />

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

            <View className="mb-5 flex-row items-center rounded-xl border border-gray-200 bg-gray-50">
              <TextInput
                value={password}
                onChangeText={(value) => {
                  setPassword(value);
                  setValidationError("");
                  dispatch(clearAuthStatus());
                }}
                placeholder="Create a password"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoComplete="new-password"
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

            {/* Confirm password */}
            <Text className="mb-2 text-sm font-semibold text-gray-700">
              Confirm password
            </Text>

            <View className="flex-row items-center rounded-xl border border-gray-200 bg-gray-50">
              <TextInput
                value={confirmPassword}
                onChangeText={(value) => {
                  setConfirmPassword(value);
                  setValidationError("");
                  dispatch(clearAuthStatus());
                }}
                placeholder="Enter password again"
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
                autoComplete="new-password"
                className="flex-1 px-4 py-4 text-base text-gray-900"
                placeholderTextColor="#9CA3AF"
              />

              <Pressable
                onPress={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="px-4 py-4"
                accessibilityRole="button"
                accessibilityLabel={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              >
                <Text className="font-semibold text-teal-700">
                  {showConfirmPassword ? "Hide" : "Show"}
                </Text>
              </Pressable>
            </View>

            {/* Validation and backend messages */}
            {(validationError || error || successMessage) && (
              <Text
                className={`mt-4 text-sm font-medium ${
                  validationError || error
                    ? "text-red-600"
                    : "text-green-700"
                }`}
              >
                {validationError || error || successMessage}
              </Text>
            )}

            {/* Register button */}
            <Pressable
              onPress={handleRegister}
              disabled={loading}
              className={`mt-6 items-center rounded-xl py-4 ${
                loading ? "bg-teal-400" : "bg-teal-600"
              }`}
            >
              <Text className="text-base font-bold text-white">
                {loading ? "Creating account..." : "Create Account"}
              </Text>
            </Pressable>

            {/* Navigate to Login */}
            <View className="mt-6 flex-row flex-wrap justify-center">
              <Text className="text-sm text-gray-600">
                Already have an account?{" "}
              </Text>

              <Pressable
                onPress={() => router.replace("/login")}
                accessibilityRole="button"
              >
                <Text className="text-sm font-bold text-teal-700">
                  Login
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Footer */}
          <Text className="mt-6 text-center text-xs text-gray-400">
            Start your shopping journey with CordiiaCart.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
