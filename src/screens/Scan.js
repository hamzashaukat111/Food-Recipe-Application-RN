import React, { useState } from "react";
import { View, Button, Image, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Scan = () => {
  const [image, setImage] = useState(null);
  const [foodName, setFoodName] = useState(null);
  const [scanning, setScanning] = useState(false);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to pick an image.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      sendImageToAzure(result.uri);
    }
  };

  const sendImageToAzure = async (uri) => {
    const apiUrl =
      "https://cvscanfood-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/49a8ea16-40d7-4234-b4a5-7e6c8bf4235f/classify/iterations/Iteration1/image";
    const apiKey = "6d9918f13de44cdbb32081baaf81387c";
    const formData = new FormData();
    formData.append("image", {
      uri,
      type: "image/jpeg",
      name: "image.jpg",
    });

    try {
      setScanning(true); // Start scanning
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
        headers: {
          "Prediction-Key": apiKey,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.ok) {
        const data = await response.json();
        handleAzureResponse(data);
      } else {
        throw new Error("Failed to send image to Azure.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setScanning(false); // Stop scanning
    }
  };

  const handleAzureResponse = (data) => {
    const predictions = data.predictions;
    const highestProbabilityTag = predictions.reduce(
      (acc, curr) => (curr.probability > acc.probability ? curr : acc),
      predictions[0]
    );
    const highestProbabilityTagName = highestProbabilityTag.tagName;

    setFoodName(highestProbabilityTagName);
  };

  return (
    <View style={styles.container}>
      <Button title="Pick Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {scanning ? (
        <Text style={styles.scanningText}>Scanning the food...</Text>
      ) : (
        foodName && <Text style={styles.foodText}>The food is {foodName}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  scanningText: {
    fontSize: 18,
    marginTop: 20,
    fontStyle: "italic",
  },
  foodText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default Scan;
