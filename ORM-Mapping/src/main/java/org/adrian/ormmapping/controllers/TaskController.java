package org.adrian.ormmapping.controllers;

import java.util.List;

import org.adrian.ormmapping.entity.models.Task;
import org.adrian.ormmapping.entity.services.ITaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class TaskController {

	@Autowired
	ITaskService taskService;
	
	@GetMapping("/tasks")
	public List<Task> getAllTasks() {
		try {
			return taskService.getAll();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return taskService.getAll();
	}
	
	@GetMapping("/tasks/{idTask}")
	public Task getOne(@PathVariable(value = "idTask") long idTask) {
		try {
			return taskService.get(idTask);
		} catch (Exception e ) {
			System.out.println(e.getMessage());
		}
		return taskService.get(idTask);
	}
	
	@PostMapping("/tasks")
	public void addTask(Task task)  {
		try {
			taskService.post(task);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	@PostMapping("/tasks/{idSubject}")
	public void addTask(@PathVariable(value = "idSubject") long idSubject, 
			Task task) {
		try {
			taskService.saveTaskInSubjectByidSubject(task, idSubject);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	@PutMapping("/tasks/{idSubject}")
	public void updateTask(@PathVariable(value = "idSubject") long idSubject, Task task) {
		try {
			taskService.put(task, idSubject);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
	}
	
	@DeleteMapping("/tasks/{idTask}")
	public void deleteTask(@PathVariable(value = "idTask") long idTask) {
		try {
			taskService.delete(idTask);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
	}
	
}
