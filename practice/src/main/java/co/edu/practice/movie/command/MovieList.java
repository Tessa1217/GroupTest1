package co.edu.practice.movie.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.edu.practice.common.Command;

public class MovieList implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		return "movie/movieList";
	}

}
