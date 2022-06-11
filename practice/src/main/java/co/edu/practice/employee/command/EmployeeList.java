package co.edu.practice.employee.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.edu.practice.common.Command;

public class EmployeeList implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		return "employee/employeeList";
	}

}
