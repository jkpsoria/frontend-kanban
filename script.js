const textArea = document.getElementById("taskName");
const addTaskBtn = document.getElementById("addTaskBtn");




function addTask() {
    const card = document.createElement("div");
    card.setAttribute("draggable", "true");
    card.classList.add("card", "new-task-card");

    const p = document.createElement("p");
    const newPcontent = p.textContent = textArea.value;

    const b = document.createElement("button");
    b.textContent = "In Progress";
    card.appendChild(p);
    card.appendChild(b);

    const newTaskBox = document.querySelector(".new-task")

    newTaskBox.appendChild(card);

    b.addEventListener("click", toInProgress);

    textArea.value = ""
    textArea.focus();



    function toInProgress() {
        card.remove()

        const inProgressCard = document.createElement("div");
        inProgressCard.setAttribute("draggable", "true");

        inProgressCard.classList.add("card", "in-progress-card");

        const pProgress = document.createElement("p");
        pProgress.textContent = newPcontent;

        const bProgress = document.createElement("button");
        bProgress.textContent = "Done";
        inProgressCard.appendChild(pProgress);
        inProgressCard.appendChild(bProgress);

        const inProgress = document.querySelector(".in-progress")

        inProgress.appendChild(inProgressCard);

        bProgress.addEventListener("click", toDone);

        function toDone() {
            inProgressCard.remove();
            const toDoneCard = document.createElement("div");
            toDoneCard.setAttribute("draggable", "true");

            toDoneCard.classList.add("card", "done-card");

            const pDone = document.createElement("p");
            pDone.textContent = newPcontent;

            const bDone = document.createElement("button");
            bDone.textContent = "Delete";
            toDoneCard.appendChild(pDone);
            toDoneCard.appendChild(bDone);

            const done = document.querySelector(".done")

            done.appendChild(toDoneCard);

            bDone.addEventListener("click", () => toDoneCard.remove());
        }
    }


}

addTaskBtn.addEventListener("click", addTask);




function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}



