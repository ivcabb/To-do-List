fn main() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("Error while running app");
}