
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";

import { router } from "expo-router";

export default function ProductDetailsPage({ product }) {
  if (!product) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-base text-gray-600">
          Product not found.
        </Text>
      </View>
    );
  }

  const discount =
    product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) /
            product.originalPrice) *
            100
        )
      : 0;

  return (
    <ScrollView className="flex-1 bg-white">
      <Image
        source={{ uri: product.image }}
        className="h-80 w-full"
        resizeMode="contain"
      />

      <View className="p-5">
        <Text className="text-sm text-gray-500">
          {product.category}
        </Text>

        <Text className="mt-2 text-2xl font-bold text-gray-900">
          {product.name}
        </Text>

        <Text className="mt-3 text-base text-gray-700">
          ⭐ {product.rating} / 5 ({product.reviewCount} reviews)
        </Text>

        <View className="mt-5 flex-row flex-wrap items-center">
          <Text className="text-3xl font-bold text-teal-700">
            ₹{product.price}
          </Text>

          {discount > 0 && (
            <>
              <Text className="ml-3 text-lg text-gray-400 line-through">
                ₹{product.originalPrice}
              </Text>

              <Text className="ml-3 font-bold text-green-700">
                {discount}% OFF
              </Text>
            </>
          )}
        </View>

        <View className="mt-6 border-t border-gray-200 pt-5">
          <Text className="text-xl font-bold text-gray-900">
            Product Description
          </Text>

          <Text className="mt-3 text-base leading-6 text-gray-600">
            {product.description || "Description not available yet."}
          </Text>
        </View>

        <Pressable
          onPress={() =>
            Alert.alert(
              "Coming soon",
              "We will implement Add to Cart later."
            )
          }
          className="mt-7 items-center rounded-xl bg-teal-600 py-4"
        >
          <Text className="text-base font-bold text-white">
            Add to Cart
          </Text>
        </Pressable>



        <Pressable
  onPress={() => router.back()}
  className="px-4 py-4"
>
  <Text className="font-bold text-teal-700">
    ← Back to shopping with us
  </Text>
</Pressable>



        
      </View>
    </ScrollView>
  );
}
