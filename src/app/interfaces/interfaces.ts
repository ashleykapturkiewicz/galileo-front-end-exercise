// interfaces

export interface Doctor {
  doctor_id: string;
  first_name: string;
  last_name: string;
  dob: string;
  degree: string;
}

export interface Task {
  task_id: string;
  owner: string;
  priority: string;
}

export interface ModalData {
  doctor_id: string;
}
