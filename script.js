// ----- Sidebar Toggle -----
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.querySelector(".sidebar");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });
}
