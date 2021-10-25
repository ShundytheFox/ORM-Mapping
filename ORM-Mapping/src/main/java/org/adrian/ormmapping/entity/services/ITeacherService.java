package org.adrian.ormmapping.entity.services;

import java.util.List;

import org.adrian.ormmapping.entity.models.Teacher;

public interface ITeacherService {
	
	public List<Teacher> findAll();
	public Teacher findOne(long idTeacher);
	public void delete(long idTeacher);
	public void save(Teacher teacher);
	public void update(Teacher teacher, long idTeacher);

}
