import SectionCourseDetail from "../../components/coursedetail/section-coursedetail";
import SectionDesireCourseDetail from "../../components/coursedetail/section-desire-coursedetail";
import StickybarRemoveDesire from "../../components/coursedetail/stickybar-removedesire";

function UserDesireCoursedetail() {
  return (
    <div>
      <nav className="border-solid border-2 border-purple-700 bg-blue-500 h-[56px] sticky top-0"></nav>
      <SectionDesireCourseDetail />
      <div>
        <footer className="border-solid border-2 border-purple-700 flex h-[272px]"></footer>
      </div>
      <div className="sticky bottom-0">
      <StickybarRemoveDesire />
      </div>
    </div>
  );
}

export default UserDesireCoursedetail;
