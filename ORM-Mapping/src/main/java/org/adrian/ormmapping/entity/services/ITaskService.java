package org.adrian.ormmapping.entity.services;

import java.util.List;

import org.adrian.ormmapping.entity.models.Task;

public interface ITaskService {

	public Task get(long idTask);
	public List <Task> getAll();
	public void post(Task task);
	public void put(Task task, long idSubject);
	public void saveTaskInSubjectByidSubject(Task task, long idSubject);
	public void delete(long idTask);
	
}