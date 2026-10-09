
import { useEffect } from "react";
import { View, Text, ActivityIndicator, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../store/slices/productSlice";
import ProductDetailsPage from "../../pages/ProductDetailsPage";

export default function ProductDetailsRoute() {
  // Get the product ID from the URL
  const { id } = useLocalSearchParams();

  const dispatch = useDispatch();

  // Read product data from Redux
  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  // Fetch products if Redux doesn't have them yet
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  // Find the product selected by the user
  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  // Show loading indicator
  if (!product && loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#0D9488" />
        <Text className="mt-3 text-gray-600">
          Loading product details...
        </Text>
      </View>
    );
  }

  // Handle missing product
  if (!product) {
    return (
      <View className="flex-1 items-center justify-center bg-white px-5">
        <Text className="text-center text-base text-red-600">
          {error || "Product not found."}
        </Text>

        <Pressable
          onPress={() => router.back()}
          className="mt-5 rounded-lg bg-teal-600 px-5 py-3"
        >
          <Text className="font-bold text-white">
            Go Back
          </Text>
        </Pressable>
      </View>
    );
  }

  // Display the product details UI
  return <ProductDetailsPage product={product} />;
}
