const Page1 = () => {
  return (
    <div className="mx-auto w-full">
      <div className="flex flex-col justify-start mx-4 align-top items-start text-left">
        <div className=" text-2xl text-gray-700 mt-4 p-4 bg-slate-100 w-full rounded-md ">
          Test Audience
        </div>
        <div className="text-gray-900 my-4 text-base font-bold">
          While structuring an exceptional course one should keep in mind the
          below points:
        </div>
        <div>
          <li> The target audience.</li>
          <li> The subject matter your respective audience is looking for.</li>
          <li>
            {" "}
            Mention the innovative and essential information at the landing
            page.
          </li>
          <li>
            {" "}
            The audience should get a fair idea about the course and if it fits
            their requirements.
          </li>
        </div>
        <div className="flex flex-col w-full justify-start mt-4 align-top items-start text-left">
          <div className="text-lg py-2">What are the requirements?</div>
          <form className="w-full  ">
            <lable>
              Mention the requirements regarding materials, software and things
              they need to do before the course begins etc.
            </lable>
            <div className="flex my-2 w-full flex-row ">
              <input type="text" className="w-full border-2  rounded-l-md" />
              <button className="w-auto rounded-r-md px-4 py-3 border-2 font-bold bg-gray-200">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col w-full justify-start mt-4 align-top items-start text-left">
          <div className="text-lg py-2">Who is your target audience?</div>
          <form className="w-full  ">
            <lable>
              As per your target audience, mention the prerequisites including
              student’s prior experience level, background or current position
              and their needs etc.
            </lable>
            <div className="flex my-2 w-full flex-row ">
              <input type="text" className="w-full border-2  rounded-l-md" />
              <button className="w-auto rounded-r-md px-4 py-3 border-2 font-bold bg-gray-200">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col w-full justify-start mt-4 align-top items-start text-left">
          <div className="text-lg py-2">
            What am I going to get from this course?
          </div>
          <form className="w-full  ">
            <lable>
              Mention the specific skills which the course imparts via its
              curriculum and the respective fields where students can apply
              those skills.
            </lable>
            <div className="flex my-2 w-full flex-row ">
              <input type="text" className="w-full border-2  rounded-l-md" />
              <button className="w-auto rounded-r-md px-4 py-3 border-2 font-bold bg-gray-200">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="my-8">
          <button className="text-purple-700 text-sm rounded-sm mr-4  font-semibold py-3 px-5 hover:py-4 hover:px-6 hover:text-xl border border-purple-700">
            Save
          </button>
          <button className="text-purple-700 text-sm rounded-sm mr-4  font-semibold py-3 px-5 hover:py-4 hover:px-6 hover:text-xl border border-purple-700">
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
