const Page2 = () => {
  return (
    <div className="mx-auto w-full">
      <div className="flex flex-col justify-start mx-4 align-top items-start text-left">
        <div className=" text-2xl text-gray-700 mt-4 p-4 bg-slate-100 w-full rounded-md ">
          Course Structuring
        </div>
        <div className="text-xl  mt-6">Tips</div>
        <div className="my-1">
          <div className="font-bold my-2">Draft a course sketch</div>
          <div>
            Be crystal clear about which skills you will be teaching and what
            methodology you would adopt to impart them. Then, design the
            lectures and organize them into various sections in such a way that
            each section contains 3-6 lectures and an assignment that may or may
            not involve a practical activity.
          </div>
        </div>
        <div className="my-1">
          <div className="font-bold my-2">Its time to introduce the course</div>
          <div>
            The students who appear for an online course are keen to know what
            exactly is on offer. So, it would be good if you quickly introduce
            yourself to the students and let them know about the course content
            in a lucid manner.
          </div>
        </div>
        <div className="my-1">
          <div className="font-bold my-2">
            Communicate the ‘takeaways’ clearly
          </div>
          <div>
            Let each section begin with an introduction stating clearly the
            learning objective(s). The titles of the lectures as well as the
            sections must essentially denote the purpose. To make the learning
            effective, it is necessary that the lectures and the sections are
            arranged in a logical manner.
          </div>
        </div>
        <div className="my-1">
          <div className="font-bold my-2">Manage content in each lecture</div>
          <div>
            Do not include too much content in a single lecture. An online
            lecture should typically last for 3-8 minutes so as to engage the
            students till end. It should cover only 1 topic so that the students
            find it convenient to revisit the lectures again.
          </div>
        </div>
        <div className="my-1">
          <div className="font-bold my-2">
            Arrange the lectures in an engaging way
          </div>
          <div>
            Let the lectures appear in an interest grabbing but balanced way
            such as switching between your appearance on screen, slides, audio
            or visual content. This boosts the engagement of the audience.
          </div>
        </div>
        <div className="my-1">
          <div className="font-bold my-2">Practical experience counts!</div>
          <div>
            Direct the students to gain hands-on learning experience through
            projects, assignments or worksheets that have applicability in the
            real world. This gives an edge to your course as compared to the
            ones which only have static curriculum.
          </div>
        </div>
        <div>
          <div className="text-xl my-4">Basic Requirements</div>
          <li>
            The course content is based on some valuable skills that have
            application in the real world.
          </li>
          <li> The course is delivered in at least 4-6 lectures.</li>
          <li>
            The total duration of the lectures/course is at least 30 minutes.
          </li>
        </div>
        <button className="text-purple-700 text-sm rounded-sm mr-4 mt-4  font-semibold py-3 px-6 hover:py-4 hover:px-6 hover:text-xl border border-purple-700">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Page2;
