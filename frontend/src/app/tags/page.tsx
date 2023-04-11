import CustomFooter from "../components/footer";
import CustomHeader from "../components/header";
import Loading from "../loading";

export default function Tags() {
  return (
    <main>
      <CustomHeader />
      <div className="border mt-8 md:mx-12 lg:mx-40 xl:mx-72 bg-gray-50">
        <div className="border-b h-[920px]">
          <h1>Tags</h1>
        </div>

        <CustomFooter />
      </div>
    </main>
  );
}
