import React, { useState } from "react";
import { View, Button, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Scan = () => {
  const [image, setImage] = useState(null);

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
      "https://cvwatermark-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/734afe81-8fa0-45d9-8bc5-81d075b50746/classify/iterations/Iteration1/image";
    const apiKey = "5e19fdcca31a48878e82eb0b7b226244";

    const formData = new FormData();
    formData.append("image", {
      uri,
      type: "image/jpeg",
      name: "image.jpg",
    });

    try {
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
    }
  };

  const handleAzureResponse = (data) => {
    // Process the response from Azure Custom Vision
    // Update the UI accordingly based on the predictions
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Button title="Pick Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
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
});

export default Scan;
