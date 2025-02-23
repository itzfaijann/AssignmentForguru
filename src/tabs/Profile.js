import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileTab = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require("../Utils/Profile.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Mohmmed Faijan</Text>
        <Text style={styles.bio}>React Native Developer | Console2Success</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Icon name="mail" size={20} color="#555" />
          <Text style={styles.infoText}>khanfaijan@gmail.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="call" size={20} color="#555" />
          <Text style={styles.infoText}>+91 8875562363</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="location-on" size={20} color="#555" />
          <Text style={styles.infoText}>Jaipur, Rajasthan</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#6200ea",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#6200ea",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  bio: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginVertical: 5,
  },
  editButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#6200ea",
    borderRadius: 20,
  },
  editText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
});

export default ProfileTab;
