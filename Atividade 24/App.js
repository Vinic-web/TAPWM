import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/components/Header";
export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(
          "https://randomuser.me/api/?nat=br&results=5"
        );
        const parsedUsers = response.data.results.map((user) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
        }));
        setUsers(parsedUsers);
      } catch (err) {
        setError("Não foi possível carregar os alunos. Tente novamente.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Lista de Alunos" />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text style={styles.message}>{error}</Text>
      ) : users.length === 0 ? (
        <Text style={styles.message}>Nenhum aluno encontrado!</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.itemBox}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  list: { padding: 20 },
  itemBox: {
    backgroundColor: "#e0e0e0",
    padding: 15,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 2,
  },
  itemText: { fontSize: 18, color: "#333" },
  message: { padding: 20, textAlign: "center" },
});