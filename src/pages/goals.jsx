import MainLayout from "../components/Layouts/MainLayout";

const GoalsPage = () => {
  return (
    <MainLayout type="goals">
      <div className="w-full">
        <div className="px-4 lg:px-10">
          <h1 className="text-xl my-6 text-gray-400">Goals</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 h-fit">
            <div className="col-span-1 h-40 bg-white shadow-lg rounded-lg"></div>
            <div className="col-span-1 md:col-span-2 h-40 bg-white shadow-lg rounded-lg p-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi accusamus veniam quibusdam dignissimos debitis obcaecati laborum explicabo vero optio omnis? Illo repudiandae repellendus nemo corrupti minus odio esse iusto
              voluptatem!
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-10">
          <h1 className="text-xl my-6 text-gray-400">Expenses by Category</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 h-fit">
            <div className="col-span-1 h-40 bg-white shadow-lg rounded-lg"></div>
            <div className="col-span-1 h-40 bg-white shadow-lg rounded-lg p-4 overflow-scroll">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi accusamus veniam quibusdam dignissimos debitis obcaecati laborum explicabo vero optio omnis? Illo repudiandae repellendus nemo corrupti minus odio esse iusto
              voluptatem!
            </div>
            <div className="col-span-1 h-40 bg-white shadow-lg rounded-lg"></div>
            <div className="col-span-1 h-40 bg-white shadow-lg rounded-lg p-4"></div>
            <div className="col-span-1 h-40 bg-white shadow-lg rounded-lg"></div>
            <div className="col-span-1 h-40 bg-white shadow-lg rounded-lg p-4 overflow-scroll">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi accusamus veniam quibusdam dignissimos debitis obcaecati laborum explicabo vero optio omnis? Illo repudiandae repellendus nemo corrupti minus odio esse iusto
              voluptatem!
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GoalsPage;
