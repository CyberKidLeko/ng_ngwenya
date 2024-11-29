// Array of skills
let skills = [
    { name: "HTML & CSS", percentage: 85, color: "#00509e" },
    { name: "React", percentage: 40, color: "#80c1e3" },
    { name: "JavaScript", percentage: 70, color: "#0077b6" },
    { name: "Git and GitHub", percentage: 90, color: "#003566" },
    { name: "Web Design", percentage: 75, color: "#468faf" },
    { name: "SQL", percentage: 65, color: "#61a5c2" },
    { name: "Python", percentage: 55, color: "#a9d6e5" },
    { name: "Java", percentage: 75, color: "#0077b6" },
    { name: "ASP.net", percentage: 70, color: "#468faf" },
    { name: ".NET (WinForms)", percentage: 75, color: "#00509e" }
];

// Function to render the skills dynamically
function renderSkills() {
    const container = document.getElementById("skills-container");
    container.innerHTML = ""; // Clear the container before rendering

    skills.forEach(skill => {
        const skillItem = document.createElement("div");
        skillItem.classList.add("skill-item");

        skillItem.innerHTML = `
            <div class="skill-label">${skill.name}</div>
            <div class="progress-bar">
                <div class="progress" style="width: ${skill.percentage}%; background-color: ${skill.color}; color: ${
            skill.percentage > 50 ? "white" : "black"
        };">${skill.percentage}%</div>
            </div>
        `;

        container.appendChild(skillItem);
    });
}

// Call renderSkills to display the initial list
renderSkills();
