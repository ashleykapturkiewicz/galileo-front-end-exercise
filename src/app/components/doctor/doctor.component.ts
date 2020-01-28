import { Component, OnInit, Input } from '@angular/core';
import { Doctor, Task } from 'src/app/interfaces/interfaces';
import { TaskService } from 'src/app/services/task.service';
import { filter } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  @Input() doctor: Doctor;
  public tasks: Task[];
  public filteredTasks: Task[] =  [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      tasks.filter(task => {
        if(task.owner === this.doctor.doctor_id)
        this.filteredTasks.push(task);
      })

      this.filteredTasks.sort((a, b) => (parseInt(a.priority) > parseInt(b.priority)) ? 1 : -1);

    });

  }

}
