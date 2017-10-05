package tutorial.repository;

import org.springframework.data.repository.CrudRepository;
import tutorial.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {}
