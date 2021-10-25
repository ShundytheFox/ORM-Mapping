package org.adrian.ormmapping.entity.dao;

import org.adrian.ormmapping.entity.models.Teacher;
import org.springframework.data.repository.CrudRepository;

public interface ITeacherDao extends CrudRepository <Teacher, Long> {
}
