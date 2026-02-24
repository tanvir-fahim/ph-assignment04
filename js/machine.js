console.log("Machine added successfully.")



function setTabVisible(sectionId, tabButtonnId)
{
    document.getElementById("all-section").classList.add("hidden");
    document.getElementById("interview-section").classList.add("hidden");
    document.getElementById("rejected-section").classList.add("hidden");
    document.getElementById(sectionId).classList.remove("hidden");
    document.getElementById(sectionId).classList.add("block");

    const unselecteTabButton = "px-6 py-2 rounded-md text-base bg-white text-[#64748B] shadow-sm";
    document.getElementById("all-tab-btn").className = unselecteTabButton;
    document.getElementById("interview-tab-btn").className = unselecteTabButton;
    document.getElementById("rejected-tab-btn").className = unselecteTabButton;

    const selectTabButton = "px-6 py-2 rounded-md text-base bg-blue-600 text-white shadow-sm";
    document.getElementById(tabButtonnId).className = selectTabButton;
}


function updateDashboardCounts()
{
    const allJobNumber = document.getElementById("card-list").children.length;
    const interviewJobNumber = document.getElementById("interview-list").children.length;
    const rejectedJobNumber = document.getElementById("rejected-list").children.length;

    document.getElementById("total-number").innerText = allJobNumber;
    document.getElementById("interview-number").innerText = interviewJobNumber;
    document.getElementById("rejected-number").innerText = rejectedJobNumber;

    document.getElementById("count-all").innerText = allJobNumber + " jobs";
    document.getElementById("count-interview").innerText = interviewJobNumber +" of " + allJobNumber + " jobs";
    document.getElementById("count-rejected").innerText = rejectedJobNumber +" of " + allJobNumber +  " jobs";



    if(interviewJobNumber === 0)
    {
        document.getElementById("empty-interview").classList.remove("hidden");
        document.getElementById("empty-interview").classList.add("block");
    }
    else
    {
        document.getElementById("empty-interview").classList.add("hidden");
        document.getElementById("empty-interview").classList.remove("block");
    }

    if (rejectedJobNumber === 0)
    {
        document.getElementById("empty-rejected").classList.remove("hidden");
        document.getElementById("empty-rejected").classList.add("block");
    }
    else
    {
        document.getElementById("empty-rejected").classList.add("hidden");
        document.getElementById("empty-rejected").classList.remove("block");
    }
}