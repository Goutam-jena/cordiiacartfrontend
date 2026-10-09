
// import { View, Text, Image } from "react-native";

// export default function ProductCard({ product }) {
//   // If no product data is provided, don't render the card
//   if (!product) {
//     return null;
//   }

//   return (
//     <View className="mb-4 overflow-hidden rounded-xl border border-gray-200 bg-white">

//       {/* Product image */}
//       <Image
//         source={{ uri: product.image }}
//         className="h-44 w-full"
//         resizeMode="contain"
//       />

//       {/* Product information */}
//       <View className="p-3">

//         {/* Product name */}
//         <Text
//           className="text-base font-bold text-gray-800"
//           numberOfLines={2}
//         >
//           {product.name}
//         </Text>

//         {/* Product price */}
//         <Text className="mt-2 text-lg font-bold text-teal-600">
//           ₹{product.price}
//         </Text>

//         {/* Original price, shown only when available */}
//         {product.originalPrice > product.price && (
//           <Text className="text-sm text-gray-500 line-through">
//             ₹{product.originalPrice}
//           </Text>
//         )}

//         {/* Product rating */}
//         <Text className="mt-2 text-sm text-gray-600">
//           ⭐ {product.rating} ({product.reviewCount} reviews)
//         </Text>

//         {/* Product category */}
//         <Text className="mt-1 text-xs text-gray-500">
//           {product.category}
//         </Text>

//       </View>
//     </View>
//   );
// }






import { View, Text, Image, Pressable } from "react-native";

export default function ProductCard({ product, onPress }) {
  if (!product) return null;

  return (
    <Pressable
      onPress={onPress}
      className="mb-4 overflow-hidden rounded-xl border border-gray-200 bg-white"
    >
      <Image
        source={{ uri: product.image }}
        className="h-44 w-full"
        resizeMode="contain"
      />

      <View className="p-3">
        <Text
          className="text-base font-bold text-gray-800"
          numberOfLines={2}
        >
          {product.name}
        </Text>

        <Text className="mt-2 text-lg font-bold text-teal-600">
          ₹{product.price}
        </Text>

        {product.originalPrice > product.price && (
          <Text className="text-sm text-gray-500 line-through">
            ₹{product.originalPrice}
          </Text>
        )}

        <Text className="mt-2 text-sm text-gray-600">
          ⭐ {product.rating} ({product.reviewCount} reviews)
        </Text>

        <Text className="mt-1 text-xs text-gray-500">
          {product.category}
        </Text>
      </View>
    </Pressable>
  );
}
