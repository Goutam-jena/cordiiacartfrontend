// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }




// import { Stack } from "expo-router";
// import "../../global.css";

// export default function RootLayout() {
//   return <Stack />;
// }



// import { Stack } from "expo-router";
// import "../../global.css";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen
//         name="index"
//         options={{
//           headerShown: false,
//         }}
//       />
//     </Stack>
//   );
// }













// import { Stack } from "expo-router";
// import { Provider } from "react-redux";

// import store from "../store/store";
// import "../../global.css";

// export default function RootLayout() {
//   return (
//     // Provider makes the Redux store available to the whole app
//     <Provider store={store}>
//       <Stack>
//         <Stack.Screen
//           name="index"
//           options={{
//             headerShown: false,
//           }}
//         />
//       </Stack>
//     </Provider>
//   );
// }














import { useEffect } from "react";
import { Stack } from "expo-router";
import { Provider, useDispatch, useSelector } from "react-redux";
import { View, ActivityIndicator } from "react-native";

import store from "../store/store";
import { restoreSession } from "../store/slices/authSlice";
import "../../global.css";

function AppContent() {
  const dispatch = useDispatch();

  const isRestoring = useSelector(
    (state) => state.auth.isRestoring
  );

  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  // Wait until the saved session has been checked.
  if (isRestoring) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#0D9488" />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
