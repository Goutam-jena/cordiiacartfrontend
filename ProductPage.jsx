
import { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../store/slices/productSlice";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  // Allows this screen to dispatch Redux actions
  const dispatch = useDispatch();

  // Read product data from the Redux store
  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  // Fetch products when this screen first opens
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Show a loading indicator while fetching products
  if (loading && products.length === 0) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#0D9488" />

        <Text className="mt-3 text-base text-gray-600">
          Loading products...
        </Text>
      </View>
    );
  }

  // Show an error if the API request fails
  if (error && products.length === 0) {
    return (
      <View className="flex-1 items-center justify-center bg-white px-6">
        <Text className="text-center text-base text-red-600">
          {error}
        </Text>

        <Text
          className="mt-3 font-bold text-teal-600"
          onPress={() => dispatch(fetchProducts())}
        >
          Tap here to try again
        </Text>
      </View>
    );
  }

  // Display the products in a scrollable list
  return (
    <View className="flex-1 bg-gray-50 px-3 pt-4">
      <Text className="mb-4 text-2xl font-bold text-gray-900">
        All Products
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => dispatch(fetchProducts())}
            colors={["#0D9488"]}
          />
        }





        // renderItem={({ item }) => (
        //   <View style={{ width: "48%" }}>
        //     <ProductCard product={item} />
        //   </View>
        // )}



        renderItem={({ item }) => (
  <View style={{ width: "48%" }}>
    <ProductCard
      product={item}
      onPress={() =>
        router.push({
          pathname: "/product-details/[id]",
          params: { id: String(item.id) },
        })
      }
    />
  </View>
)}


        ListEmptyComponent={
          <Text className="mt-8 text-center text-gray-500">
            No products available.
          </Text>
        }
      />
    </View>
  );
}
