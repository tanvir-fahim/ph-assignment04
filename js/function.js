console.log("Function loaded successfully.")


//main header er All, Interview, Rejected Click korle section tab change korte hobe 
document.getElementById("all-tab-btn")
    .addEventListener("click", function()
        {
            setTabVisible("all-section", "all-tab-btn");
        }
);

document.getElementById("interview-tab-btn")
    .addEventListener("click", function()
        {
            setTabVisible("interview-section", "interview-tab-btn");
        }
);

document.getElementById("rejected-tab-btn")
    .addEventListener("click", function()
        {
            setTabVisible("rejected-section", "rejected-tab-btn");
        }
);

// Interview button e click korle copy hoye interview tab e jabe
function makeInterview(jobCardId)
{
    const originalCard = document.getElementById(jobCardId);
    if(!originalCard)
    {
        return;
    }

    const notAppliedBadge = originalCard.querySelector('[id^="not-applied-job-"]');
    const interviewButton = originalCard.querySelector('[id^="btn-interview-job-"]');
    const rejetedButton = originalCard.querySelector('[id^="btn-rejected-job-"]');

    notAppliedBadge.innerText = "INTERVIEW";
    notAppliedBadge.className = "mb-4 inline-block px-3 py-3 rounded text-xs font-bold bg-[#D1FAE5] text-emerald-700";
    interviewButton.className = "px-3 py-2 rounded text-xs font-bold bg-green-600 text-white";
    rejetedButton.className = "px-3 py-2 rounded text-xs font-bold border border-red-600 text-red-600 bg-transparent hover:bg-red-50";

    const existingClone = document.getElementById(jobCardId + "-clone");
    if(existingClone)
    {
        existingClone.remove();
    }

    const makeDuplicateCard = originalCard.cloneNode(true);
    makeDuplicateCard.id = jobCardId + "-clone";
    document.getElementById("interview-list").appendChild(makeDuplicateCard);

    updateDashboardCounts();
}

function makeRejected(jobCardId)
{
    const originalCard = document.getElementById(jobCardId);
    if(!originalCard)
    {
        return;
    }

    const notAppliedBadge = originalCard.querySelector('[id^="not-applied-job-"]');
    const interviewButton = originalCard.querySelector('[id^="btn-interview-job-"]');
    const rejetedButton = originalCard.querySelector('[id^="btn-rejected-job-"]');

    notAppliedBadge.innerText = "REJECTED";
    notAppliedBadge.className = "mb-4 inline-block px-3 py-3 rounded text-xs font-bold bg-[#D1FAE5] text-emerald-700";
    rejetedButton.className = "px-3 py-2 rounded text-xs font-bold bg-red-600 text-white";
    interviewButton.className = "px-3 py-2 rounded text-xs font-bold bg-transparent text-green-600 border border-green-600 hover:bg-green-50";

    const existingClone = document.getElementById(jobCardId + "-clone");
    if(existingClone)
    {
        existingClone.remove();
    }

    const makeDuplicateCard = originalCard.cloneNode(true);
    makeDuplicateCard.id = jobCardId + "-clone";
    document.getElementById("rejected-list").appendChild(makeDuplicateCard);

    updateDashboardCounts();
}