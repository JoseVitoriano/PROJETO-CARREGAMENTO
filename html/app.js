const STORAGE_KEY = "cargas";

function getRecords() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function saveRecords(records) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function uid() {
  return crypto?.randomUUID ? crypto.randomUUID() : Date.now().toString();
}

function escapeHtml(text) {
  return String
}