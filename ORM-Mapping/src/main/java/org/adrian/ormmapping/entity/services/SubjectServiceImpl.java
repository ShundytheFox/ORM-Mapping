package org.adrian.ormmapping.entity.services;

import java.util.List;

import org.adrian.ormmapping.entity.dao.ISubjectDao;
import org.adrian.ormmapping.entity.models.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubjectServiceImpl implements ISubjectService {

	@Autowired
	private ISubjectDao subjectDao;
	
	@Override
	public List<Subject> findAll() {
		return (List<Subject>) subjectDao.findAll();
	}

	@Override
	public Subject findOne(long idSubject) {
		return subjectDao.findById(idSubject).get();
	}

	@Override
	public void delete(long idSubject) {
		subjectDao.deleteById(idSubject);
	}

	@Override
	public void save(Subject subject) {
		subjectDao.save(subject);
	}

	@Override
	public void update(Subject subject, long idSubject) {
		subjectDao.findById(idSubject).ifPresent((x) -> {
			subject.setIdSubjectMain(x.getIdSubjectMain());
			subjectDao.save(subject);
		});
	}

}
