package org.adrian.ormmapping.entity.services;

import java.util.List;

import org.adrian.ormmapping.entity.dao.ISubjectDao;
import org.adrian.ormmapping.entity.dao.ITeacherDao;
import org.adrian.ormmapping.entity.models.Subject;
import org.adrian.ormmapping.entity.models.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherServiceImpl implements ITeacherService {
	
	@Autowired
	private ITeacherDao teacherDao;

	@Override
	public List<Teacher> findAll() {
		return (List<Teacher>) teacherDao.findAll();
	}

	@Override
	public Teacher findOne(long idTeacher) {
		return teacherDao.findById(idTeacher).get();
	}

	@Override
	public void delete(long idTeacher) {
		teacherDao.deleteById(idTeacher);
	}

	@Override
	public void save(Teacher teacher) {
		teacherDao.save(teacher);
		
	}

	@Override
	public void update(Teacher teacher, long idTeacher) {
		teacherDao.findById(idTeacher).ifPresent((x) -> {
			teacher.setIdTeacher(x.getIdTeacher());
			teacherDao.save(teacher);
		});
	}

}
