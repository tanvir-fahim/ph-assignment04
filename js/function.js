console.log("Function loaded successfully.")


//main header er All, Interview, Rejected Click korle section tab change korte hobe 
document.getElementById("all-tab")
    .addEventListener("click", function()
        {
            setTabVisible("all-section", "all-tab");
        }
);

document.getElementById("interview-tab")
    .addEventListener("click", function()
        {
            setTabVisible("interview-section", "interview-tab");
        }
);

document.getElementById("rejected-tab")
    .addEventListener("click", function()
        {
            setTabVisible("rejected-section", "rejected-tab");
        }
);