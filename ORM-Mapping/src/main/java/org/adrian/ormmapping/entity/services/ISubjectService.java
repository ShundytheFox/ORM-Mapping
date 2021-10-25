package org.adrian.ormmapping.entity.services;

import java.util.List;

import org.adrian.ormmapping.entity.models.Subject;

public interface ISubjectService {

	public List<Subject> findAll();
	public Subject findOne(long idSubject);
	public void delete(long idSubject);
	public void save(Subject subject);
	public void update(Subject subject, long idSubject);
	
}
