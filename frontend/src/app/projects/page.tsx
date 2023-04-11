import CustomFooter from "../components/footer";
import CustomHeader from "../components/header";

export default function Projects() {
  return (
    <main>
      <CustomHeader />
      <div className="border mt-8 md:mx-12 lg:mx-40 xl:mx-72 bg-gray-50">
        <div className="border-b h-[920px]">
          <h1>Projects</h1>
        </div>

        <CustomFooter />
      </div>
    </main>
  );
}
