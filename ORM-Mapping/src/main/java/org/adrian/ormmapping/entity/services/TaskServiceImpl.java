package org.adrian.ormmapping.entity.services;

import java.util.List;

import org.adrian.ormmapping.entity.dao.ISubjectDao;
import org.adrian.ormmapping.entity.dao.ITaskDao;
import org.adrian.ormmapping.entity.models.Subject;
import org.adrian.ormmapping.entity.models.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements ITaskService {
	
	@Autowired
	private ITaskDao taskDao;
	
	@Autowired
	private ISubjectDao subjectDao;

	@Override
	public Task get(long idTask) {
		return taskDao.findById(idTask).get();
		
	}

	@Override
	public List<Task> getAll() {
		return (List<Task>)taskDao.findAll();
	}

	@Override
	public void post(Task task) {
		taskDao.save(task);	 
	}

	@Override
	public void put(Task task, long idSubject) {
		taskDao.findById(task.getIdTask()).ifPresent((Task x)->{
			subjectDao.findById(idSubject).ifPresent((Subject y) -> {
				x.setSubject(y);
				x.setNameTask(task.getNameTask());
				x.setDateTask(task.getDateTask());
				x.setDescriptionTask(task.getDescriptionTask());
				taskDao.save(x);
			});
		});	
	}
	
	public void saveTaskInSubjectByidSubject(Task task, long idSubject) {
		subjectDao.findById(idSubject).ifPresent(x->{
			task.setSubject(x);
			taskDao.save(task);
		});
		
	}

	@Override
	public void delete(long idTask) {
		taskDao.deleteById(idTask);
		
	}

}
