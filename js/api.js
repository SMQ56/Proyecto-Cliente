export async function loadSessions() {
  try {
    const response = await fetch("../data/sesiones.json");
    const data = await response.json();
    console.log("Sessions loaded:", data);
    return data;
  } catch (error) {
    console.error("Error loading sessions:", error);
  }
}