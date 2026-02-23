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