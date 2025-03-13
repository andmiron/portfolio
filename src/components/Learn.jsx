import { FaGraduationCap } from "react-icons/fa";
import PageHeader from "./PageHeader";
import CourseCard from "./CourseCard";
import { courses } from "../lib/courses";

function About() {
  return (
    <div>
      <PageHeader
        icon={<FaGraduationCap size={36} />}
        text="Courses & Training"
      />
      <div className="flex flex-col gap-6">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </div>
  );
}

export default About;
