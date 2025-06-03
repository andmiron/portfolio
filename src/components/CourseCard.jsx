import { PiCertificate } from "react-icons/pi";
import Link from "./Link.jsx";

export default function CourseCard({ course }) {
  return (
    <div className="flex flex-col items-start gap-2 rounded-lg p-2 dark:border-gray-800 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(156,163,175,0.7)] dark:hover:shadow-[0_0_15px_3px_rgba(66,65,81,0.9)] transition-all duration-300 ease-in-out">
      <h2 className="font-bold">{course.title}</h2>
      <p>{course.description}</p>
      <div className="flex flex-row items-center gap-2 w-full">
        <div className="flex flex-row gap-4 ml-auto">
          <Link
            href={course.courseLink}
            text="Course"
            icon={<course.courseIcon />}
          />
          <Link
            href={course.certificationLink}
            text="Certification"
            icon={<PiCertificate />}
          />
        </div>
      </div>
    </div>
  );
}
