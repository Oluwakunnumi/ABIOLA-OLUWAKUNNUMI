                                                                                                                                                                                                                                                                                                                                      import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function IntroScreen() {
  const [dots, setDots] = useState("");
  const [status, setStatus] = useState("Initializing...");

  useEffect(() => {
    // Simulate loading steps
    const steps = [
      "Initializing...",
      "Checking system...",
      "Loading resources...",
      "Preparing interface...",
      "Almost ready...",
    ];

    let stepIndex = 0;

    const stepInterval = setInterval(() => {
      stepIndex++;
      if (stepIndex < steps.length) {
        setStatus(steps[stepIndex]);
      } else {
        clearInterval(stepInterval);
      }
    }, 1500);

    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => {
      clearInterval(stepInterval);
      clearInterval(dotInterval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* App Name */}
      <Text style={styles.title}>ABIOLA OLUWAKUNNUMI</Text>
      <Text style={styles.title}>GIT CLASS</Text>

      {/* Version Info */}
      <Text style={styles.version}>RUN/CYB/22/13074</Text>

      {/* Loader */}
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4f36" />
      </View>

      {/* Status Message */}
      <Text style={styles.status}>{status}{dots}</Text>

      {/* Footer Info */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by Expo</Text>
        <Text style={styles.footerText}>© 2026 My Company</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d51313ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
  },
  version: {
    fontSize: 12,
    color: "#156eebff",
    marginBottom: 30,
  },
  loaderContainer: {
    marginVertical: 20,
  },
  status: {
    fontSize: 16,
    color: "#3289faff",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#64748b",
  },
});                                                                                       