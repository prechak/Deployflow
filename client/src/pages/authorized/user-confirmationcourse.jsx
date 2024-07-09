
import SectionOtherCourse from "../../components/coursedetail/section-othercourse";
import UserSectionConfirmation from "../../components/coursedetail/section-confirmation";
import StickybarConfirmation from "../../components/coursedetail/stickybar-confirmation";

function ConfirmationCourse() {
  return (
    <div>
      <nav className="border-solid border-2 border-purple-700 bg-green-400 h-[56px] sticky top-0"></nav>
      <UserSectionConfirmation />
      <div className="xl:hidden">
      <SectionOtherCourse />
      </div>
      <div>
        <footer className="border-solid border-2 border-purple-700 flex h-[272px]"></footer>
      </div>
      <div className="sticky bottom-0">
      <StickybarConfirmation />
      </div>
     
    </div>
  );
}

export default ConfirmationCourse;
