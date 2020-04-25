import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "todo-component",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  title = "MJ Sample";
  levelOfExperience: string[] = ["1", "2", "3"];
  skills = new FormControl();
  skillsList: string[] = [
    "C++",
    "C#",
    "C",
    "Angular",
    "Ract",
    "jQuery",
    "SQL",
    "Kotlin",
    "Swift",
    "Python",
    "JavaScript",
    "Java",
    "Go",
    "Cobol",
    "VB",
    "TypeScript",
    "Node",
    "Xamarin"
  ];

  skill = "";
  AllSkills = "";
  GetSkill(event) {
    const length = event.length;
    const level = document.getElementById("level");
    this.skill = event[length - 1];
    const skills = document.getElementById("skills");
    skills.style.display = "none";
    level.style.display = "block";
  }

  bindToSkill(event) {
    this.skill = this.skill + ";" + event;
    if (this.AllSkills === "") {
      this.AllSkills = this.skill;
    } else {
      this.AllSkills = this.AllSkills + ", " + this.skill;
    }
    this.skill = "";
    const skills = document.getElementById("skills");
    const level = document.getElementById("level");
    const skillsListDll = document.getElementById("skillsListDll");
    const lvlExp = document.getElementById("lvlExp");
    lvlExp.innerText = "";
    skillsListDll.innerText = this.AllSkills;
    level.style.display = "none";
    skills.style.display = "block";
  }
}
