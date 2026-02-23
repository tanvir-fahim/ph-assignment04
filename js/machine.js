console.log("Machine added successfully.")



function setTabVisible(sectionId, tabButtonnId)
{
    document.getElementById("all-section").classList.add("hidden");
    document.getElementById("interview-section").classList.add("hidden");
    document.getElementById("rejected-section").classList.add("hidden");
    document.getElementById(sectionId).classList.remove("hidden");
    document.getElementById(sectionId).classList.add("block");

    const unselecteTabButton = "px-6 py-2 rounded-md text-base bg-white text-[#64748B] shadow-sm";
    document.getElementById("all-tab").className = unselecteTabButton;
    document.getElementById("interview-tab").className = unselecteTabButton;
    document.getElementById("rejected-tab").className = unselecteTabButton;

    const selectTabButton = "px-6 py-2 rounded-md text-base bg-blue-600 text-white shadow-sm";
    document.getElementById(tabButtonnId).className = selectTabButton;
}